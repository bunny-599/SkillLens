import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Clerk User ID
  
  githubUsername: { type: String }, // For regenerating summaries later
  
  summary: { type: Object, default: {} },
  interviewScores: { type: [Number], default: [] },
  
  // Simple Map structure for roadmap progress
  roadmapProgress: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: new Map()
  },
  isVoted: { type: Boolean, default: false },
  
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;