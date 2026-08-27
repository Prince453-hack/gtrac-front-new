import {
  Activity,
  BatteryCharging,
  Cpu,
  Layers,
  Radio,
  RefreshCw,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const obdFeatures = [
  {
    icon: Zap,
    title: "Zero-Wire Port Docking",
    desc: "Push directly into any standard 16-pin J1962 port in under 10 seconds. Zero wire slicing or mechanic tools.",
  },
  {
    icon: Cpu,
    title: "100+ Live CAN-Bus PIDs",
    desc: "Interrogates live engine RPM, vehicle speed, coolant temp, and fuel level at 500 kbps microsecond speeds.",
  },
  {
    icon: Activity,
    title: "6-Axis Bosch Motion AI",
    desc: "100Hz inertial accelerometer and gyroscope detecting harsh braking, cornering, impact, and idle waste.",
  },
  {
    icon: ShieldCheck,
    title: "Instant DTC Fault Scan",
    desc: "Continuous check engine diagnostic scanning identifies pending powertrain faults before costly breakdowns.",
  },
  {
    icon: Radio,
    title: "4G LTE-M & Multi-GNSS",
    desc: "Sub-2.5m GPS/GLONASS live positioning synced over global multi-band cellular with AES-256 encryption.",
  },
  {
    icon: BatteryCharging,
    title: "Zero Battery Drain (<0.05W)",
    desc: "Intelligent sleep mode draws under 0.05W when parked, waking up automatically upon ignition vibration.",
  },
  {
    icon: Layers,
    title: "Multi-Protocol Compliance",
    desc: "Universal compatibility across ISO 15765-4 CAN, SAE J1850, KWP2000, ISO 9141, and J1939 Heavy Duty.",
  },
  {
    icon: RefreshCw,
    title: "Over-The-Air (FOTA) Updates",
    desc: "Remote zero-downtime firmware flashing keeps your fleet devices updated with the latest security protocols.",
  },
];
