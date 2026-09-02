"use client";

import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { analyzerSpecsList } from "@/constant/breath-analyzer-content";
import { Sparkles } from "lucide-react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const SpecificationsGrid = () => {
  return (
    <div
      className="min-h-screen py-16 sm:py-24 px-4 sm:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #F0F9F5 0%, #FFFFFF 50%, #F5FAF7 100%)",
      }}
    >
      <div className="relative z-10 w-full flex flex-col space-y-10 sm:space-y-14 items-center justify-center max-w-7xl mx-auto">
        {/* Header Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span
              className={`${poppins.className} text-[11px] font-semibold uppercase tracking-wider text-emerald-700`}
            >
              Certified Telematics Performance
            </span>
          </div>

          <h2
            className={`${goldman.className} text-2xl sm:text-4xl lg:text-5xl font-medium text-zinc-900 leading-tight mb-3 sm:mb-4`}
          >
            Technical Specifications
          </h2>
          <p
            className={`${poppins.className} text-zinc-600 text-xs sm:text-base leading-relaxed`}
          >
            Precision-manufactured with electrochemical fuel cells and
            anti-interference signal filters. Meets DOT/NHTSA precision
            tolerances and international commercial fleet sobriety standards.
          </p>
        </motion.div>

        {/* Breathalyzer Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <Image
              src="/breath-analyzer.png"
              alt="G-Trac Breathalyzer"
              width={420}
              height={560}
              draggable={false}
              className="w-40 sm:w-52 md:w-64 h-auto object-contain drop-shadow-[0_15px_30px_rgba(52,211,153,0.15)]"
            />
          </div>
        </motion.div>

        {/* Specifications Bar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="w-full border border-emerald-100 bg-white/85 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4 lg:gap-0 sm:divide-x divide-zinc-200/60">
            {analyzerSpecsList.map(
              ({ icon: IconComponent, subtext, title }, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.04,
                      ease: "easeOut",
                    }}
                    className={`${poppins.className} flex flex-col items-center justify-start text-center px-1.5 sm:px-2 py-2 sm:py-0 group`}
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.8]" />
                    </div>

                    <div className="w-6 h-px bg-red-500 mb-2 sm:mb-2.5 rounded-full" />

                    <h3 className="font-semibold text-xs md:text-[13px] text-zinc-900 mb-1 sm:mb-1.5 leading-tight">
                      {title}
                    </h3>

                    <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-tight whitespace-pre-line">
                      {subtext}
                    </p>
                  </motion.div>
                );
              },
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecificationsGrid;
