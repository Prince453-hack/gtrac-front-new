"use client";

import { useEffect, useRef, useState } from "react";
import { Goldman, Poppins } from "next/font/google";
import { analyzerWorkflowSteps, WorkflowStep } from "@/constant/breath-analyzer-content";
import {
  CheckCircle2,
  Wind,
  Cpu,
  Radio,
  UserCheck,
  Unlock,
} from "lucide-react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const FrameCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-emerald-400" />
    <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-emerald-400" />
    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-emerald-400" />
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-emerald-400" />
  </>
);

const StepVisualizer = ({ step }: { step: WorkflowStep }) => {
  switch (step.simulationType) {
    case "auth":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-between relative bg-linear-to-br from-sky-50/70 via-white to-emerald-50/40">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-600 shadow-xs">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-sm font-bold text-zinc-900 block font-mono">
                  DRIVER ID: #GT-88492
                </span>
                <span className="text-xs text-zinc-500">Route 104 • Shift Active</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 font-mono border border-sky-100">
              BLE PAIRED
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-auto">
            <div className="p-3 rounded-xl bg-white border border-sky-100/70 text-left shadow-xs">
              <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-0.5">Sensor Core</span>
              <span className="text-xs font-bold text-sky-600">Preheated (37°C)</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-emerald-100/70 text-left shadow-xs">
              <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-0.5">Facial ID Check</span>
              <span className="text-xs font-bold text-emerald-600">Verified Match</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-100">
            <span>Status: Ready for Sample</span>
            <span className="text-sky-600 font-semibold">Latency: 0.8s</span>
          </div>
        </div>
      );

    case "blow":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-between relative bg-linear-to-br from-emerald-50/60 via-white to-emerald-50/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-xs">
                <Wind className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-sm font-bold text-zinc-900 block font-mono">Continuous Exhalation</span>
                <span className="text-xs text-zinc-500">Deep-Lung Air Capture</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono border border-emerald-100 animate-pulse">
              BLOWING...
            </span>
          </div>

          <div className="flex items-center gap-1.5 h-14 my-auto px-2">
            {[35, 60, 85, 95, 90, 92, 96, 94, 90, 88, 75, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-400 rounded-full transition-all duration-300 shadow-xs"
                style={{ height: `${h}%`, opacity: 0.35 + (i / 12) * 0.65 }}
              />
            ))}
          </div>

          <div className="flex justify-between items-center text-xs text-zinc-600 font-mono bg-white/90 p-2.5 rounded-xl border border-emerald-100/70 shadow-xs">
            <span>Air Pressure: 4.5 kPa (Pass)</span>
            <span className="text-emerald-600 font-semibold">Volume: 1.2L Captured</span>
          </div>
        </div>
      );

    case "analyze":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-between relative bg-linear-to-br from-indigo-50/60 via-white to-emerald-50/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 shadow-xs">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-sm font-bold text-zinc-900 block font-mono">Electrochemical Reaction</span>
                <span className="text-xs text-zinc-500">Platinum Fuel-Cell Core</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-mono border border-indigo-100">
              EVALUATING
            </span>
          </div>

          <div className="flex items-center justify-center gap-8 my-auto">
            <div className="text-center">
              <span className="text-[10px] text-zinc-400 block font-mono">Ethanol Molecules</span>
              <span className="text-base font-bold text-indigo-600 font-mono">C₂H₅OH = 0</span>
            </div>
            <div className="h-10 w-px bg-indigo-100" />
            <div className="text-center">
              <span className="text-[10px] text-zinc-400 block font-mono">Current Output</span>
              <span className="text-base font-bold text-indigo-600 font-mono">0.000 μA</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-center">
            <span className="text-xs font-bold text-indigo-700 font-mono">
              RESULT: 0.000% BAC (Zero Alcohol Detected)
            </span>
          </div>
        </div>
      );

    case "release":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-between relative bg-linear-to-br from-teal-50/60 via-white to-emerald-50/40">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-xs">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <span className="text-sm font-bold text-zinc-900 block font-mono">Cloud Sync & Starter Signal</span>
                <span className="text-xs text-zinc-500">256-Bit Encrypted Log</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono border border-emerald-100">
              IMMOBILIZER FREE
            </span>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs my-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <Unlock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-900 block font-mono">STARTER RELAY: UNLOCKED</span>
                <span className="text-[11px] text-emerald-600">Engine Ignition Enabled</span>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>

          <div className="flex justify-between text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-100">
            <span>Fleet Dashboard: Updated</span>
            <span className="text-emerald-600 font-semibold">Response: 0.12s</span>
          </div>
        </div>
      );
  }
};

export const TestingWorkflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerViewport = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - centerViewport);

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

  const totalItems = analyzerWorkflowSteps.length;
  const dotPosition =
    totalItems > 1 ? (activeIndex / (totalItems - 1)) * 80 + 10 : 50;

  return (
    <div
      className="bg-white min-h-screen py-24 px-6 md:px-20 relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5FAF7 50%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        {/* Left Column (Sticky Visualizer + Title) */}
        <div className="w-full lg:w-[48%] lg:sticky lg:top-[15vh] flex flex-col justify-between h-[70vh] gap-8">
          <div className="relative w-full h-[42vh] p-1.5 flex items-center justify-center">
            <FrameCorners />

            <div className="w-full h-full border border-emerald-400/25 p-1 bg-emerald-50/15 relative overflow-hidden flex items-center justify-center rounded-sm">
              {analyzerWorkflowSteps.map((step, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  >
                    <StepVisualizer step={step} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fixed Section Header */}
          <div className="flex flex-col space-y-4 text-left">
            <h2
              className={`${goldman.className} text-4xl font-base text-zinc-800 tracking-wide uppercase leading-tight`}
            >
              Breath Screening <br /> & Interlock Workflow
            </h2>
            <p
              className={`${poppins.className} max-w-lg text-zinc-500 text-sm leading-relaxed`}
            >
              From continuous deep-lung exhalation to instant fuel-cell analysis and engine starter release, every step is monitored and logged in real time.
            </p>
          </div>
        </div>

        {/* Center Sticky Scroll Indicator Line */}
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
              className="absolute top-0 left-0 w-full bg-linear-to-t from-emerald-400 to-transparent transition-all duration-500 ease-out"
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
              <div className="absolute inset-0 border border-emerald-400/40 bg-emerald-400/15 animate-pulse rounded-sm" />
              <div className="size-5 bg-emerald-400 relative z-10 rounded-xs" />
            </div>
          </div>
        </div>

        {/* Right Scrollable Steps (1, 2, 3, 4 scrolling through) */}
        <div className="w-full lg:w-[42%] flex flex-col space-y-[45vh] py-[25vh]">
          {analyzerWorkflowSteps.map(({ title, description, detailPoints }, index) => {
            const isActive = activeIndex === index;
            const numStr = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-500 ease-in-out relative p-7 shadow-sm rounded-lg ${
                  isActive ? "opacity-100 scale-100" : "opacity-25 scale-95"
                }`}
                style={{
                  background:
                    "linear-gradient(89.76deg, rgba(214, 214, 214, 0.22) -53.4%, #FFFFFF 44.05%, rgba(210, 210, 210, 0) 147.29%)",
                }}
              >
                {isActive && <FrameCorners />}

                <div className="flex flex-col space-y-6 text-left">
                  <div
                    className={`${goldman.className} text-5xl font-semibold text-zinc-300 tracking-wider flex items-center space-x-4`}
                  >
                    <div className="size-5 bg-zinc-300 rounded-sm" />
                    <h1>{numStr}</h1>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <h2
                      className={`${goldman.className} text-xl font-semibold text-zinc-800`}
                    >
                      {title}
                    </h2>
                    <p
                      className={`${poppins.className} text-sm text-gray-500 leading-relaxed font-light`}
                    >
                      {description}
                    </p>

                    <div className="flex flex-col space-y-2 pt-2 border-t border-zinc-100">
                      {detailPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className={`${poppins.className} text-xs text-zinc-600 leading-tight`}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default TestingWorkflow;
