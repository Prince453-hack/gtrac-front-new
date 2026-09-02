"use client";

import { obdFeatures } from "@/constant/obd-content";
import { motion } from "framer-motion";
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

export const ObdFeaturesGrid = () => {
  return (
    <section
      className={`${outfit.className} relative w-full py-16 sm:py-28 px-4 sm:px-12 lg:px-20 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold text-sky-600 uppercase tracking-widest block mb-2.5"
          >
            Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${goldman.className} text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-3`}
          >
            Built for Heavy-Duty Fleet Intelligence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${poppins.className} text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto`}
          >
            Engineered with automotive-grade transceivers, edge AI processing,
            and cloud telematics for commercial fleets.
          </motion.p>
        </div>

        {/* 8-Card Aceternity Feature Grid (4 columns x 2 rows on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 border border-zinc-200 divide-y md:divide-y-0">
          {obdFeatures.map((feature, index) => {
            const Icon = feature.icon;

            // Border styling to create clean grid divider lines
            const isRightCol = (index + 1) % 4 === 0;
            const isTopRow = index < 4;

            return (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-start text-left transition-colors duration-300 hover:bg-neutral-50/70 border-b md:border-b-0 ${
                  !isRightCol ? "lg:border-r border-zinc-200" : ""
                } ${isTopRow ? "lg:border-b border-zinc-200" : ""}`}
              >
                {/* Left Subtle Indicator Pill (Fixed height, turns vibrant Blue on hover) */}
                <div className="absolute left-0 top-10 h-8 w-1 bg-zinc-200/90 rounded-r-full group-hover:bg-blue-600 transition-colors duration-300" />

                {/* Feature Icon */}
                <div className="w-10 h-10 mb-6 flex items-center justify-start text-zinc-800 group-hover:text-blue-600 transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* Feature Title */}
                <h3
                  className={`${goldman.className} text-base font-bold text-zinc-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors`}
                >
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p
                  className={`${poppins.className} text-xs text-zinc-500 leading-relaxed font-normal`}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObdFeaturesGrid;
