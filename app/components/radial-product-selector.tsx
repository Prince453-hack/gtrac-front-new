"use client";

import { useState, useEffect, useRef } from "react";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/constant/content";
import { X } from "lucide-react";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface RadialProductSelectorProps {
  mainProduct: (typeof products)[0];
  setMainProduct: React.Dispatch<React.SetStateAction<(typeof products)[0]>>;
  setLeftProducts: React.Dispatch<React.SetStateAction<typeof products>>;
  setRightProducts: React.Dispatch<React.SetStateAction<typeof products>>;
}

export const RadialProductSelector = ({
  mainProduct,
  setMainProduct,
  setLeftProducts,
  setRightProducts,
}: RadialProductSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll listener: Only show from the second section onwards
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight + 300;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Filter out the currently selected main product (exactly 4 other products)
  const otherProducts = products.filter((p) => p.name !== mainProduct.name);

  // Handle selecting a product from the radial selector
  const handleSelectProduct = (selected: (typeof products)[0]) => {
    const remaining = products.filter((p) => p.name !== selected.name);
    const newLeft = [remaining[0], remaining[1]];
    const newRight = [remaining[2], remaining[3]];

    setMainProduct(selected);
    setLeftProducts(newLeft);
    setRightProducts(newRight);

    localStorage.setItem("mainProduct", JSON.stringify(selected.name));
    localStorage.setItem(
      "leftProducts",
      JSON.stringify(newLeft.map((p) => p.name)),
    );
    localStorage.setItem(
      "rightProducts",
      JSON.stringify(newRight.map((p) => p.name)),
    );

    setIsOpen(false);

    // Scroll to the very top to view product from the first page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fanAngles = [270, 225, 180, 135];
  const radius = 135; // Compact spacing between products

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          ref={containerRef}
          className="fixed bottom-16 right-6 sm:bottom-32 sm:right-10 z-50 select-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Fanned Out Product Cards (Only other 4 products) */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Semi-transparent Backdrop click catcher */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-xs -z-10"
                  />

                  {/* 4 Radial Fan Cards */}
                  {otherProducts.map((product, index) => {
                    const angleDeg = fanAngles[index] || 180;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const targetX = Math.cos(angleRad) * radius;
                    const targetY = Math.sin(angleRad) * radius;
                    const cardRotation = angleDeg - 270; // Points card inward towards center circle

                    return (
                      <motion.div
                        key={product.name}
                        initial={{
                          opacity: 0,
                          scale: 0.1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          x: targetX,
                          y: targetY,
                          rotate: cardRotation,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 22,
                          delay: index * 0.04,
                        }}
                        onClick={() => handleSelectProduct(product)}
                        className="absolute cursor-pointer z-40"
                        style={{
                          left: "50%",
                          top: "50%",
                          marginLeft: "-32px",
                          marginTop: "-42px",
                        }}
                      >
                        <div className="group w-16 h-21 sm:w-18 sm:h-24 rounded-2xl bg-white p-2 shadow-xl border border-zinc-100 group-hover:border-slate-700 transition-all duration-200 flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="relative w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-15">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="80px"
                              className="object-contain drop-shadow-sm"
                              draggable={false}
                            />
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <span
                              className={`${poppins.className} text-[10px] sm:text-[11px] font-bold text-neutral-900 text-center leading-tight tracking-tight uppercase select-none`}
                            >
                              {product.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </>
              )}
            </AnimatePresence>

            {/* Central Circular Trigger Button */}
            <div className="p-1 rounded-full border border-dashed border-zinc-400/80 hover:border-zinc-600 transition-colors">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-zinc-950 text-white shadow-xl flex flex-col items-center justify-center cursor-pointer border border-zinc-800 relative z-50 overflow-hidden"
              >
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 bg-radial from-zinc-800 to-zinc-950 opacity-80" />

                {/* Icon / Action state */}
                {isOpen ? (
                  <div className="relative z-10 flex flex-col items-center">
                    <X className="w-5 h-5 text-zinc-300" />
                    <span
                      className={`${poppins.className} text-[9px] font-semibold text-zinc-400 tracking-wider uppercase mt-0.5`}
                    >
                      Close
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center text-center px-1">
                    <span
                      className={`${goldman.className} text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight block`}
                    >
                      All <br /> Product
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RadialProductSelector;
