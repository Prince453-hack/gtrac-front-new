"use client";

import { useEffect, useRef, useState } from "react";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { safetyHighlights } from "@/constant/breath-analyzer-content";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const AnalyzerHeroScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((window.scrollY - elementTop) / (viewportHeight * 0.9), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5FAF7 0%, #FFFFFF 50%, #EDF6F2 100%)",
        minHeight: "130vh",
      }}
    >
      {/* Background Watermark Typography (Translates with scroll) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div
          className={`${goldman.className} absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-[14vw] font-bold text-emerald-950/3 tracking-widest uppercase transition-transform duration-75`}
          style={{
            transform: `translateX(calc(-50% + ${scrollProgress * 200 - 100}px))`,
          }}
        >
          Sobriety
        </div>
        <div
          className={`${goldman.className} absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[12vw] font-bold text-teal-900/2.5 tracking-widest uppercase transition-transform duration-75`}
          style={{
            transform: `translate(calc(-50% - ${scrollProgress * 200 - 100}px), -50%)`,
          }}
        >
          Precision
        </div>

        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-120 h-120 bg-teal-100/30 rounded-full blur-3xl" />
      </div>

      {/* Sticky Main Stage */}
      <div className="sticky top-0 min-h-screen w-full flex flex-col justify-between items-center py-12 px-6 sm:px-12 lg:px-20 z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${goldman.className} text-3xl sm:text-5xl lg:text-6xl font-medium text-zinc-900 leading-tight tracking-tight`}
          >
            Smart Breath Analyzer <br />
            <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              & Vehicle Interlock
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`${poppins.className} mt-3 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed`}
          >
            Instant pre-trip alcohol verification for commercial fleets. High-precision
            platinum sensor technology wirelessly synced to cloud dashboards and vehicle immobilizers.
          </motion.p>
        </div>

        {/* Central Display: 3-Column Balanced Layout */}
        <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-4 text-left order-2 lg:order-1"
          >
            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className={`${goldman.className} text-lg font-medium text-zinc-800`}>
                  Zero Cross-Sensitivity
                </h2>
              </div>
              <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                Unlike semiconductor units, platinum fuel cells respond exclusively to ethyl alcohol, ignoring food fragrances, ketones, and environmental gases.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <h2 className={`${goldman.className} text-lg font-medium text-zinc-800`}>
                  Real-Time Fleet Gateway
                </h2>
              </div>
              <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                Instant cloud verification with GPS tags and driver biometric stamps logs every test before ignition keys are enabled.
              </p>
            </div>
          </motion.div>

          {/* Center Device Graphic */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2">
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-emerald-100/20 blur-2xl pointer-events-none" />

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <Image
                src="/breath-analyzer.png"
                alt="G-Trac Breath Analyzer"
                width={360}
                height={520}
                priority
                draggable={false}
                className="w-56 sm:w-64 md:w-72 h-auto object-contain drop-shadow-[0_20px_35px_rgba(52,211,153,0.16)]"
              />
            </motion.div>
          </div>

          {/* Right Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-4 text-left order-3"
          >
            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className={`${goldman.className} text-lg font-medium text-zinc-800`}>
                  Engine Interlock Relay
                </h2>
              </div>
              <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                Direct starter relay interlock blocks vehicle ignition until a verified 0.00% BAC sobriety reading is achieved and logged.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100/70 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className={`${goldman.className} text-lg font-medium text-zinc-800`}>
                  Anti-Tamper & Compliance
                </h2>
              </div>
              <p className={`${poppins.className} text-xs text-zinc-600 leading-relaxed`}>
                Continuous volume monitoring and dual pressure sensors prevent false blows, meeting legal compliance and insurance audit requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Metric Highlights */}
        <div className="w-full max-w-6xl mx-auto pt-6 border-t border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {safetyHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/90 shadow-xs flex flex-col text-left hover:bg-white transition-colors"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`${goldman.className} text-2xl sm:text-3xl font-bold text-zinc-900`}>
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-emerald-600 uppercase font-mono">
                  {item.unit}
                </span>
              </div>
              <h3 className={`${goldman.className} text-xs font-semibold text-zinc-800 mb-1`}>
                {item.label}
              </h3>
              <p className={`${poppins.className} text-[11px] text-zinc-500 leading-tight`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyzerHeroScroll;
