"use client";

import { Goldman, Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const bottomFeatures = [
  {
    title: "Battery Life",
    desc: "The Padlock can last up to 1 year with CR2 lithium battery",
    startX: 420,
    startY: 450,
    cornerX: 135,
    endY: 600,
  },
  {
    title: "Battery Life",
    desc: "The Padlock can last up to 1 year with CR2 lithium battery",
    startX: 555,
    startY: 435,
    cornerX: 385,
    endY: 600,
  },
  {
    title: "Battery Life",
    desc: "The Padlock can last up to 1 year with CR2 lithium battery",
    startX: 470,
    startY: 330,
    cornerX: 640,
    endY: 600,
  },
  {
    title: "Battery Life",
    desc: "The Padlock can last up to 1 year with CR2 lithium battery",
    startX: 470,
    startY: 260,
    cornerX: 895,
    endY: 600,
  },
];

const LockExplosion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const viewportHeight = window.innerHeight;

      const currentProgress = Math.min(
        Math.max((window.scrollY - elementTop) / (viewportHeight * 0.8), 0),
        1,
      );
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coverX = -65 - progress * 300;
  const coverY = 70;

  const internalX = 0;
  const internalY = 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0a0a0a] text-white pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-visible"
      style={{ minHeight: "180vh" }}
    >
      {/* Sticky Stage Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center py-8 z-10 overflow-visible">
        <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center -mt-16 sm:-mt-24">
          {/* SVG Connector Lines to Bottom Specs (Fades in as cover moves) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-15"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{
              opacity: Math.max(0, (progress - 0.15) / 0.85),
              transition: "opacity 0.2s ease-out",
            }}
          >
            {bottomFeatures.map((item, idx) => {
              const pathData = `M ${item.startX} ${item.startY} L ${item.cornerX} ${item.startY} L ${item.cornerX} ${item.endY}`;
              return (
                <g key={idx}>
                  <path
                    d={pathData}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.65)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx={item.startX}
                    cy={item.startY}
                    r="3"
                    fill="#ffffff"
                  />
                </g>
              );
            })}
          </svg>

          <div className="relative w-[320px] sm:w-105 md:w-125 h-100 sm:h-125 md:h-145 flex items-center justify-center">
            {/* 1. Internal Assembly (Base Layer) */}
            <img
              src="/padlock/padlock-internal.png"
              alt="Padlock Internal Assembly"
              draggable={false}
              className="absolute w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-75 ease-out select-none"
              style={{
                transform: `translate(${internalX}px, ${internalY}px)`,
                zIndex: 10,
              }}
            />

            {/* 2. Outer Cover (Slides off along Isometric axis) */}
            <img
              src="/padlock/padlock-cover.png"
              alt="Padlock Outer Cover"
              draggable={false}
              className="absolute w-full h-full object-contain drop-shadow-[-20px_30px_45px_rgba(0,0,0,0.95)] transition-transform duration-75 ease-out select-none"
              style={{
                transform: `translate(${coverX}px, ${coverY}px) scale(0.75)`,
                zIndex: 20,
              }}
            />
          </div>
        </div>

        {/* Bottom Section: Lock Anatomy Title & 4 Spec Items */}
        <div className="w-full max-w-7xl mx-auto pt-6 border-t border-zinc-800/80 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Lock Anatomy Title & Description */}
          <div className="lg:col-span-1">
            <h2
              className={`${goldman.className} text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 mb-2`}
            >
              Lock Anatomy
            </h2>
            <p
              className={`${poppins.className} text-xs text-zinc-400 leading-relaxed max-w-xs`}
            >
              Container Padlocks are designed to keep the container door closed
              and protect the contents from theft. They are especially important
              for
            </p>
          </div>

          {/* Right Columns: 4 Feature Blocks */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {bottomFeatures.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mb-3" />
                <h3
                  className={`${goldman.className} font-medium text-xs sm:text-sm text-zinc-200 mb-1`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${poppins.className} text-[11px] sm:text-xs text-zinc-400 leading-snug`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockExplosion;
