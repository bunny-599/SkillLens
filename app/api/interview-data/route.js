// app/api/interview-data/route.js (or route.ts)
import { auth } from '@clerk/nextjs/server';
import dbConnect from "@/lib/db";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get the authenticated user ID from Clerk
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized - Please sign in' },
        { status: 401 }
      );
    }

    const { db } = await dbConnect();
    const collection = db.collection('users');
    
    const userData = await collection.findOne({ userId });
    
    if (!userData) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user has GitHub summary data
    if (!userData.summary) {
      return NextResponse.json(
        { message: 'GitHub summary not found for this user' },
        { status: 404 }
      );
    }

    // Return only the GitHub summary
    const responseData = {
      githubUsername: userData.githubUsername,
      summary: userData.summary
    };

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error fetching GitHub summary:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}