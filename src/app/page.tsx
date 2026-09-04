import { OrangeHeroExperience } from "@/components/experiences/OrangeHeroExperience";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { OrangeJourney } from "@/components/home/OrangeJourney";
import { ProductScrollSequence } from "@/components/home/ProductScrollSequence";
import { VivayaCurveMarquee } from "@/components/home/VivayaCurveMarquee";
import { VivayaManifesto } from "@/components/home/VivayaManifesto";
import { VivayaPaymentSection } from "@/components/home/VivayaPaymentSection";
import { VivayaReviews } from "@/components/home/VivayaReviews";

export default function Home() {
  return (
    <>
      <OrangeHeroExperience />
      <VivayaCurveMarquee />
      <VivayaManifesto />
      <ProductScrollSequence />
      <BenefitsSection />
      <VivayaReviews />
      <FeaturedProducts />
      <VivayaPaymentSection />
      <OrangeJourney />
    </>
  );
}
