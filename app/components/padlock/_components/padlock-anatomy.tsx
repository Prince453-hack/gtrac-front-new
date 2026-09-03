"use client";

import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const PadlockAnatomy = () => {
  return (
    <div
      className="min-h-screen w-full relative p-5 sm:p-12 lg:p-20 overflow-hidden flex flex-col justify-between"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 43.81%, #999999 202.26%)",
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-xl mb-6 sm:mb-8 lg:mb-0 text-left"
      >
        <h2
          className={`${goldman.className} text-2xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight`}
        >
          Lock Anatomy
        </h2>
        <p
          className={`${poppins.className} text-xs sm:text-sm text-zinc-500 mt-2 sm:mt-3 leading-relaxed max-w-lg`}
        >
          Container Padlocks are designed to keep the container door closed and
          protect the contents from theft. They are especially important for
        </p>
      </motion.div>

      {/* Main Interactive Stage */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 min-h-0 lg:min-h-162.5 flex flex-col lg:flex-row items-center justify-center my-4 sm:my-6">
        {/* SVG Connector Lines (Hidden on mobile/tablet, visible on desktop) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. Line to Hardened Shackle (Top Left Callout -> Shackle Top) */}
          <path
            d="M 250 120 C 320 60, 410 40, 480 180"
            fill="none"
            stroke="#5B8BF7"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />

          {/* 2. Line to Charging Pin (Bottom Left Card -> USB Port) */}
          <path
            d="M 270 450 L 515 450"
            fill="none"
            stroke="#5B8BF7"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />

          {/* 3. Line to Unlock Button (Lock Side Button -> Right Card) */}
          <path
            d="M 560 335 L 700 335"
            fill="none"
            stroke="#5B8BF7"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />
        </svg>

        {/* Center Padlock Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center justify-center my-4 lg:my-0"
        >
          <Image
            src="/padlock/padlock-stand.png"
            alt="Padlock Stand Anatomy"
            width={340}
            height={520}
            priority
            draggable={false}
            className="w-48 sm:w-60 md:w-75 lg:w-85 h-auto object-contain drop-shadow-2xl select-none"
          />
        </motion.div>

        {/* Mobile/Tablet Callout Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mt-6 lg:hidden z-30">
          {/* Card 1: Hardened Shackle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/80 shadow-xs flex flex-col items-start text-left"
          >
            <Image
              src="/padlock/parts/shackle.png"
              alt="Hardened Shackle"
              width={60}
              height={36}
              className="w-12 h-auto object-contain shadow-xs mb-2"
              draggable={false}
            />
            <h3 className={`${goldman.className} font-medium text-base text-zinc-900 mb-1`}>
              Hardened Shackle
            </h3>
            <p className={`${poppins.className} text-xs text-zinc-500 leading-snug`}>
              Container Padlocks are designed to keep the container door close.
            </p>
          </motion.div>

          {/* Card 2: Charging Pin */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl backdrop-blur-md border border-zinc-200/80 shadow-xs flex flex-col items-start text-left"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.5) 10.39%, #CBCBCB 100%)",
            }}
          >
            <Image
              src="/padlock/parts/charging.png"
              alt="Charging Pin"
              width={60}
              height={36}
              className="w-12 h-auto object-contain shadow-xs mb-2"
              draggable={false}
            />
            <h3 className={`${goldman.className} font-medium text-base text-zinc-900 mb-1`}>
              Charging Pin
            </h3>
            <p className={`${poppins.className} text-xs text-zinc-600 leading-snug`}>
              Container Padlocks are designed to keep the container door closed.
            </p>
          </motion.div>

          {/* Card 3: Unlock Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col items-start text-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 10.39%, #CBCBCB 100%)",
            }}
          >
            <Image
              src="/padlock/parts/button.png"
              alt="Unlock Button"
              width={60}
              height={36}
              className="w-12 h-auto object-contain shadow-xs mb-2"
              draggable={false}
            />
            <h3 className={`${goldman.className} font-medium text-base text-zinc-900 mb-1`}>
              Unlock Button
            </h3>
            <p className={`${poppins.className} text-xs text-zinc-600 leading-snug`}>
              Container Padlocks are designed to keep the container door closed and protect the contents.
            </p>
          </motion.div>
        </div>

        {/* Desktop Callout 1: Hardened Shackle (Top-Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block absolute top-[16%] left-[8%] xl:left-[12%] z-30 max-w-xs"
        >
          <div className="flex flex-col items-start text-left">
            <Image
              src="/padlock/parts/shackle.png"
              alt="Hardened Shackle"
              width={60}
              height={36}
              className="w-14 h-auto object-contain shadow-sm mb-2"
              draggable={false}
            />
            <h3
              className={`${goldman.className} font-medium text-lg text-zinc-900 mb-2`}
            >
              Hardened Shackle
            </h3>
            <p
              className={`${poppins.className} text-xs text-zinc-500 leading-snug`}
            >
              Container Padlocks are designed to keep the container door close.
            </p>
          </div>
        </motion.div>

        {/* Desktop Callout 2: Charging Pin (Bottom-Left Card) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block absolute bottom-[15%] left-[4%] z-30 w-full max-w-xs"
        >
          <div
            className="backdrop-blur-md rounded-2xl py-10 px-5 text-left"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0) 10.39%, #CBCBCB 100%)",
            }}
          >
            <Image
              src="/padlock/parts/charging.png"
              alt="Charging Pin"
              width={60}
              height={36}
              className="w-14 h-auto object-contain shadow-sm mb-3"
              draggable={false}
            />
            <h3
              className={`${goldman.className} font-medium text-lg text-zinc-900 mb-2`}
            >
              Charging Pin
            </h3>
            <p
              className={`${poppins.className} text-xs text-zinc-600 leading-snug`}
            >
              Container Padlocks are designed to keep the container door closed.
            </p>
          </div>
        </motion.div>

        {/* Desktop Callout 3: Unlock Button (Middle-Right Card) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:block absolute top-[42%] right-[4%] z-30 w-full max-w-xs"
        >
          <div
            className="rounded-2xl py-10 px-5 text-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 10.39%, #CBCBCB 100%)",
            }}
          >
            <Image
              src="/padlock/parts/button.png"
              alt="Unlock Button"
              width={60}
              height={36}
              className="w-14 h-auto object-contain shadow-sm mb-3"
              draggable={false}
            />
            <h3
              className={`${goldman.className} font-medium text-lg text-zinc-900 mb-2`}
            >
              Unlock Button
            </h3>
            <p
              className={`${poppins.className} text-xs text-zinc-600 leading-snug`}
            >
              Container Padlocks are designed to keep the container door closed
              and protect the contents from theft.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PadlockAnatomy;
