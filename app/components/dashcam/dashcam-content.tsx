import DashcamFeatures from "./_components/dashcam-features";
import DashcamFlow from "./_components/dashcam-flow";
import SafetyFeatures from "./_components/safety-features";

const DashcamContent = () => {
  return (
    <div className="">
      <DashcamFeatures />
      <DashcamFlow />
      <SafetyFeatures />
    </div>
  );
};

export default DashcamContent;
