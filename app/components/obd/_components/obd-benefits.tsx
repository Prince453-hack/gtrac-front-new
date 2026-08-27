"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Fuel,
  Radio,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Goldman, Outfit, Poppins } from "next/font/google";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const leftBenefits = [
  {
    icon: Zap,
    title: "Deploy Instantly",
    desc: "Zero wire slicing or mechanic tools required. Push into any standard 16-pin J1962 port in under 10 seconds.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Telemetry",
    desc: "Decode 100+ live CAN-bus parameters at 500 kbps microsecond speeds without dashboard latency.",
  },
  {
    icon: Fuel,
    title: "Cut Fuel Waste",
    desc: "Identify excessive engine idling, rapid throttle spikes, and optimize route fuel economy by up to 22%.",
  },
];

const rightBenefits = [
  {
    icon: Sparkles,
    title: "Edge-AI Intelligence",
    desc: "Onboard 6-axis Bosch accelerometer automatically scores driver safety and flags harsh road maneuvers.",
  },
  {
    icon: ShieldCheck,
    title: "Prevent Breakdowns",
    desc: "Real-time DTC engine fault code scanning alerts fleet mechanics before minor errors become costly failures.",
  },
  {
    icon: Rocket,
    title: "Automate Everything",
    desc: "Automate IFTA mileage tracking, live GPS location stamps, maintenance triggers, and enterprise reports.",
  },
];

export const ObdBenefits = () => {
  return (
    <section
      className={`${outfit.className} relative w-full py-28 px-6 sm:px-12 lg:px-20 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200`}
    >
      {/* Background Subtle Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header (Matching Benefits Screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-widest block mb-2.5"
          >
            Benefits
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${goldman.className} text-3xl sm:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-3`}
          >
            Making Fleets 10x Smarter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${poppins.className} text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto`}
          >
            We empower fleet managers and technical operations to monitor,
            diagnose, and automate vehicle telematics workflows visually.
          </motion.p>
        </div>

        {/* 3-Column Layout: Left 3 Cards + Center Light Stage + Right 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: 3 Benefit Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {leftBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-start text-left group"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    className={`${goldman.className} text-base font-bold text-zinc-900 mb-1.5 leading-tight`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${poppins.className} text-xs text-zinc-500 leading-relaxed`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Tall Light Interactive Feature Stage */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl bg-[#FAFAFA] text-zinc-900 p-6 sm:p-7 flex flex-col justify-between border border-zinc-200/90 shadow-sm overflow-hidden relative"
          >
            {/* Top Area: Connected Gateway Diagram */}
            <div className="w-full flex flex-col items-center py-4 relative">
              {/* Background Cross Wire Lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 300 160"
                preserveAspectRatio="none"
              >
                <line
                  x1="60"
                  y1="50"
                  x2="150"
                  y2="50"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="240"
                  y1="50"
                  x2="150"
                  y2="50"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="150"
                  y1="50"
                  x2="150"
                  y2="130"
                  stroke="#fb7185"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Node Icons */}
              <div className="relative z-10 w-full flex items-center justify-between px-4 mb-8">
                {/* Left Node: Engine ECU */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-sky-200 text-sky-600 flex items-center justify-center shadow-xs">
                  <Cpu className="w-5 h-5" />
                </div>

                {/* Center Node: G-Trac Gateway */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-rose-300 text-rose-600 shadow-md shadow-rose-100 flex items-center justify-center">
                  <Zap className="w-7 h-7 animate-pulse" />
                </div>

                {/* Right Node: 4G Cloud */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs">
                  <Radio className="w-5 h-5" />
                </div>
              </div>

              {/* Connected Status Pill */}
              <div className="relative z-10 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-mono text-sky-700 font-semibold shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                <span>Connected</span>
              </div>
            </div>

            {/* Bottom Area: Mini Dashboard Window Simulation (Light Theme) */}
            <div className="w-full bg-white rounded-2xl p-4 border border-zinc-200/90 shadow-xs flex flex-col gap-3.5 text-left mt-4">
              {/* Window Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 font-medium">
                  Fleet Dashboard
                </span>
              </div>

              {/* Metric Bars */}
              <div className="flex flex-col gap-2.5 pt-1">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span>CAN-Bus Interrogation</span>
                    <span className="text-sky-600 font-bold">500 kbps</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span>Diagnostics Health</span>
                    <span className="text-emerald-600 font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span>Eco Driving Score</span>
                    <span className="text-rose-600 font-bold">98 / 100</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[98%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Benefit Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {rightBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-start text-left group"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    className={`${goldman.className} text-base font-bold text-zinc-900 mb-1.5 leading-tight`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${poppins.className} text-xs text-zinc-500 leading-relaxed`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObdBenefits;
