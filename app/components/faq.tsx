"use client";

import { useState } from "react";
import Image from "next/image";
import { Goldman, Poppins } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { ElockFaq } from "@/constant/faq";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${goldman.className} relative min-h-screen w-full py-32 px-6 md:px-20 overflow-hidden text-white flex items-center justify-center`}
    >
      {/* Background Image */}
      <Image
        src="/faq/faq-background.png"
        alt="FAQ Background"
        fill
        className="object-cover -z-10 pointer-events-none select-none"
        priority
        draggable={false}
      />

      {/* Grid container */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 max-w-7xl w-full relative z-10">
        {/* Left Column (Unchanged contents) */}
        <div className="flex flex-col space-y-4 w-full lg:w-[48%]">
          <div className="flex items-center space-x-2 text-zinc-300">
            <div className="size-3 bg-blue-500 rounded-full">
              <div className="size-3 bg-blue-500 rounded-full animate-ping" />
            </div>
            <h1>FAQ</h1>
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-5xl tracking-wide leading-tight">
              Frequently Asked <br /> Question
            </h1>
            <p
              className={`${poppins.className} text-zinc-400 text-lg leading-relaxed`}
            >
              If you don't see an answer to your question, you can send us an
              email from our contact form.
            </p>
          </div>

          <div className="border border-purple-500/25 rounded-xl overflow-hidden mt-7">
            <Image
              src="/faq/elock-faq.png"
              width={771}
              height={406}
              alt="Elock & Controller"
              draggable={false}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[48%] flex flex-col space-y-8 mt-8 lg:mt-0">
          {ElockFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full border border-white/40 bg-transparent transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none hover:bg-white/5 transition-colors duration-200"
                >
                  <span
                    className={`${poppins.className} text-base font-medium text-neutral-100`}
                  >
                    {item.question}
                  </span>
                  <span className="ml-4 shrink-0 text-neutral-400">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-48 border-t border-white/10 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`${poppins.className} px-6 py-5 text-sm text-neutral-400 leading-relaxed font-light bg-white/1`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
