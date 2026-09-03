"use client";

import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import {
  Building2,
  Users,
  Wrench,
  Smartphone,
  Compass,
  ShieldCheck,
  Network,
  Code2,
  Landmark,
  Siren,
  Building,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const milestones = [
  {
    year: "2010",
    month: "January",
    title: "Company Inception",
    tag: "ITG Telematics Pvt. Ltd.",
    description:
      "Founded with headquarters in New Delhi to pioneer commercial fleet tracking in India.",
    icon: Building2,
    isHighlight: true,
  },
  {
    year: "2010",
    month: "November",
    title: "1,000 Subscribers",
    tag: "Market Traction",
    description:
      "Tested the waters and geared up for rapid asset tracking scale nationwide.",
    icon: Users,
  },
  {
    year: "2011",
    month: "January",
    title: "Repair Centre",
    tag: "Service Standards",
    description:
      "In-house dedicated repair team established to expedite hardware SLA standards.",
    icon: Wrench,
  },
  {
    year: "2011",
    month: "March",
    title: "Mobile Apps Launch",
    tag: "Reports on the Go",
    description:
      "Launched mobile applications to meet soaring demand for real-time mobile tracking.",
    icon: Smartphone,
  },
  {
    year: "2012",
    month: "May",
    title: "Let's Explore",
    tag: "Jaipur Expansion",
    description:
      "Started Jaipur branch as the first strategic regional hub initiative.",
    icon: Compass,
  },
  {
    year: "2013",
    month: "February",
    title: "Enterprise Clients",
    tag: "Maruti & Lubrizol",
    description:
      "Maruti and Lubrizol onboarded for end-to-end supply-chain fleet management.",
    icon: ShieldCheck,
  },
  {
    year: "2014",
    month: "March",
    title: "Branch Network",
    tag: "Infrastructure",
    description:
      "Expanded network of regional branches and localized service support centers.",
    icon: Network,
  },
  {
    year: "2014",
    month: "February",
    title: "Short Code Gateway",
    tag: "Instant Alerts",
    description:
      "Integrated high-speed SMS short codes for exception and threshold alerts.",
    icon: Code2,
  },
  {
    year: "2015",
    month: "March",
    title: "DIMTS Empanelment",
    tag: "Government Transport",
    description:
      "Empanelment with Dept. of Telecom (DOT) and Transport authorities.",
    icon: Landmark,
  },
  {
    year: "2016",
    month: "November",
    title: "Kanpur Police",
    tag: "Emergency Dispatch",
    description:
      "Set up control center for live PCR emergency vehicle tracking & response.",
    icon: Siren,
  },
  {
    year: "2017",
    month: "July",
    title: "15+ PSUs Added",
    tag: "Major Logistics",
    description:
      "Added 15+ PSU clients and major leaders like Agarwal Packers & Movers.",
    icon: Building,
  },
  {
    year: "2018",
    month: "March",
    title: "Reliance Jio",
    tag: "Telecom Scale",
    description:
      "Received strategic telematics order for Reliance Jio with 2,000+ unit potential.",
    icon: Zap,
    imageSrc: "/jio-logo.png",
    isHighlight: true,
  },
];

const AboutTimeline = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 md:py-28 border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-340 mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="flex flex-col space-y-2 sm:space-y-3 text-left">
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-blue-600 uppercase">
              Milestones &amp; Evolution
            </span>
            <h2
              className={`${goldman.className} text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight`}
            >
              Our Growth <br /> Journey
            </h2>
          </div>

          <div className="flex items-center space-x-2.5 sm:space-x-3 self-end">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:scale-95 flex items-center justify-center text-neutral-700 transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:scale-95 flex items-center justify-center text-neutral-700 transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Modern Timeline Scroll Track */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 pt-2 scrollbar-none snap-x snap-mandatory relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="min-w-65 sm:min-w-[320px] max-w-[320px] shrink-0 snap-start flex flex-col items-center group"
                >
                  {/* Top Year & Date Pill */}
                  <div className="flex flex-col items-center mb-4 sm:mb-5">
                    <span
                      className={`${goldman.className} text-sm font-semibold text-neutral-900 tracking-wider`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`${poppins.className} text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest font-medium`}
                    >
                      {item.month}
                    </span>
                  </div>

                  <div className="relative w-full flex items-center justify-center mb-4 sm:mb-6">
                    <div
                      className={`hidden md:block absolute h-0.5 border-t-2 border-dashed border-amber-500/40 z-0 ${
                        index === 0
                          ? "left-1/2 -right-3"
                          : index === milestones.length - 1
                            ? "-left-3 right-1/2"
                            : "-left-3 -right-3"
                      }`}
                    />

                    {/* Node Circle */}
                    <div
                      className={`relative w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-10 overflow-hidden ${
                        item.imageSrc
                          ? "bg-white p-2 sm:p-2.5 border-2 border-neutral-300/80 group-hover:border-[#EA8D00]"
                          : item.isHighlight
                            ? "bg-[#EA8D00] text-white ring-4 ring-amber-500/20 scale-105"
                            : "bg-white text-neutral-700 border-2 border-neutral-300/80 group-hover:border-[#EA8D00] group-hover:text-[#EA8D00]"
                      }`}
                    >
                      {item.imageSrc ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-contain"
                            draggable={false}
                          />
                        </div>
                      ) : (
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 stroke-[1.8]" />
                      )}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`w-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-2.5 sm:space-y-3 min-h-38 sm:min-h-42.5 transition-all duration-300 text-left ${
                      item.isHighlight
                        ? "border-amber-300/70 bg-linear-to-b from-amber-50/30 to-white"
                        : "group-hover:border-neutral-300"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60 uppercase tracking-wide inline-block mb-1.5 sm:mb-2">
                        {item.tag}
                      </span>
                      <h3
                        className={`${goldman.className} text-sm sm:text-base font-medium text-neutral-900 leading-snug`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p
                      className={`${poppins.className} text-xs text-neutral-500 font-light leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
