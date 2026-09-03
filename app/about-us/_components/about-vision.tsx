import { Goldman, Poppins } from "next/font/google";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const stats = [
  {
    value: "25,000+",
    label: "Live Assets Tracked Online",
  },
  {
    value: "200+",
    label: "Stationed Service Engineers",
  },
  {
    value: "28+",
    label: "Pan-India Service Centres",
  },
  {
    value: "5",
    label: "Corporate Regional Hubs",
  },
];

const AboutVision = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-8 sm:py-14 md:py-20 px-4 sm:px-8 lg:px-12 border-t border-neutral-200/70">
      <div className="max-w-340 mx-auto flex flex-col space-y-8 sm:space-y-12 md:space-y-14">
        {/* Top 2-Column Split: Title vs Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start text-left">
          {/* Left Heading */}
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-blue-600 uppercase">
              Vision &amp; Purpose
            </span>
            <h2
              className={`${goldman.className} text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight`}
            >
              Innovating GPS Tracking <br className="hidden sm:inline" />
              For India&apos;s Growth
            </h2>
          </div>

          {/* Right Description */}
          <div
            className={`${poppins.className} flex flex-col space-y-3 sm:space-y-4 text-neutral-600 text-xs sm:text-base font-light leading-relaxed`}
          >
            <p>
              Our vision is to always remain as the most appreciated GPS Vehicle
              Tracking solutions company in India. We have clients in all types
              of industries including people transport, cargo and logistics,
              construction and mining and several Government departments.
            </p>
            <p>
              Our vision includes that we continue to innovate and bring
              required changes in the technology of GPS vehicle tracking
              solutions meeting customer requirements. We have vision to keep
              providing better GPS vehicle tracking solutions in such a simple
              and advanced form that all our clients and all the people
              associated with the transportation industry of India should feel
              very delighted while applying those solutions for their vehicles.
            </p>
          </div>
        </div>

        {/* Bottom 4-Column Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 pt-6 sm:pt-8 border-t border-neutral-300/80 text-left">
          {stats.map(({ value, label }, index) => (
            <div
              key={index}
              className={`flex flex-col space-y-1 sm:space-y-1.5 ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-neutral-300 lg:pr-8"
                  : ""
              } ${index !== 0 ? "lg:pl-8" : ""}`}
            >
              <span
                className={`${goldman.className} text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight`}
              >
                {value}
              </span>
              <p
                className={`${poppins.className} text-xs sm:text-sm text-neutral-500 font-light`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
