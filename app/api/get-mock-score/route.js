import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/db";
import User from "@/models/UserModel";

export async function GET(request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const roadmap = searchParams.get("roadmap");
    const weekId = searchParams.get("weekId");

    if (!roadmap || !weekId) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ userId });
    if (!user?.roadmapProgress) {
      return NextResponse.json({ mockScore: null });
    }

    // FIXED: Use Map.get() method consistently
    const roadmapData = user.roadmapProgress.get(roadmap);
    if (!roadmapData?.weeks) {
      return NextResponse.json({ mockScore: null });
    }

    // Convert weekId to 0-based index
    const weekIndex = (parseInt(weekId) - 1).toString();
    const weekData = roadmapData.weeks[weekIndex];

    console.log(`🔍 GET - Fetching ${roadmap} week ${weekId} (index ${weekIndex})`);
    console.log(`📊 Found weekData:`, weekData);

    return NextResponse.json({
      mockScore: weekData?.mockScore || null,
      completed: weekData?.completed || false,
      date: weekData?.date || null
    });
   
  } catch (error) {
    console.error("❌ Error fetching mock score:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}