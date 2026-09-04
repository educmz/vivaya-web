import { OrangeJourney } from "@/components/home/OrangeJourney";
import { OrangeStory } from "@/components/experiences/OrangeStory";
import { ProductShowcase } from "@/components/experiences/ProductShowcase";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { RappiBanner } from "@/components/home/RappiBanner";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { ClubPreview } from "@/components/home/ClubPreview";

export default function Home() {
  return <><OrangeHeroExperience /><OrangeStory /><BenefitsSection /><ProductShowcase /><PromotionsSection /><RappiBanner /><LocationsPreview /><ClubPreview /></>;
}
