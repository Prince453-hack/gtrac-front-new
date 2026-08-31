"use client";

import { Goldman, Poppins } from "next/font/google";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Building2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        subject: "",
        message: "",
      });
    }, 4000);
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

          {/* Right Column: Send Us a Message Form using Shadcn Components */}
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
                Fill up the form and our team will get back to you with in 24
                hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium text-center animate-fade-in py-16">
                Thank you! Your message has been sent successfully. Our team
                will get back to you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="firstName" className={poppins.className}>
                      First name
                    </Label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="firstName"
                        type="text"
                        required
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="lastName" className={poppins.className}>
                      Last name
                    </Label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="lastName"
                        type="text"
                        required
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className={poppins.className}>
                      Email
                    </Label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="phone" className={poppins.className}>
                      Phone
                    </Label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="companyName" className={poppins.className}>
                      Company Name
                    </Label>
                    <div className="relative flex items-center">
                      <Building2 className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="subject" className={poppins.className}>
                      Subject
                    </Label>
                    <div className="relative flex items-center">
                      <FileText className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Enter Subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          })
                        }
                        className={`${poppins.className} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="message" className={poppins.className}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Type here . . ."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={poppins.className}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button type="submit" size="default">
                    Send Message
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
