'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Award, TrendingUp, MessageSquare, Code, Zap, CheckCircle } from 'lucide-react';

export default function ProgressPage() {
  // Static data - this would come from your backend in a real app
  const progressData = {
    overallProgress: 65,
    weeksCompleted: 3,
    totalWeeks: 8,
    nextMilestone: 'Week 4: Advanced React Concepts',
    lastUpdated: '2025-08-13',
    mockInterviews: [
      {
        id: 1,
        date: '2025-08-10',
        score: 78,
        topics: ['React', 'JavaScript', 'System Design'],
        feedback: 'Good problem-solving skills, could improve on time management.'
      },
      {
        id: 2,
        date: '2025-07-27',
        score: 65,
        topics: ['Algorithms', 'Data Structures'],
        feedback: 'Strong fundamentals, work on optimizing solutions.'
      }
    ],
    skillAssessment: {
      communication: 4.2,
      problemSolving: 4.0,
      technical: 4.5,
      dsa: 3.8
    }
  };

  const getScoreColor = (score) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getSkillLevel = (score) => {
    if (score >= 4.5) return 'Expert';
    if (score >= 4.0) return 'Advanced';
    if (score >= 3.0) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="group">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-400">
            Your Learning Journey
          </h1>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Track your progress and interview preparation
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
          <Calendar className="h-5 w-5 text-blue-400" />
          <span className="text-sm text-gray-300">
            Last updated: {new Date(progressData.lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
              <Clock className="h-4 w-4 text-blue-400" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {progressData.overallProgress}%
            </div>
            <Progress 
              value={progressData.overallProgress} 
              className="h-2 mt-3 bg-gray-800/50 group-hover:bg-gray-800/70 transition-colors duration-300"
            />
            <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
              {progressData.weeksCompleted} of {progressData.totalWeeks} weeks completed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300">
              <Zap className="h-4 w-4 text-yellow-400" />
              Next Milestone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
              {progressData.nextMilestone}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                <CheckCircle className="h-3 w-3 text-green-400" />
              </div>
              <span>On track</span>
              <span className="ml-auto px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded-full">
                {progressData.weeksCompleted + 1} of {progressData.totalWeeks}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-2 group-hover:text-green-400 transition-colors duration-300">
              <Award className="h-4 w-4 text-yellow-400" />
              Best Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {Math.max(...progressData.mockInterviews.map(i => i.score))}%
              </span>
              <div className="flex-1 pb-1">
                <TrendingUp className="h-5 w-5 text-green-400 mb-1" />
                <div className="h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500" 
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-3 group-hover:text-gray-300 transition-colors duration-300">
              Out of {progressData.mockInterviews.length} attempt{progressData.mockInterviews.length !== 1 ? 's' : ''}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skill Assessment */}
      <Card className="mb-8 border-border/40">
        <CardHeader>
          <CardTitle className="text-lg text-black">Skill Assessment</CardTitle>
          <p className="text-sm text-gray-600">Your current skill levels based on assessments</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(progressData.skillAssessment).map(([skill, score]) => (
              <div key={skill} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="capitalize">{skill.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-white/80">
                    {score.toFixed(1)}/5.0 • {getSkillLevel(score)}
                  </span>
                </div>
                <Progress value={(score / 5) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mock Interviews */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mock Interviews
          </h2>
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Recent attempts</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {progressData.mockInterviews.map((interview, index) => {
            const scoreColor = interview.score >= 80 ? 'from-green-500 to-emerald-500' : 
                             interview.score >= 60 ? 'from-blue-500 to-sky-500' : 
                             'from-amber-500 to-orange-500';
            
            return (
              <Card 
                key={interview.id} 
                className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-${scoreColor.split('-')[1]}-500/30 hover:shadow-lg hover:shadow-${scoreColor.split('-')[1]}-500/5 transition-all duration-300 group`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg text-white group-hover:text-gray-100 transition-colors duration-300">
                        {new Date(interview.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1.5">
                        {interview.topics.map(topic => (
                          <Badge 
                            key={topic} 
                            className="text-xs bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:bg-gray-800/90 transition-colors duration-200"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${scoreColor}/10 border border-${scoreColor.split('-')[1]}-500/20 group-hover:border-${scoreColor.split('-')[1]}-500/40 transition-all duration-300`}>
                      <span className={`font-bold bg-gradient-to-r ${scoreColor} bg-clip-text text-transparent`}>
                        {interview.score}%
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-300">
                    <div className="p-1.5 bg-blue-500/10 rounded-full">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {interview.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recommended Next Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recommended Next Steps
            </h2>
            <p className="text-sm text-gray-400 mt-1">Based on your progress and performance</p>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span>Your action plan</span>
          </div>
        </div>
        
        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {[
                "Practice 5 algorithm problems on binary trees",
                "Review React hooks and performance optimization",
                "Schedule next mock interview for next week"
              ].map((step, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="p-1 mt-0.5 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {step}
                  </span>
                  <span className="ml-auto text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {index === 0 ? "High Priority" : "Medium Priority"}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-5 border-t border-gray-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>2 tasks completed this week</span>
              </div>
              <button className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors duration-300">
                View all tasks
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}