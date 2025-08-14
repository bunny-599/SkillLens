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

  useEffect(() => {
    const storedUsername = localStorage.getItem("github_username");
    const storedRole = localStorage.getItem("target_role");
    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setSelectedRole(storedRole);
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
      const summary = result?.summary && result.summary.s && result.summary.r ? result.summary : result;

      if (!summary || !summary.s || !summary.r) throw new Error("No summary found");

      setAnalysis({
        username: summary.u,
        summary: summary.s,
        repos: summary.r,
      });
    } catch (err) {
      console.error("❌ Error:", err);
    }

    setLoading(false);
  };

  const badgeColor = (lvl) => {
    switch (lvl) {
      case "High":
        return "bg-green-800 text-green-300";
      case "Mod":
        return "bg-yellow-800 text-yellow-300";
      default:
        return "bg-red-800 text-red-300";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold">GitHub Profile Analyzer</h1>
          <p className="text-gray-400">
            Get a smart summary of your GitHub profile for career alignment
          </p>
        </div>

        {/* Form */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                GitHub Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-zinc-600 bg-zinc-800 placeholder-gray-500"
                placeholder="e.g. teja-ux-hub"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Target Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-zinc-600 bg-zinc-800"
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
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-all disabled:bg-zinc-600"
              >
                {loading ? (
                  <>
                    <RefreshCcw className="animate-spin h-4 w-4" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    <span>Analyze</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Output */}
        {!analysis ? (
          <div className="text-center text-gray-400 py-16 border border-zinc-700 border-dashed rounded-xl">
            <Github className="w-10 h-10 mx-auto mb-2" />
            <p>No analysis yet. Enter your GitHub username to get started.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Summary Section */}
            {analysis.summary ? (
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <h2 className="text-xl font-semibold">
                    Summary for <span className="text-blue-400">{analysis.username}</span>
                  </h2>
                  {analysis.summary.lvl ? (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                        analysis.summary.lvl
                      )}`}
                    >
                      Profile Level: {analysis.summary.lvl}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-700 text-gray-400">
                      Profile Level: N/A
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <span>Total Repos: {analysis.summary.pr ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>Followers: {analysis.summary.f ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Stars: {analysis.summary.stars ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-gray-400" />
                    <span>Forks: {analysis.summary.forks ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-green-400" />
                    <span>
                      Top Languages:{" "}
                      {Array.isArray(analysis.summary.langs)
                        ? analysis.summary.langs.join(", ")
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    <span>
                      Recent Repos:{" "}
                      {Array.isArray(analysis.summary.recent)
                        ? analysis.summary.recent.join(", ")
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 text-gray-400">
                <p>Profile summary is unavailable or incomplete.</p>
              </div>
            )}

            {/* Repositories Detail */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold mb-4">
                Repository Language Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(analysis.repos) && analysis.repos.length > 0 ? (
                  analysis.repos.map((repo, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-800 p-4 rounded-lg border border-zinc-700"
                    >
                      <h4 className="text-md font-medium text-blue-400 mb-1">
                        {repo.n}
                      </h4>
                      <p className="text-sm text-gray-400">
                        Languages:{" "}
                        {Array.isArray(repo.l) && repo.l.length
                          ? repo.l.join(", ")
                          : "N/A"}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400">
                    No repository data available.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubAnalysisPage;
