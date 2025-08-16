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

    await dbConnect();

    const user = await User.findOne({ userId });
    if (!user?.roadmapProgress) {
      // If requesting specific week, return null
      if (roadmap && weekId) {
        return NextResponse.json({ mockScore: null, completed: false, date: null });
      }
      // If requesting all progress, return empty
      return NextResponse.json({ completedWeeks: {} });
    }

    // If requesting specific week data (replaces old get-mock-score)
    if (roadmap && weekId) {
      const roadmapData = user.roadmapProgress.get(roadmap);
      if (!roadmapData?.weeks) {
        return NextResponse.json({ mockScore: null, completed: false, date: null });
      }

      const weekIndex = (parseInt(weekId) - 1).toString();
      const weekData = roadmapData.weeks[weekIndex];

      return NextResponse.json({
        mockScore: weekData?.mockScore || null,
        completed: weekData?.completed || false,
        date: weekData?.date || null
      });
    }

    // Return all completed weeks (for roadmaps page)
    const completedWeeks = {};
    
    for (const [roadmapName, roadmapData] of user.roadmapProgress.entries()) {
      if (roadmapData.weeks) {
        for (const [weekIndex, weekData] of Object.entries(roadmapData.weeks)) {
          if (weekData.completed) {
            const key = `${roadmapName}-${weekIndex}`;
            completedWeeks[key] = true;
          }
        }
      }
    }

    return NextResponse.json({ completedWeeks });

  } catch (error) {
    console.error("Error fetching progress:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}