"use client";

import { useState, useEffect, useRef } from "react";
import { Goldman, Poppins } from "next/font/google";
import { ContainerContent } from "@/constant/content";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const WorkflowCard = ({
  step,
  numStr,
  isLeft,
}: {
  step: any;
  numStr: string;
  isLeft: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openProgress, setOpenProgress] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasOpened) return;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startTop = viewportHeight * 0.85;
      const targetTop = viewportHeight * 0.65;

      const progress = Math.min(
        Math.max((startTop - rect.top) / (startTop - targetTop), 0),
        1,
      );

      if (progress >= 1) {
        setHasOpened(true);
        setOpenProgress(1);
      } else {
        setOpenProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasOpened]);

  // Card Content Component
  const cardElement = (
    <div className="relative w-full md:w-[46%] bg-[#0A0A0E] border border-white/50 p-6 flex flex-col justify-between shadow-xl transition-all duration-300">
      <div
        className="absolute bg-white/50 pointer-events-none"
        style={{
          left: "44px",
          top: "64px",
          bottom: "34px",
          width: "1px",
        }}
      />
      <div
        className="absolute bg-white/50 pointer-events-none"
        style={{
          left: "44px",
          bottom: "34px",
          width: "24px",
          height: "1px",
        }}
      />

      <div className="flex items-center text-white text-xl space-x-4 z-10 h-10 shrink-0">
        <div className="w-10 h-10 border border-white/50 bg-[#1C1C24] flex items-center justify-center shrink-0">
          <span className="font-light text-sm tracking-wider text-neutral-300">
            {numStr}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-white/50 mt-4 mb-3 shrink-0" />

      <div
        style={{ height: `${openProgress * 300}px`, opacity: openProgress }}
        className="relative overflow-hidden flex justify-center items-center shrink-0 transition-all duration-100 ease-out"
      >
        {step.videoPath && (
          <img
            src={step.videoPath}
            alt={step.title}
            className="max-h-full max-w-full object-contain"
            draggable={false}
          />
        )}
      </div>

      <div
        style={{
          height: openProgress > 0.05 ? "1px" : "0px",
          opacity: openProgress,
        }}
        className="w-full bg-white/50 mt-3 mb-4 shrink-0 transition-all"
      />

      <div className="pl-16 z-10 grow flex items-center text-left">
        <p className="text-[14px] text-neutral-400 leading-relaxed">
          {step.description.includes("Secure Access :") ? (
            <>
              {step.description.split("Secure Access :")[0]}
              <span className="block">
                Secure Access :{step.description.split("Secure Access :")[1]}
              </span>
            </>
          ) : (
            step.description
          )}
        </p>
      </div>
    </div>
  );

  // Desktop title — original (hidden on mobile)
  const titleElement = (
    <div
      className={`w-full md:w-[46%] hidden md:flex flex-col ${
        isLeft ? "items-start pl-10 text-left" : "items-end pr-10 text-right"
      } z-10`}
    >
      <h2
        className={`${goldman.className} text-2xl lg:text-4xl font-bold text-white tracking-wide leading-tight max-w-md`}
      >
        {step.title}
      </h2>
    </div>
  );

  // Mobile-only title — shows above card, centred
  const mobileTitleElement = (
    <div className="md:hidden w-full text-center pb-4 px-4">
      <h2
        className={`${goldman.className} text-xl font-bold text-white tracking-wide leading-tight`}
      >
        {step.title}
      </h2>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row w-full md:items-center md:justify-between relative"
    >
      {mobileTitleElement}
      {isLeft ? (
        <>
          {cardElement}
          {titleElement}
        </>
      ) : (
        <>
          {titleElement}
          {cardElement}
        </>
      )}
    </div>
  );
};

const WorkFlow = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${goldman.className} bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] bg-zinc-900 text-white min-h-screen px-2 py-24 relative flex flex-col items-center`}
    >
      <div className="text-center mb-10 md:mb-20 z-10 px-4">
        <h1 className="font-medium text-3xl md:text-5xl leading-tight">
          Container Security <br /> Workflow
        </h1>
        <p className={`${poppins.className} mt-5 md:mt-7 text-sm md:text-base text-neutral-300 md:text-white max-w-sm md:max-w-none mx-auto`}>
          From Securing locking to authorized unlocking, every step is
          monitored, tracked and recorded to ensure{" "}
          <br className="hidden md:block" />
          complete cargo security throughout the journey.
        </p>
      </div>

      <div className="relative w-full max-w-360 flex-1 mt-10">
        {/* Scroll line: hidden on mobile, centred on desktop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="sticky top-[32.5vh] h-[35vh] w-full hidden md:flex items-center justify-center">
            <div
              className="w-4 h-full overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
              }}
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="100%"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  style={{
                    strokeDashoffset: scrollY * 0.4,
                  }}
                />
              </svg>
            </div>

            <div className="absolute p-1 border-2 border-blue-600 bg-zinc-900 z-10">
              <div className="w-4 h-4 bg-white/90" />
            </div>
          </div>
        </div>

        <div
          className={`${poppins.className} flex flex-col gap-12 md:gap-44 relative z-10`}
        >
          {ContainerContent.map((step, idx) => {
            const numStr = String(idx + 1).padStart(2, "0");
            const isLeft = idx % 2 === 0;

            return (
              <WorkflowCard
                key={idx}
                step={step}
                numStr={numStr}
                isLeft={isLeft}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
