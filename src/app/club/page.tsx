import type { Metadata } from "next";
import { LoyaltyHero } from "@/components/loyalty/LoyaltyHero";
import { PointsPreview } from "@/components/loyalty/PointsPreview";
import { RewardsPreview } from "@/components/loyalty/RewardsPreview";
import { JoinClubCTA } from "@/components/loyalty/JoinClubCTA";

export const metadata: Metadata = { title: "Club" };
export default function ClubPage() { return <><LoyaltyHero /><PointsPreview /><RewardsPreview /><JoinClubCTA /></>; }
