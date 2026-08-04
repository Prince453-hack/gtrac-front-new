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

  return (
    <div
      ref={containerRef}
      className={`${outfit.className} bg-white relative w-full flex flex-col`}
      style={{ minHeight: "200vh" }}
    >
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute transition-transform duration-75 ease-out pointer-events-auto"
            style={{
              transform: `translate(calc(-50% + ${(1 - progress) * 20}vw), calc(-50% + ${(1 - progress) * 5}vh)) rotate(${(progress - 1) * 90}deg) scale(${0.9 + progress * 0.1})`,
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
              className="object-contain drop-shadow-[-24px_28px_24px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full grid grid-cols-[1fr_1fr] items-center px-12 md:px-32 z-0">
        <div className="flex flex-col items-start max-w-xl space-y-8 text-left z-20">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-neutral-700 mb-4">
              Smart 4G Dual Dashcam with Live Tracking
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed">
              Upgrade fleet safety with intelligent AI-powered dashcam featuring
              real-time ADAS alerts, cloud video storage, live monitoring, smart
              playback, and driver behavior analytics to improve security,
              reduce accidents, enhance accountability, and optimize overall
              fleet management performance efficiently.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mt-10">
              Enhance fleet operations with AI-powered dashcam featuring
              real-time ADAS alerts, live monitoring, cloud recording, and
              intelligent video playback.
            </p>
          </div>
        </div>

        <div className="shrink-0 w-full h-full" />
      </div>

      <div className="relative h-screen w-full grid grid-cols-[1fr_auto_1fr] items-center justify-items-center px-12 md:px-24 gap-28 z-0 bg-neutral-50 border-t border-neutral-100">
        <div className="flex flex-col items-start max-w-sm space-y-5 justify-self-end text-left z-20">
          <h1 className="text-4xl font-semibold leading-tight text-[#4A4949]">
            Intelligent Protection <br /> On Every Journey
          </h1>
          <p className="font-light text-neutral-600">
            Our AI-Powered safety suite monitors your drive 24/7, providing
            real-time alerts and protection when you need it most.
          </p>
        </div>

        <div className="w-100 h-100 shrink-0" />

        <div className="justify-self-start text-left max-w-sm z-20">
          {featuresData.map(({ title, description }, index) => (
            <div key={title} className="flex flex-col space-y-5 mb-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="/dashcam/dashcam-logo.svg"
                  width={55}
                  height={55}
                  alt="Dashcam Icon"
                />
                <div className="border-l border-zinc-400/45 h-32" />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-lg font-medium text-neutral-800">
                    {title}
                  </h1>
                  <p className="text-sm text-zinc-600">{description}</p>
                </div>
              </div>
              {index !== featuresData.length - 1 && (
                <div className="border-t border-zinc-400/45 w-full mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashcamFeatures;
