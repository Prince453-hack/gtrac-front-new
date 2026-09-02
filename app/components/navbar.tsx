"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NavLink = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Contact Us", link: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50 flex flex-col items-center w-full px-4 md:px-10 py-4 md:py-6">
      {/* Pill bar */}
      <div
        className={`${poppins.className} flex items-center inset-shadow-sm justify-between w-full max-w-3xl backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-2 rounded-full`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/main-logo.png"
            alt="logo"
            width={75}
            height={75}
            draggable={false}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NavLink.map(({ name, link }) => {
            const isActive = pathname === link;
            return (
              <Link
                key={link}
                href={link}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-neutral-900"
                    : "font-medium text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* Desktop login button */}
        <Link
          href="https://gtrac.in:8080/"
          target="_blank"
          className="hidden md:inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 text-center"
        >
          User Login
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden w-full max-w-3xl backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl mt-2 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${poppins.className} flex flex-col px-6 py-4 gap-4`}>
          {NavLink.map(({ name, link }) => {
            const isActive = pathname === link;
            return (
              <Link
                key={link}
                href={link}
                onClick={() => setMenuOpen(false)}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-neutral-900"
                    : "font-medium text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {name}
              </Link>
            );
          })}
          <Link
            href="https://gtrac.in:8080/"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 text-center w-fit"
          >
            User Login
          </Link>
        </div>
      </div>
    </div>
  );
}