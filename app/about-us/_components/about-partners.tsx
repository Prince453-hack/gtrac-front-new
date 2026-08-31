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

const companyLogos = [
  { name: "JCB", src: "/prospect/companies/jcb.png" },
  { name: "Vedanta", src: "/prospect/companies/vedanta.png" },
  { name: "OM Logistics", src: "/prospect/companies/om-logistics.png" },
  { name: "Lotus Herbals", src: "/prospect/companies/lotus.png" },
  { name: "Reliance Jio", src: "/jio-logo.png" },
  { name: "Enterprise Partner", src: "/prospect/companies/image 119.png" },
  { name: "Logistics Partner", src: "/prospect/companies/image 120.png" },
  { name: "Transport Partner", src: "/prospect/companies/image 121.png" },
  { name: "Supply Chain Partner", src: "/prospect/companies/image 122.png" },
  { name: "Fleet Partner", src: "/prospect/companies/image 123.png" },
  { name: "Mining Partner", src: "/prospect/companies/image 125.png" },
  { name: "Infrastructure Partner", src: "/prospect/companies/image 129.png" },
];

const AboutPartners = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-neutral-200/70 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4 mb-16 sm:mb-20">
        <h2
          className={`${goldman.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight`}
        >
          Our Trusted Partner
        </h2>
        <p
          className={`${poppins.className} text-neutral-500 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto`}
        >
          Collaborating with industry leaders to deliver the best telematics and
          fleet management solutions for our clients.
        </p>
      </div>

      {/* Full-Width Edge-to-Edge Hairline Partner Grid */}
      <div className="w-full border-y border-neutral-200/80 bg-white">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-neutral-200/80">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="h-36 sm:h-44 md:h-48 flex items-center justify-center p-6 sm:p-10 bg-white hover:bg-neutral-50/70 transition-all duration-300 group"
            >
              <div className="relative w-32 h-14 sm:w-40 sm:h-16 md:w-48 md:h-20 flex items-center justify-center">
                <Image
                  src={company.src}
                  alt={company.name}
                  fill
                  className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 group-hover:scale-105"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
