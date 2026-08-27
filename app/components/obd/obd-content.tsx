"use client";

import ObdBentoGrid from "./_components/obd-bento-grid";
import ObdIntegrationFlow from "./_components/obd-integration-flow";
import ObdBenefits from "./_components/obd-benefits";
import ObdFeaturesGrid from "./_components/obd-features-grid";

const ObdContent = () => {
  return (
    <div className="w-full">
      <ObdBentoGrid />
      <ObdIntegrationFlow />
      <ObdBenefits />
      <ObdFeaturesGrid />
    </div>
  );
};

export default ObdContent;
