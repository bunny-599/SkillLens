"use client";
import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Star,
  BarChart3,
  Globe,
} from "lucide-react";
import { industryInsights } from "@/data/mockData";

const IndustryInsights = () => {
  const [selectedRole, setSelectedRole] = useState("Web Developer");
  const [selectedRegion, setSelectedRegion] = useState("India");

  const currentInsight =
    industryInsights.find((insight) => insight.role === selectedRole) ||
    industryInsights[0];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "Rising":
        return <TrendingUp className="w-5 h-5 text-green-400" />;
      case "Declining":
        return <TrendingDown className="w-5 h-5 text-red-400" />;
      default:
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case "High":
        return "text-green-300 bg-green-800";
      case "Medium":
        return "text-yellow-300 bg-yellow-800";
      case "Low":
        return "text-red-300 bg-red-800";
      default:
        return "text-gray-300 bg-gray-700";
    }
  };

  const formatSalary = (salary) => {
    return `₹${(salary / 1000).toFixed(0)}K`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Industry Insights</h1>
        <p className="text-gray-400">
          Stay updated with the latest trends, salaries, and job market data
        </p>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {industryInsights.map((insight) => (
                <option key={insight.role} value={insight.role}>
                  {insight.role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Region
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Europe">Europe</option>
              <option value="Global">Global</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Avg Salary */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-700/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Average Salary</p>
              <p className="text-2xl font-bold text-white">
                {formatSalary(currentInsight.averageSalary)}
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-700/20 rounded-lg">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Job Openings</p>
              <p className="text-2xl font-bold text-white">
                {currentInsight.jobOpenings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Salary Trend */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-700/20 rounded-lg">
              {getTrendIcon(currentInsight.salaryTrend)}
            </div>
            <div>
              <p className="text-sm text-gray-400">Salary Trend</p>
              <p className="text-2xl font-bold text-white">
                {currentInsight.salaryTrend}
              </p>
            </div>
          </div>
        </div>

        {/* Demand */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-700/20 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Demand</p>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDemandColor(
                  currentInsight.demandTrend
                )}`}
              >
                {currentInsight.demandTrend}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Chart & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Salary by Experience */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
            Salary by Experience
          </h2>

          <div className="space-y-4">
            {currentInsight.salaryData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-sm text-gray-400">
                  {data.experience} YoE
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (data.salary /
                            Math.max(
                              ...currentInsight.salaryData.map((d) => d.salary)
                            )) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
                <div className="w-16 text-sm font-medium text-white">
                  {formatSalary(data.salary)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-Demand Skills */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            In-Demand Skills
          </h2>

          <div className="space-y-3">
            {currentInsight.requiredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
              >
                <span className="font-medium text-white">{skill}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-300">High demand</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Market Comparison */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 mt-8">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-green-400" />
          Regional Market Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-white">Region</th>
                <th className="text-left py-3 px-4 font-medium text-white">Avg Salary</th>
                <th className="text-left py-3 px-4 font-medium text-white">Job Openings</th>
                <th className="text-left py-3 px-4 font-medium text-white">Demand</th>
                <th className="text-left py-3 px-4 font-medium text-white">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="py-3 px-4 text-white">India</td>
                <td className="py-3 px-4 text-white">₹75K</td>
                <td className="py-3 px-4 text-white">15,420</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-800 text-green-300">
                    High
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-gray-300 text-sm">Rising</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white">USA</td>
                <td className="py-3 px-4 text-white">$95K</td>
                <td className="py-3 px-4 text-white">28,750</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-800 text-green-300">
                    High
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-gray-300 text-sm">Rising</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white">Europe</td>
                <td className="py-3 px-4 text-white">€68K</td>
                <td className="py-3 px-4 text-white">18,920</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-800 text-yellow-300">
                    Medium
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-gray-300 text-sm">Stable</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustryInsights;
