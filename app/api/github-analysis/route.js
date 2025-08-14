import { NextResponse } from "next/server";
import mongoose from "mongoose";

// ------------------- Mongoose Schema -------------------

const summarySchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, default: "Web Developer" },
  summary: Object,
  updatedAt: Date,
});

const GitHubSummary =
  mongoose.models.GitHubSummary || mongoose.model("GitHubSummary", summarySchema);

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
    if (!res.ok) throw new Error("Languages fetch failed");
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

// ------------------- DB Save Function -------------------

const storeGitHubSummaryToDB = async (username, role = "Web Developer") => {
  const summary = await buildCompactProfileSummary(username);
  if (!summary) throw new Error("Summary is null");

  await connectDB();

  const saved = await GitHubSummary.findOneAndUpdate(
    { username },
    {
      $set: {
        summary,
        role,
        updatedAt: new Date(),
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  console.log("✅ Summary stored/updated in DB for:", username);
  return saved;
};

// ------------------- API Handler -------------------

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");
  const saveToDb = searchParams.get("save") === "true";

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    let result;
    if (saveToDb) {
      const saved = await storeGitHubSummaryToDB(username);
      // If the DB doc has a summary, return that, else fallback to the doc itself
      result = saved && saved.summary ? saved.summary : saved;
    } else {
      result = await buildCompactProfileSummary(username);
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    console.error("❌ Error in github-analysis API:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
