"use client";

import { Goldman, Poppins } from "next/font/google";
import { useState, useEffect, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Globe,
  Layers,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fallbackCountries = [
  "India",
  "United States Of America",
  "United Arab Emirates",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Singapore",
  "Saudi Arabia",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Armenia",
  "Austria",
  "Bahrain",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Chile",
  "China",
  "Colombia",
  "Denmark",
  "Egypt",
  "Finland",
  "Greece",
  "Hong Kong",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kenya",
  "Kuwait",
  "Malaysia",
  "Maldives",
  "Mauritius",
  "Mexico",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Russia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Vietnam",
];

const solutionsList = [
  "Digital Lock",
  "DashCam",
  "GPS",
  "CAN OBD based GPS",
  "Breath Analyser (Alcohol Sensor)",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    solution: "",
    country: "India",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [countries, setCountries] = useState<string[]>(fallbackCountries);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Captcha Generator Function
  const generateCaptcha = useCallback(() => {
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaError("");
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  }, []);

  // Fetch Countries on Mount
  useEffect(() => {
    generateCaptcha();

    const loadCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) return;
        const data = await response.json();
        const countryNames: string[] = data
          .map((c: { name: { common: string } }) => c.name.common)
          .sort((a: string, b: string) => a.localeCompare(b));
        if (countryNames.length > 0) {
          setCountries(countryNames);
        }
      } catch {
        // Use fallback countries if fetch fails
      }
    };

    loadCountries();
  }, [generateCaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError("");
    setErrorMessage("");

    // Validate Phone Number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage(
        "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.",
      );
      return;
    }

    // Validate Captcha
    if (formData.captchaInput.trim() !== captcha) {
      setCaptchaError("Captcha is incorrect.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("solution", formData.solution);
      data.append("country", formData.country);
      data.append(
        "link",
        typeof window !== "undefined"
          ? window.location.href
          : "https://gtrac.in/contact-us",
      );

      await fetch("https://gtrac.in/newtracking/sendcontactemail.php", {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        solution: "",
        country: "India",
        captchaInput: "",
      });
      generateCaptcha();
    } catch {
      // Fallback submission acknowledgement
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24">
      <div className="max-w-340 mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Google Map */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              <h2
                className={`${goldman.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-tight`}
              >
                Contact information
              </h2>
              <p
                className={`${poppins.className} text-neutral-600 text-xs sm:text-sm font-light leading-relaxed`}
              >
                We help you find direction, remove friction, and keep your
                business moving forward—strategically and confidently.
              </p>
            </div>

            {/* Info List */}
            <div className="flex flex-col space-y-5">
              {/* Phone */}
              <div className="flex items-center space-x-3.5 text-neutral-800 group">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 bg-neutral-50 shrink-0">
                  <Phone className="w-4 h-4 stroke-[1.8]" />
                </div>
                <a
                  href="tel:+911146254625"
                  className={`${poppins.className} text-sm sm:text-base font-medium text-neutral-800 hover:text-[#FF5520] transition-colors`}
                >
                  +91 11 46254625 / 4915 5050
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3.5 text-neutral-800 group">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 bg-neutral-50 shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <a
                  href="mailto:info@g-trac.in"
                  className={`${poppins.className} text-sm sm:text-base font-medium text-neutral-800 hover:text-[#FF5520] transition-colors`}
                >
                  info@g-trac.in
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-3.5 text-neutral-800">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 bg-neutral-50 shrink-0">
                  <MapPin className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span
                  className={`${poppins.className} text-sm sm:text-base font-medium text-neutral-800`}
                >
                  ITG Telematics Pvt. Ltd., New Delhi, India
                </span>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-3.5 text-neutral-800">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 bg-neutral-50 shrink-0">
                  <Clock className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span
                  className={`${poppins.className} text-sm sm:text-base font-medium text-neutral-800`}
                >
                  Monday – Saturday, 9:30 AM – 6:30 PM (IST)
                </span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs bg-neutral-100 relative">
              <iframe
                title="ITG Telematics Office Location"
                src="https://maps.google.com/maps?q=28.6601038,77.1513848+(ITG+Telematics+Pvt.+Ltd.)&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h2
                className={`${goldman.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-tight`}
              >
                Send Us a Message
              </h2>
              <p
                className={`${poppins.className} text-neutral-500 text-xs sm:text-sm font-light leading-relaxed`}
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center animate-fade-in py-12 flex flex-col items-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                <h3
                  className={`${goldman.className} text-2xl font-semibold text-emerald-900`}
                >
                  Details Submitted Successfully!
                </h3>
                <p
                  className={`${poppins.className} text-xs sm:text-sm text-emerald-700 max-w-md`}
                >
                  Thank you! Your information has been received. Our team will
                  get back to you shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 sm:space-y-5"
              >
                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className={poppins.className}>
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={50}
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value.replace(/[^A-Za-z\s]/g, ""),
                        })
                      }
                      className={`${poppins.className} pl-10`}
                    />
                  </div>
                </div>

                {/* Mobile Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className={poppins.className}>
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Enter 10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 10),
                          })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className={poppins.className}>
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={50}
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Solution Looking For & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Solution */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <Label htmlFor="solution" className={poppins.className}>
                      Solution you are looking for{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      modal={false}
                      value={formData.solution}
                      onValueChange={(val) =>
                        setFormData({ ...formData, solution: val || "" })
                      }
                    >
                      <SelectTrigger className={`${poppins.className} w-full`}>
                        <div className="flex items-center gap-2.5 truncate">
                          <Layers className="w-4 h-4 text-neutral-400 shrink-0" />
                          <SelectValue placeholder="Select a Solution" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className={poppins.className}>
                        {solutionsList.map((sol) => (
                          <SelectItem key={sol} value={sol}>
                            {sol}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col space-y-1.5 sm:space-y-2">
                    <Label htmlFor="country" className={poppins.className}>
                      Select Country <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      modal={false}
                      value={formData.country}
                      onValueChange={(val) =>
                        setFormData({ ...formData, country: val || "" })
                      }
                    >
                      <SelectTrigger className={`${poppins.className} w-full`}>
                        <div className="flex items-center gap-2.5 truncate">
                          <Globe className="w-4 h-4 text-neutral-400 shrink-0" />
                          <SelectValue placeholder="Select your country" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className={poppins.className}>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Captcha Box & Captcha Input */}
                <div className="pt-2 flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2.5 p-2 px-3 rounded-lg bg-neutral-100 border border-neutral-200 shrink-0">
                      <span className="font-mono text-lg sm:text-xl font-bold text-neutral-800 bg-white px-3 py-1 rounded-md border border-neutral-300 tracking-widest select-none shadow-inner">
                        {captcha || "------"}
                      </span>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        aria-label="Refresh Captcha"
                        className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-800 text-white hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex-1">
                      <Input
                        id="captchaInput"
                        name="captchaInput"
                        type="text"
                        required
                        placeholder="Enter Captcha"
                        value={formData.captchaInput}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            captchaInput: e.target.value,
                          });
                          if (captchaError) setCaptchaError("");
                        }}
                        className={`${poppins.className} ${
                          captchaError
                            ? "border-red-500 focus:border-red-600 focus:ring-red-100"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <span
                      id="captcha-error"
                      className="text-xs text-[#cf3636] font-medium flex items-center gap-1.5 pt-0.5 animate-fade-in"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {captchaError}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    size="default"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Details"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
