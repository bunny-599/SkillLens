"use client";
import React, { useState, useEffect } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Code,
  User,
  Bot,
  Volume2,
  VolumeX,
} from "lucide-react";
import Vapi from "@vapi-ai/web";
import { useUser } from "@clerk/nextjs";

export default function VideoInterview() {
  const { user } = useUser(); // Get user from Clerk
  const [started, setStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [codeInput, setCodeInput] = useState("");
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [aiSubtitle, setAiSubtitle] = useState("");
  const [userSubtitle, setUserSubtitle] = useState("");
  const [lastAiCaption, setLastAiCaption] = useState("");
  const [lastUserCaption, setLastUserCaption] = useState("");
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [interviewProgress, setInterviewProgress] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);
  const [userInterviewData, setUserInterviewData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize Vapi with proper error handling
  const vapi = React.useMemo(() => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;
      if (!apiKey) {
        console.error("VAPI API key is missing");
        return null;
      }
      return new Vapi(apiKey);
    } catch (error) {
      console.error("Failed to initialize Vapi:", error);
      return null;
    }
  }, []);

  // Fetch user interview data
  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Get target role from localStorage
      const targetRole = localStorage.getItem('targetRole') || 'developer';
      
      // Get userId from Clerk
      const userId = user?.id;
      
      if (!userId) {
        console.error('User not authenticated with Clerk');
        return {
          githubUsername: user?.username || 'developer',
          targetRole,
          totalWeeksCompleted: 0,
          summary: {
            s: { langs: ['JavaScript'], lvl: 'Beginner' },
            r: []
          }
        };
      }

      const response = await fetch(`/api/interview-data?userId=${userId}`);
      
      if (!response.ok) {
        console.log('Failed to fetch user data from API, using fallback');
        return {
          githubUsername: user?.username || 'developer',
          targetRole,
          totalWeeksCompleted: 0,
          summary: {
            s: { langs: ['JavaScript'], lvl: 'Beginner' },
            r: []
          }
        };
      }
      
      const userData = await response.json();
      
      // Calculate total weeks completed - only count completed weeks
      let totalWeeks = 0;
      if (userData.roadmapProgress) {
        Object.keys(userData.roadmapProgress).forEach(role => {
          if (userData.roadmapProgress[role].weeks) {
            const weeks = Object.keys(userData.roadmapProgress[role].weeks);
            // Only count completed weeks
            weeks.forEach(weekNum => {
              const week = userData.roadmapProgress[role].weeks[weekNum];
              if (week && week.completed) {
                totalWeeks += 1;
              }
            });
          }
        });
      }

      return {
        ...userData,
        targetRole,
        totalWeeksCompleted: totalWeeks
      };

    } catch (error) {
      console.error('Error fetching user data:', error);
      // Return fallback data so interview can still work
      return {
        githubUsername: user?.username || 'developer',
        targetRole: localStorage.getItem('targetRole') || 'developer',
        totalWeeksCompleted: 0,
        summary: {
          s: { langs: ['JavaScript'], lvl: 'Beginner' },
          r: []
        }
      };
    } finally {
      setLoading(false);
    }
  };

  // Generate dynamic assistant options based on user data
  const getAssistantOptions = (userData) => {
    if (!userData) {
      // Fallback to default options
      return {
        name: "AI Recruiter",
        firstMessage: "Hello! I'm your AI interviewer today. Let's begin with your technical interview. Are you ready to start?",
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en-US",
        },
        voice: {
          provider: "playht",
          voiceId: "jennifer",
        },
        model: {
          provider: "openai",
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: `You are a professional AI technical interviewer conducting a comprehensive coding interview. Keep responses concise and focused.`,
            },
          ],
        },
      };
    }

    const { githubUsername, summary, targetRole, totalWeeksCompleted } = userData;
    const recentRepos = summary?.r?.slice(0, 3) || [];
    const languages = summary?.s?.langs || ['JavaScript'];
    const level = summary?.s?.lvl || 'Beginner';

    const systemPrompt = `You are a professional AI technical interviewer for a ${targetRole} position.

CANDIDATE PROFILE:
- GitHub: ${githubUsername}
- Experience Level: ${level}
- Languages: ${languages.join(', ')}
- Learning Progress: ${totalWeeksCompleted} weeks completed in roadmap
- Recent Projects: ${recentRepos.map(r => r.n).join(', ')}

INTERVIEW FOCUS:
1. Ask about their recent projects${recentRepos.length > 0 ? ` (${recentRepos.map(r => r.n).slice(0, 2).join(', ')})` : ''}
2. Discuss challenges faced in latest repository and how they solved them
3. Test knowledge in their main languages: ${languages.slice(0, 2).join(', ')}
4. Ask ${targetRole}-specific technical questions based on their ${totalWeeksCompleted} weeks of progress
5. Present a coding challenge relevant to ${targetRole}

STYLE:
- Keep questions concise and targeted
- Reference their GitHub projects specifically when available
- Ask follow-up questions about problem-solving approaches
- Be encouraging but thorough
- One question at a time, wait for complete answers

Start by asking about their coding journey and recent work.`;

    return {
      name: "AI Recruiter",
      firstMessage: `Hello ${githubUsername}! I've reviewed your profile and see you're targeting a ${targetRole} role. Ready to discuss your coding journey?`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
        ],
      },
    };
  };

  useEffect(() => {
    if (!vapi || !started) return;

    // Add error handler first
    const handleError = (error) => {
      console.error("Vapi error:", error);
    };

    vapi.on("error", handleError);

    try {
      // Enhanced speech event handlers
      vapi.on("speech-start", () => {
        console.log("AI started speaking");
        setIsAiSpeaking(true);
        setUserSubtitle("");
      });

      vapi.on("speech-end", () => {
        console.log("AI stopped speaking");
        setIsAiSpeaking(false);
        setTimeout(() => {
          setAiSubtitle("");
        }, 3000);
      });

      // Enhanced message handling for better captions
      vapi.on("message", (message) => {
        console.log("Vapi message:", message);
        
        if (message.type === "transcript") {
          const transcript = message.transcript || "";
          
          if (message.transcriptType === "partial") {
            if (message.role === "assistant") {
              setAiSubtitle(transcript);
              setCurrentQuestion(transcript);
            } else if (message.role === "user") {
              setUserSubtitle(transcript);
              setIsUserSpeaking(true);
            }
          }
          
          if (message.transcriptType === "final") {
            if (message.role === "assistant") {
              setLastAiCaption(transcript);
              setAiSubtitle(transcript);
              setConversationHistory(prev => [...prev, {
                role: "assistant",
                message: transcript,
                timestamp: new Date().toLocaleTimeString()
              }]);
              setInterviewProgress(prev => Math.min(prev + 1, 10));
              setTimeout(() => setAiSubtitle(""), 4000);
            } 
            
            if (message.role === "user") {
              setLastUserCaption(transcript);
              setIsUserSpeaking(false);
              setConversationHistory(prev => [...prev, {
                role: "user",
                message: transcript,
                timestamp: new Date().toLocaleTimeString()
              }]);
              setTimeout(() => setUserSubtitle(""), 2000);
            }
          }
        }

        if (message.type === "function-call") {
          console.log("Function call:", message);
        }
      });

      vapi.on("call-start", () => {
        console.log("Call started");
        setIsRecording(true);
        setConversationHistory([]);
        setInterviewProgress(0);
      });

      vapi.on("call-end", () => {
        console.log("Call ended");
        setIsRecording(false);
        setStarted(false);
        setAiSubtitle("");
        setUserSubtitle("");
        setLastAiCaption("");
        setLastUserCaption("");
        setIsAiSpeaking(false);
        setIsUserSpeaking(false);
        setCurrentQuestion("");
        setInterviewProgress(0);
      });

      vapi.on("volume-level", (volume) => {
        console.log("Volume level:", volume);
      });

    } catch (error) {
      console.error("Error setting up Vapi listeners:", error);
    }

    return () => {
      try {
        vapi.removeAllListeners();
      } catch (error) {
        console.error("Error removing Vapi listeners:", error);
      }
    };
  }, [started, vapi]);

  const handleStart = async () => {
    if (!vapi) {
      console.error("Vapi not initialized properly");
      alert("Vapi is not properly initialized. Please check your API key and try again.");
      return;
    }

    if (!user) {
      alert("Please sign in to start the interview.");
      return;
    }

    try {
      setStarted(true);
      setConversationHistory([]);
      
      // Fetch user data and create dynamic assistant options
      const userData = await fetchUserData();
      setUserInterviewData(userData);
      
      const assistantOptions = getAssistantOptions(userData);
      
      // Start Vapi with dynamic options
      vapi.start(assistantOptions);
      
    } catch (error) {
      console.error("Error starting Vapi:", error);
      setStarted(false);
      alert("Failed to start the interview. Please try again.");
    }
  };

  const handleEndInterview = () => {
    if (!vapi) return;
    
    try {
      vapi.stop();
    } catch (error) {
      console.error("Error stopping Vapi:", error);
    }
    
    // Reset all states
    setStarted(false);
    setIsRecording(false);
    setAiSubtitle("");
    setUserSubtitle("");
    setLastAiCaption("");
    setLastUserCaption("");
    setIsAiSpeaking(false);
    setIsUserSpeaking(false);
    setCurrentQuestion("");
    setInterviewProgress(0);
    setUserInterviewData(null);
  };

  const toggleMute = () => {
    if (!vapi) return;
    
    try {
      setIsMuted(!isMuted);
      vapi.setMuted(!isMuted);
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  const handleCodeSubmit = () => {
    if (codeInput.trim()) {
      console.log("Code submitted:", codeInput);
      
      setConversationHistory(prev => [...prev, {
        role: "user",
        message: `[CODE SUBMITTED] ${codeInput}`,
        timestamp: new Date().toLocaleTimeString(),
        isCode: true
      }]);
      
      setCodeInput("");
      setShowCodeEditor(false);
    }
  };

  // Show loading or sign in prompt if user is not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <Bot className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
          <p className="text-gray-400">You need to be signed in to start the technical interview.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white scale-90">
      <style jsx>{`
        .shadow-text {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }
        .typing-indicator {
          animation: typing 1.4s infinite;
        }
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }
      `}</style>
      
      {!started ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Technical Interview
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Get ready for a comprehensive AI-powered technical interview with real-time voice interaction and live captions.
              </p>
              {userInterviewData && (
                <div className="text-slate-300 text-sm bg-gray-800/50 rounded-lg p-3">
                  <p>Welcome, @{userInterviewData.githubUsername || user.username}</p>
                  <p>Target: {userInterviewData.targetRole}</p>
                  <p>Progress: {userInterviewData.totalWeeksCompleted} weeks completed</p>
                </div>
              )}
            </div>
            
            {/* API Key Status Check */}
            {!process.env.NEXT_PUBLIC_VAPI_API_KEY && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                ⚠️ VAPI API key not found. Please add NEXT_PUBLIC_VAPI_API_KEY to your environment variables.
              </div>
            )}
            
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Advanced Voice Recognition</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Live Coding Environment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Real-time Live Captions</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span>Smart Technical Assessment</span>
              </div>
            </div>
            <button
              onClick={handleStart}
              disabled={!vapi || !process.env.NEXT_PUBLIC_VAPI_API_KEY || loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading 
                ? "🔄 Loading Profile..." 
                : !process.env.NEXT_PUBLIC_VAPI_API_KEY 
                  ? "❌ API Key Required" 
                  : !vapi 
                    ? "⚠️ Vapi Not Initialized"
                    : "🎥 Start Technical Interview"
              }
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Enhanced Header with Progress */}
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    isRecording ? "bg-red-500" : "bg-gray-500"
                  }`}></div>
                  <span className="text-lg font-semibold">
                    {isRecording ? "Live Technical Interview" : "Connecting..."}
                  </span>
                  <div className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                    Progress: {interviewProgress}/10
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`p-2 rounded-lg transition-colors ${
                      showCaptions 
                        ? "bg-blue-500/20 text-blue-400" 
                        : "bg-gray-700 text-gray-400"
                    }`}
                    title="Toggle Captions"
                  >
                    {showCaptions ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                  <div className="text-sm text-gray-400">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3 w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(interviewProgress / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Video Section with Enhanced Captions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Video */}
              <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{user.username || 'You'}</span>
                    {isUserSpeaking && (
                      <div className="flex items-center gap-2 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                        <div className="flex gap-1">
                          <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-1 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-1 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                        <span className="text-xs text-green-400 font-medium">Speaking</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className={`p-1.5 rounded-full transition-colors ${
                        isMuted
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className={`p-1.5 rounded-full transition-colors ${
                        !videoEnabled
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  {videoEnabled ? (
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <User className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>Your Video Stream</div>
                      {isUserSpeaking && (
                        <div className="mt-2 flex justify-center">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center">
                      <VideoOff className="w-16 h-16 mx-auto mb-2 opacity-50" />
                      <div>Camera Off</div>
                    </div>
                  )}

                  {/* Enhanced User Subtitles */}
                  {showCaptions && (userSubtitle || lastUserCaption) && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-[90%]">
                      <div className="bg-black/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-400/40 shadow-2xl">
                        <div className="text-xs text-blue-300 mb-1 font-medium flex items-center gap-1">
                          👤 You {isUserSpeaking && <span className="typing-indicator">●</span>}
                        </div>
                        <div className="text-white font-medium text-center leading-relaxed shadow-text">
                          {userSubtitle || lastUserCaption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Recruiter Video */}
              <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">AI Technical Interviewer</span>
                  {isAiSpeaking && (
                    <div className="flex items-center gap-2 bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30 ml-auto">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-1 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                      <span className="text-xs text-purple-400 font-medium">Speaking</span>
                    </div>
                  )}
                  {!isAiSpeaking && isRecording && (
                    <div className="ml-auto flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-400">Listening</span>
                    </div>
                  )}
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center relative">
                  <div className="text-center space-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${
                      isAiSpeaking ? "animate-pulse scale-110" : ""
                    }`}>
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-gray-300 text-sm">
                      {isRecording ? "AI Interviewer Active" : "Connecting..."}
                    </div>
                    {isAiSpeaking && (
                      <div className="flex justify-center mt-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enhanced AI Subtitles */}
                  {showCaptions && (aiSubtitle || lastAiCaption) && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-[90%]">
                      <div className="bg-black/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-400/40 shadow-2xl">
                        <div className="text-xs text-purple-300 mb-1 font-medium flex items-center gap-1">
                          🤖 AI Interviewer {isAiSpeaking && <span className="typing-indicator">●</span>}
                        </div>
                        <div className="text-white font-medium text-center leading-relaxed shadow-text">
                          {aiSubtitle || lastAiCaption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Code Editor Section */}
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-4 border-b border-gray-600/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Code className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Live Code Editor</h4>
                      <p className="text-sm text-gray-400">Write and submit your solution</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCodeEditor(!showCodeEditor)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                      showCodeEditor
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30"
                    }`}
                  >
                    {showCodeEditor ? "📝 Hide Editor" : "💻 Open Editor"}
                  </button>
                </div>
              </div>
              
              {showCodeEditor && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-2">solution.js</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>JavaScript</span>
                      <span>•</span>
                      <span>Python</span>
                      <span>•</span>
                      <span>TypeScript</span>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      placeholder="// Write your solution here...
// The AI interviewer will analyze your code

function solutionFunction() {
  // Your implementation here
  
}

// Test cases
console.log(solutionFunction());"
                      className="w-full h-80 bg-gray-800/70 border border-gray-600/50 rounded-lg p-4 pl-12 text-white placeholder-gray-500 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none transition-all"
                      style={{
                        lineHeight: "1.6",
                        tabSize: "2",
                      }}
                    />
                    <div className="absolute left-2 top-4 text-xs text-gray-600 font-mono leading-relaxed pointer-events-none select-none">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="h-[22.4px] flex items-center">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-400">
                        Lines: {codeInput.split("\n").length} | Characters: {codeInput.length}
                      </div>
                      {codeInput.trim() && (
                        <div className="flex items-center gap-1 text-xs text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Ready to submit</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setCodeInput("")}
                        className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 text-sm rounded-lg transition-colors"
                      >
                        Clear
                      </button>
                      <button
                        onClick={handleCodeSubmit}
                        disabled={!codeInput.trim()}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg font-medium"
                      >
                        <Code className="w-4 h-4" />
                        Submit to AI
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center">
              <button
                onClick={handleEndInterview}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors flex items-center gap-2 shadow-lg font-medium"
              >
                <PhoneOff className="w-5 h-5" />
                End Interview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Bottom Captions - User Speaking */}
      {started && showCaptions && (userSubtitle || (isUserSpeaking && lastUserCaption)) && (
        <div className="fixed left-0 right-0 bottom-20 w-full flex justify-center pointer-events-none z-50">
          <div className="bg-black/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-lg max-w-4xl text-center shadow-2xl border-l-4 border-blue-400">
            <div className="flex items-center justify-center gap-2 mb-1">
              <User className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm">{user.username || 'You'}</span>
              {isUserSpeaking && (
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              )}
            </div>
            <div className="text-white leading-relaxed shadow-text">
              {userSubtitle || lastUserCaption}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Bottom Captions - AI Speaking */}
      {started && showCaptions && (aiSubtitle || (isAiSpeaking && lastAiCaption)) && (
        <div className="fixed left-0 right-0 bottom-2 w-full flex justify-center pointer-events-none z-50">
          <div className="bg-black/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-lg max-w-4xl text-center shadow-2xl border-l-4 border-purple-400">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-semibold text-sm">AI Interviewer</span>
              {isAiSpeaking && (
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              )}
            </div>
            <div className="text-white leading-relaxed shadow-text">
              {aiSubtitle || lastAiCaption}
            </div>
          </div>
        </div>
      )}

      {/* Conversation History Panel (Optional - can be toggled) */}
      {started && conversationHistory.length > 0 && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-80 max-h-96 bg-black/80 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden z-40">
          <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-600">
            <h3 className="text-sm font-semibold text-white">Interview Log</h3>
          </div>
          <div className="overflow-y-auto max-h-80 p-4 space-y-3">
            {conversationHistory.slice(-6).map((item, index) => (
              <div key={index} className={`text-xs p-2 rounded ${
                item.role === 'assistant' 
                  ? 'bg-purple-900/30 border-l-2 border-purple-400' 
                  : item.isCode 
                    ? 'bg-blue-900/30 border-l-2 border-blue-400'
                    : 'bg-gray-800/50 border-l-2 border-gray-400'
              }`}>
                <div className="text-gray-400 mb-1 flex items-center gap-1">
                  {item.role === 'assistant' ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                  <span>{item.role === 'assistant' ? 'AI' : user.username || 'You'}</span>
                  <span className="ml-auto">{item.timestamp}</span>
                </div>
                <div className="text-white text-xs">
                  {item.isCode ? (
                    <code className="bg-gray-800 p-1 rounded text-green-400">
                      {item.message.replace('[CODE SUBMITTED] ', '')}
                    </code>
                  ) : (
                    item.message
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}