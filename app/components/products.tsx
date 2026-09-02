"use client";

import { products } from "@/constant/content";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ProductsProps {
  mainProduct: (typeof products)[0];
  setMainProduct: React.Dispatch<React.SetStateAction<(typeof products)[0]>>;
  leftProducts: typeof products;
  setLeftProducts: React.Dispatch<React.SetStateAction<typeof products>>;
  rightProducts: typeof products;
  setRightProducts: React.Dispatch<React.SetStateAction<typeof products>>;
}

const Products = ({
  mainProduct,
  setMainProduct,
  leftProducts,
  setLeftProducts,
  rightProducts,
  setRightProducts,
}: ProductsProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  const progress = Math.min(scrollY / 380, 1);

  const handleLeftSwap = (index: number) => {
    const prevMain = mainProduct;
    const clickedProduct = leftProducts[index];

    setMainProduct(clickedProduct);

    const updatedLeft = [...leftProducts];
    updatedLeft[index] = prevMain;
    setLeftProducts(updatedLeft);
  };

  const handleRightSwap = (index: number) => {
    const prevMain = mainProduct;
    const clickedProduct = rightProducts[index];

    setMainProduct(clickedProduct);

    const updatedRight = [...rightProducts];
    updatedRight[index] = prevMain;
    setRightProducts(updatedRight);
  };

  const isWideProduct =
    mainProduct.name === "E-lock" || mainProduct.name === "Adas (DMS)";

  return (
    <div className="z-10 w-full flex-1 flex flex-col items-center">
      <div
        className={`fixed top-[46%] ${
          isWideProduct ? "left-[28%]" : "left-[32%]"
        } z-10 flex justify-center items-center pointer-events-none transition-all duration-300`}
        style={{
          transform: `translate(-50%, -50%) scale(${1 + progress * 0.15})`,
        }}
      >
        <div className="relative flex justify-center items-center">
          {/* Ellipse background element */}
          <div
            className="absolute z-0 select-none pointer-events-none"
            style={{
              opacity: progress * 0.7,
              width: "750px",
              height: "750px",
              transform: "translateY(280px) translateX(-100px)",
              rotate: "20deg",
            }}
          >
            <Image
              src="/elements/ellipse.png"
              alt="Background Ellipse"
              fill
              sizes="750px"
              priority
              draggable={false}
              className="object-contain"
            />
          </div>

          <Image
            src={mainProduct.image}
            alt={mainProduct.name}
            key={mainProduct.name}
            width={
              mainProduct.activeImageWidth
                ? parseInt(mainProduct.activeImageWidth)
                : 550
            }
            height={
              mainProduct.activeImageHeight
                ? parseInt(mainProduct.activeImageHeight)
                : 550
            }
            priority
            draggable={false}
            className="relative z-10 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] pointer-events-auto transition-all duration-300"
          />
        </div>
      </div>

      <div
        className={`fixed top-[46%] ${
          isWideProduct ? "left-[54%]" : "left-[50%]"
        } z-10 flex flex-col items-center justify-center text-center pointer-events-none max-w-xl px-4 transition-all duration-300`}
        style={{
          opacity: Math.max(1 - progress * 2.2, 0),
          transform: `translateY(calc(-50% - ${progress * 25}px))`,
        }}
      >
        <h1
          className={`${goldman.className} text-4xl sm:text-6xl md:text-7xl lg:text-[5.7rem] font-semibold tracking-wider text-white/90 uppercase leading-none mb-6 text-center`}
        >
          {mainProduct.name === "Breathalyzer" ? (
            <>
              BREATH <br /> ALYZER
            </>
          ) : (
            mainProduct.name
          )}
        </h1>
        <p
          className={`${poppins.className} bg-linear-to-r text-xs sm:text-sm text-zinc-500 backdrop-blur-3xl border border-gray-500/60 bg-white/15 p-2.5 rounded-full font-medium tracking-[0.2em] uppercase text-center`}
        >
          {mainProduct.description}
        </p>
      </div>

      {/* Product Details Section (Slides in on scroll on the right side) */}
      <div
        className="fixed top-[50%] left-[52%] -translate-y-1/2 z-10 w-[38vw] max-w-xl flex flex-col text-left pointer-events-none"
        style={{
          transform: `translateX(calc(${30 - progress * 30}vw))`,
          opacity: progress,
        }}
      >
        {/* Heading */}
        <h2
          className={`${goldman.className} text-3xl md:text-5xl font-medium text-neutral-800 tracking-wide leading-tight mb-4 pointer-events-auto`}
        >
          {mainProduct.detailHeading}
        </h2>
        {/* Description */}
        <p
          className={`${poppins.className} text-sm md:text-base text-neutral-600 leading-relaxed mb-6 pointer-events-auto`}
        >
          {mainProduct.detailDesc}
        </p>
        {/* Specs Cards */}
        <div className="flex gap-4 pointer-events-auto">
          {mainProduct.specs?.map((spec, index) => (
            <div
              key={index}
              className="flex-1 bg-white/90 border border-white/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center items-center text-center backdrop-blur-md hover:shadow-md transition-shadow"
            >
              <span
                className={`${goldman.className} text-xl md:text-2xl font-medium text-neutral-800`}
              >
                {spec.value}
              </span>
              <span
                className={`${poppins.className} text-[10px] text-neutral-600 uppercase tracking-wider mt-1`}
              >
                {spec.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between w-full max-w-full overflow-hidden pointer-events-none pb-1">
        <div
          className="h-44 w-[45%] border border-white/80 inset-shadow-sm backdrop-blur-md rounded-tr-[4rem] pointer-events-auto flex items-center justify-around px-8 shadow-lg"
          style={{ transform: `translateX(-${progress * 105}%)` }}
        >
          {leftProducts.map((product, index) => (
            <div
              key={product.name}
              onClick={() => handleLeftSwap(index)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col text-left">
                <h3
                  className={`${poppins.className} text-lg font-semibold text-neutral-800 uppercase tracking-wider`}
                >
                  {product.name}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-tight max-w-31.25">
                  {product.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLeftSwap(index);
                  }}
                  className="mt-2 cursor-pointer border border-white px-4 py-0.5 rounded-full text-[9px] text-neutral-600 hover:bg-white/40 inset-shadow-sm transition-colors w-fit"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="h-44 w-[45%] border border-white/80 inset-shadow-sm backdrop-blur-md rounded-tl-[4rem] pointer-events-auto flex items-center justify-around px-8 shadow-lg"
          style={{ transform: `translateX(${progress * 105}%)` }}
        >
          {rightProducts.map((product, index) => (
            <div
              key={product.name}
              onClick={() => handleRightSwap(index)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col text-left">
                <h3
                  className={`${poppins.className} text-lg font-semibold text-neutral-800 uppercase tracking-wider`}
                >
                  {product.name}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-tight max-w-31.25">
                  {product.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRightSwap(index);
                  }}
                  className="mt-2 cursor-pointer border border-white px-4 py-0.5 rounded-full text-[9px] text-neutral-600 hover:bg-white/40 inset-shadow-sm transition-colors w-fit"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
