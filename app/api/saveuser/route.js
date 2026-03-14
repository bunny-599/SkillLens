import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/UserModel";
import dbConnect from "@/lib/db";

export async function POST() {
  await dbConnect();

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

  if (!userId) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const existing = await User.findOne({ userId });
  if (!existing) {
    await User.create({ userId, roadmapProgress: new Map() }); 
  }

  return NextResponse.json({ saved: true });
}
