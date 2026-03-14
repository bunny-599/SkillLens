import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/db";
import User from "@/models/UserModel";

export async function GET(request) {
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
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const user = await User.findOne({ userId });
    if (!user) {
      return NextResponse.json({
        overallProgress: 0,
        weeksCompleted: 0,
        totalWeeks: 8,
        nextMilestone: 'Week 1: Introduction to UI/UX Design',
        lastUpdated: new Date().toISOString().split('T')[0],
        mockInterviews: [],
        roadmapProgress: {},
        completedWeeks: {},
        nextSteps: []
      });
    }

    // Calculate overall progress
    let totalWeeksCompleted = 0;
    let totalMockInterviews = [];
    let roadmapProgress = {};
    let completedWeeks = {};
    let nextSteps = [];

    if (user.roadmapProgress) {
      for (const [roadmapName, roadmapData] of user.roadmapProgress.entries()) {
        if (roadmapData.weeks) {
          roadmapProgress[roadmapName] = roadmapData;
          
          for (const [weekIndex, weekData] of Object.entries(roadmapData.weeks)) {
            const weekNumber = parseInt(weekIndex) + 1;
            
            if (weekData.mockScore !== undefined) {
              totalMockInterviews.push({
                id: `${roadmapName}-${weekIndex}`,
                date: weekData.date || new Date().toISOString().split('T')[0],
                score: weekData.mockScore,
                roadmap: roadmapName,
                week: weekNumber,
                topics: [roadmapName, `Week ${weekNumber}`],
                feedback: weekData.mockScore >= 90 ? 'Excellent performance! Keep up the great work.' :
                         weekData.mockScore >= 70 ? 'Good job! Consider reviewing areas for improvement.' :
                         weekData.mockScore >= 50 ? 'Fair performance. Focus on practicing more.' :
                         'Needs improvement. Consider additional study and practice.'
              });
            }

            if (weekData.completed) {
              totalWeeksCompleted++;
              completedWeeks[`${roadmapName}-${weekIndex}`] = true;
            }
          }
        }
      }
    }

    // Sort mock interviews by date (most recent first)
    totalMockInterviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate overall progress percentage
    const totalPossibleWeeks = 8; // Assuming 8 weeks per roadmap
    const overallProgress = Math.min(Math.round((totalWeeksCompleted / totalPossibleWeeks) * 100), 100);

    // Determine next milestone
    let nextMilestone = 'Week 1: Introduction to UI/UX Design';
    if (totalWeeksCompleted < 8) {
      const nextWeek = totalWeeksCompleted + 1;
      const milestones = {
        1: 'Week 1: Introduction to UI/UX Design',
        2: 'Week 2: User Research & Personas',
        3: 'Week 3: Information Architecture',
        4: 'Week 4: Wireframing & Sketching',
        5: 'Week 5: UI Design Principles',
        6: 'Week 6: Figma Mastery',
        7: 'Week 7: High-Fidelity Prototypes',
        8: 'Week 8: Usability Testing'
      };
      nextMilestone = milestones[nextWeek] || 'Complete Roadmap';
    } else {
      nextMilestone = 'Roadmap Complete!';
    }

    // Generate next steps based on progress
    if (totalWeeksCompleted === 0) {
      nextSteps = [
        'Start with Week 1: Introduction to UI/UX Design',
        'Set up your learning environment',
        'Review the course materials and resources'
      ];
    } else if (totalWeeksCompleted < 4) {
      nextSteps = [
        `Continue with Week ${totalWeeksCompleted + 1}`,
        'Practice the concepts from previous weeks',
        'Schedule regular study sessions'
      ];
    } else if (totalWeeksCompleted < 8) {
      nextSteps = [
        `Advance to Week ${totalWeeksCompleted + 1}`,
        'Build a portfolio project using learned skills',
        'Connect with other UI/UX learners'
      ];
    } else {
      nextSteps = [
        'Apply your skills to real projects',
        'Build a comprehensive portfolio',
        'Consider advanced UI/UX courses'
      ];
    }

    return NextResponse.json({
      overallProgress,
      weeksCompleted: totalWeeksCompleted,
      totalWeeks: totalPossibleWeeks,
      nextMilestone,
      lastUpdated: user.updatedAt ? user.updatedAt.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      mockInterviews: totalMockInterviews.slice(0, 5), // Return last 5 interviews
      roadmapProgress,
      completedWeeks,
      nextSteps
    });

  } catch (error) {
    console.error("Error fetching progress summary:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}