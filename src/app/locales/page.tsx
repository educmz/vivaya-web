import type { Metadata } from "next";
import { LocationsHero } from "@/components/locations/LocationsHero";
import { LocationsList } from "@/components/locations/LocationsList";

export const metadata: Metadata = { title: "Locales" };
export default function LocationsPage() { return <><LocationsHero /><LocationsList /></>; }
