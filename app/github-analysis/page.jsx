"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Star,
  GitFork,
  User,
  BookOpen,
  Code,
  TrendingUp,
  RefreshCcw,
  Search,
} from "lucide-react";

const GitHubAnalysisPage = () => {
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("Web Developer");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [existingSummary, setExistingSummary] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(true);

  // Load stored preferences
  useEffect(() => {
    const storedUsername = localStorage.getItem("github_username");
    const storedRole = localStorage.getItem("target_role");
    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setSelectedRole(storedRole);
  }, []);

  // Load existing summary from database
  useEffect(() => {
    const loadExistingSummary = async () => {
      setLoadingSummary(true);
      try {
        const response = await fetch("/api/get-user-summary");
        if (response.ok) {
          const data = await response.json();
          if (data.summary && data.summary.s && data.summary.r) {
            setExistingSummary({
              username: data.summary.u,
              summary: data.summary.s,
              repos: data.summary.r,
              githubUsername: data.githubUsername,
            });
            // Auto-fill username if we have it
            if (data.githubUsername && !username) {
              setUsername(data.githubUsername);
            }
          }
        }
      } catch (error) {
        console.error("Error loading existing summary:", error);
      } finally {
        setLoadingSummary(false);
      }
    };

    loadExistingSummary();
  }, []);

  const handleAnalyze = async () => {
    if (!username.trim()) return;
    localStorage.setItem("github_username", username);
    localStorage.setItem("target_role", selectedRole);
    setLoading(true);

    try {
      const res = await fetch(
        `/api/github-analysis?username=${username}&save=true`
      );
      const data = await res.json();
      // Support both: summary at top-level or wrapped in a 'summary' property
      const result = data?.result;
      const summary =
        result?.summary && result.summary.s && result.summary.r
          ? result.summary
          : result;

      if (!summary || !summary.s || !summary.r)
        throw new Error("No summary found");

      setAnalysis({
        username: summary.u,
        summary: summary.s,
        repos: summary.r,
      });

      // Refresh existing summary after new analysis
      setExistingSummary({
        username: summary.u,
        summary: summary.s,
        repos: summary.r,
        githubUsername: username,
      });
    } catch (err) {
      console.error("Analysis failed:", err);
      alert("Failed to analyze GitHub profile. Please check the username.");
    } finally {
      setLoading(false);
    }
  };

  const getSkillColor = (skill) => {
    const colors = {
      JS: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      TS: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Py: "bg-green-500/20 text-green-300 border-green-500/30",
      React: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      Node: "bg-green-600/20 text-green-400 border-green-600/30",
    };
    return colors[skill] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "High":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Mod":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-red-500/20 text-red-300 border-red-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            GitHub Profile Analyzer
          </h1>
          <p className="text-gray-300 text-lg">
            Get intelligent insights about your GitHub profile and coding
            journey
          </p>
        </div>

        {/* Analysis Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                GitHub Username
              </label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="e.g. teja-ux-hub"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Target Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700/50 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              >
                <option>Web Developer</option>
                <option>AI/ML Engineer</option>
                <option>Data Scientist</option>
                <option>DevOps Engineer</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleAnalyze}
                disabled={loading || !username.trim()}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? (
                  <>
                    <RefreshCcw className="animate-spin h-4 w-4" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    <span>Analyze Profile</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Existing Summary Section */}
        {loadingSummary ? (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-8">
            <div className="flex items-center justify-center space-x-3">
              <RefreshCcw className="animate-spin h-5 w-5 text-blue-400" />
              <span className="text-gray-300">
                Loading your profile summary...
              </span>
            </div>
          </div>
        ) : existingSummary ? (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Github className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Your GitHub Profile
                    </h2>
                    <p className="text-gray-300">
                      @{existingSummary.githubUsername}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(
                    existingSummary.summary.lvl
                  )}`}
                >
                  {existingSummary.summary.lvl} Level
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-400">Repositories</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {existingSummary.summary.pr}
                  </div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-400">Followers</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {existingSummary.summary.f}
                  </div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Total Stars</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {existingSummary.summary.stars}
                  </div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <GitFork className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Total Forks</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {existingSummary.summary.forks}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-cyan-400" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {existingSummary.summary.langs.map((lang, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getSkillColor(
                        lang
                      )}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Projects */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                  Recent Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {existingSummary.summary.recent.map((repo, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-3"
                    >
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-300 font-medium">
                          {repo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          !loadingSummary && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-8 text-center">
              <div className="p-4 bg-gray-700/30 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Github className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Profile Summary Found
              </h3>
              <p className="text-gray-400 mb-4">
                Analyze your GitHub profile above to get detailed insights and
                save your summary.
              </p>
            </div>
          )
        )}

        {/* New Analysis Results */}
        {analysis && (
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Fresh Analysis Complete!
              </h3>
            </div>
            <p className="text-green-300">
              Your GitHub profile has been analyzed and saved. The summary above
              has been updated with your latest data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubAnalysisPage;
