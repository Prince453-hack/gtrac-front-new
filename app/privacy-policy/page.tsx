import { Goldman, Poppins } from "next/font/google";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  Globe2,
  Server,
  Cookie,
  UserCheck,
  BellRing,
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
  { id: "scope", title: "1. Scope" },
  {
    id: "data-controller",
    title: "2. Information We Collect as Data Controller",
  },
  { id: "use-of-information", title: "3. Use of Information We Control" },
  { id: "data-processed-for-others", title: "4. Data We Process for Others" },
  { id: "cookies-and-tools", title: "5. Cookies & Automated Tracking" },
  { id: "cookie-types", title: "6. Cookie Categories & Management" },
  { id: "web-beacons-and-ip", title: "7. Web Beacons & IP Addresses" },
  { id: "third-party-links", title: "8. Links & Social Referrals" },
  {
    id: "sharing-and-disclosure",
    title: "9. Sharing & Disclosure of Personal Data",
  },
  { id: "international-transfers", title: "10. Cross-Border Data Transfers" },
  { id: "security", title: "11. Security Measures" },
  { id: "children-policy", title: "12. Children's Online Information Policy" },
  {
    id: "access-and-correction",
    title: "13. Access & Correcting Your Information",
  },
  { id: "policy-changes", title: "14. Changes to This Privacy Statement" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Header Title Section */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-neutral-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5520]" />
            <span
              className={`${poppins.className} text-xs font-medium text-neutral-600`}
            >
              Legal Documentation
            </span>
          </div>

          <h1
            className={`${goldman.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-4`}
          >
            Privacy Policy
          </h1>

          <p
            className={`${poppins.className} text-xs sm:text-sm text-neutral-400 font-light mb-6`}
          >
            Last updated: August 31, 2026 • Effective Date: January 1, 2026
          </p>

          <p
            className={`${poppins.className} text-base sm:text-lg text-neutral-600 font-light leading-relaxed`}
          >
            This Privacy Statement explains what types of information{" "}
            <strong className="font-semibold text-neutral-900">
              ITG Telematics Pvt Ltd
            </strong>{" "}
            and its wholly-owned subsidiaries (&ldquo;G-Trac,&rdquo;
            &ldquo;we,&rdquo; or &ldquo;us&rdquo;) or our service providers may
            collect from or about visitors to, or users of, our websites or
            applications (&ldquo;you&rdquo;), and describes our practices for
            collecting, using, retaining, protecting, disclosing, and
            transferring such information.
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

          {/* Policy Content Prose */}
          <main
            className={`${poppins.className} lg:col-span-8 flex flex-col space-y-12 text-neutral-700 text-sm sm:text-base font-light leading-relaxed`}
          >
            {/* 1. SCOPE */}
            <section id="scope" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <FileText className="w-5 h-5 text-neutral-500" />
                1. Scope
              </h2>
              <p>
                When expressing an interest in obtaining additional information
                about the Services offered by us, or by registering to use the
                Services, ITG requires you to provide us with personal contact
                information, such as name, company name, address, phone number,
                and email address.
              </p>
              <p>
                When purchasing the Services, ITG may require you to provide us
                with financial qualification and billing information, such as
                billing name and address, credit card number, and the number of
                employees within the organization that will be using the
                Services. ITG may also ask you to provide additional
                information, such as company fleet size, size of your field
                services staff, annual revenues, number of employees, or
                industry.
              </p>
            </section>

            {/* 2. INFORMATION WE COLLECT AS DATA CONTROLLER */}
            <section id="data-controller" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <UserCheck className="w-5 h-5 text-neutral-500" />
                2. Information We Collect as Data Controller
              </h2>
              <p>
                When expressing an interest in obtaining additional information
                about the Services offered by us, or by registering to use the
                Services, ITG requires you to provide us with personal contact
                information, such as name, company name, address, phone number,
                and email address. When purchasing the Services, ITG may require
                you to provide us with financial qualification and billing
                information, such as billing name and address, credit card
                number, and the number of employees within the organization that
                will be using the Services. ITG may also ask you to provide
                additional information, such as company fleet size, size of your
                field services staff, annual revenues, number of employees, or
                industry.
              </p>
              <p>
                We may also obtain information about you that we collect from
                sources such as at conferences, meetings and seminars. We also
                may collect information through chat rooms, blog posts,
                newsgroups, and social networking sites. The information you
                allow us to access on social networking sites varies by social
                networking site, and it is affected by the privacy settings you
                establish at such site. You can control and find out more about
                the privacy settings of your social networking site on the
                applicable social networking site directly.
              </p>
              <p>
                Our website and Services may include social media features, such
                as the Facebook &ldquo;Like&rdquo; button or a &ldquo;share
                this&rdquo; feature. Your use of these features may direct you
                to Facebook, LinkedIn, Twitter, or other social networking
                sites, but we do not collect information when you click on these
                features. We may also collect information about you from your
                friends or associates who tell us you may be interested in our
                Services. In some of our geographic locations, and to the extent
                permitted by applicable laws, we may monitor or record your
                telephone conversations with us for quality control purposes,
                for purposes of training our employees and for our own
                protection.
              </p>
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/90 text-neutral-700 text-xs sm:text-sm">
                <strong className="font-semibold text-neutral-900 block mb-1">
                  Vehicle Telemetry &amp; Location Data:
                </strong>
                We may collect vehicle information, such as location, speed,
                ignition status, and sensor feeds through your use of our
                vehicle tracking Services, which we use to provide Services to
                our clients and for our own purposes. We own the information we
                collect through our vehicle tracking device in its aggregate and
                anonymized form and we reserve the right to use such aggregate,
                anonymized information without restriction.
              </div>
            </section>

            {/* 3. USE OF INFORMATION WE CONTROL */}
            <section id="use-of-information" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Eye className="w-5 h-5 text-neutral-500" />
                3. Use of Information We Control
              </h2>
              <p>
                ITG may use information that we collect from or about you,
                including any personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-600">
                <li>To welcome you to our website or Services;</li>
                <li>
                  To help you complete a transaction or deliver information or
                  Services requested by you;
                </li>
                <li>To bill you for Services you purchased;</li>
                <li>
                  To provide ongoing service and support, including
                  event-related communications with respect to our Services;
                </li>
                <li>
                  To notify you about changes to our websites, applications, or
                  any Services we offer or provide through them;
                </li>
                <li>
                  To improve our websites, applications, and Services, including
                  by developing data analytics and reports about your use of
                  them;
                </li>
                <li>
                  To contact you to complete surveys that we use for marketing
                  or quality assurance purposes;
                </li>
                <li>
                  To deliver or display tailored online advertisements that may
                  interest you;
                </li>
                <li>
                  To e-mail or otherwise send you marketing or promotional
                  information about ITG or others&apos; products or services;
                </li>
                <li>To combat fraud or any other criminal activity;</li>
                <li>
                  To fulfill any other purpose for which you provide the
                  information, or as otherwise required or permitted by law.
                </li>
              </ul>
            </section>

            {/* 4. DATA WE PROCESS FOR OTHERS */}
            <section
              id="data-processed-for-others"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Server className="w-5 h-5 text-neutral-500" />
                4. Data We Process for Others
              </h2>
              <p>
                We also may collect personal information from our clients who
                use our Services, who may elect to provide personal information
                into the system in order to utilize the Services. We process
                this information on behalf of our clients and only for their use
                of the system. We do not use or disclose such personally
                identifiable information except to provide the Services and in
                accordance with the instructions of the client as data
                controller.
              </p>
            </section>

            {/* 5. COLLECTION OF INFORMATION USING COOKIES AND OTHER TOOLS */}
            <section id="cookies-and-tools" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Cookie className="w-5 h-5 text-neutral-500" />
                5. Collection of Information Using Cookies and Other Tools
              </h2>
              <p>
                ITG may collect and/or log your IP address, Internet domain
                name, the web browser and operating system used to access ITG
                websites or applications, the pages or files visited, the time
                spent in each page or file, and the time and date of each visit
                or use. ITG may collect this information automatically as you
                browse our websites or use our applications through the use of
                log files, web beacons, or other electronic tools.
              </p>
              <p>
                A &ldquo;cookie&rdquo; is a text file that is sent from a web
                server to your browser and stored on your computer&apos;s hard
                drive or mobile device. Thereafter, when you visit that website,
                a message is sent back to the web server by the browser
                accessing the website, and this information about your
                activities is stored in the cookie. Use of cookies allows ITG to
                provide a higher quality, more relevant, customer experience.
              </p>
              <p>
                ITG uses cookies that are session-based and persistent. Session
                cookies exist only during one session and disappear when you
                close your browser. Persistent cookies remain on your computer
                after you close your browser. You have the ability to accept or
                decline cookies by modifying the settings in your browser. For
                more information about how to manage cookies in your web
                browser, see{" "}
                <Link
                  href="http://www.aboutcookies.org"
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  www.aboutcookies.org
                </Link>
                .
              </p>
            </section>

            {/* 6. COOKIE CATEGORIES TABLE */}
            <section id="cookie-types" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3`}
              >
                6. Cookie Categories &amp; Managing Settings
              </h2>
              <p>
                The following table sets out how ITG uses different categories
                of cookies and your options for managing cookie settings:
              </p>

              {/* Responsive Modern Table */}
              <div className="overflow-x-auto rounded-2xl border border-neutral-200/90 shadow-2xs my-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-100/80 text-neutral-900 border-b border-neutral-200">
                    <tr>
                      <th className="p-4 font-semibold w-1/4">
                        Type of Cookies
                      </th>
                      <th className="p-4 font-semibold w-1/2">Description</th>
                      <th className="p-4 font-semibold w-1/4">
                        Managing Settings
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-4 font-medium text-neutral-900 align-top">
                        Strictly Necessary Cookies
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        These cookies enable you to navigate our websites and
                        use their features, such as accessing secure areas of
                        the websites and using ITG&apos; Services. These cookies
                        allow the Company to uniquely identify you when you are
                        logged into the Services and to process your online
                        transactions and requests.
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        Because required cookies are essential to operate the
                        ITG websites and Services, there is no option to opt out
                        of these cookies.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-neutral-900 align-top">
                        Performance Cookies
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        Anonymous usage cookies or &ldquo;performance
                        cookies&rdquo; are used to associate a random session
                        identifier with the usage activity that occurred during
                        that session (e.g. pages visited, dwell times, and click
                        patterns).
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        You may decline these cookies by modifying your browser
                        settings, though this may prevent you from successfully
                        using all features of the Services.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-neutral-900 align-top">
                        Functionality Cookies
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        These cookies allow ITG&apos; websites to remember
                        choices you make (such as username, language, or region)
                        and provide enhanced, personalized features such as text
                        size and font adjustments.
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        You may decline these cookies by modifying your browser
                        settings.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-neutral-900 align-top">
                        Targeting &amp; Advertising Cookies
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        Used to deliver advertisements relevant to you and your
                        interests, limit frequency of advertisements, and help
                        measure advertising campaign effectiveness.
                      </td>
                      <td className="p-4 text-neutral-600 align-top">
                        Opt out via industry portals such as{" "}
                        <Link
                          href="http://www.networkadvertising.org/choices"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Network Advertising
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="http://www.youronlinechoices.com"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Your Online Choices
                        </Link>
                        .
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. WEB BEACONS & IP ADDRESSES */}
            <section id="web-beacons-and-ip" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3`}
              >
                7. Web Beacons &amp; IP Addresses
              </h2>
              <p>
                When we send you emails, we may include a web beacon to allow us
                to determine the number of people who open our emails. Web
                beacons are transparent graphic images placed in emails or web
                pages to record the simple actions of users. Web beacons collect
                only limited information, such as time and date of viewing and
                the page URL. If you do not wish to allow web beacons via email,
                you may disable HTML images or select text-only within your
                email software.
              </p>
              <p>
                When you visit ITG&apos; websites, we collect your Internet
                Protocol (&ldquo;IP&rdquo;) addresses to track and aggregate
                non-personal information to monitor geographic navigation trends
                and server performance.
              </p>
            </section>

            {/* 8. LINKS & SOCIAL REFERRALS */}
            <section id="third-party-links" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3`}
              >
                8. Links &amp; Social Referrals
              </h2>
              <p>
                ITG&apos; websites may contain links to third-party websites,
                including our partners&apos; websites. If you access those
                links, you will leave the ITG website. ITG does not control
                these third-party websites or their privacy practices. We
                encourage you to review the privacy policy of any company before
                submitting your personal information.
              </p>
              <p>
                If you choose to use our referral service to tell a colleague
                about a page on an ITG website, ITG does not store this
                information except to the extent permitted by applicable law.
              </p>
            </section>

            {/* 9. SHARING & DISCLOSURE */}
            <section
              id="sharing-and-disclosure"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3`}
              >
                9. Sharing &amp; Usage of Your Personal Information
              </h2>
              <p>
                We are the sole owner of information collected on our websites,
                except for content that you provide to us in connection with
                your use of our Services. We collect information only as
                necessary to fulfill the purposes set forth in this Privacy
                Statement and we will not sell, share, or rent this information
                to others in ways different from what is disclosed here.
              </p>
              <p>
                ITG contracts with third-party service providers and suppliers
                (including distributors, resellers, payment gateways, and
                hosting partners) to deliver customer solutions. Third parties
                receiving personal data are required to maintain strict
                confidentiality consistent with ITG privacy standards.
              </p>
            </section>

            {/* 10. CROSS-BORDER DATA TRANSFERS */}
            <section
              id="international-transfers"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Globe2 className="w-5 h-5 text-neutral-500" />
                10. Transfer of Your Information to Other Countries
              </h2>
              <p>
                For users of the Services in the European Union (other than the
                UK) and Asia-Pacific regions, all personal data submitted
                through the Services will be controlled by{" "}
                <strong className="font-semibold text-neutral-900">
                  ITG Telematics Pvt Limited
                </strong>
                . For users in the United Kingdom, data is controlled by{" "}
                <strong className="font-semibold text-neutral-900">
                  ITG (UK) Ltd
                </strong>
                . For users in the United States, Canada and Latin America, data
                is controlled by{" "}
                <strong className="font-semibold text-neutral-900">
                  ITG USA, LLC
                </strong>
                .
              </p>
              <p>
                ITG Group complies with the international data protection
                frameworks and Safe Harbor Principles of notice, choice, onward
                transfer, security, data integrity, access, and enforcement.
              </p>
            </section>

            {/* 11. SECURITY */}
            <section id="security" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Lock className="w-5 h-5 text-neutral-500" />
                11. Security
              </h2>
              <p>
                ITG has implemented robust administrative, technical, and
                physical measures designed to protect your personal information
                from accidental loss, unauthorized access, alteration, or
                disclosure. Payment transactions and sensitive credentials are
                encrypted via SSL.
              </p>
              <p>
                If you have questions regarding our security infrastructure,
                please contact us at{" "}
                <a
                  href="mailto:info@g-trac.in"
                  className="text-blue-600 underline font-medium"
                >
                  info@g-trac.in
                </a>
                .
              </p>
            </section>

            {/* 12. CHILDREN'S ONLINE POLICY */}
            <section id="children-policy" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3`}
              >
                12. Children&apos;s Online Information Policy
              </h2>
              <p>
                ITG websites and telematics platforms are not designed for or
                intentionally targeted at individuals younger than 13 years of
                age.
              </p>
            </section>

            {/* 13. ACCESS & CORRECTION */}
            <section
              id="access-and-correction"
              className="scroll-mt-28 space-y-4"
            >
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <Mail className="w-5 h-5 text-neutral-500" />
                13. Access to and Correcting Your Information
              </h2>
              <p>
                If you wish to review, modify, or delete your personal data, or
                opt out of marketing communications, you may reach out directly
                to our data protection team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-xs text-neutral-500 block uppercase font-medium mb-1">
                    Marketing &amp; Inquiries
                  </span>
                  <a
                    href="mailto:marketing@g-trac.co.uk"
                    className="text-blue-600 font-medium hover:underline text-sm"
                  >
                    marketing@g-trac.co.uk
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-xs text-neutral-500 block uppercase font-medium mb-1">
                    Billing &amp; Accounts
                  </span>
                  <a
                    href="mailto:accounts@g-trac.co.uk"
                    className="text-blue-600 font-medium hover:underline text-sm"
                  >
                    accounts@g-trac.co.uk
                  </a>
                </div>
              </div>
              <p>
                Within 30 days of your request, ITG will grant reasonable access
                to your personal information and take steps to permit
                correction, amendment, or deletion of demonstrated inaccuracies.
              </p>
            </section>

            {/* 14. CHANGES TO THIS PRIVACY STATEMENT */}
            <section id="policy-changes" className="scroll-mt-28 space-y-4">
              <h2
                className={`${goldman.className} text-2xl font-medium text-neutral-900 border-b border-neutral-100 pb-3 flex items-center gap-3`}
              >
                <BellRing className="w-5 h-5 text-neutral-500" />
                14. Changes to This Privacy Statement
              </h2>
              <p>
                ITG will review and update this Privacy Statement periodically,
                and will note the date of its most recent revision above. If we
                make material changes, we will notify you by prominently posting
                a notice of such changes on our websites or within the Services
                prior to implementation.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
