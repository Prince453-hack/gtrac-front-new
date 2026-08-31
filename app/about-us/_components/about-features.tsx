import { Goldman, Poppins } from "next/font/google";
import { Award, ThumbsUp, Clock } from "lucide-react";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const featureCards = [
  {
    icon: Award,
    title: "PAN India 24 Hours Support",
    description: "Dedicated Support Staff for Customers",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    icon: ThumbsUp,
    title: "Dynamic Reporting",
    description:
      "SMS/E-Mail/Mobile alerts for exceptions defined by Customers.",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    title: "Ultimate Product Quality",
    description:
      "Stable Hardware at Competitive Pricing, More than 99% service uptime, Proven track record & references",
    iconBg: "bg-red-50 text-red-600",
  },
];

const AboutFeatures = () => {
  return (
    <section className="w-full bg-white flex flex-col pt-16 md:pt-20 pb-20 md:pb-24">
      <div className="max-w-340 mx-auto px-6 md:px-12 w-full">
        {/* Title vs Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-mono font-medium tracking-widest text-blue-600 uppercase">
              Core Capabilities
            </span>
            <h2
              className={`${goldman.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight`}
            >
              What Sets <br /> Us Apart
            </h2>
          </div>

          <div
            className={`${poppins.className} flex flex-col space-y-4 text-neutral-600 text-sm sm:text-base font-light leading-relaxed`}
          >
            <p>
              Our G-TRAC GPS based vehicle tracking solutions is presently
              helping thousands of fleet owners to drive down operating costs
              and increase earnings. Fleet owners experience a dramatic increase
              in productivity, substantial fuel savings and greatly reduced
              operating expenses.
            </p>
            <p>
              The system enables fleet owners to locate and deploy their vehicles
              with live, real-time tracking and provides minute-by-minute route
              verification, enabling them to settle customer disputes, provide
              proof of service and ensure the fleet is not burning un-necessary
              fuel. G-TRAC’s key management reports enable business owners to
              verify time sheets accurately, leading to reduced overtime
              expenses, compare hours worked by each vehicle, and establish
              accurate cost validation of fleet activity.
            </p>
          </div>
        </div>

        {/* 3 Core Feature Cards (Compact Height) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {featureCards.map(
            ({ icon: Icon, title, description, iconBg }, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 md:py-8 rounded-3xl bg-neutral-50/90 border border-neutral-200/80 shadow-xs flex flex-col items-center text-center space-y-3.5 w-full"
              >
                <div
                  className={`w-13 h-13 rounded-xl flex items-center justify-center ${iconBg}`}
                >
                  <Icon className="w-6.5 h-6.5 stroke-[1.8]" />
                </div>
                <h3
                  className={`${goldman.className} text-lg sm:text-xl font-medium text-neutral-900`}
                >
                  {title}
                </h3>
                <p
                  className={`${poppins.className} text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-sm`}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
