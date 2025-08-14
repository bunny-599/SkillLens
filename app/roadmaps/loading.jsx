
"use client"
import React from 'react';
import { Clock, ChevronDown, ExternalLink, Calendar } from 'lucide-react';

const RoadmapShimmerLoading = () => {
  const ShimmerBox = ({ className }) => (
    <div className={`relative overflow-hidden bg-gray-700/30 rounded ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header shimmer */}
        <div className="mb-8">
          <ShimmerBox className="h-10 w-80 mb-2" />
          <ShimmerBox className="h-6 w-96" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar shimmer */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <ShimmerBox className="h-6 w-40 mb-2" />
                <ShimmerBox className="h-4 w-60" />
              </div>
              
              {/* Roadmap cards */}
              <div className="p-6 space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-full p-4 rounded-lg border-2 ${
                      index === 0 
                        ? 'border-blue-500 bg-blue-900/30 shadow-lg shadow-blue-500/20' 
                        : 'border-gray-600/50 bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <ShimmerBox className="h-5 w-32 mb-1" />
                        <ShimmerBox className="h-4 w-48 mb-3" />
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <ShimmerBox className="h-4 w-16" />
                          </div>
                          <ShimmerBox className="h-6 w-20 rounded-full" />
                          <ShimmerBox className="h-4 w-8" />
                        </div>
                      </div>
                      <div className="w-5 h-5 bg-gray-400 rounded mt-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content shimmer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <ShimmerBox className="h-8 w-48 mb-2" />
                    <ShimmerBox className="h-5 w-72" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      <ShimmerBox className="h-10 w-16" />
                    </div>
                    <ShimmerBox className="h-4 w-16 mt-1" />
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
                  <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-3 rounded-full w-1/5 relative overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-300 mt-3">
                  <ShimmerBox className="h-4 w-40" />
                  <ShimmerBox className="h-4 w-20" />
                </div>
              </div>

              {/* Week items */}
              <div className="p-6">
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border border-gray-700/50 rounded-lg overflow-hidden bg-gray-700/20 shadow-lg">
                      <div className="flex items-center justify-between p-5">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* Completion circle */}
                          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                            index === 1 ? 'bg-green-400 border-green-400' : 'border-gray-400'
                          }`}>
                            {index === 1 && <div className="w-3 h-3 bg-white rounded-full"></div>}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <ShimmerBox className="h-6 w-64 mb-1" />
                                <ShimmerBox className="h-4 w-48 mb-1" />
                                {index === 1 && (
                                  <ShimmerBox className="h-3 w-40" />
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <ExternalLink className="w-4 h-4 text-gray-400" />
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded content for middle item */}
                      {index === 0 && (
                        <div className="px-5 pb-5">
                          <div className="border-t border-gray-600/30 pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Skills section */}
                              <div>
                                <div className="flex items-center mb-3">
                                  <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
                                  <ShimmerBox className="h-5 w-24" />
                                </div>
                                <div className="space-y-2">
                                  {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                      <ShimmerBox className="h-4 w-32" />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Resources section */}
                              <div>
                                <div className="flex items-center mb-3">
                                  <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                                  <ShimmerBox className="h-5 w-32" />
                                </div>
                                <div className="space-y-2">
                                  {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                      <ShimmerBox className="h-4 w-40" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600/30">
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <ShimmerBox className="h-4 w-12" />
                                </div>
                              </div>
                              <ShimmerBox className="h-8 w-32 rounded-lg" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RoadmapShimmerLoading;