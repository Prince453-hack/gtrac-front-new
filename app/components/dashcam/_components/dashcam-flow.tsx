"use client";

import { DashcamContent } from "@/constant/content";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const goldmam = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const FrameCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-blue-500" />
    <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-blue-500" />
    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-blue-500" />
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-blue-500" />
  </>
);

const DashcamFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY =
        window.innerWidth < 1024
          ? window.innerHeight * 0.65
          : window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - triggerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = DashcamContent.length;
  const dotPosition =
    totalItems > 1 ? (activeIndex / (totalItems - 1)) * 80 + 10 : 50;

  return (
    <div className="bg-white min-h-screen py-14 sm:py-20 lg:py-24 px-4 sm:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16">
        {/* Left / Top Column: Sticky Video Display + Header */}
        <div className="w-full lg:w-[48%] sticky top-14 sm:top-16 lg:top-[15vh] bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none z-30 flex flex-col justify-between h-auto lg:h-[70vh] gap-3 sm:gap-6 lg:gap-8 pt-2 pb-3 lg:py-0 border-b border-zinc-100 lg:border-none">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-left">
            <h1
              className={`${goldmam.className} text-2xl sm:text-3xl lg:text-4xl font-base text-zinc-800 tracking-wide uppercase leading-tight`}
            >
              Container Security <br className="hidden sm:inline" /> Workflow
            </h1>
            <p
              className={`${poppins.className} max-w-lg text-zinc-500 text-xs sm:text-sm leading-relaxed hidden sm:block`}
            >
              From secure locking to authorized unlocking, every step is
              monitored, tracked, and recorded to ensure complete cargo security
              throughout the journey.
            </p>
          </div>

          {/* Sticky Video/GIF Display */}
          <div className="relative w-full h-48 sm:h-64 lg:h-[42vh] p-1.5 flex items-center justify-center">
            <FrameCorners />

            <div className="w-full h-full border border-blue-500/20 p-1 bg-black/5 relative overflow-hidden flex items-center justify-center rounded-sm">
              {DashcamContent.map((step, idx) => {
                const isActive = activeIndex === idx;
                const isMp4 = step.videoPath.endsWith(".mp4");

                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  >
                    {isMp4 ? (
                      <video
                        src={step.videoPath}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <Image
                        src={step.videoPath}
                        alt={step.title}
                        fill
                        className="object-contain p-2"
                        draggable={false}
                        priority={idx === 0}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center Sticky Scroll Bar (Desktop only) */}
        <div className="hidden lg:flex flex-col items-center lg:sticky lg:top-[15vh] h-[70vh] w-16 relative select-none pointer-events-none">
          <div
            className="w-1.5 h-full bg-zinc-200/80 relative rounded-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full bg-linear-to-t from-blue-500 to-transparent transition-all duration-500 ease-out"
              style={{ height: `${dotPosition}%` }}
            />
          </div>

          <div
            className="absolute z-20 flex items-center justify-center transition-all duration-500 ease-out"
            style={{
              top: `${dotPosition}%`,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-9 h-9 relative flex items-center justify-center">
              <div className="absolute inset-0 border border-blue-500/40 bg-blue-500/15 animate-pulse" />
              <div className="size-5 bg-blue-500 relative z-10" />
            </div>
          </div>
        </div>

        {/* Right / Scrolling Content Cards */}
        <div className="w-full lg:w-[42%] flex flex-col space-y-8 sm:space-y-12 lg:space-y-[45vh] pt-4 sm:pt-8 lg:py-[25vh] pb-12">
          {DashcamContent.map(({ title, description }, index) => {
            const isActive = activeIndex === index;
            const numStr = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-500 ease-in-out relative p-5 sm:p-7 shadow-sm rounded-xl text-left ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-98 lg:opacity-25 lg:scale-95"
                }`}
                style={{
                  background:
                    "linear-gradient(89.76deg, rgba(214, 214, 214, 0.22) -53.4%, #FFFFFF 44.05%, rgba(210, 210, 210, 0) 147.29%)",
                }}
              >
                {isActive && <FrameCorners />}

                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <div
                    className={`${goldmam.className} text-3xl sm:text-5xl font-semibold text-zinc-300 tracking-wider flex items-center space-x-3 sm:space-x-4`}
                  >
                    <div className="size-4 sm:size-5 bg-zinc-300 rounded-sm" />
                    <h1>{numStr}</h1>
                  </div>

                  <div className="flex flex-col space-y-2 sm:space-y-4">
                    <h2
                      className={`${goldmam.className} text-lg sm:text-xl font-semibold text-zinc-800`}
                    >
                      {title}
                    </h2>
                    <p
                      className={`${poppins.className} text-xs sm:text-sm text-gray-500 leading-relaxed font-light`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashcamFlow;
