import { Goldman, Poppins } from "next/font/google";
import Link from "next/link";
import {
  ShieldAlert,
  UserCheck,
  Navigation,
  Crosshair,
  HardDrive,
  Database,
  CodeXml,
  RefreshCw,
  FileCheck,
  Building2,
} from "lucide-react";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sections = [
  { id: "your-account", title: "1. Your Account" },
  { id: "lines-accuracy", title: "2. Lines Accuracy" },
  { id: "gps-accuracy", title: "3. GPS Accuracy" },
  { id: "liability-gps", title: "4. Liability for GPS Units" },
  { id: "data-disclaimer", title: "5. Data Disclaimer" },
  { id: "software-warranty", title: "6. Software Warranty & Content Rules" },
  { id: "changes-to-agreement", title: "7. Modifications & Changes" },
  { id: "waiver-liability", title: "8. Waiver and Release of Liability" },
  { id: "company-overview", title: "9. Company Commitment" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutral-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF5520]" />
            <span
              className={`${poppins.className} text-xs font-medium text-neutral-600`}
            >
              Copy of Licence Conditions and Limited Warranty
            </span>
          </div>

          <h1
            className={`${goldman.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-4`}
          >
            Terms &amp; Conditions
          </h1>

          <p
            className={`${poppins.className} text-xs sm:text-sm text-neutral-400 font-light mb-6`}
          >
            Last updated: August 31, 2026 • Published by ITG Telematics Pvt. Ltd.
          </p>

          <p
            className={`${poppins.className} text-base sm:text-lg text-neutral-600 font-light leading-relaxed`}
          >
            The following terms and conditions govern all use of the{" "}
            <strong className="font-semibold text-neutral-900">
              trackingexperts.com
            </strong>{" "}
            website and all content, services, and products available at or
            through the website (taken together, the Website). The Website is
            owned and operated by{" "}
            <strong className="font-semibold text-neutral-900">
              ITG Telematics Pvt. Ltd.
            </strong>{" "}
            The Website is offered subject to your acceptance without modification
            of all of the terms and conditions contained herein and all other
            operating rules, policies, and procedures that may be published from
            time to time on this Site by ITG Telematics Pvt. Ltd. (collectively,
            the &ldquo;Agreement&rdquo;).
          </p>
          <p
            className={`${poppins.className} text-sm text-neutral-500 font-light leading-relaxed mt-4`}
          >
            Please read this Agreement carefully before accessing or using the
            web site. By accessing or using any part of the web site, you agree
            to become bound by the terms and conditions of this agreement. If you
            do not agree to all the terms and conditions of this agreement, then
            you may not access the website or use any services. If these terms
            and conditions are considered an offer by ITG Telematics Pvt. Ltd.,
            acceptance is expressly limited to these terms.
          </p>
        </div>

        {/* 2-Column Main Layout: Sticky Sidebar TOC + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <h3
              className={`${goldman.className} text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-4`}
            >
              Table of Contents
            </h3>
            <nav className="flex flex-col space-y-2">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${poppins.className} text-xs text-neutral-500 hover:text-neutral-900 transition-colors py-1 block leading-normal`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Terms Content Prose */}
          <main
            className={`${poppins.className} lg:col-span-8 flex flex-col space-y-12 text-neutral-700 text-sm sm:text-base font-light leading-relaxed`}
          >
            {/* 1. YOUR ACCOUNT */}
            <section id="your-account" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <UserCheck className="w-5 h-5 text-neutral-500" />
                1. Your Account
              </h2>
              <p>
                You are responsible for maintaining the security of your account,
                and you are fully responsible for all activities that occur
                under the account and any other actions taken in connection with
                it. You must not use your account in a misleading or unlawful
                manner, including in a manner intended to trade on the name or
                reputation of others.
              </p>
              <p>
                ITG Telematics Pvt. Ltd. may change or remove any description or
                keyword that it considers inappropriate or unlawful, or
                otherwise likely to cause ITG Telematics Pvt. Ltd. liability. You
                must immediately notify ITG Telematics Pvt. Ltd. of any
                unauthorized uses of your account or any other breaches of
                security. ITG Telematics Pvt. Ltd. will not be liable for any
                acts or omissions by You, including any damages of any kind
                incurred as a result of such acts or omissions.
              </p>
            </section>

            {/* 2. LINES ACCURACY */}
            <section id="lines-accuracy" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Navigation className="w-5 h-5 text-neutral-500" />
                2. Lines Accuracy
              </h2>
              <p>
                The lines dataset/s have been simplified in order to reduce the
                number of trackpoints required for detailed lines. This allows
                more features to be loaded into your GPS unit, as these devices
                have trackpoint number limitations of varying sizes.
              </p>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-600">
                <strong className="font-semibold text-neutral-900 block mb-1">
                  GIS Positional Variance:
                </strong>
                As a result of line simplification, the lines may be up to 10
                metres from their defined position as stored in the original
                Geographic Information System (GIS) dataset.
              </div>
            </section>

            {/* 3. GPS ACCURACY */}
            <section id="gps-accuracy" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Crosshair className="w-5 h-5 text-neutral-500" />
                3. GPS Accuracy
              </h2>
              <p>
                Most GPS manufacturers state the accuracy of their standard GPS
                receivers to be within <strong>+/- 10 metres</strong> of the
                true ground coordinate. Our enterprise telematics devices come
                engineered with superior precision offering{" "}
                <strong className="text-neutral-900">
                  +/- 2.5 metres of accuracy
                </strong>
                .
              </p>
            </section>

            {/* 4. LIABILITY FOR GPS UNITS */}
            <section id="liability-gps" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <HardDrive className="w-5 h-5 text-neutral-500" />
                4. Liability for GPS Units
              </h2>
              <p>
                ITG Telematics Pvt. Ltd. does not accept any responsibility or
                provide any liability for any damage to, or loss of data from,
                GPS hardware resulting from the use of this data.
              </p>
              <p>
                It is the sole responsibility of the user to ensure the
                compatibility and protection of any hardware used in conjunction
                with said data.
              </p>
            </section>

            {/* 5. DATA DISCLAIMER */}
            <section id="data-disclaimer" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Database className="w-5 h-5 text-neutral-500" />
                5. Data Disclaimer
              </h2>
              <p>
                ITG Telematics Pvt. Ltd. uses the best available data. However,
                GIS data and product accuracy may vary. GIS data and products
                may be developed from sources of differing accuracy, accurate
                only at certain scales and times, based on modelling or
                interpretation, or incomplete while being created or revised.
              </p>
              <p>
                We reserve the right to correct, update, modify or replace GIS
                products without notification and cannot assure the accuracy,
                completeness, reliability or suitability of this information for
                any particular purpose. Using GIS data for purposes other than
                those for which they were created may yield inaccurate or
                misleading results.
              </p>
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/90 text-neutral-700 text-xs sm:text-sm">
                <strong className="font-semibold text-neutral-900 block mb-1">
                  Proprietary Rights &amp; Limitation:
                </strong>
                The recipient may neither assert any proprietary rights to this
                information nor represent it to anyone as other than ITG
                Telematics Pvt. Ltd. produced information. ITG Telematics Pvt.
                Ltd. shall not be liable for any activity involving this
                information with respect to lost profits, lost savings, or any
                other consequential damages. It is the user&apos;s
                responsibility to first ensure that the information provided is
                suitable for the intended usage.
              </div>
            </section>

            {/* 6. SOFTWARE WARRANTY */}
            <section id="software-warranty" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <CodeXml className="w-5 h-5 text-neutral-500" />
                6. Software Warranty &amp; Content Rules
              </h2>
              <p>
                The software is provided on an <strong>&lsquo;as is&rsquo;</strong> basis
                only and no warranties are given. By using the software and
                website, you represent that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-600">
                <li>
                  The Content does not contain or install any viruses, worms,
                  malware, Trojan horses, or other harmful or destructive
                  content;
                </li>
                <li>
                  The Content is not spam, and does not contain unethical or
                  unwanted commercial content designed to drive traffic to third
                  party sites or boost search engine rankings, or to further
                  unlawful acts (such as phishing) or mislead recipients as to the
                  source of the material (such as spoofing);
                </li>
                <li>
                  The Content is not obscene, libelous, defamatory, hateful, or
                  racially or ethnically objectionable, and does not violate the
                  privacy or publicity rights of any third party.
                </li>
              </ul>
              <p>
                Both GPS unit and software provided give no warranties, either
                expressed or implied, including but not limited to implied
                warranties of merchantability and fitness for a particular
                purpose, with respect to the software and any associated data or
                maps. We do not claim that the software and/or associated data is
                error-free or 100% accurate.
              </p>
              <p>
                Without limiting any of those representations or warranties, ITG
                Telematics Pvt. Ltd. has the right (though not the obligation)
                to, in its sole discretion: (i) refuse or remove any content
                that, in its reasonable opinion, violates any ITG Telematics Pvt.
                Ltd. policy or is in any way harmful or objectionable, or (ii)
                terminate or deny access to and use of the Website to any
                individual or entity for any reason. ITG Telematics Pvt. Ltd.
                will have no obligation to provide a refund of any amounts
                previously paid.
              </p>
            </section>

            {/* 7. CHANGES TO AGREEMENT */}
            <section
              id="changes-to-agreement"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <RefreshCw className="w-5 h-5 text-neutral-500" />
                7. Modifications &amp; Changes
              </h2>
              <p>
                ITG Telematics Pvt. Ltd. reserves the right, at its sole
                discretion, to modify or replace any part of this Agreement. It
                is your responsibility to check this Agreement periodically for
                changes. Your continued use of or access to the Website following
                the posting of any changes to this Agreement constitutes
                acceptance of those changes.
              </p>
              <p>
                ITG Telematics Pvt. Ltd. may also, in the future, offer new
                services and/or features through the Website (including the
                release of new tools and resources). Such new features and/or
                services shall be subject to the terms and conditions of this
                Agreement.
              </p>
              <p>
                By using the mapping features of Ride with GPS, you agree to be
                bound by Google&apos;s Terms of Use, which can be found at the
                Google Maps website.
              </p>
            </section>

            {/* 8. WAIVER AND RELEASE OF LIABILITY */}
            <section id="waiver-liability" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <FileCheck className="w-5 h-5 text-neutral-500" />
                8. Waiver and Release of Liability
              </h2>
              <p>
                In consideration of ITG Telematics Pvt. Ltd. furnishing services
                to enable you to use the ITG Telematics application in connection
                with activities including, but not limited to, tracking,
                managing, route planning, and/or participation in fleet
                management (collectively &ldquo;Activities&rdquo;), you agree to the terms
                of this Waiver and Release of Liability.
              </p>
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/90 text-neutral-700 text-xs sm:text-sm space-y-3">
                <p>
                  <strong>Installation &amp; Operation Duty:</strong> The
                  Company&apos;s installer will show that the device is working
                  properly at the time of installation, and after that it is the
                  customer&apos;s duty to see that the device is working properly
                  on a daily basis. In case of non-working, the customer must
                  communicate to the company immediately, and the company will
                  resolve the problem if all other things are in order.
                </p>
                <p>
                  <strong>Limitation of Technology Claims:</strong> The GPS
                  device is provided to facilitate your needs and it does not
                  cover any type of losses, damages, or claims of whatsoever
                  nature due to non-working of the device or failure of
                  technology by any reason. The installer company/manufacturer
                  will not be liable for any type of losses, damages, or claims
                  arising before or after installation.
                </p>
                <p>
                  <strong>Vehicle Privacy Waiver &amp; Indemnity:</strong> The
                  customer(s) voluntarily waive any right to privacy in the
                  location of the Vehicle and authorize us to use the
                  Device&apos;s GPS capabilities to locate the Vehicle. The
                  customer agrees to hold harmless, defend, and indemnify the
                  Device manufacturer, service provider, our agents, employees,
                  and servants from all claims, damages, liabilities, or losses
                  to property or person arising from the use of the Device in the
                  Vehicle to the fullest extent permitted by applicable law.
                </p>
              </div>
            </section>

            {/* 9. COMPANY COMMITMENT */}
            <section id="company-overview" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Building2 className="w-5 h-5 text-neutral-500" />
                9. Company Commitment &amp; Support Network
              </h2>
              <p>
                As an epitome of trust and stable solutions ensuring{" "}
                <strong>99% uptime</strong>, our Fleet Management Solutions
                strive to excel with world-class technology and expertise,
                aspiring to bring together the largest network of
                state-of-the-art GPS hardware, software, and PAN India support
                services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h4
                    className={`${goldman.className} text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2`}
                  >
                    Quick Links
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    <li>
                      <Link href="/" className="hover:underline text-blue-600">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="hover:underline text-blue-600"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="hover:underline text-blue-600"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:underline text-blue-600"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <h4
                    className={`${goldman.className} text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2`}
                  >
                    Contact &amp; Assistance
                  </h4>
                  <p className="text-xs text-neutral-600 mb-1">
                    ITG Telematics Pvt. Ltd.
                  </p>
                  <p className="text-xs text-neutral-600 mb-1">
                    Phone: +91 11 46254625 / 4915 5050
                  </p>
                  <a
                    href="mailto:info@g-trac.in"
                    className="text-xs text-blue-600 font-medium hover:underline block"
                  >
                    info@g-trac.in
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
