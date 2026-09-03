import { Goldman, Poppins } from "next/font/google";
import Image from "next/image";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const AboutHero = () => {
  return (
    <div className="min-h-0 lg:min-h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-12 pb-6 sm:pb-10 lg:pb-0">
      {/* Main Hero Section */}
      <main className="w-full max-w-340 mt-6 sm:mt-10 mx-auto flex-1 mb-6 sm:mb-12 lg:mb-16">
        {/* Heading */}
        <h1
          className={`${goldman.className} text-3xl sm:text-5xl md:text-7xl font-medium text-neutral-900 text-center tracking-tight mb-4 sm:mb-6`}
        >
          About Us
        </h1>

        {/* Subheading */}
        <p
          className={`${poppins.className} max-w-5xl mx-auto text-center text-neutral-600 text-xs sm:text-sm font-light leading-relaxed mb-8 sm:mb-16 px-2`}
        >
          ITG Telematics was started in 2010 with its first Office in New Delhi.
          Since then the company has grown to a network of five own Offices, in
          Delhi, Mumbai, Ahmedabad, Kolkata &amp; Jaipur along with 28 service
          centres and more than 400 service engineers stationed across strategic
          locations in India. We currently track 45000 active assets live on our
          server. This achievement places us among one of the leaders in the
          industry. We are one of the most trusted telematics solutions brands
          in India.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <div className="relative rounded-3xl bg-neutral-50/80 border border-neutral-200/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 group min-h-90 sm:min-h-125 md:min-h-140">
            <div className="relative z-10 text-left">
              <h3
                className={`${goldman.className} text-xl sm:text-2xl font-bold text-neutral-900 mt-2 sm:mt-4`}
              >
                Smart E-Lock System
              </h3>
              <p
                className={`${poppins.className} text-xs text-neutral-500 font-light mt-1`}
              >
                Live GPS tracking, tamper alerts &amp; OTP locking
              </p>
            </div>

            <div className="relative w-full h-56 sm:h-80 flex items-center justify-center mt-auto">
              <Image
                src="/faq/elock-faq.png"
                alt="E-Lock Hardware"
                fill
                className="object-contain drop-shadow-sm transition-transform duration-500 select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Middle Column - Orange Stat Card + Device Card */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Top Stat Card (Orange) */}
            <div className="rounded-3xl bg-linear-to-br from-[#ff5420d0] to-[#e64210e2] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl min-h-52 sm:min-h-60 text-left">
              <span
                className={`${poppins.className} text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/80`}
              >
                Live Scale &amp; Performance
              </span>
              <div className="my-auto py-2">
                <h2
                  className={`${goldman.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white`}
                >
                  45,000+
                </h2>
                <p
                  className={`${poppins.className} text-white/90 font-medium text-sm sm:text-base mt-1.5 sm:mt-2`}
                >
                  Active Assets Tracked Live
                </p>
              </div>
            </div>

            {/* Bottom Device Card (Image Cover) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 min-h-56 sm:min-h-72.5 md:min-h-80 w-full h-full bg-neutral-100">
              <Image
                src="/faq/dashcam-faq.png"
                alt="AI Dashcam"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column - Device Card + Dark Stat Card */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Top Device Card (Image Cover) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 min-h-56 sm:min-h-72.5 md:min-h-80 w-full h-full bg-neutral-100">
              <Image
                src="/faq/obd-faq.png"
                alt="OBD Telematics"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>

            {/* Bottom Stat Card (Dark) */}
            <div className="rounded-3xl bg-[#0F1117] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl min-h-52 sm:min-h-60 border border-neutral-800 text-left">
              <span
                className={`${poppins.className} text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-400`}
              >
                Pan-India Support Network
              </span>
              <div className="my-auto py-2">
                <h2
                  className={`${goldman.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white`}
                >
                  400+
                </h2>
                <p
                  className={`${poppins.className} text-neutral-300 font-medium text-sm sm:text-base mt-1.5 sm:mt-2`}
                >
                  Service Engineers Across 28 Centres
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutHero;
