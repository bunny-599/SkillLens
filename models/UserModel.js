import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Clerk User ID
  summary: { type: Object, default: {} },
  interviewScores: { type: [Number], default: [] },
  
  roadmapProgress: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: new Map()
  },
  
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;