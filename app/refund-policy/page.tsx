import { Goldman, Poppins } from "next/font/google";
import Link from "next/link";
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  AlertCircle,
  Truck,
  Scale,
  Phone,
  RefreshCw,
  Mail,
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
  { id: "eligibility", title: "1. Refund Eligibility" },
  { id: "process", title: "2. Refund Process & Timeline" },
  { id: "exceptions", title: "3. Exemptions & Non-Refundable Items" },
  { id: "return-shipping", title: "4. Return Shipping Guidelines" },
  { id: "disputes", title: "5. Refund Disputes & Escalation" },
  { id: "contact-support", title: "6. Contact Customer Support" },
  { id: "policy-updates", title: "7. Policy Updates & Modifications" },
];

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutral-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6">
            <RotateCcw className="w-3.5 h-3.5 text-[#FF5520]" />
            <span
              className={`${poppins.className} text-xs font-medium text-neutral-600`}
            >
              Customer Satisfaction &amp; Returns
            </span>
          </div>

          <h1
            className={`${goldman.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-4`}
          >
            Refund Policy
          </h1>

          <p
            className={`${poppins.className} text-xs sm:text-sm text-neutral-400 font-light mb-6`}
          >
            Last updated: August 31, 2026 • Published by Gtrac / ITG Telematics Pvt. Ltd.
          </p>

          <p
            className={`${poppins.className} text-base sm:text-lg text-neutral-600 font-light leading-relaxed`}
          >
            At <strong className="font-semibold text-neutral-900">Gtrac</strong>,
            we are committed to providing excellent products and services to our
            customers. In the event that you are not satisfied with your
            purchase, we offer the following comprehensive refund policy.
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

          {/* Refund Content Prose */}
          <main
            className={`${poppins.className} lg:col-span-8 flex flex-col space-y-12 text-neutral-700 text-sm sm:text-base font-light leading-relaxed`}
          >
            {/* 1. REFUND ELIGIBILITY */}
            <section id="eligibility" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <CheckCircle2 className="w-5 h-5 text-neutral-500" />
                1. Refund Eligibility
              </h2>
              <p>
                To qualify for a refund, requests must be submitted in accordance
                with the following criteria:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-600">
                <li>
                  Refunds are eligible when requested through our customer support team at{" "}
                  <strong className="text-neutral-900 font-medium">
                    +91 11 46254625 / 4915 5050
                  </strong>{" "}
                  from the date of purchase.
                </li>
                <li>
                  To be eligible for a refund, the hardware product or device
                  must be in its original condition and packaging with all
                  accompanying accessories.
                </li>
                <li>
                  Products damaged due to misuse, unauthorized modifications,
                  tampering, or improper handling are not eligible for refunds.
                </li>
                <li>
                  Refunds are not applicable to customized products or services
                  specifically tailored to individual customer specifications.
                </li>
              </ul>
            </section>

            {/* 2. REFUND PROCESS */}
            <section id="process" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Clock className="w-5 h-5 text-neutral-500" />
                2. Refund Process &amp; Timeline
              </h2>
              <p>
                Our refund process is structured to ensure fast, transparent, and
                equitable resolutions:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="font-semibold text-neutral-900 block mb-1">
                    Step 1: Contact Support
                  </strong>
                  To request a refund, please contact our customer support team
                  at{" "}
                  <a
                    href="tel:+911146254625"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    +91 11 46254625 / 4915 5050
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@g-trac.in"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    info@g-trac.in
                  </a>{" "}
                  and provide your order number and transaction details.
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="font-semibold text-neutral-900 block mb-1">
                    Step 2: Verification &amp; Inspection
                  </strong>
                  Our technical and accounts team will review your request and
                  verify product return conditions to determine eligibility.
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="font-semibold text-neutral-900 block mb-1">
                    Step 3: Processing &amp; Disbursement
                  </strong>
                  If your refund request is approved, refunds will be processed
                  within <strong>7 business days</strong> to the original
                  method of payment. You will receive an official confirmation
                  email once the refund transaction is completed.
                </div>
              </div>
            </section>

            {/* 3. EXCEPTIONS & NON-REFUNDABLE ITEMS */}
            <section id="exceptions" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <AlertCircle className="w-5 h-5 text-neutral-500" />
                3. Exemptions &amp; Non-Refundable Items
              </h2>
              <p>
                Certain products and services are exempt from refunds due to
                their nature. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-600">
                <li>
                  Downloadable software, licenses, or digital products once
                  they have been downloaded, activated, or accessed.
                </li>
                <li>
                  Professional services that have already been rendered,
                  including on-site vehicle installation, hardware setup,
                  calibration, or custom software integration.
                </li>
                <li>
                  Refunds for subscription-based telematics services will be
                  prorated based on the remaining unused portion of the active
                  billing cycle.
                </li>
              </ul>
            </section>

            {/* 4. RETURN SHIPPING */}
            <section id="return-shipping" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Truck className="w-5 h-5 text-neutral-500" />
                4. Return Shipping Guidelines
              </h2>
              <p>
                If physical hardware return is required:
              </p>
              <p>
                Customers are responsible for return shipping costs unless the
                product is deemed defective, malfunctioning, or damaged upon
                initial receipt and verified by our technical team.
              </p>
              <p>
                We recommend using a reputable, trackable shipping courier
                service for returns to ensure safe and verifiable delivery to our
                service facility.
              </p>
            </section>

            {/* 5. DISPUTES */}
            <section id="disputes" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Scale className="w-5 h-5 text-neutral-500" />
                5. Refund Disputes &amp; Escalation
              </h2>
              <p>
                If you disagree with our decision regarding your refund request,
                you may escalate the issue to our senior management team for
                further review.
              </p>
              <p>
                We will make every effort to resolve any refund disputes in a
                fair, equitable, and timely manner.
              </p>
            </section>

            {/* 6. CONTACT US */}
            <section id="contact-support" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Phone className="w-5 h-5 text-neutral-500" />
                6. Contact Customer Support
              </h2>
              <p>
                If you have any questions or concerns regarding our refund
                policy, please don&apos;t hesitate to reach out:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-xs text-neutral-500 uppercase font-medium block mb-1">
                    Phone Support
                  </span>
                  <a
                    href="tel:+911146254625"
                    className="text-sm font-medium text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    +91 11 46254625 / 4915 5050
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-xs text-neutral-500 uppercase font-medium block mb-1">
                    Email Support
                  </span>
                  <a
                    href="mailto:info@g-trac.in"
                    className="text-sm font-medium text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    info@g-trac.in
                  </a>
                </div>
              </div>
            </section>

            {/* 7. POLICY UPDATES */}
            <section id="policy-updates" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <RefreshCw className="w-5 h-5 text-neutral-500" />
                7. Policy Updates &amp; Modifications
              </h2>
              <p>
                We reserve the right to update or modify this refund policy at
                any time without prior notice. Any changes will be effective
                immediately upon posting on our website.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
