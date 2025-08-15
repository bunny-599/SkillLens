import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/db";
import User from "@/models/UserModel";

export async function POST(request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { roadmap, weekId, mockScore } = await request.json();
    if (!roadmap || !weekId || mockScore === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    // Find or create user
    let user = await User.findOne({ userId });
    console.log(`👤 Found user: ${user ? 'YES' : 'NO'}, userId: ${userId}`);
    if (!user) {
      user = new User({ userId });
      console.log(`🆕 Created new user for ${userId}`);
    }

    // Initialize roadmapProgress as Map if it doesn't exist
    if (!user.roadmapProgress) {
      user.roadmapProgress = new Map();
    }

    // Convert weekId to 0-based index
    const weekIndex = (weekId - 1).toString();
        
    // Get existing roadmap data or create new
    let roadmapData = user.roadmapProgress.get(roadmap) || { weeks: {} };
    console.log(`📊 Existing roadmap data:`, JSON.stringify(roadmapData, null, 2));
        
    // Ensure weeks object exists
    if (!roadmapData.weeks) {
      roadmapData.weeks = {};
    }

    // IMPORTANT: Preserve existing week data by copying it
    const existingWeeks = { ...roadmapData.weeks };

    // Update ONLY the specific week (preserve other weeks)
    existingWeeks[weekIndex] = {
      mockScore: mockScore,
      date: new Date().toISOString().split('T')[0],
      completed: mockScore >= 90,
      completedAt: mockScore >= 90 ? new Date() : null
    };

    // Create the updated roadmap data
    const updatedRoadmapData = {
      ...roadmapData,
      weeks: existingWeeks
    };

    console.log(`📝 Updated roadmap data:`, JSON.stringify(updatedRoadmapData, null, 2));

    // Save back to Map
    user.roadmapProgress.set(roadmap, updatedRoadmapData);
        
    // CRITICAL: Tell Mongoose that the Map has been modified
    user.markModified('roadmapProgress');
    user.updatedAt = new Date();

    console.log(`💾 About to save user with roadmapProgress:`, JSON.stringify(Object.fromEntries(user.roadmapProgress), null, 2));

    await user.save();

    console.log(`✅ Saved mock score ${mockScore} for ${roadmap} week ${weekId}`);
        
    // Verify the save worked by re-fetching
    const verifyUser = await User.findOne({ userId });
    const verifyData = verifyUser.roadmapProgress.get(roadmap);
    console.log(`🔍 Verification - DB now contains for ${roadmap}:`, JSON.stringify(verifyData, null, 2));

    return NextResponse.json({
      success: true,
      mockScore,
      message: `Mock score saved successfully`
    });
   
  } catch (error) {
    console.error("❌ Error saving mock score:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}