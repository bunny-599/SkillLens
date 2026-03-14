import { auth } from '@clerk/nextjs/server';
import dbConnect from "@/lib/db";
import { NextResponse } from 'next/server';
import User from "@/models/UserModel";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    let userId = searchParams.get("userId");

    if (!userId) {
      const authData = await auth();
      userId = authData?.userId;
    }
    
    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized - Please sign in' },
        { status: 401 }
      );
    }

    await dbConnect();
    
    const userData = await User.findOne({ userId });
    
    if (!userData) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(userData);

  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
