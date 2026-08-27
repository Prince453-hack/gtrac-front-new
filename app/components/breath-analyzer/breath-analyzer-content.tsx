"use client";

import AnalyzerHeroScroll from "./_components/analyzer-hero-scroll";
import TestingWorkflow from "./_components/testing-workflow";
import SensorAnatomy from "./_components/sensor-anatomy";
import SpecificationsGrid from "./_components/specifications-grid";

const BreathAnalyzerContent = () => {
  return (
    <div className="w-full">
      <AnalyzerHeroScroll />
      <TestingWorkflow />
      <SensorAnatomy />
      <SpecificationsGrid />
    </div>
  );
};

export default BreathAnalyzerContent;
