import { footerLinks } from "@/constant/footerLinks";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Footer = () => {
  return (
    <footer className="relative z-50 bg-black w-full pt-14 sm:pt-20 lg:pt-24 pb-0 overflow-hidden text-neutral-200 border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-28 lg:mb-40 px-6 sm:px-10 lg:px-12 text-left">
        {/* Left Column: Logo & Copyright */}
        <div className="flex flex-col space-y-4 sm:space-y-6 shrink-0">
          <Image
            src="/main-logo.png"
            alt="G-Trac Logo"
            width={110}
            height={35}
            draggable={false}
            className="object-contain select-none"
          />
          <p
            className={`${poppins.className} text-xs text-zinc-400/70 font-light max-w-xs`}
          >
            Copyright &copy; {new Date().getFullYear()}, ITG Group of Companies,
            All Rights Reserved.
          </p>
        </div>

        {/* Middle Group: 3 Link Columns (Pages, Socials, Legal) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-8 sm:gap-12 md:gap-14 w-full sm:w-auto">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col space-y-3 min-w-22.5">
              <h3
                className={`${poppins.className} font-semibold text-white text-sm tracking-wider`}
              >
                {title}
              </h3>
              <ul
                className={`${poppins.className} space-y-2 text-xs text-zinc-400 font-light`}
              >
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Column: Our Company */}
        <div className="flex flex-col space-y-3 max-w-md lg:max-w-xs shrink-0">
          <h3
            className={`${poppins.className} font-semibold text-white text-sm tracking-wider`}
          >
            Our Company
          </h3>
          <p
            className={`${poppins.className} text-xs text-zinc-400 font-light leading-relaxed`}
          >
            As an epitome of trust and stable solutions ensuring 99% uptime, our
            Fleet Management Solutions strives to excel with world class
            technology and expertise aspiring to bring together the largest
            network of state of the art GPS hardware, software and PAN India
            support services.
          </p>
        </div>
      </div>

      <div className="relative w-full h-44 sm:h-60 lg:h-80 flex items-center justify-center select-none pointer-events-none mt-2 overflow-hidden">
        <h1
          className={`${goldman.className} absolute bottom-4 sm:bottom-6 lg:bottom-8 text-[17vw] sm:text-[15vw] lg:text-[14vw] font-bold tracking-wider select-none z-50 bg-clip-text text-transparent`}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(96, 96, 96, 0) 20.38%, rgba(198, 198, 198, 0.4) 54.15%, rgba(198, 198, 198, 0) 81.21%)",
          }}
        >
          G-TRAC
        </h1>

        <div
          className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 lg:h-45 overflow-hidden z-10"
          style={{
            perspective: "250px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            className="w-[200%] h-100 absolute left-[-50%] top-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              transform: "rotateX(75deg)",
              transformOrigin: "50% 0%",
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%)",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
