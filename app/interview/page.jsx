"use client";
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, Phone, PhoneOff, Code, User, Bot } from 'lucide-react';
import Vapi from "@vapi-ai/web";

export default function VideoInterview() {
  const [started, setStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [codeInput, setCodeInput] = useState('');
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [aiSubtitle, setAiSubtitle] = useState('');
  const [userSubtitle, setUserSubtitle] = useState('');
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);

  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

  const assistantOptions = {
    name: "AI Recruiter",
    firstMessage: "Hello, I’ll be conducting your {jobRole} interview. Let’s get started.",
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
          content: `
  You are a **firm but encouraging AI interviewer** for the role of {jobRole}.
  Your job is to keep the conversation professional and focused while making the candidate feel motivated.
  
  **Interview Structure:**
  1. Start with a confident but polite greeting.
  2. Ask **one question at a time** in this order:
     - **Q1:** Based on the candidate’s GitHub summary {githubSummary}.
     - **Q2:** Based on their latest repository {latestRepo}.
     - **Q3:** A medium-level DSA problem relevant for coding interviews.
     - **Remaining Questions:** Technical, role-specific, and tailored to the candidate’s {progress}.
  3. Maintain a **clear, slightly strict tone**:
     - If wrong: "Not quite. Think it through." or "That’s close, but missing detail."
     - If correct: "Good. Let’s move on."
  4. Give hints only if they seem stuck for too long — short and targeted hints.
  5. Acknowledge good answers briefly but positively.
  6. After 5–7 questions, wrap up with:
     - A short summary of how they performed.
     - A motivating closing: "You’re improving. Keep practicing — you’re on the right path."
  `.trim(),
        },
      ],
    },
  };
  

  useEffect(() => {
    if (started) {
      // Vapi event listeners for real-time subtitles
      vapi.on('speech-start', () => {
        setIsAiSpeaking(true);
        setUserSubtitle('');
      });

      vapi.on('speech-end', () => {
        setIsAiSpeaking(false);
        setAiSubtitle('');
      });

      vapi.on('message', (message) => {
        if (message.type === 'transcript' && message.transcriptType === 'partial') {
          if (message.role === 'assistant') {
            setAiSubtitle(message.transcript);
          } else {
            setUserSubtitle(message.transcript);
            setIsUserSpeaking(true);
          }
        }
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          if (message.role === 'user') {
            setIsUserSpeaking(false);
            setTimeout(() => setUserSubtitle(''), 3000);
          }
        }
      });

      vapi.on('call-start', () => {
        setIsRecording(true);
      });

      vapi.on('call-end', () => {
        setIsRecording(false);
        setStarted(false);
        setAiSubtitle('');
        setUserSubtitle('');
      });

      vapi.on('volume-level', (volume) => {
        // You can use this for visual feedback
      });

      vapi.on('error', (error) => {
        console.error('Vapi error:', error);
      });
    }

    return () => {
      // Cleanup listeners
      vapi.removeAllListeners();
    };
  }, [started, vapi]);

  const handleStart = () => {
    setStarted(true);
    vapi.start("a1e26993-0042-446a-8379-28cf5891d729", assistantOptions);
  };

  const handleEndInterview = () => {
    vapi.stop();
    setStarted(false);
    setIsRecording(false);
    setAiSubtitle('');
    setUserSubtitle('');
    setIsAiSpeaking(false);
    setIsUserSpeaking(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    vapi.setMuted(!isMuted);
  };

  const handleCodeSubmit = () => {
    if (codeInput.trim()) {
      // You could send this code to the AI for review
      console.log('Code submitted:', codeInput);
      setCodeInput('');
      setShowCodeEditor(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {!started ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Interview
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Get ready for a live AI-powered interview experience with real-time voice interaction.
              </p>
            </div>
            
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Voice Recognition Enabled</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Live Coding Environment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Real-time Subtitles</span>
              </div>
            </div>
            
            <button
              onClick={handleStart}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🎥 Start Voice Interview
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${isRecording ? 'bg-red-500' : 'bg-gray-500'}`}></div>
                  <span className="text-lg font-semibold">
                    {isRecording ? 'Live Interview Session' : 'Connecting...'}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Video */}
              <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">You</span>
                    {isUserSpeaking && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Speaking</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className={`p-1.5 rounded-full transition-colors ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                      {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className={`p-1.5 rounded-full transition-colors ${!videoEnabled ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
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
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center">
                      <VideoOff className="w-16 h-16 mx-auto mb-2 opacity-50" />
                      <div>Camera Off</div>
                    </div>
                  )}
                  
                  {/* User Subtitles */}
                  {userSubtitle && (
                    <div className="absolute bottom-4 left-4 right-4 bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
                      <div className="text-xs text-blue-200 mb-1">You:</div>
                      <div className="text-sm text-white font-medium">{userSubtitle}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Recruiter Video */}
              <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">AI Recruiter</span>
                  {isAiSpeaking && (
                    <div className="flex items-center gap-1 ml-auto">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-purple-400">Speaking</span>
                    </div>
                  )}
                  {!isAiSpeaking && isRecording && (
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                  )}
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center relative">
                  <div className="text-center space-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${isAiSpeaking ? 'animate-pulse scale-110' : ''}`}>
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-gray-300 text-sm">
                      {isRecording ? 'AI Assistant Active' : 'Connecting...'}
                    </div>
                  </div>
                  
                  {/* AI Subtitles */}
                  {aiSubtitle && (
                    <div className="absolute bottom-4 left-4 right-4 bg-purple-600/90 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                      <div className="text-xs text-purple-200 mb-1">AI Recruiter:</div>
                      <div className="text-sm text-white font-medium">{aiSubtitle}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Code Editor Section */}
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Code Challenge
                </h4>
                <button
                  onClick={() => setShowCodeEditor(!showCodeEditor)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                >
                  {showCodeEditor ? 'Hide Editor' : 'Show Editor'}
                </button>
              </div>
              
              {showCodeEditor && (
                <div className="space-y-4">
                  <textarea
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="// Write your React code here...
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}"
                    className="w-full h-64 bg-gray-800/50 border border-gray-600/50 rounded-lg p-4 text-white placeholder-gray-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-400">
                      JavaScript • React • TypeScript supported
                    </div>
                    <button
                      onClick={handleCodeSubmit}
                      disabled={!codeInput.trim()}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Code className="w-4 h-4" />
                      Submit Code
                    </button>
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
    </div>
  );
}