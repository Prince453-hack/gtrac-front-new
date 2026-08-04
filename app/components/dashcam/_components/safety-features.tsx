"use client";

import { Goldman, Outfit } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SafetyFeatures as safetyFeaturesData } from "@/constant/safety-features";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// --- Types ---
interface FeatureItem {
  title: string;
  description: string;
  imagePath: string;
}

interface SafetyHeroProps {
  goldmanFont: string;
  textOpacity: number;
  dashcamOpacity: number;
  leftTranslateX: number;
  rightTranslateX: number;
  imageTranslateX: number;
  imageTranslateY: number;
  imageScale: number;
  imageRotate: number;
}

interface FeatureDetailsProps {
  title: string;
  description: string;
  goldmanFont: string;
  outfitFont: string;
  contentProgress: number;
}

interface FeatureCarouselProps {
  features: FeatureItem[];
  activeIndex: number;
}

interface ScrollControlsProps {
  contentProgress: number;
  activeIndex: number;
  totalItems: number;
  onUp: () => void;
  onDown: () => void;
}

interface SteeringWheelProps {
  rotation: number;
}

// --- Helper Sub-components ---

const SafetyHero = ({
  goldmanFont,
  textOpacity,
  dashcamOpacity,
  leftTranslateX,
  rightTranslateX,
  imageTranslateX,
  imageTranslateY,
  imageScale,
  imageRotate,
}: SafetyHeroProps) => (
  <div className="relative z-10 flex items-center justify-center w-full px-6 md:px-20 space-x-6">
    <h1
      className={`${goldmanFont} text-7xl font-bold text-white transition-all duration-75 select-none`}
      style={{
        transform: `translateX(${leftTranslateX}px)`,
        opacity: textOpacity,
      }}
    >
      Safety
    </h1>

    <div
      className="relative mx-12 md:mx-20 transition-all duration-75"
      style={{
        transformOrigin: "28.85% 78.38%",
        transform: `translate(${imageTranslateX}px, ${imageTranslateY}px) scale(${imageScale}) rotate(${imageRotate}deg)`,
        opacity: dashcamOpacity,
      }}
    >
      <Image
        src="/dashcam/dashcam-icon.svg"
        alt="Safety"
        width={450}
        height={450}
        priority
        draggable={false}
        className="object-contain"
      />
    </div>

    <h1
      className={`${goldmanFont} text-7xl font-bold text-white transition-all duration-75 ml-18 select-none`}
      style={{
        transform: `translateX(${rightTranslateX}px)`,
        opacity: textOpacity,
      }}
    >
      Features
    </h1>
  </div>
);

const FeatureDetails = ({
  title,
  description,
  goldmanFont,
  outfitFont,
  contentProgress,
}: FeatureDetailsProps) => (
  <div
    className={`${outfitFont} text-left max-w-xl w-full md:w-[45%] z-20 flex flex-col justify-center h-full transition-all duration-75`}
    style={{
      transform: `translateY(${(1 - contentProgress) * -30}px)`,
      opacity: contentProgress,
    }}
  >
    <h2
      className={`${goldmanFont} text-3xl text-black font-medium tracking-wider mb-4`}
    >
      {title}
    </h2>
    <p className="text-zinc-800 font-light leading-relaxed max-w-sm text-sm md:text-base lg:text-lg">
      {description}
    </p>
  </div>
);

const FeatureCarousel = ({ features, activeIndex }: FeatureCarouselProps) => (
  <div
    className="absolute right-[-45vh] md:right-[-35vh] top-1/2 w-[145vh] h-[140vh] rounded-full z-15 pointer-events-none"
    style={{ transform: `translateY(-50%)` }}
  >
    {features.map((feature, idx) => {
      const diff = idx - activeIndex;
      const cardAngle = 180 - diff * 50;
      const rad = (cardAngle * Math.PI) / 180;
      const isActive = diff === 0;
      const isVisible = Math.abs(diff) <= 1;

      const radius = 62;
      const posX = radius * Math.cos(rad);
      const posY = radius * Math.sin(rad);
      const tiltDeg = diff * 20;

      return (
        <div
          key={idx}
          className={`absolute rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out flex items-center justify-center ${
            isActive
              ? "w-[65vh] h-[35vh] opacity-100 z-20"
              : isVisible
              ? "w-[55vh] h-[30vh] opacity-40 z-10"
              : "w-[50vh] h-[28vh] opacity-0 z-0"
          }`}
          style={{
            left: `calc(55% + ${posX}vh)`,
            top: `calc(50% + ${posY}vh)`,
            transform: `translate(-50%, -50%) rotate(${tiltDeg}deg)`,
          }}
        >
          <Image
            src={feature.imagePath}
            alt={feature.title}
            fill
            className="object-cover pointer-events-none select-none"
            priority
          />
        </div>
      );
    })}
  </div>
);

const ScrollControls = ({
  contentProgress,
  activeIndex,
  totalItems,
  onUp,
  onDown,
}: ScrollControlsProps) => (
  <div
    className="absolute right-[42vh] md:right-[45vh] top-1/2 z-30 transition-all duration-700 delay-300 hidden md:block"
    style={{
      opacity: contentProgress,
      transform: `translateY(-50%) translateX(${
        (1 - contentProgress) * -20
      }px)`,
    }}
  >
    <div className="flex flex-col items-center space-y-2 text-white/50">
      <svg
        className={`w-3 h-3 pointer-events-auto transition-all duration-200 transform ${
          activeIndex > 0
            ? "cursor-pointer hover:text-white hover:scale-125 text-white/70"
            : "opacity-25 cursor-not-allowed text-white/30"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        onClick={onUp}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>

      <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1.5">
        <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
      </div>

      <svg
        className={`w-3 h-3 pointer-events-auto transition-all duration-200 transform ${
          activeIndex < totalItems - 1
            ? "cursor-pointer hover:text-white hover:scale-125 text-white/70"
            : "opacity-25 cursor-not-allowed text-white/30"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        onClick={onDown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  </div>
);

const SteeringWheel = ({ rotation }: SteeringWheelProps) => (
  <div
    className="absolute right-[-20vh] md:right-[-70vh] top-1/2 w-[120vh] h-screen z-20 transition-transform duration-700 ease-out pointer-events-none select-none"
    style={{
      transform: `translateY(-50%) rotate(${rotation}deg)`,
    }}
  >
    <Image
      src="/dashcam/steering.png"
      alt="Steering Wheel"
      fill
      className="object-contain"
      priority
    />
  </div>
);

// --- Main Component ---

const SafetyFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUp = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      setWheelRotation((prev) => prev - 90);
    }
  };

  const handleDown = () => {
    if (activeIndex < safetyFeaturesData.length - 1) {
      setActiveIndex((prev) => prev + 1);
      setWheelRotation((prev) => prev + 90);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollableHeight = rect.height - viewportHeight;
      const scrolled = -rect.top;

      const progress = Math.min(
        Math.max(scrolled / totalScrollableHeight, 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations calculations
  const textOpacity = Math.max(1 - scrollProgress * 5, 0);
  const leftTranslateX = -scrollProgress * 1000;
  const rightTranslateX = scrollProgress * 1000;

  const easeProgress = Math.pow(scrollProgress, 2);
  const imageScale = 1 + easeProgress * 44.0;
  const imageRotate = -30;
  const imageTranslateX = 90.4 + easeProgress * 4.8;
  const imageTranslateY = 31.5 - easeProgress * 159.2;

  const bgOpacity =
    scrollProgress < 0.75
      ? 0.45
      : Math.max(0.45 - (scrollProgress - 0.75) * 4.5, 0);

  const dashcamOpacity =
    scrollProgress < 0.75 ? 1 : Math.max(1 - (scrollProgress - 0.75) * 10, 0);

  const overlayBgOpacity =
    scrollProgress < 0.75 ? 0 : Math.min((scrollProgress - 0.75) * 10, 1);

  const contentProgress = Math.max((scrollProgress - 0.75) / 0.25, 0);

  const activeFeature = safetyFeaturesData[activeIndex];

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#1D2128]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/dashcam/dc-background.png"
          alt="Safety Features Back"
          fill
          priority
          draggable={false}
          className="object-cover pointer-events-none select-none"
          style={{ opacity: bgOpacity }}
        />

        {/* Hero Section */}
        <SafetyHero
          goldmanFont={goldman.className}
          textOpacity={textOpacity}
          dashcamOpacity={dashcamOpacity}
          leftTranslateX={leftTranslateX}
          rightTranslateX={rightTranslateX}
          imageTranslateX={imageTranslateX}
          imageTranslateY={imageTranslateY}
          imageScale={imageScale}
          imageRotate={imageRotate}
        />

        {/* Overlay Section */}
        <div
          className="absolute top-0 left-0 z-20 flex flex-col md:flex-row items-center justify-between w-full h-screen bg-white text-black transition-all duration-75 px-6 md:px-24 py-12 md:py-0 overflow-hidden"
          style={{
            opacity: overlayBgOpacity,
            visibility: overlayBgOpacity > 0 ? "visible" : "hidden",
          }}
        >
          <FeatureDetails
            title={activeFeature.title}
            description={activeFeature.description}
            goldmanFont={goldman.className}
            outfitFont={outfit.className}
            contentProgress={contentProgress}
          />

          {/* Right Graphic Background */}
          <div
            className="absolute right-[-45vh] md:right-[-35vh] top-1/2 w-[145vh] h-[140vh] rounded-full bg-[#252525] transition-transform duration-500 z-10"
            style={{ transform: `translateY(-50%)` }}
          />

          <FeatureCarousel
            features={safetyFeaturesData}
            activeIndex={activeIndex}
          />

          <ScrollControls
            contentProgress={contentProgress}
            activeIndex={activeIndex}
            totalItems={safetyFeaturesData.length}
            onUp={handleUp}
            onDown={handleDown}
          />

          <SteeringWheel rotation={wheelRotation} />
        </div>
      </div>
    </div>
  );
};

export default SafetyFeatures;
