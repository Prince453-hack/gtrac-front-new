"use client";

import { specsList } from "@/constant/padlock-content";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
});

const Specifications = () => {
  return (
    <div
      className="min-h-screen p-8 sm:p-14 lg:p-20 relative overflow-hidden"
      style={{
        background: "rgba(204, 204, 204, 1)",
      }}
    >
      <div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            src="/elements/radial.png"
            alt="Radial Background"
            width={600}
            height={400}
            className="w-125 md:w-162.5 h-auto object-contain opacity-80"
            priority
            draggable={false}
          />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col space-y-16 md:space-y-24 items-center justify-center">
        {/* Header Title & Description Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`${goldman.className}`}
        >
          <h1 className="text-4xl md:text-5xl mb-5 font-medium text-center">
            Specifications
          </h1>
          <p className="max-w-3xl text-center leading-tight text-zinc-700">
            Engineered with industrial-grade hardened steel for superior
            security and long-lasting durability. Corrosion-resistant
            construction ensures reliable protection for shipping containers,
            trailers, warehouses, and valuable cargo.
          </p>
        </motion.div>

        {/* Padlock Image Scroll Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <Image
            src="/padlock/padlock.png"
            alt="Padlock"
            width={700}
            height={700}
            draggable={false}
            className="w-auto max-w-full h-auto"
          />
        </motion.div>

        {/* Specifications Bar Scroll Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-328 border border-white/60 bg-white/30 backdrop-blur-md rounded-2xl md:rounded-[24px] p-4 sm:p-6 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-y-6 lg:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-400/40">
            {specsList.map(({ icon, subtext, title }, index) => {
              const IconComponent = icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.04,
                    ease: "easeOut",
                  }}
                  className={`${poppins.className} flex flex-col items-center justify-start text-center px-2 pt-4 sm:pt-0`}
                >
                  <div className="w-12 h-12 rounded-full bg-linear-to-b from-[#2b2b2b] to-[#121212] flex items-center justify-center text-white shadow-md mb-2.5">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <div className="w-8 h-1 bg-[#E53935] mb-2.5 rounded-full" />

                  <h3 className="font-semibold text-xs md:text-[13px] text-zinc-900 mb-2 leading-tight">
                    {title}
                  </h3>

                  <p className="text-[11px] text-zinc-600 leading-tight whitespace-pre-line">
                    {subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Specifications;
