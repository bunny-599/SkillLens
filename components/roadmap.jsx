"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const roadmapRef = useRef(null);
  const carRef = useRef(null);

  const steps = [
    "Find Your Skill",
    "Learn the Skill",
    "Solve Problems",
    "Build Projects",
    "Craft Resume",
    "Prepare Interviews",
    "Find a Job"
  ];

  useEffect(() => {
    const progressBar = roadmapRef.current.querySelector(".progress-bar");
    const car = carRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: roadmapRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      progressBar,
      { width: "0%" },
      {
        width: "100%",
        duration: 6.2,
        ease: "power2.inOut",
      }
    );

    timeline.fromTo(
      car,
      { left: "0%" },
      {
        left: "100%",
        duration: 6.2,
        ease: "power2.inOut",
      },
      0
    );
  }, []);

  return (
    <div
      ref={roadmapRef}
      className="w-full overflow-hidden px-6 py-16 bg-black"
    >
      <div className="relative flex items-center justify-start w-full max-w-6xl mx-auto">
        <div className="absolute h-2 bg-gray-700 w-full rounded-full" />

        <div
          className="absolute h-2 bg-purple-500 rounded-full progress-bar shadow-[0_0_20px_3px_rgba(192,132,252,0.6)]"
          style={{ width: "0%" }}
        />

        <div
          ref={carRef}
          className="absolute -top-6 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center shadow-lg transition-transform"
          style={{ left: "0%" }}
        >
                🚶‍♂️‍➡️
        </div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center w-[15%] min-w-[120px]"
          >
            <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white mb-2 shadow-lg" />
            <p className="text-white text-sm font-semibold text-center mt-2 w-full">
              {step}
            </p>
            {index < steps.length - 1 && (
              <div className="absolute right-[-8px] top-3 w-4 h-4 rotate-45 bg-purple-500 shadow-md" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
