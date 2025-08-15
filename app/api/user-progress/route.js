// /app/api/user-progress/route.js
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

// ------------------- GET - Load User Progress -------------------
export async function GET(req) {
  try {
    // Get the authenticated user from Clerk
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

    // Find or create user
    let user = await User.findOne({ userId });
    
    if (!user) {
      // Create new user with empty progress
      user = await User.create({
        userId,
        roadmapProgress: new Map(),
        updatedAt: new Date()
      });
    }

    // Convert Map to Object for JSON response
    const roadmapProgress = {};
    if (user.roadmapProgress) {
      user.roadmapProgress.forEach((value, key) => {
        roadmapProgress[key] = value;
      });
    }

    return NextResponse.json({
      success: true,
      roadmapProgress,
      githubUsername: user.githubUsername,
      summary: user.summary,
      interviewScores: user.interviewScores
    }, { status: 200 });

  } catch (err) {
    console.error("❌ Error loading user progress:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ------------------- POST - Save Progress -------------------
export async function POST(req) {
  try {
    // Get the authenticated user from Clerk
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

    const body = await req.json();
    const { roadmapName, weekIndex, isCompleted, completedAt } = body;

    if (!roadmapName || weekIndex === undefined || isCompleted === undefined) {
      return NextResponse.json({ 
        error: "Missing required fields: roadmapName, weekIndex, isCompleted" 
      }, { status: 400 });
    }

    await connectDB();

    // Find or create user
    let user = await User.findOne({ userId });
    
    if (!user) {
      user = await User.create({
        userId,
        roadmapProgress: new Map(),
        updatedAt: new Date()
      });
    }

    // Get current roadmap progress or initialize
    const currentProgress = user.roadmapProgress.get(roadmapName) || {
      weeks: {},
      mockScore: 0
    };

    // Update week progress
    if (isCompleted) {
      currentProgress.weeks[weekIndex] = {
        completed: true,
        completedAt: completedAt || new Date().toISOString()
      };
    } else {
      // Remove completion
      if (currentProgress.weeks[weekIndex]) {
        delete currentProgress.weeks[weekIndex];
      }
    }

    // Update the roadmap progress in the Map
    user.roadmapProgress.set(roadmapName, currentProgress);
    user.updatedAt = new Date();

    // Save to database
    await user.save();

    console.log(`✅ Progress saved: ${roadmapName} - Week ${weekIndex + 1} - ${isCompleted ? 'Completed' : 'Uncompleted'}`);

    return NextResponse.json({
      success: true,
      message: `Week ${weekIndex + 1} ${isCompleted ? 'marked as completed' : 'unmarked'}`,
      progress: currentProgress
    }, { status: 200 });

  } catch (err) {
    console.error("❌ Error saving user progress:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
// ------------------- PUT - Update Mock Score -------------------
export async function PUT(req) {
    try {
      // Get the authenticated user from Clerk
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
  
      const body = await req.json();
      const { roadmapName, mockScore } = body;
  
      if (!roadmapName || mockScore === undefined) {
        return NextResponse.json({
          error: "Missing required fields: roadmapName, mockScore"
        }, { status: 400 });
      }
  
      await connectDB();
  
      // Find user
      const user = await User.findOne({ userId });
  
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
      // Get current roadmap progress or initialize
      const currentProgress = user.roadmapProgress.get(roadmapName) || {
        weeks: {},
        mockScore: 0
      };
  
      // Update mock score
      currentProgress.mockScore = mockScore;
  
      // Save back to the Map
      user.roadmapProgress.set(roadmapName, currentProgress);
      user.updatedAt = new Date();
  
      await user.save();
  
      console.log(`✅ Mock score updated for ${roadmapName}: ${mockScore}`);
  
      return NextResponse.json({
        success: true,
        message: `Mock score for ${roadmapName} updated to ${mockScore}`,
        progress: currentProgress
      }, { status: 200 });
  
    } catch (err) {
      console.error("❌ Error updating mock score:", err);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
