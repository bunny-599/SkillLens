// lib/db.ts
import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) return;

  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable");
  }

  try {
    const db = await mongoose.connect(MONGO_URI, {
      dbName: "skilllens-db", // optional: your DB name
      bufferCommands: false,
    });

    isConnected = true;
    console.log("✅ MongoDB connected:", db.connection.host);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
