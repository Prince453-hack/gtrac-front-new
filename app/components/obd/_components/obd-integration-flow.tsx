"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Zap } from "lucide-react";
import { Goldman, Outfit, Poppins } from "next/font/google";
import { useState } from "react";

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

const steps = [
  {
    id: "dock",
    icon: Zap,
    title: "Zero-Wire Port Docking",
    desc: "Plug directly into any 12V/24V J1962 diagnostic port beneath the vehicle dashboard for instant power and protocol auto-detection.",
    nodeTitle: "G-Trac OBD-II",
    nodeSub: "16-Pin J1962 • Connected",
    accent: "rose",
  },
  {
    id: "canbus",
    icon: Cpu,
    title: "CAN-Bus Interrogation",
    desc: "32-bit automotive processor reads multi-PID engine RPM, vehicle speed, coolant temp, fuel trims, and real-time trouble codes.",
    nodeTitle: "CAN-Bus 2.0B",
    nodeSub: "500 kbps • 29-Bit ID",
    accent: "sky",
  },
  {
    id: "cloud",
    icon: Radio,
    title: "Cloud Telematics & Alerts",
    desc: "Streams AES-256 encrypted fleet telemetry over 4G LTE-M with sub-2.5m GPS coordinates directly to enterprise fleet software.",
    nodeTitle: "4G Cloud Stream",
    nodeSub: "AES-256 • Sub-0.5s Sync",
    accent: "emerald",
  },
];

const telemetryLogs = [
  {
    id: 1,
    label: "CAN-BUS STREAM",
    status: "500 kbps",
    time: "2s ago",
    tone: "sky",
  },
  {
    id: 2,
    label: "ECU PID: ENGINE RPM 2,450",
    status: "Optimal",
    time: "3s ago",
    tone: "emerald",
  },
  {
    id: 3,
    label: "BOSCH IMU: 6-AXIS MOTION",
    status: "Normal",
    time: "4s ago",
    tone: "rose",
  },
  {
    id: 4,
    label: "DTC CHECK ENGINE SCAN",
    status: "0 Faults",
    time: "5s ago",
    tone: "amber",
  },
  {
    id: 5,
    label: "4G LTE-M / GNSS POSITION",
    status: "Sub-2.5m",
    time: "7s ago",
    tone: "sky",
  },
];

export const ObdIntegrationFlow = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className={`${outfit.className} relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-y border-zinc-200 overflow-hidden`}
    >
      {/* Outer Technical Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      {/* Decorative Full-Width Top/Bottom Horizontal Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-widest block mb-2.5"
          >
            How it works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${goldman.className} text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-3`}
          >
            Integrates easily
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${poppins.className} text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto`}
          >
            We empower fleet managers and technical teams to monitor, diagnose,
            and automate vehicle telematics workflows visually.
          </motion.p>
        </div>

        {/* Sharp Grid Frame (No rounded corners, clean technical borders) */}
        <div className="border border-zinc-200 grid grid-cols-1 lg:grid-cols-12 bg-white shadow-xs">
          {/* Left Column: Sharp Step Rows with Active Indicator */}
          <div className="lg:col-span-5 flex flex-col divide-y border-b lg:border-b-0 lg:border-r border-zinc-200">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 sm:p-7 cursor-pointer transition-all duration-200 relative text-left group ${
                    isActive ? "bg-zinc-50/90" : "bg-white hover:bg-zinc-50/50"
                  }`}
                >
                  {/* Left Sharp Accent Indicator Bar (Matching Screenshot) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"
                    />
                  )}

                  <div className="flex items-center gap-3 mb-2">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-rose-600" : "text-zinc-400"
                      }`}
                    />
                    <h3
                      className={`${goldman.className} text-sm sm:text-base font-semibold transition-colors ${
                        isActive ? "text-zinc-900" : "text-zinc-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className={`${poppins.className} text-xs text-zinc-500 leading-relaxed pl-7`}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Light Technical Workflow & Log Visualizer (Sharp, clean grid lines) */}
          <div className="lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center items-center relative bg-[#FAFAFA] min-h-72 sm:min-h-105 overflow-hidden">
            {/* Background Grid Accent Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] opacity-60 pointer-events-none" />

            {/* Hierarchical Connecting Lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 500 350"
              preserveAspectRatio="none"
            >
              {/* Vertical line from top to bottom */}
              <line
                x1="250"
                y1="30"
                x2="250"
                y2="320"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Stacked Telemetry Status Pills (Matching the Screenshot's Glowing Pill Stack) */}
            <div className="relative z-10 w-full max-w-md flex flex-col gap-2.5 sm:gap-3 py-2">
              {telemetryLogs.map((log, idx) => {
                const isSelected = activeTab === idx % 3;

                return (
                  <motion.div
                    key={log.id}
                    animate={{
                      scale: isSelected ? 1.02 : 0.98,
                      opacity: isSelected ? 1 : 0.65,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`p-2.5 sm:p-3.5 px-3 sm:px-5 border flex items-center justify-between text-left transition-all duration-300 shadow-xs ${
                      isSelected
                        ? "bg-white border-rose-300 shadow-md ring-1 ring-rose-200"
                        : "bg-white/80 border-zinc-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 truncate">
                      <span
                        className={`w-2 h-2 shrink-0 ${
                          isSelected
                            ? "bg-rose-500 animate-ping"
                            : "bg-zinc-400"
                        }`}
                      />
                      <span className="text-[11px] sm:text-xs font-bold font-mono text-zinc-800 tracking-tight truncate">
                        {log.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                      <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-rose-600 bg-rose-50 px-1.5 sm:px-2 py-0.5 border border-rose-100">
                        {log.status}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">
                        {log.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObdIntegrationFlow;
