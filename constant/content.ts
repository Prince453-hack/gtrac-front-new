export const products = [
  {
    name: "E-lock",
    image: "/elock.png",
    description: "Lock it. Track it. Control it.",
    titleWidth: "80vw",
    titleHeight: "15vh",
    activeImageWidth: "550",
    activeImageHeight: "550",
    detailHeading: "Cargo theft happens in the gaps between checkpoints.",
    detailDesc:
      "Mechanical seals get cut. Padlocks get picked. And by the time anyone notices, the container is already empty. Fixed E-Lock closes that gap with a lock that reports every open, every jolt, every mile.",
    specs: [
      { value: "256-bit", label: "encrypted access" },
      { value: "3s", label: "Tamper Alert" },
      { value: "72h", label: "Battery Standby" },
    ],
  },
  {
    name: "Padlock",
    image: "/padlock.png",
    description: "Secure it. Monitor it. Protect it.",
    titleWidth: "80vw",
    titleHeight: "15vh",
    activeImageWidth: "280",
    activeImageHeight: "300",
    detailHeading: "Security shouldn't leave you in the dark.",
    detailDesc:
      "Standard padlocks offer zero visibility. Our Smart Padlock sends real-time GPS tracking and instant alerts, ensuring you know exactly who opened it, when, and where.",
    specs: [
      { value: "IP67", label: "Waterproof" },
      { value: "GPS", label: "Live Tracking" },
      { value: "1yr", label: "Rechargeable Battery" },
    ],
  },
  {
    name: "OBD",
    image: "/obd.png",
    description: "Plug it. Monitor it. Optimize it.",
    titleWidth: "80vw",
    titleHeight: "25vh",
    activeImageWidth: "380",
    activeImageHeight: "450",
    detailHeading: "Know your vehicle inside and out.",
    detailDesc:
      "Plug in and immediately start tracking fuel efficiency, engine health diagnostics, and aggressive driving behaviors in real-time. Optimize your fleet operations seamlessly.",
    specs: [
      { value: "Real-time", label: "Diagnostics" },
      { value: "Plug & Play", label: "Installation" },
      { value: "99.9%", label: "Accuracy" },
    ],
  },
  {
    name: "Adas (DMS)",
    image: "/dashcam.png",
    description: "Detect risks. Drive safer. Stay alert.",
    titleWidth: "80vw",
    titleHeight: "15vh",
    activeImageWidth: "520",
    activeImageHeight: "400",
    detailHeading: "Prevention is the ultimate safety feature.",
    detailDesc:
      "Advanced driver assistance and monitoring systems detect driver fatigue, distraction, and potential lane departures instantly, issuing alerts to prevent accidents before they occur.",
    specs: [
      { value: "AI-Powered", label: "ADAS Camera" },
      { value: "0.1s", label: "Fatigue Detection" },
      { value: "1080p", label: "Full HD Recording" },
    ],
  },
  {
    name: "Breath Analyze",
    image: "/breath-analyzer.png",
    description: "Test quickly. Verify instantly. Drive safely.",
    titleWidth: "130vw",
    titleHeight: "20vh",
    activeImageWidth: "330",
    activeImageHeight: "500",
    detailHeading: "Ensuring sober and safe journeys.",
    detailDesc:
      "Fast and highly accurate alcohol screening for fleet operators and drivers. Wirelessly logs records to the cloud to maintain strict compliance and safety standards.",
    specs: [
      { value: "Fuel Cell", label: "Sensor Tech" },
      { value: "2s", label: "Response Time" },
      { value: "Bluetooth", label: "Cloud Syncing" },
    ],
  },
];

export const ContainerContent = [
  {
    title: "Fixed E-Lock Installed",
    description:
      "The Fixed E-Lock is securely installed on the container door, ensuring the cargo remains protected throughout the journey",
    videoPath: "/elock/video/elock-step-1.gif",
  },
  {
    title: "Unlock Request Initiated",
    description:
      "When the container reacher the authorized destination, the driver sends an unlock request through the system.",
    videoPath: "/elock/video/elock-step-2.gif",
  },
  {
    title: "OTP Verification",
    description:
      "The G-Trac Customer Support team verifies the quest and shares a One-Time Password (OTP) with the authorized driver.",
    videoPath: "/elock/video/elock-step-3.gif",
  },
  {
    title: "Enter the OTP",
    description:
      "The driver enters the OTP on the Fixed E-lock. Once the OTP is successfully verified, the lock is ready to be released.",
    videoPath: "/elock/video/elock-step-4.gif",
  },
  {
    title: "Open the Lock",
    description:
      "After OTP verification, the driver rotates the lock's roller three times to the left to unlock the container. Secure Access : Every unlock is securely logged with the time, location, and user details.",
    videoPath: "/elock/video/elock-step-5.gif",
  },
];

export const DashcamContent = [
  {
    title: "Professional Installation & Setup",
    description:
      "Certified technicians mount the dual-lens AI dashcam to the windshield, conceal wiring, and connect directly to vehicle power with instant 4G activation.",
    videoPath: "/dashcam/video/first.gif",
  },
  {
    title: "Driver Monitoring System (DMS)",
    description:
      "The in-cabin AI camera tracks facial landmarks and eye movements in real time to detect driver fatigue, phone distraction, and drowsiness with instant alerts.",
    videoPath: "/dashcam/video/second.gif",
  },
  {
    title: "Advanced Driver Assistance (ADAS)",
    description:
      "Forward-facing computer vision monitors the road ahead, tracking lane markings, vehicle distance, and issuing Forward Collision Warnings to prevent accidents.",
    videoPath: "/dashcam/video/third.gif",
  },
  {
    title: "Smart Incident Event Detection",
    description:
      "When risky driving or distraction occurs, the system automatically tags and locks a 1080p video clip stamped with GPS coordinates, live speed, and time.",
    videoPath: "/dashcam/video/forth.mp4",
  },
  {
    title: "Instant 4G Cloud Telematics Sync",
    description:
      "Incident video evidence and telemetry are automatically transmitted over 4G to the fleet cloud platform for immediate review, coaching, and compliance.",
    videoPath: "/dashcam/video/fifth.gif",
  },
];
