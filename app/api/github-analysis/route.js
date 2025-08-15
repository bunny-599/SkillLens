import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

// ------------------- User Schema -------------------
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Clerk User ID
  githubUsername: { type: String }, // GitHub username for regenerating summaries
  summary: { type: Object, default: {} },
  interviewScores: { type: [Number], default: [] },
  roadmapProgress: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: new Map()
  },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

// ------------------- DB Connect -------------------
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
}

// ------------------- GitHub API Utils -------------------
const BASE_URL = "https://api.github.com/users";

const fetchGitHubProfile = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}`);
    if (!res.ok) throw new Error("Profile fetch failed");
    return await res.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

const fetchGitHubRepos = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}/repos?per_page=100`);
    if (!res.ok) throw new Error("Repo fetch failed");
    return await res.json();
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};

const fetchRepoLanguages = async (owner, repo) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
    if (!res.ok) return {};
    return await res.json();
  } catch (error) {
    console.error("Error fetching languages for repo:", repo, error);
    return {};
  }
};

// ------------------- Summary Builder -------------------
const buildCompactProfileSummary = async (username) => {
  const profile = await fetchGitHubProfile(username);
  const repos = await fetchGitHubRepos(username);

  if (!profile) {
    throw new Error("GitHub profile not found");
  }

  const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const forks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  const langsSet = [...new Set(repos.map((r) => r.language).filter(Boolean))];
  const langs = langsSet.slice(0, 5).map(lang =>
    lang === "JavaScript" ? "JS" :
    lang === "Python" ? "Py" :
    lang === "TypeScript" ? "TS" : lang
  );

  const recent = [...repos]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 3)
    .map((r) => r.name);

  const lvl = stars > 200 ? "High" : stars > 50 ? "Mod" : "Low";

  const r = await Promise.all(
    repos.map(async (repo) => {
      const lObj = await fetchRepoLanguages(username, repo.name);
      const l = Object.keys(lObj).map(lang =>
        lang === "JavaScript" ? "JS" :
        lang === "Python" ? "Py" :
        lang === "TypeScript" ? "TS" : lang
      );
      return { n: repo.name, l };
    })
  );

  return {
    u: username,
    s: {
      pr: profile?.public_repos || 0,
      f: profile?.followers || 0,
      stars,
      forks,
      langs,
      lvl,
      recent,
    },
    r
  };
};

// ------------------- User Update Function -------------------
const updateUserGitHubSummary = async (userId, githubUsername) => {
  await connectDB();

  // Check if user exists
  const existingUser = await User.findOne({ userId });
  if (!existingUser) {
    throw new Error("User not found. Please make sure you're logged in.");
  }

  // Generate the GitHub summary
  const summary = await buildCompactProfileSummary(githubUsername);
  if (!summary) {
    throw new Error("Failed to generate GitHub summary");
  }

  // Update the existing user with the summary and GitHub username
  const updatedUser = await User.findOneAndUpdate(
    { userId },
    {
      $set: {
        summary,
        githubUsername,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );

  return updatedUser;
};

// ------------------- API Handler -------------------
export async function GET(req) {
  try {
    // Get the authenticated user from Clerk
    let authData;
    
    try {
      authData = auth();
      // Check if auth() returns a promise (newer versions)
      if (authData && typeof authData.then === 'function') {
        authData = await authData;
      }
    } catch (error) {
      authData = await auth();
    }
    
    const { userId } = authData || {};
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const githubUsername = searchParams.get("username");
    const saveToDb = searchParams.get("save") === "true";

    if (!githubUsername) {
      return NextResponse.json({ error: "GitHub username is required" }, { status: 400 });
    }

    let result;
    
    if (saveToDb) {
      // Save to user's profile in DB
      const updatedUser = await updateUserGitHubSummary(userId, githubUsername);
      result = updatedUser.summary;
    } else {
      // Just generate and return the summary without saving
      result = await buildCompactProfileSummary(githubUsername);
    }

    return NextResponse.json({ 
      success: true,
      result,
      message: saveToDb ? "Summary saved to your profile" : "Summary generated"
    }, { status: 200 });

  } catch (err) {
    console.error("❌ Error in github-analysis API:", err);
    
    // Handle specific error types
    if (err.message.includes("User not found")) {
      return NextResponse.json({ error: err.message }, { status: 404 });
    }
    
    if (err.message.includes("GitHub profile not found")) {
      return NextResponse.json({ error: "GitHub username not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ------------------- POST Handler -------------------
export async function POST(req) {
  try {
    let authData;
    
    try {
      authData = auth();
      if (authData && typeof authData.then === 'function') {
        authData = await authData;
      }
    } catch (error) {
      authData = await auth();
    }
    
    const { userId } = authData || {};
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }

    await connectDB();

    // Find user and regenerate summary using stored GitHub username
    const user = await User.findOne({ userId });
    if (!user || !user.githubUsername) {
      return NextResponse.json({ 
        error: "User not found or no GitHub username stored" 
      }, { status: 404 });
    }

    // Regenerate summary
    const updatedUser = await updateUserGitHubSummary(userId, user.githubUsername);
    
    return NextResponse.json({ 
      success: true,
      result: updatedUser.summary,
      message: "GitHub summary regenerated successfully"
    }, { status: 200 });

  } catch (err) {
    console.error("❌ Error regenerating GitHub summary:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}