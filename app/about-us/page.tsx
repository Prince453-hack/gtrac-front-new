import AboutHero from "./_components/about-hero";
import AboutVision from "./_components/about-vision";
import AboutFeatures from "./_components/about-features";
import AboutTimeline from "./_components/about-timeline";
import AboutPartners from "./_components/about-partners";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutVision />
      <AboutFeatures />
      <AboutTimeline />
      <AboutPartners />
    </div>
  );
};

export default AboutUs;
