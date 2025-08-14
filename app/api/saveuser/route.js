import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/UserModel";
import dbConnect from "@/lib/db";

export async function POST() {
  await dbConnect();

  const { userId } = await auth(); 

  if (!userId) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const existing = await User.findOne({ userId });
  if (!existing) {
    await User.create({ userId }); 
  }

  return NextResponse.json({ saved: true });
}
