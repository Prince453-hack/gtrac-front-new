"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

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

  return (
    <div className="relative z-50 flex items-center justify-center w-full px-10 py-6">
      <div
        className={`${poppins.className} flex items-center inset-shadow-sm justify-between w-full max-w-3xl backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-2 rounded-full`}
      >
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

        <div className="flex items-center gap-8">
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

        <Link
          href="https://gtrac.in:8080/"
          target="_blank"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 text-center"
        >
          User Login
        </Link>
      </div>
    </div>
  );
}
