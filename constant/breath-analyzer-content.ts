import {
  Activity,
  BatteryCharging,
  Bluetooth,
  CheckCircle2,
  Cpu,
  Gauge,
  Layers,
  Radio,
  RefreshCw,
  Scale,
  ShieldCheck,
  Smartphone,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";

export interface WorkflowStep {
  title: string;
  tag: string;
  description: string;
  detailPoints: string[];
  statusColor: string;
  metricLabel: string;
  metricValue: string;
  simulationType: "auth" | "blow" | "analyze" | "release";
}

export const analyzerWorkflowSteps: WorkflowStep[] = [
  {
    title: "Driver Authentication & Pre-Check",
    tag: "STEP 01",
    description:
      "Before engine ignition, the driver connects to the system via Bluetooth BLE or RFID badge. Facial recognition or driver ID verification ensures the correct operator is being screened.",
    detailPoints: [
      "Driver ID & Shift pairing via G-Trac mobile app",
      "Anti-spoofing facial liveness verification",
      "Pre-heating electrochemical sensor automatically (< 3s)",
    ],
    statusColor: "#0EA5E9",
    metricLabel: "Warm-up Time",
    metricValue: "< 3.0s",
    simulationType: "auth",
  },
  {
    title: "Continuous Deep-Lung Breath Sample",
    tag: "STEP 02",
    description:
      "The driver exhales into the hygienic mouthpiece. Real-time pressure sensors ensure continuous 4-second breath flow to sample alveolar deep-lung air for maximum legal precision.",
    detailPoints: [
      "Dual pressure transducers prevent false blows or compressed air spoofing",
      "Audible & visual LED feedback for blow duration guide",
      "Auto-cutoff when sufficient 1.2L air volume is captured",
    ],
    statusColor: "#10B981",
    metricLabel: "Sample Volume",
    metricValue: "1.2 Liters",
    simulationType: "blow",
  },
  {
    title: "Fuel-Cell Electrochemical Analysis",
    tag: "STEP 03",
    description:
      "Advanced Platinum Fuel Cell technology oxidizes ethanol molecules into acetic acid, creating an electrical current strictly proportional to the Blood Alcohol Concentration (BAC).",
    detailPoints: [
      "Zero false positives from acetone, tobacco, or mouthwash",
      "High dynamic range: 0.000 mg/L to 2.500 mg/L BAC",
      "Instant drift-compensated digital signal processing",
    ],
    statusColor: "#6366F1",
    metricLabel: "Analysis Precision",
    metricValue: "±0.002% BAC",
    simulationType: "analyze",
  },
  {
    title: "Cloud Sync & Engine Interlock Release",
    tag: "STEP 04",
    description:
      "Test result (0.000% BAC PASS) is encrypted and synced to fleet managers in real time. The wireless immobilizer unlocks the vehicle starter relay immediately for safe departure.",
    detailPoints: [
      "Encrypted 256-bit telematics upload with GPS timestamp",
      "Instant starter interlock signal sent via CAN bus / relay",
      "Automatic SMS & dashboard alert if threshold exceeded",
    ],
    statusColor: "#059669",
    metricLabel: "Relay Trigger",
    metricValue: "Instant (0.1s)",
    simulationType: "release",
  },
];

export const analyzerAnatomyParts = [
  {
    id: "mouthpiece",
    title: "Hygienic Sampling Chamber",
    subtitle: "Replaceable anti-backflow mouthpiece with directional vortex flow channel",
    x: 50,
    y: 12,
    align: "left",
    icon: Wind,
    tag: "INTAKE",
  },
  {
    id: "fuel-cell",
    title: "Platinum Electrochemical Sensor",
    subtitle: "Medical-grade fuel-cell core detecting trace alcohol with zero cross-sensitivity",
    x: 48,
    y: 32,
    align: "right",
    icon: Cpu,
    tag: "CORE SENSOR",
  },
  {
    id: "display",
    title: "High-Contrast OLED Screen",
    subtitle: "Daylight-readable display showing BAC readouts, status icons, and driver guidance",
    x: 52,
    y: 50,
    align: "left",
    icon: Activity,
    tag: "INTERFACE",
  },
  {
    id: "pressure",
    title: "Anti-Tamper Pressure Sensor",
    subtitle: "Micro-differential air volume meter rejecting artificial air pumps or shallow blowing",
    x: 46,
    y: 65,
    align: "right",
    icon: Gauge,
    tag: "SECURITY",
  },
  {
    id: "wireless",
    title: "BLE 5.3 & Wireless Interlock",
    subtitle: "Encrypted wireless link to vehicle immobilizer relay and telematics gateway",
    x: 54,
    y: 78,
    align: "left",
    icon: Radio,
    tag: "TELEMATICS",
  },
  {
    id: "battery",
    title: "3000mAh Lithium Cell",
    subtitle: "Fast Type-C recharging providing up to 2,500 tests on a single full charge",
    x: 50,
    y: 92,
    align: "right",
    icon: BatteryCharging,
    tag: "POWER",
  },
];

export const analyzerSpecsList = [
  {
    icon: Cpu,
    title: "Sensor Technology",
    subtext: "Platinum Fuel-Cell\nElectrochemical",
  },
  {
    icon: Gauge,
    title: "Response Time",
    subtext: "< 2.5 Seconds\nInstant Readout",
  },
  {
    icon: ShieldCheck,
    title: "Measurement Accuracy",
    subtext: "±0.002% at\n0.050% BAC",
  },
  {
    icon: Radio,
    title: "Connectivity",
    subtext: "BLE 5.3 +\n4G Gateway Sync",
  },
  {
    icon: BatteryCharging,
    title: "Battery Life",
    subtext: "2,500+ Tests\nPer Charge (Type-C)",
  },
  {
    icon: Thermometer,
    title: "Operating Range",
    subtext: "-10°C to +50°C\nAll-weather Ready",
  },
  {
    icon: Layers,
    title: "Anti-Tamper",
    subtext: "Dual Pressure &\nAir Volume Sensors",
  },
  {
    icon: Scale,
    title: "Weight & Size",
    subtext: "145g Ultra-Light\nCompact Ergonomic",
  },
  {
    icon: RefreshCw,
    title: "Calibration Cycle",
    subtext: "12 Months or\n10,000 Tests",
  },
  {
    icon: Zap,
    title: "Relay Interlock",
    subtext: "Direct CAN Bus &\n12V/24V Starter Cut",
  },
];

export const safetyHighlights = [
  {
    value: "0.00%",
    unit: "BAC",
    label: "Strict Sobriety Standard",
    desc: "Ensures 100% alcohol-free driver state before vehicle ignition can be triggered.",
  },
  {
    value: "100%",
    unit: "Cloud Logged",
    label: "Tamper-Proof Audit Trail",
    desc: "Every blow is cryptographically hashed with GPS location and driver credentials.",
  },
  {
    value: "0.1s",
    unit: "Interlock",
    label: "Automatic Engine Cut",
    desc: "Direct integration with vehicle engine starter prevents unauthorized operation immediately.",
  },
  {
    value: "2,500+",
    unit: "Tests",
    label: "Long-Life Endurance",
    desc: "Built for heavy commercial fleets operating long-haul routes without downtime.",
  },
];
