import { auth } from '@clerk/nextjs/server';
import dbConnect from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the authenticated user ID from Clerk
    const { userId } = auth();
    
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized - Please sign in' });
    }

    const { db } = await dbConnect();
    const collection = db.collection('users');
    
    const userData = await collection.findOne({ userId });
    
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user has GitHub summary data
    if (!userData.summary) {
      return res.status(404).json({ message: 'GitHub summary not found for this user' });
    }

    // Return only the GitHub summary
    const responseData = {
      githubUsername: userData.githubUsername,
      summary: userData.summary
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Error fetching GitHub summary:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}