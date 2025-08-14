"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import RotatingText from "./rotatingText";
import Link from "next/link";

export default function HeroSection() {
  const gridRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(grid, {
        backgroundPosition: `${clientX / 8}px ${clientY / 8}px`,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const letters = headingRef.current.querySelectorAll("span");
    gsap.set(letters, { opacity: 0, y: 40 });

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.04,
    });

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
    );
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", delay: 0.9 }
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const line1 = "Your AI Career Guru"
    .split("")
    .map((char, i) => (
      <span key={`line1-${i}`} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const line2 = "for Professional"
    .split("")
    .map((char, i) => (
      <span key={`line2-${i}`} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

    const line3 = "Success"
    .split("")
    .map((char, i) => (
      <span key={`line3-${i}`} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));


  return (
    <div
      ref={gridRef}
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(#3b3b3b 1px, transparent 1px), linear-gradient(90deg, #3b3b3b 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="z-10 text-center px-6 max-w-4xl">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          <div>{line1}</div>
          <div>{line2}</div>
          <div>{line3}</div>
        </h1>

        <div ref={paraRef} className="text-xl md:text-2xl text-neutral-200 mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm md:text-base text-white uppercase font-semibold tracking-wider">Guides in:</span>
            <RotatingText
              texts={[
                "Mock Interviews",
                "Realtime Interviews",
                "Resume Building",
                "Cover Letter Drafting",
                "Skill Gap Analysis",
                "Internship Readiness",
                "Job Matching"
              ]}
              mainClassName="px-3 bg-cyan-300 text-black py-1 rounded-md"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <Link href="/roadmaps">
        <Button
          ref={btnRef}
          size="lg"
          className="text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-gray-900 text-white hover:bg-gray-700"
        >
          🚀 Get Started
        </Button>
        </Link>
      </div>
    </div>
  );
}
