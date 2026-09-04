import { OrangeHeroExperience } from "@/components/experiences/OrangeHeroExperience";
import { OrangeStory } from "@/components/experiences/OrangeStory";
import { ProductShowcase } from "@/components/experiences/ProductShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { RappiBanner } from "@/components/home/RappiBanner";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { ClubPreview } from "@/components/home/ClubPreview";

export default function Home() {
  return <><OrangeHeroExperience /><FeaturedProducts /><OrangeStory /><BenefitsSection /><ProductShowcase /><PromotionsSection /><RappiBanner /><LocationsPreview /><ClubPreview /></>;
}
