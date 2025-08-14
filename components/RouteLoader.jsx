// components/RouteLoader.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // Show loader
    setShow(true);
    gsap.fromTo(
      "#route-loader",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );

    // Hide after small delay (simulate loading)
    const t = setTimeout(() => {
      gsap.to("#route-loader", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setShow(false),
      });
    }, 500); // Adjust for your load time

    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      id="route-loader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-md"
    >
      <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
