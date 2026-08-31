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
    <div className="min-h-screen flex flex-col justify-between">
      {/* Main Hero Section */}
      <main className="w-full max-w-340 mt-10 mx-auto flex-1 mb-16">
        {/* Heading */}
        <h1
          className={`${goldman.className} text-5xl sm:text-6xl md:text-7xl font-medium text-neutral-900 text-center tracking-tight mb-6`}
        >
          About Us
        </h1>

        {/* Subheading */}
        <p
          className={`${poppins.className} max-w-5xl mx-auto text-center text-neutral-600 text-sm font-light leading-relaxed mb-16`}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="relative rounded-3xl bg-neutral-50/80 border border-neutral-200/80 p-8 flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-300 group min-h-125 md:min-h-140">
            <div className="relative z-10">
              <h3
                className={`${goldman.className} text-2xl font-bold text-neutral-900 mt-4`}
              >
                Smart E-Lock System
              </h3>
              <p
                className={`${poppins.className} text-xs text-neutral-500 font-light mt-1`}
              >
                Live GPS tracking, tamper alerts &amp; OTP locking
              </p>
            </div>

            <div className="relative w-full h-80 flex items-center justify-center mt-auto">
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
          <div className="flex flex-col gap-6 justify-between">
            {/* Top Stat Card (Orange) */}
            <div className="rounded-3xl bg-linear-to-br from-[#ff5420d0] to-[#e64210e2] p-8 text-white flex flex-col justify-between shadow-xl min-h-60">
              <span
                className={`${poppins.className} text-xs font-semibold tracking-widest uppercase text-white/80`}
              >
                Live Scale &amp; Performance
              </span>
              <div className="my-auto">
                <h2
                  className={`${goldman.className} text-5xl sm:text-6xl font-bold tracking-tight text-white`}
                >
                  45,000+
                </h2>
                <p
                  className={`${poppins.className} text-white/90 font-medium text-base mt-2`}
                >
                  Active Assets Tracked Live
                </p>
              </div>
            </div>

            {/* Bottom Device Card (Image Cover) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 min-h-72.5 md:min-h-80 w-full h-full bg-neutral-100">
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
          <div className="flex flex-col gap-6 justify-between">
            {/* Top Device Card (Image Cover) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 min-h-72.5 md:min-h-80 w-full h-full bg-neutral-100">
              <Image
                src="/faq/obd-faq.png"
                alt="OBD Telematics"
                fill
                className="object-cover select-none"
                draggable={false}
              />
            </div>

            {/* Bottom Stat Card (Dark) */}
            <div className="rounded-3xl bg-[#0F1117] p-8 text-white flex flex-col justify-between shadow-xl min-h-60 border border-neutral-800">
              <span
                className={`${poppins.className} text-xs font-semibold tracking-widest uppercase text-neutral-400`}
              >
                Pan-India Support Network
              </span>
              <div className="my-auto">
                <h2
                  className={`${goldman.className} text-5xl sm:text-6xl font-bold tracking-tight text-white`}
                >
                  400+
                </h2>
                <p
                  className={`${poppins.className} text-neutral-300 font-medium text-base mt-2`}
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
