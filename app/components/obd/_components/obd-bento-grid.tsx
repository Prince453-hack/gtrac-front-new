"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Sliders } from "lucide-react";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const liveAlerts = [
  {
    label: "Freewheeling",
    count: 94,
    color: "bg-[#fca5a5]",
    category: "Safety",
  },
  { label: "Tired", count: 17, color: "bg-[#c4b5fd]", category: "DMS" },
  {
    label: "Main Power Removed",
    count: 16,
    color: "bg-[#fde047]",
    category: "Hardware",
  },
  {
    label: "Main Power Disconnect",
    count: 15,
    color: "bg-[#fed7aa]",
    category: "Power",
  },
  {
    label: "Fasten Seat Belt",
    count: 11,
    color: "bg-[#fda4af]",
    category: "Safety",
  },
  { label: "Phone Call", count: 7, color: "bg-[#93c5fd]", category: "DMS" },
  {
    label: "Elock Tampered",
    count: 5,
    color: "bg-[#c084fc]",
    category: "Security",
  },
  {
    label: "Covering Camera",
    count: 4,
    color: "bg-[#fed7aa]",
    category: "Camera",
  },
  { label: "Smoke", count: 4, color: "bg-[#f472b6]", category: "Cabin" },
  {
    label: "Harsh Braking",
    count: 2,
    color: "bg-[#fda4af]",
    category: "Driver",
  },
];

const duplicatedAlerts = [...liveAlerts, ...liveAlerts, ...liveAlerts];

export const ObdBentoGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % liveAlerts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-12 lg:px-20 bg-[#F6F7F9] overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading (Aceternity Style) */}
        <div className="mb-10 sm:mb-14 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${goldman.className} text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 tracking-tight leading-tight`}
          >
            Replace your Manual Fleet Inspections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${poppins.className} mt-2 text-zinc-500 text-xs sm:text-base max-w-2xl leading-relaxed`}
          >
            Everything you need for full vehicle health visibility, real-time
            CAN-bus diagnostics, driver safety scoring, and 4G cloud telematics
            in one plug-and-play unit.
          </motion.p>
        </div>

        {/* 5-Card Bento Grid Layout Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto lg:auto-rows-72.5">
          {/* Card 1: Left Tall Card (Spans 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 rounded-2xl sm:rounded-3xl bg-zinc-950 text-white p-5 sm:p-7 flex flex-col justify-between overflow-hidden relative shadow-lg group border border-zinc-800"
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
              <h3
                className={`${goldman.className} text-xl font-bold text-white mb-2`}
              >
                CAN-Bus Telematics & Diagnostics
              </h3>
              <p
                className={`${poppins.className} text-xs text-zinc-400 leading-relaxed mb-6`}
              >
                Plugged directly into the 16-pin diagnostic port, G-Trac decodes
                100+ live ECU parameters at 500 kbps without wire splicing.
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
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left min-h-65 lg:min-h-0"
          >
            <div>
              <h3
                className={`${goldman.className} text-base font-bold text-zinc-900 leading-tight mb-1`}
              >
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
                <span
                  className={`${goldman.className} absolute text-xs font-bold text-zinc-800`}
                >
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
            className="rounded-2xl sm:rounded-3xl bg-zinc-950 text-white p-5 sm:p-7 flex flex-col justify-between border border-zinc-800 shadow-sm relative overflow-hidden group text-left min-h-65 lg:min-h-0"
          >
            {/* Header */}
            <div className="relative z-10">
              <h3
                className={`${goldman.className} text-base font-bold text-white mb-1`}
              >
                4G LTE-M & Multi-GNSS Cloud Sync
              </h3>
              <p className={`${poppins.className} text-xs text-zinc-400`}>
                Sub-2.5m satellite position tracking with zero dead zones.
              </p>
            </div>

            {/* Dedicated Map / Radar Visual Container */}
            <div className="relative w-full h-34 sm:h-36 my-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 overflow-hidden flex items-center justify-center">
              {/* Radar Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-size-[14px_14px] opacity-40 pointer-events-none" />

              {/* Concentric Radar Circles */}
              <div className="absolute w-44 h-44 rounded-full border border-zinc-800/80 pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-zinc-800/60 pointer-events-none" />

              {/* Status Tag */}
              <div className="absolute top-2.5 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-[9px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE GNSS
              </div>

              {/* Pin 1: TRUCK */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-sky-300 font-semibold">TRUCK #104</span>
              </div>

              {/* Pin 2: CAR */}
              <div className="absolute top-12 right-4 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-300 font-semibold">CAR #088</span>
                <span className="text-zinc-500 text-[9px]">62km/h</span>
              </div>

              {/* Pin 3: VAN */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-semibold">VAN #209</span>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
              <span>LATENCY: &lt; 0.5s</span>
              <span className="text-sky-400 font-semibold">
                AES-256 ENCRYPTED
              </span>
            </div>
          </motion.div>

          {/* Card 4: Bottom Middle Card (Live Fleet & Behavior Alerts Stream) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left min-h-75"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3
                  className={`${goldman.className} text-base font-bold text-zinc-900`}
                >
                  Live Fleet &amp; Behavior Alerts
                </h3>
                <span className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  STREAMING
                </span>
              </div>
              <p className={`${poppins.className} text-xs text-zinc-500`}>
                Live anomaly triggers &amp; driver behavior events arriving in
                real time
              </p>
            </div>

            {/* Smooth Sliding Live Alert Stream Feed (Clean 4-Corner Rounded Cards, No Top Shadow) */}
            <div className="relative h-48.75 overflow-hidden my-3 pt-1 px-1 pb-1">
              <div
                className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                style={{ transform: `translateY(-${activeIndex * 62}px)` }}
              >
                {duplicatedAlerts.map((alert, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <div
                      key={`${alert.label}-${idx}`}
                      className={`h-13.5 mb-2 px-3.5 py-2.5 rounded-2xl flex items-center justify-between transition-all duration-500 shrink-0 ${
                        isCurrent
                          ? "bg-zinc-900 text-white shadow-md border border-zinc-800 scale-[1.01]"
                          : "bg-zinc-50 text-zinc-800 border border-zinc-200/80 opacity-70 scale-[0.98]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${alert.color} ${
                            isCurrent ? "animate-pulse" : ""
                          }`}
                        />
                        <div className="flex flex-col truncate">
                          <span
                            className={`text-xs font-semibold tracking-tight truncate ${
                              isCurrent ? "text-white" : "text-zinc-900"
                            }`}
                          >
                            {alert.label}
                          </span>
                          <span
                            className={`text-[10px] font-mono ${
                              isCurrent ? "text-zinc-400" : "text-zinc-500"
                            }`}
                          >
                            {alert.category} •{" "}
                            {isCurrent ? "Just now" : "Live stream"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-3">
                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl ${
                            isCurrent
                              ? "bg-zinc-800 text-amber-400 border border-zinc-700"
                              : "bg-white text-zinc-700 border border-zinc-200 shadow-2xs"
                          }`}
                        >
                          {alert.count}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>AUTO-INGESTION: ACTIVE</span>
              <span className="text-zinc-600 font-medium">
                11 CHANNELS MONITORED
              </span>
            </div>
          </motion.div>

          {/* Card 5: Bottom Right Card (Edge-AI Hardware, Bosch IMU Chip) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 flex flex-col justify-between border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group text-left min-h-65 lg:min-h-0"
          >
            {/* Background Circuit Traces */}
            <div className="absolute right-4 bottom-4 w-36 h-36 opacity-30 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-amber-500"
                stroke="currentColor"
                fill="none"
              >
                <path d="M 10 30 H 40 V 60 H 90" strokeWidth="2" />
                <path d="M 20 80 H 60 V 50 H 90" strokeWidth="2" />
                <circle cx="10" cy="30" r="3" fill="currentColor" />
                <circle cx="20" cy="80" r="3" fill="currentColor" />
                <circle cx="90" cy="60" r="3" fill="currentColor" />
              </svg>
            </div>

            <div>
              <h3
                className={`${goldman.className} text-base font-bold text-zinc-900 mb-1`}
              >
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
