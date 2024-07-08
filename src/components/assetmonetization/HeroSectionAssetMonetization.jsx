import AsseMonetiationHeroCarsoulSection from "../../ui/AsseMonetiationHeroCarsoulSection";

import heroasset from "/img/assetmonetization/heroasset.png";
const beradcrumbs = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "OUR SERVICES",
    link: "#",
  },
  {
    title: "ASSET MONETIZATION ",
    link: "/assetmonetization",
  },
];

const heroTextData = [
  {
    title: "Unlock the Value of Your Assets with Epiidosis Investments",
    desc: "Discover how Epiidosis Investments can help you unlock the full potential of your assets through strategic monetization solutions, ensuring growth and financial empowerment.",
    buttonText: "Explore Asset Monetization",
  },
  {
    title: "Seamless Asset Engagement Process",
    desc: "Explore Epiidosis Investments streamlined process designed to guide asset owners seamlessly from initial engagement to successful fund transfer, ensuring clarity and efficiency at every step.",
    buttonText: "Get Started",
  },
  {
    title: "Diversified Investment Opportunities",
    desc: "Discover a wide range of investment opportunities across diverse sectors with Epiidosis Investments. From finance and healthcare to energy and agriculture, explore avenues for substantial growth aligned with global market demands.",
    buttonText: "Get Started",
  },
  {
    title: "Maximizing Financial Potential with Epiidosis",
    desc: "Unlock the full financial potential of your assets with Epiidosis Investments. Our global expertise and strategic approach empower you to maximize returns and achieve sustainable growth through professional asset management.",
    buttonText: "Get Started",
  },
];
const HeroSectionAssetMonetization = () => {
  return (
    <div>
      <AsseMonetiationHeroCarsoulSection
        beradcrumbs={beradcrumbs}
        heroTextData={heroTextData}
        heroasset={heroasset}
      />
    </div>
  );
};

export default HeroSectionAssetMonetization;
