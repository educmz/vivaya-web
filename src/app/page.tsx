import { OrangeHeroExperience } from "@/components/experiences/OrangeHeroExperience";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HowVivayaWorks } from "@/components/home/HowVivayaWorks";
import { OrangeJourney } from "@/components/home/OrangeJourney";

export default function Home() {
  return (
    <>
      <OrangeHeroExperience />
      <OrangeJourney />
      <BenefitsSection />
      <FeaturedProducts />
      <HowVivayaWorks />
      <HomeFinalCta />
    </>
  );
}
