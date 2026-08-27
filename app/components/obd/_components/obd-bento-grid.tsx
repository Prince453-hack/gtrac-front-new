"use client";

import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Gauge,
  Radio,
  Search,
  Zap,
  Sparkles,
  CheckCircle2,
  Sliders,
  Globe,
  Bell,
  MapPin,
  Compass,
  ArrowRight,
} from "lucide-react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const ObdBentoGrid = () => {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#F6F7F9] overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading (Aceternity Style) */}
        <div className="mb-14 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${goldman.className} text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight leading-tight`}
          >
            Replace your Manual Fleet Inspections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${poppins.className} mt-2 text-zinc-500 text-sm sm:text-base max-w-2xl leading-relaxed`}
          >
            Everything you need for full vehicle health visibility, real-time CAN-bus diagnostics, driver safety scoring, and 4G cloud telematics in one plug-and-play unit.
          </motion.p>
        </div>

        {/* 5-Card Bento Grid Layout Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-72.5">
          {/* Card 1: Left Tall Card (Spans 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 rounded-3xl bg-zinc-950 text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-lg group border border-zinc-800"
          >
            {/* Top Browser / Device Window Preview */}
            <div className="w-full bg-zinc-900/90 rounded-2xl p-4 border border-zinc-800 shadow-inner flex flex-col gap-3 relative overflow-hidden">
              {/* Window Dots */}
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <div className="ml-auto w-24 h-1.5 rounded-full bg-zinc-800" />
              </div>

              {/* Inner Device Graphic Stage */}
              <div className="w-full h-44 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] bg-size-[12px_12px] opacity-25" />
                <Image
                  src="/obd.png"
                  alt="OBD Telematics"
                  width={200}
                  height={240}
                  draggable={false}
                  className="w-32 h-auto object-contain drop-shadow-[0_15px_25px_rgba(2,132,199,0.35)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-6 flex flex-col items-start text-left">
              <h3 className={`${goldman.className} text-xl font-bold text-white mb-2`}>
                CAN-Bus Telematics & Diagnostics
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-400 leading-relaxed mb-6`}>
                Plugged directly into the 16-pin diagnostic port, G-Trac decodes 100+ live ECU parameters at 500 kbps without wire splicing.
              </p>

              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-zinc-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-sm">
                <Sliders className="w-3.5 h-3.5" />
                <span>Live Telemetry</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Top Middle Card (Health Progress & Notification Badge) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left"
          >
            <div>
              <h3 className={`${goldman.className} text-base font-bold text-zinc-900 leading-tight mb-1`}>
                Live Health & Diagnostics Tracking
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-500`}>
                Continuous background DTC interrogation
              </p>
            </div>

            {/* Circular Gauge Graphic & Floating Pill */}
            <div className="relative w-full h-32 flex flex-col items-center justify-center my-auto">
              {/* Doughnut Graphic */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-zinc-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-amber-300"
                    strokeDasharray="88, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className={`${goldman.className} absolute text-xs font-bold text-zinc-800`}>
                  99.8%
                </span>
              </div>

              {/* Floating Notification Pill */}
              <div className="absolute -bottom-2 w-full max-w-55 p-2 rounded-xl bg-white border border-zinc-200/80 shadow-md flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-zinc-400 block uppercase">
                    notification
                  </span>
                  <span className="text-[11px] font-bold text-zinc-800 block leading-tight">
                    0 Fault Codes • Clear
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Top Right Card (Global Fleet Tracking & Map) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-zinc-950 text-white p-6 sm:p-7 flex flex-col justify-between border border-zinc-800 shadow-sm relative overflow-hidden group text-left"
          >
            {/* World Map Dotted Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-size-[16px_16px] opacity-40 pointer-events-none" />

            {/* Glowing Map Pins */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-12 left-16 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-[9px] font-mono text-sky-300">TRUCK #104</span>
              </div>
              <div className="absolute bottom-12 right-20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-300">VAN #209</span>
              </div>
              <div className="absolute top-20 right-14 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[9px] font-mono text-amber-300">CAR #088</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className={`${goldman.className} text-base font-bold text-white mb-1`}>
                4G LTE-M & Multi-GNSS Cloud Sync
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-400`}>
                Sub-2.5m satellite position tracking with zero dead zones.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
              <span>LATENCY: &lt; 0.5s</span>
              <span className="text-sky-400 font-semibold">AES-256 ENCRYPTED</span>
            </div>
          </motion.div>

          {/* Card 4: Bottom Middle Card (Direct Parameter Search Bar Simulation) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left"
          >
            <div>
              <h3 className={`${goldman.className} text-base font-bold text-zinc-900 mb-1`}>
                Instant Parameter Query Engine
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-500`}>
                Search and stream live ECU sensors in real time
              </p>
            </div>

            {/* Google-like search bar simulation */}
            <div className="w-full flex flex-col gap-2.5 my-auto">
              <div className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2 shadow-inner">
                <Search className="w-4 h-4 text-zinc-400" />
                <span className="text-xs font-mono text-zinc-600 truncate">
                  Query: Engine RPM, Speed, Fuel Level...
                </span>
              </div>

              {/* Query Result Card */}
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block leading-tight font-mono">
                      ISO 15765-4 CAN
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Baud Rate: 500 kbps • 29-bit ID
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  STREAMING
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Bottom Right Card (Edge-AI Hardware, Bosch IMU Chip) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left"
          >
            {/* Background Circuit Traces */}
            <div className="absolute right-4 bottom-4 w-36 h-36 opacity-30 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500" stroke="currentColor" fill="none">
                <path d="M 10 30 H 40 V 60 H 90" strokeWidth="2" />
                <path d="M 20 80 H 60 V 50 H 90" strokeWidth="2" />
                <circle cx="10" cy="30" r="3" fill="currentColor" />
                <circle cx="20" cy="80" r="3" fill="currentColor" />
                <circle cx="90" cy="60" r="3" fill="currentColor" />
              </svg>
            </div>

            <div>
              <h3 className={`${goldman.className} text-base font-bold text-zinc-900 mb-1`}>
                6-Axis Motion AI & Edge Sensors
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-500`}>
                Bosch accelerometer & gyro detecting harsh driving
              </p>
            </div>

            {/* Glowing Peach/Amber Chip Graphic (from screenshot) */}
            <div className="relative w-full flex items-center justify-between mt-auto pt-2">
              <div className="flex flex-col gap-1 text-[11px] font-mono text-zinc-500">
                <span>• 100Hz Motion Sampling</span>
                <span>• Harsh Braking / Accel</span>
                <span>• Impact Crash Detection</span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-300 via-orange-400 to-amber-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                  <Cpu className="w-8 h-8 drop-shadow-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ObdBentoGrid;
