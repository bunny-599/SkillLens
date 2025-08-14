"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glow-in {
        0% {
          opacity: 0;
          transform: scale(0.95);
          filter: brightness(0.5);
        }
        100% {
          opacity: 1;
          transform: scale(1);
          filter: brightness(1);
        }
      }
      .animate-glow-in {
        animation: glow-in 0.5s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4">
      <div className="text-center animate-glow-in rounded-2xl border border-gray-700 p-8 shadow-xl bg-[#181818] max-w-lg">
        <h1 className="text-7xl font-extrabold mb-4 text-purple-500 animate-bounce">
          404
        </h1>
        <p className="text-xl mb-6 text-gray-300">
          Oops! You are on a wrong page  😵‍💫
        </p>
        <Link href="/">
          <Button className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300">
            ⬅️ Go Home
          </Button>
        </Link>
        <p className="mt-6 text-sm text-gray-300">
          It's dark out here... Let's go back 🌌
        </p>
      </div>
    </div>
  );
}
