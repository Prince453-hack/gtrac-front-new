export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductFaqConfig {
  image: string;
  imageAlt: string;
  faqs: FaqItem[];
}

export const ElockFaq: FaqItem[] = [
  {
    question: "What is an E-Lock for fleet management?",
    answer:
      "An E-Lock is a smart electronic locking system designed for commercial vehicles and cargo containers. It enables remote locking, unlocking, and real-time monitoring to protect goods throughout the transportation journey.",
  },
  {
    question: "How does the E-Lock improve cargo security?",
    answer:
      "The E-Lock prevents unauthorized access by allowing only authorized users to unlock it. Every lock and unlock event is recorded, and instant alerts are sent if tampering or unauthorized access is detected.",
  },
  {
    question: "Can I control the E-Lock remotely?",
    answer:
      "Yes. Fleet managers can remotely lock or unlock the E-Lock through the fleet management platform or mobile application, enabling secure access without requiring physical keys.",
  },
  {
    question: "Does the E-Lock provide real-time alerts?",
    answer:
      "Yes. The system sends instant notifications for unauthorized access attempts, tampering, forced opening, low battery, and lock status changes, helping fleet operators respond quickly.",
  },
  {
    question: "Is the E-Lock integrated with GPS tracking?",
    answer:
      "Yes. The E-Lock can work alongside GPS tracking, allowing fleet managers to monitor both the vehicle's live location and the lock status from a single dashboard.",
  },
  {
    question: "Is the E-Lock suitable for all commercial vehicles?",
    answer:
      "The E-Lock is compatible with a wide range of commercial vehicles, including trucks, trailers, containers, delivery vans, and logistics fleets, making it ideal for various transportation operations.",
  },
  {
    question: "What are the benefits of using an E-Lock in fleet management?",
    answer:
      "An E-Lock enhances cargo security, reduces theft risks, eliminates dependency on physical keys, provides complete access history, improves operational efficiency, and ensures greater visibility throughout the supply chain.",
  },
];

export const PadlockFaq: FaqItem[] = [
  {
    question: "How does the Smart Padlock work without physical keys?",
    answer:
      "The Smart Padlock uses secure digital authentication methods such as Bluetooth, One-Time Passwords (OTP), RFID cards, and remote web authorization, eliminating the risk of lost or duplicated physical keys.",
  },
  {
    question: "Does the Smart Padlock track real-time GPS location?",
    answer:
      "Yes. Equipped with multi-GNSS satellite positioning, the Smart Padlock logs live GPS coordinates and route breadcrumbs whenever the asset moves or is unlocked.",
  },
  {
    question: "How does tamper detection work on the Padlock?",
    answer:
      "Built-in sensors detect shackle cutting, physical impact, unauthorized unlocking attempts, and geofence deviations, immediately triggering real-time alerts to the fleet management portal.",
  },
  {
    question: "What is the battery life of the Smart Padlock?",
    answer:
      "The device features a high-capacity rechargeable lithium battery providing up to 12 months of standby on standard reporting intervals, with low-battery warning alerts sent to the dashboard.",
  },
  {
    question: "Is the Smart Padlock weatherproof for extreme outdoor use?",
    answer:
      "Yes. With an IP67-certified rugged zinc-alloy casing and stainless steel shackle, the padlock is engineered to withstand heavy rain, dust, extreme temperatures, and harsh industrial environments.",
  },
  {
    question: "Can multiple padlocks be managed from a central platform?",
    answer:
      "Yes. Fleet operators can manage thousands of smart padlocks across warehouses, container yards, and vehicles from a unified cloud dashboard with role-based access permissions.",
  },
];

export const ObdFaq: FaqItem[] = [
  {
    question: "How is the OBD telematics tracker installed?",
    answer:
      "Installation takes under 10 seconds with zero tools or wire slicing. Simply plug the device directly into the vehicle's standard 16-pin J1962 OBD-II diagnostic port.",
  },
  {
    question: "What vehicle engine data can the OBD device monitor?",
    answer:
      "It reads 100+ live CAN-bus PIDs at 500 kbps, including engine RPM, vehicle speed, coolant temperature, fuel consumption, battery voltage, throttle position, and engine load.",
  },
  {
    question:
      "Can the OBD device read and clear Diagnostic Trouble Codes (DTC)?",
    answer:
      "Yes. The device continuously scans check-engine fault codes in real time, alerting mechanics to powertrain issues before costly breakdowns and allowing remote diagnostics.",
  },
  {
    question: "How does driver behavior scoring work?",
    answer:
      "The onboard 6-axis Bosch accelerometer and gyroscope detect harsh acceleration, sudden braking, sharp cornering, impact, and excessive idling to generate comprehensive driver safety scores.",
  },
  {
    question: "Will the OBD tracker drain my vehicle's battery when parked?",
    answer:
      "No. The device features an ultra-low power sleep mode drawing less than 0.05W when the engine is turned off, waking up automatically upon ignition vibration.",
  },
  {
    question:
      "Is the OBD tracker compatible with heavy-duty trucks and 24V systems?",
    answer:
      "Yes. It supports multi-protocol compliance including ISO 15765-4, SAE J1850, KWP2000, and SAE J1939 for universal 12V passenger cars and 24V commercial heavy-duty trucks.",
  },
];

export const DashcamFaq: FaqItem[] = [
  {
    question: "What is the difference between ADAS and DMS in the AI Dashcam?",
    answer:
      "ADAS (Advanced Driver Assistance System) uses the front road-facing camera to monitor lane boundaries and forward collision risks, while DMS (Driver Monitoring System) uses the in-cabin camera to track driver fatigue, eye closure, phone usage, and distraction.",
  },
  {
    question: "How does the dashcam record and store incident videos?",
    answer:
      "The dashcam continuously records 1080p HD video. When an AI event (distraction, harsh braking, collision) is triggered, it automatically locks the video clip and uploads it over 4G LTE to the cloud.",
  },
  {
    question: "Does the AI Dashcam work in night conditions and low light?",
    answer:
      "Yes. The in-cabin camera features integrated infrared (IR) night vision LEDs, ensuring clear facial and cabin monitoring even in complete darkness.",
  },
  {
    question: "Can fleet managers view live video streaming?",
    answer:
      "Yes. Authorized fleet operators can initiate on-demand live video streaming from both front and cabin lenses via the web platform or mobile app.",
  },
  {
    question: "How does the dashcam protect driver privacy?",
    answer:
      "Configurable privacy modes allow fleets to disable cabin streaming or only trigger video capture during critical safety events, ensuring compliance with data privacy policies.",
  },
  {
    question: "How are video files tagged with GPS and speed data?",
    answer:
      "Every video segment is cryptographically stamped with satellite GPS coordinates, vehicle speed, g-force sensor readings, and exact timestamps for dispute and insurance verification.",
  },
];

export const BreathAnalyzerFaq: FaqItem[] = [
  {
    question: "How accurate is the Fuel-Cell Breath Analyzer?",
    answer:
      "The device utilizes an automotive-grade fuel-cell electrochemical sensor that delivers clinical-grade Blood Alcohol Concentration (BAC) accuracy with zero false positives from food or mouthwash.",
  },
  {
    question: "How fast is the breath alcohol testing process?",
    answer:
      "The sensor warms up in seconds and delivers accurate BAC digital readouts within 2 seconds of continuous blowing.",
  },
  {
    question: "How does the system prevent driver cheating or bypass?",
    answer:
      "Built-in breath flow pressure sensors verify genuine deep-lung air samples. Optional integration with the in-cabin AI camera confirms driver identity during the test.",
  },
  {
    question:
      "Can the Breath Analyzer lock the vehicle ignition if alcohol is detected?",
    answer:
      "Yes. When paired with vehicle ignition interlock modules, the system automatically prevents engine startup if the driver's BAC exceeds the company safety limit.",
  },
  {
    question: "How are breath test results synced to fleet headquarters?",
    answer:
      "Every test result, along with the driver ID, BAC value, GPS location, and timestamp, is instantly transmitted wirelessly via Bluetooth and 4G cloud telematics.",
  },
  {
    question: "How often does the electrochemical sensor require calibration?",
    answer:
      "The sensor module is designed for 10,000+ tests and typically requires recalibration once every 12 months to maintain peak certification standards.",
  },
];

// Product to FAQ mapping configuration
export const productFaqMap: Record<string, ProductFaqConfig> = {
  "E-lock": {
    image: "/faq/elock-faq.png",
    imageAlt: "Elock & Controller",
    faqs: ElockFaq,
  },
  Padlock: {
    image: "/faq/padlock-faq.png",
    imageAlt: "Smart Padlock Security",
    faqs: PadlockFaq,
  },
  OBD: {
    image: "/faq/obd-faq.png",
    imageAlt: "OBD Telematics Gateway",
    faqs: ObdFaq,
  },
  "Adas (DMS)": {
    image: "/faq/dashcam-faq.png",
    imageAlt: "AI Dual Dashcam ADAS & DMS",
    faqs: DashcamFaq,
  },
  "Breath Analyze": {
    image: "/faq/breath-faq.png",
    imageAlt: "Digital Breath Analyzer",
    faqs: BreathAnalyzerFaq,
  },
  "Breath Analyzer": {
    image: "/faq/breath-faq.png",
    imageAlt: "Digital Breath Analyzer",
    faqs: BreathAnalyzerFaq,
  },
};

export const getProductFaq = (productName?: string): ProductFaqConfig => {
  if (!productName || !productFaqMap[productName]) {
    return productFaqMap["E-lock"];
  }
  return productFaqMap[productName];
};
