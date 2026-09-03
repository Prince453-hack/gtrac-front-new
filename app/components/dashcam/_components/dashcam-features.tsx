"use client";

import { useState, useEffect, useRef } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const featuresData = [
  {
    title: "ADAS Alerts",
    description:
      "Real-time lane departure, collision, and distraction alerts help drivers react faster, improving road safety and reducing accident risks during every trip.",
  },
  {
    title: "Driver Monitoring System",
    description:
      "AI-powered driver monitoring detects fatigue, phone usage, smoking, and other risky behaviors, helping improve driver safety and prevent accidents.",
  },
  {
    title: "Forward Collision Warning",
    description:
      "Advanced sensors continuously monitor the road ahead and provide timely collision warnings, helping drivers avoid rear-end accidents and maintain safer driving distances.",
  },
];

const DashcamFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const viewportHeight = window.innerHeight;

      const currentProgress = Math.min(
        Math.max((window.scrollY - elementTop) / viewportHeight, 0),
        1,
      );
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Precise mobile vs desktop transform
  const transformStyle = isMobile
    ? `translate(-50%, calc(-50% + ${22 - progress * 30}vh)) rotate(${-progress * 90}deg) scale(${0.95 - progress * 0.13})`
    : `translate(calc(-50% + ${(1 - progress) * 20}vw), calc(-50% + ${(1 - progress) * 5}vh)) rotate(${(progress - 1) * 90}deg) scale(${0.9 + progress * 0.1})`;

  return (
    <div
      ref={containerRef}
      className={`${outfit.className} bg-white relative w-full flex flex-col`}
      style={{ minHeight: "200vh" }}
    >
      {/* Single Animated Dashcam */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute transition-transform duration-75 ease-out pointer-events-auto"
            style={{
              transform: transformStyle,
              left: "50%",
              top: "50%",
            }}
          >
            <Image
              src="/dashcam/dashcam.png"
              width={400}
              height={400}
              alt="Dashcam"
              draggable={false}
              className="w-56 sm:w-72 md:w-85 lg:w-100 h-auto object-contain drop-shadow-[-20px_24px_24px_rgba(0,0,0,0.45)] select-none"
            />
          </div>
        </div>
      </div>

      {/* Slide 1: Introduction */}
      <div className="relative h-screen w-full flex flex-col justify-between lg:grid lg:grid-cols-[1fr_1fr] items-start lg:items-center px-6 sm:px-12 md:px-20 lg:px-32 z-0 pt-10 sm:pt-12 pb-6 sm:pb-8 lg:py-0">
        <div className="flex flex-col items-start max-w-xl space-y-3 sm:space-y-6 text-left z-20">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-neutral-700 mb-2 sm:mb-4">
              Smart 4G Dual Dashcam with Live Tracking
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 font-light leading-relaxed">
              Upgrade fleet safety with intelligent AI-powered dashcam featuring
              real-time ADAS alerts, cloud video storage, live monitoring, smart
              playback, and driver behavior analytics to improve security,
              reduce accidents, enhance accountability, and optimize overall
              fleet management performance efficiently.
            </p>
            <p className="text-xs sm:text-base text-neutral-600 font-light leading-relaxed mt-3 sm:mt-6 hidden sm:block">
              Enhance fleet operations with AI-powered dashcam featuring
              real-time ADAS alerts, live monitoring, cloud recording, and
              intelligent video playback.
            </p>
          </div>
        </div>

        {/* Space on mobile for horizontal dashcam in Slide 1 */}
        <div className="w-full h-56 sm:h-64 lg:h-full shrink-0" />
      </div>

      {/* Slide 2: Feature Breakdown */}
      <div className="relative h-screen w-full flex flex-col justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] items-center lg:justify-items-center px-6 sm:px-12 md:px-16 lg:px-24 gap-2 sm:gap-6 lg:gap-28 z-0 bg-neutral-50 border-t border-neutral-100 pt-8 sm:pt-10 pb-6 sm:pb-12 lg:py-0">
        <div className="flex flex-col items-start max-w-sm space-y-1.5 sm:space-y-4 lg:justify-self-end text-left z-20 w-full">
          <h1 className="text-xl sm:text-4xl font-semibold leading-tight text-[#4A4949]">
            Intelligent Protection <br className="hidden sm:inline" /> On Every Journey
          </h1>
          <p className="font-light text-[11px] sm:text-base text-neutral-600 leading-tight sm:leading-normal">
            Our AI-Powered safety suite monitors your drive 24/7, providing
            real-time alerts and protection when you need it most.
          </p>
        </div>

        {/* Space on mobile for rotated vertical dashcam in Slide 2 */}
        <div className="w-full h-44 sm:h-56 lg:w-100 lg:h-100 shrink-0" />

        <div className="lg:justify-self-start text-left max-w-sm z-20 w-full">
          {featuresData.map(({ title, description }, index) => (
            <div key={title} className="flex flex-col space-y-1.5 sm:space-y-4 mb-2 sm:mb-6">
              <div className="flex items-start space-x-2.5 sm:space-x-4">
                <Image
                  src="/dashcam/dashcam-logo.svg"
                  width={55}
                  height={55}
                  alt="Dashcam Icon"
                  className="w-8 h-8 sm:w-14 sm:h-14 shrink-0"
                />
                <div className="border-l border-zinc-400/45 h-12 sm:h-28" />
                <div className="flex flex-col space-y-0.5 sm:space-y-2">
                  <h1 className="text-xs sm:text-lg font-medium text-neutral-800 leading-snug">
                    {title}
                  </h1>
                  <p className="text-[10px] sm:text-sm text-zinc-600 leading-snug sm:leading-relaxed">{description}</p>
                </div>
              </div>
              {index !== featuresData.length - 1 && (
                <div className="border-t border-zinc-400/45 w-full mt-0.5 sm:mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashcamFeatures;
