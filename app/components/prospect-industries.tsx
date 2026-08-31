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
      className={`${goldman.className} min-h-screen bg-white p-20 pt-32 flex flex-col space-y-[10%]`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="size-3 bg-blue-600 rounded-full">
              <div className="size-3 bg-blue-600 rounded-full animate-ping" />
            </div>
            <h1 className="text-zinc-500">Prospect Industries</h1>
          </div>
          <h1 className="text-5xl text-zinc-800">
            Industries Specific <br /> Solution
          </h1>
        </div>

        <div className="max-w-2xl mt-10">
          <h1 className="text-lg text-zinc-500">
            G-Trac delivers smart logistics solutions with real-time tracking,
            route optimization, and predictive maintenance for efficient fleet
            management.
          </h1>
        </div>
      </div>

      <div className="flex items-stretch justify-between gap-6 w-full h-[48vh]">
        {ProspectData.map(({ title, description, imagePath }) => (
          <div
            key={title}
            className="relative group flex-1 hover:flex-[2.8] h-full bg-[#FCFCFD] hover:bg-transparent border border-neutral-100/80 shadow-md p-6 pb-0 flex flex-col hover:shadow-none hover:border-none justify-between cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
          >
            {/* Text Area */}
            <div className="absolute top-5 left-5 right-5 text-left flex flex-col z-10">
              <h2 className="text-xl font-semibold text-zinc-800 tracking-wide max-w-40 group-hover:max-w-full transition-all duration-500 ease-in-out">
                {title}
              </h2>
              <p
                className={`${poppins.className} text-sm text-zinc-500 font-light mt-3 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-in-out`}
              >
                {description}
              </p>
            </div>

            {/* Bottom Image (Anchored flush to bottom) */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-[25vh] sm:h-[27vh] group-hover:h-[28vh] flex items-end justify-center overflow-hidden transition-all duration-500 ease-in-out">
              <Image
                src={imagePath}
                alt={title}
                width={500}
                height={500}
                draggable={false}
                className="object-contain object-bottom w-full h-full max-h-full transition-all duration-500 ease-in-out transform scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="-mt-5">
        <div className="text-center">
          <h1 className="text-3xl mb-5">Trusted by 1000+ Known Companies</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-tight">
            Delivering reliable, secure and scalable solutions to businesses
            across industries.
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-16 select-none py-4 mask-fade">
          <div className="animate-marquee">
            {companyLogos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="relative h-14 w-28 md:w-36 flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
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
                className="relative h-14 w-28 md:w-36 flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
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
