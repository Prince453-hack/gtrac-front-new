"use client";

import { Goldman } from "next/font/google";
import { useEffect, useState, useRef } from "react";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const labels = [
  {
    name: "Rear Housing",
    align: "above",
    getX: (p: number) => -36 - p * 370,
    yLineHeight: 50,
    yOffset: 300,
  },
  {
    name: "Limit Switch Holder",
    align: "below",
    getX: (p: number) => -40 - p * 230,
    yLineHeight: 120,
    yOffset: 190,
  },
  {
    name: "Locking Bolt",
    align: "above",
    getX: (p: number) => -45 - p * 140,
    yLineHeight: 110,
    yOffset: 240,
  },
  {
    name: "Lock Mechanism",
    align: "below",
    getX: (p: number) => -75 - p * 10,
    yLineHeight: 110,
    yOffset: 200,
  },
  {
    name: "Solenoid",
    align: "above",
    getX: (p: number) => -15 - p * 10 + 40,
    yLineHeight: 200,
    yOffset: 150,
  },
  {
    name: "Wiring Harness / Sensor",
    align: "below",
    getX: (p: number) => -1 - p * 50 + 145,
    yLineHeight: 100,
    yOffset: 210,
  },
  {
    name: "Seal Gasket",
    align: "above",
    getX: (p: number) => 0 + p * 226,
    yLineHeight: 60,
    yOffset: 290,
  },
  {
    name: "Front Cover",
    align: "below",
    getX: (p: number) => 16 + p * 345,
    yLineHeight: 90,
    yOffset: 220,
  },
];

const ElockParts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [stageScale, setStageScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const viewportHeight = window.innerHeight;

      const currentProgress = Math.min(
        Math.max((window.scrollY - elementTop) / (viewportHeight * 0.6), 0),
        1,
      );
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        const calculatedScale = Math.min(Math.max((width - 24) / 920, 0.36), 1);
        setStageScale(calculatedScale);
      } else {
        setStageScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ minHeight: "160vh" }}
    >
      {/* Sticky viewport container */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center px-2 sm:px-6 md:px-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, #2C2C35 0%, #000000 80%)",
        }}
      >
        <div
          className="flex flex-row items-center justify-center w-full max-w-7xl gap-2 transition-transform duration-100 ease-out origin-center"
          style={{
            transform: stageScale < 1 ? `scale(${stageScale})` : undefined,
          }}
        >
          {/* Digital Text */}
          <h1
            className={`${goldman.className} text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-neutral-300/65 select-none transition-all duration-75 shrink-0`}
            style={{
              transform: `translateX(${80 - progress * 280}px)`,
              opacity: 1 - progress,
            }}
          >
            Digital
          </h1>

          <div className="relative w-175 h-[65vh] flex items-center justify-center shrink-0">
            {/* 1. Back Part */}
            <img
              src="/elock/back-part.png"
              alt="Elock Back Part"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[-10px_20px_30px_rgba(0,0,0,0.5)] select-none"
              style={{
                transform: `translate(${-36 - progress * 420}px, ${-5 + progress * -2}px) scale(${1.17 - progress * 0.01})`,
                zIndex: 10,
              }}
            />

            {/* 2. Connector */}
            <img
              src="/elock/connector.png"
              alt="Elock Inner Part"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] select-none"
              style={{
                transform: `translate(${-15 - progress * 260}px, ${-8 + progress * 95}px) scale(0.6)`,
                opacity: Math.min(Math.max((progress - 0.15) / 0.35, 0), 1),
                zIndex: 15,
              }}
            />

            {/* 3. Locking Bolt */}
            <img
              src="/elock/locking-bolt.png"
              alt="Elock Inner Part"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] select-none"
              style={{
                transform: `translate(${-15 - progress * 170}px, ${-8 + progress * 30}px)`,
                opacity: Math.min(Math.max((progress - 0.15) / 0.35, 0), 1),
                zIndex: 15,
              }}
            />

            {/* 4. Inner Part */}
            <img
              src="/elock/inner-part.png"
              alt="Elock Inner Part"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] select-none"
              style={{
                transform: `translate(${-15 - progress * 55}px, ${-8 + progress * 30}px)`,
                opacity: Math.min(Math.max((progress - 0.15) / 0.35, 0), 1),
                zIndex: 15,
              }}
            />

            {/* 5. Protective Cover */}
            <img
              src="/elock/protective cover.png"
              alt="Elock Protective Cover"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] select-none"
              style={{
                transform: `translate(${0 + progress * 226}px, ${-5 - progress * 10}px)`,
                opacity: Math.min(Math.max((progress - 0.25) / 0.35, 0), 1),
                zIndex: 18,
              }}
            />

            {/* 6. Front Part */}
            <img
              src="/elock/front-part.png"
              alt="Elock Front Part"
              draggable={false}
              className="absolute h-full object-contain drop-shadow-[20px_25px_30px_rgba(0,0,0,0.6)] select-none"
              style={{
                transform: `translate(${16 + progress * 345}px, ${-1 - progress * 10}px) scale(${1 - progress * 0.1})`,
                zIndex: 20,
              }}
            />

            {/* Exploded View Labels */}
            {labels.map((label) => {
              const labelOpacity = Math.max((progress - 0.5) / 0.5, 0);
              const labelShift = (1 - progress) * 50;
              const xPos = label.getX(progress);

              if (label.align === "above") {
                return (
                  <div
                    key={label.name}
                    className="absolute flex flex-col items-center select-none pointer-events-none"
                    style={{
                      left: `calc(50% + ${xPos}px)`,
                      bottom: `calc(50% + ${label.yOffset + labelShift}px)`,
                      transform: "translateX(-50%)",
                      opacity: labelOpacity,
                      zIndex: 30,
                    }}
                  >
                    <span className="text-[12px] font-medium text-neutral-200 whitespace-nowrap mb-1">
                      {label.name}
                    </span>
                    <div
                      className="w-px border-l border-dashed border-white/40"
                      style={{ height: `${label.yLineHeight}px` }}
                    />
                    <div className="w-1.5 h-1.5 rounded-full bg-white border border-neutral-900" />
                  </div>
                );
              } else {
                return (
                  <div
                    key={label.name}
                    className="absolute flex flex-col items-center select-none pointer-events-none"
                    style={{
                      left: `calc(50% + ${xPos}px)`,
                      top: `calc(50% + ${label.yOffset + labelShift}px)`,
                      transform: "translateX(-50%)",
                      opacity: labelOpacity,
                      zIndex: 30,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white border border-neutral-900" />
                    <div
                      className="w-px border-l border-dashed border-white/40"
                      style={{ height: `${label.yLineHeight}px` }}
                    />
                    <span className="text-[12px] font-medium text-neutral-200 whitespace-nowrap mt-1">
                      {label.name}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          {/* Elock Text */}
          <h1
            className={`${goldman.className} text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-neutral-300/65 select-none transition-all duration-75 shrink-0`}
            style={{
              transform: `translateX(${-80 + progress * 280}px)`,
              opacity: 1 - progress,
            }}
          >
            Elock
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ElockParts;