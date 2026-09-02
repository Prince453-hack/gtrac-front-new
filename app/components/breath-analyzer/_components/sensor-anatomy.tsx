"use client";

import { useState } from "react";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
} from "lucide-react";
import { analyzerAnatomyParts } from "@/constant/breath-analyzer-content";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const SensorAnatomy = () => {
  const [activePartId, setActivePartId] = useState<string | null>(null);

  const leftParts = analyzerAnatomyParts.filter((p) => p.align === "left");
  const rightParts = analyzerAnatomyParts.filter((p) => p.align === "right");

  return (
    <div
      className="relative w-full py-16 sm:py-28 px-4 sm:px-12 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F3FAF6 50%, #EBF6F1 100%)",
      }}
    >
      {/* Background Soft Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative max-w-4xl mx-auto text-center mb-10 sm:mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 mb-3 sm:mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span
            className={`${poppins.className} text-[11px] font-semibold uppercase tracking-wider text-emerald-700`}
          >
            Hardware Architecture
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${goldman.className} text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 tracking-tight leading-tight`}
        >
          Anatomy of a High-Precision <br />
          <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Fuel-Cell Breathalyzer
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${poppins.className} text-zinc-600 text-xs sm:text-base mt-3 max-w-xl mx-auto leading-relaxed`}
        >
          Engineered with military-grade fuel cells, dual anti-cheat pressure sensors, and wireless engine interlock circuits for demanding commercial fleet environments.
        </motion.p>
      </div>

      {/* Interactive Anatomy Stage */}
      <div className="relative w-full max-w-7xl mx-auto min-h-0 lg:min-h-175 flex flex-col lg:flex-row items-center justify-center my-4 sm:my-6 z-10">
        {/* SVG Connector Lines (Hidden on small screens) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          {/* Left Line 1: Mouthpiece */}
          <path
            d="M 280 120 C 370 120, 430 140, 500 130"
            fill="none"
            stroke={activePartId === "mouthpiece" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "mouthpiece" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />
          {/* Left Line 2: OLED Display */}
          <path
            d="M 280 325 C 380 325, 430 330, 500 325"
            fill="none"
            stroke={activePartId === "display" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "display" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />
          {/* Left Line 3: Wireless BLE */}
          <path
            d="M 280 530 C 380 530, 440 500, 500 480"
            fill="none"
            stroke={activePartId === "wireless" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "wireless" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />

          {/* Right Line 1: Fuel Cell */}
          <path
            d="M 720 120 C 630 120, 570 180, 500 210"
            fill="none"
            stroke={activePartId === "fuel-cell" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "fuel-cell" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />
          {/* Right Line 2: Pressure Sensor */}
          <path
            d="M 720 325 C 630 325, 570 380, 500 410"
            fill="none"
            stroke={activePartId === "pressure" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "pressure" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />
          {/* Right Line 3: Battery */}
          <path
            d="M 720 530 C 630 530, 570 560, 500 560"
            fill="none"
            stroke={activePartId === "battery" ? "#10B981" : "#6EE7B7"}
            strokeWidth={activePartId === "battery" ? "2" : "1.5"}
            strokeDasharray="5 5"
            className="transition-all duration-300"
          />
        </svg>

        {/* Center Device Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center justify-center my-4 lg:my-0"
        >
          <div className="relative w-48 sm:w-64 md:w-80 h-72 sm:h-96 lg:h-120 flex items-center justify-center">
            <Image
              src="/breath-analyzer.png"
              alt="Breathalyzer Anatomy"
              width={340}
              height={520}
              priority
              draggable={false}
              className="object-contain w-full h-full drop-shadow-[0_20px_40px_rgba(52,211,153,0.18)] select-none"
            />
          </div>
        </motion.div>

        {/* Mobile/Tablet: 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-6 lg:hidden z-30">
          {analyzerAnatomyParts.map((part, idx) => {
            const Icon = part.icon;
            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 rounded-2xl border text-left bg-white/90 border-emerald-100/80 shadow-xs backdrop-blur-md"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-emerald-700 tracking-wider font-mono uppercase block">
                      {part.tag}
                    </span>
                    <h3 className={`${goldman.className} text-sm font-semibold text-zinc-900 leading-tight`}>
                      {part.title}
                    </h3>
                  </div>
                </div>
                <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                  {part.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Left Side Callout Cards (Original) */}
        <div className="hidden lg:flex absolute left-[4%] xl:left-[8%] top-0 bottom-0 flex-col justify-between py-6 gap-6 w-[28%] z-30">
          {leftParts.map((part, idx) => {
            const Icon = part.icon;
            const isHovered = activePartId === part.id;

            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setActivePartId(part.id)}
                onMouseLeave={() => setActivePartId(null)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 backdrop-blur-md ${
                  isHovered
                    ? "bg-white border-emerald-300 shadow-md scale-102 ring-2 ring-emerald-400/20"
                    : "bg-white/80 border-emerald-100/70 shadow-xs hover:bg-white hover:border-emerald-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isHovered
                        ? "bg-emerald-500 text-white"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 tracking-wider font-mono uppercase block">
                      {part.tag}
                    </span>
                    <h3
                      className={`${goldman.className} text-base font-semibold text-zinc-900 leading-tight`}
                    >
                      {part.title}
                    </h3>
                  </div>
                </div>

                <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                  {part.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Right Side Callout Cards (Original) */}
        <div className="hidden lg:flex absolute right-[4%] xl:right-[8%] top-0 bottom-0 flex-col justify-between py-6 gap-6 w-[28%] z-30">
          {rightParts.map((part, idx) => {
            const Icon = part.icon;
            const isHovered = activePartId === part.id;

            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setActivePartId(part.id)}
                onMouseLeave={() => setActivePartId(null)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 backdrop-blur-md ${
                  isHovered
                    ? "bg-white border-emerald-300 shadow-md scale-102 ring-2 ring-emerald-400/20"
                    : "bg-white/80 border-emerald-100/70 shadow-xs hover:bg-white hover:border-emerald-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isHovered
                        ? "bg-emerald-500 text-white"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 tracking-wider font-mono uppercase block">
                      {part.tag}
                    </span>
                    <h3
                      className={`${goldman.className} text-base font-semibold text-zinc-900 leading-tight`}
                    >
                      {part.title}
                    </h3>
                  </div>
                </div>

                <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                  {part.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SensorAnatomy;
