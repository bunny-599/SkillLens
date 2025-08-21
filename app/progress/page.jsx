"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  Award,
  TrendingUp,
  MessageSquare,
  Zap,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ProgressPage() {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/get-progress-summary");
      if (!response.ok) {
        throw new Error("Failed to fetch progress data");
      }
      const data = await response.json();
      setProgressData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
            <span className="text-gray-300">Loading your progress...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-400 mb-4">Error loading progress: {error}</p>
            <button
              onClick={fetchProgressData}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 85) return "from-green-500 to-emerald-500";
    if (score >= 70) return "from-blue-500 to-sky-500";
    if (score >= 50) return "from-amber-500 to-orange-500";
    return "from-red-500 to-rose-500";
  };

  const getProgressStatus = () => {
    if (!progressData) return "Getting Started";
    if (progressData.weeksCompleted === 0) return "Getting Started";
    if (progressData.weeksCompleted < 4) return "Building Foundation";
    if (progressData.weeksCompleted < 8) return "Advanced Learning";
    return "Mastery Achieved";
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
            Last updated:{" "}
            {new Date(progressData.lastUpdated).toLocaleDateString()}
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
              {progressData.weeksCompleted} of {progressData.totalWeeks} weeks
              completed
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
              {progressData.mockInterviews.length > 0
                ? "Best Score"
                : "Learning Status"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {progressData.mockInterviews.length > 0 ? (
              <>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {Math.max(
                      ...progressData.mockInterviews.map((i) => i.score)
                    )}
                    %
                  </span>
                  <div className="flex-1 pb-1">
                    <TrendingUp className="h-5 w-5 text-green-400 mb-1" />
                    <div className="h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        style={{
                          width: `${Math.max(
                            ...progressData.mockInterviews.map((i) => i.score)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3 group-hover:text-gray-300 transition-colors duration-300">
                  Out of {progressData.mockInterviews.length} attempt
                  {progressData.mockInterviews.length !== 1 ? "s" : ""}
                </p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {getProgressStatus()}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Start your first mock interview to track your progress
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Roadmap Progress */}
      {Object.keys(progressData.roadmapProgress).length > 0 && (
        <Card className="mb-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Roadmap Progress
            </CardTitle>
            <p className="text-sm text-gray-400">
              Your progress across different learning paths
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(progressData.roadmapProgress).map(
                ([roadmapName, roadmapData]) => {
                  const completedWeeks = Object.values(
                    roadmapData.weeks || {}
                  ).filter((week) => week.completed).length;
                  const totalWeeks = 8;
                  const progressPercentage =
                    (completedWeeks / totalWeeks) * 100;

                  return (
                    <div key={roadmapName} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-white capitalize">
                          {roadmapName.replace(/([A-Z])/g, " $1").trim()}{" "}
                          Roadmap
                        </h3>
                        <span className="text-sm text-gray-400">
                          {completedWeeks}/{totalWeeks} weeks
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(roadmapData.weeks || {}).map(
                          ([weekIndex, weekData]) => {
                            const weekNumber = parseInt(weekIndex) + 1;
                            return (
                              <Badge
                                key={weekIndex}
                                className={`text-xs ${
                                  weekData.completed
                                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                                    : weekData.mockScore !== undefined
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : "bg-gray-700/50 text-gray-400 border-gray-600/30"
                                }`}
                              >
                                Week {weekNumber}
                                {weekData.mockScore !== undefined &&
                                  ` (${weekData.mockScore}%)`}
                              </Badge>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mock Interviews */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mock Interviews
          </h2>
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>
              {progressData.mockInterviews.length > 0
                ? "Recent attempts"
                : "No attempts yet"}
            </span>
          </div>
        </div>

        {progressData.mockInterviews.length > 0 ? (
          <div className="space-y-4">
            {progressData.mockInterviews.map((interview) => {
              const scoreColor = getScoreColor(interview.score);

              return (
                <Card
                  key={interview.id}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-white group-hover:text-gray-100 transition-colors duration-300">
                          {interview.roadmap} - Week {interview.week}
                        </CardTitle>
                        <p className="text-sm text-gray-400">
                          {new Date(interview.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {interview.topics.map((topic) => (
                            <Badge
                              key={topic}
                              className="text-xs bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:bg-gray-800/90 transition-colors duration-200"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${scoreColor}/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300`}
                      >
                        <span
                          className={`font-bold bg-gradient-to-r ${scoreColor} bg-clip-text text-transparent`}
                        >
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
        ) : (
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-blue-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No Mock Interviews Yet
              </h3>
              <p className="text-gray-400 mb-4">
                Start your learning journey by taking your first mock interview
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Take First Mock Interview
              </button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recommended Next Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recommended Next Steps
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Based on your progress and performance
            </p>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span>Your action plan</span>
          </div>
        </div>

        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {progressData.nextSteps.map((step, index) => (
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
                    {index === 0
                      ? "High Priority"
                      : index === 1
                      ? "Medium Priority"
                      : "Low Priority"}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>
                  {progressData.weeksCompleted} week
                  {progressData.weeksCompleted !== 1 ? "s" : ""} completed
                </span>
              </div>
              <div className="text-sm font-medium text-blue-400 flex items-center gap-1.5">
                <span>Progress: {progressData.overallProgress}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
