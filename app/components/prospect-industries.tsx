import { companyLogos, ProspectData } from "@/constant/prospect";
import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ProspectIndustries = () => {
  return (
    <div
      className={`${goldman.className} min-h-screen bg-white p-6 sm:p-12 lg:p-20 pt-16 sm:pt-24 lg:pt-32 flex flex-col space-y-16 sm:space-y-20 lg:space-y-[10%]`}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-2">
            <div className="size-3 bg-blue-600 rounded-full">
              <div className="size-3 bg-blue-600 rounded-full animate-ping" />
            </div>
            <h1 className="text-sm sm:text-base text-zinc-500">Prospect Industries</h1>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-zinc-800 leading-tight">
            Industries Specific <br className="hidden sm:inline" /> Solution
          </h1>
        </div>

        <div className="max-w-2xl mt-0 lg:mt-10">
          <h1 className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            G-Trac delivers smart logistics solutions with real-time tracking,
            route optimization, and predictive maintenance for efficient fleet
            management.
          </h1>
        </div>
      </div>

      {/* Cards container: stacked on mobile/tablet, accordion flex on desktop (lg+) */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 w-full lg:h-[48vh]">
        {ProspectData.map(({ title, description, imagePath }) => (
          <div
            key={title}
            className="relative group w-full lg:flex-1 lg:hover:flex-[2.8] min-h-80 sm:min-h-90 lg:min-h-0 h-85 sm:h-95 lg:h-full bg-[#FCFCFD] lg:hover:bg-transparent border border-neutral-100/80 shadow-md p-6 pb-0 flex flex-col lg:hover:shadow-none lg:hover:border-none justify-between cursor-pointer rounded-xl lg:rounded-none transition-all duration-500 ease-in-out overflow-hidden"
          >
            {/* Text Area */}
            <div className="absolute top-5 left-5 right-5 text-left flex flex-col z-10">
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 tracking-wide max-w-full lg:max-w-40 lg:group-hover:max-w-full transition-all duration-500 ease-in-out">
                {title}
              </h2>
              {/* Preview text on desktop, clean clamped preview on mobile */}
              <div className="mt-2 sm:mt-3 lg:group-hover:hidden">
                <p
                  className={`${poppins.className} text-xs sm:text-sm text-zinc-500 font-light leading-relaxed line-clamp-3 sm:line-clamp-4`}
                >
                  {description}
                </p>
              </div>

              <p
                className={`${poppins.className} text-sm text-zinc-500 font-light mt-3 leading-relaxed hidden lg:group-hover:block transition-all duration-500 ease-in-out`}
              >
                {description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 w-full h-45 sm:h-55 lg:h-[25vh] lg:sm:h-[27vh] lg:group-hover:h-[28vh] flex items-end justify-center overflow-hidden transition-all duration-500 ease-in-out">
              <Image
                src={imagePath}
                alt={title}
                width={500}
                height={500}
                draggable={false}
                className="object-contain object-bottom w-full h-full max-h-full transition-all duration-500 ease-in-out transform scale-105 sm:scale-110 lg:group-hover:scale-100"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="-mt-5">
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-5">Trusted by 1000+ Known Companies</h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-normal sm:leading-tight">
            Delivering reliable, secure and scalable solutions to businesses
            across industries.
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-10 sm:mt-16 select-none py-4 mask-fade">
          <div className="animate-marquee">
            {companyLogos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="relative h-12 sm:h-14 w-24 sm:w-28 md:w-36 flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
              >
                <Image
                  src={`/prospect/companies/${logo}`}
                  alt={logo.replace(".png", "")}
                  width={180}
                  height={70}
                  draggable={false}
                  className="object-contain max-h-full max-w-full select-none"
                />
              </div>
            ))}

            {companyLogos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="relative h-12 sm:h-14 w-24 sm:w-28 md:w-36 flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
              >
                <Image
                  src={`/prospect/companies/${logo}`}
                  alt={logo.replace(".png", "")}
                  width={180}
                  height={70}
                  draggable={false}
                  className="object-contain max-h-full max-w-full select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectIndustries;
