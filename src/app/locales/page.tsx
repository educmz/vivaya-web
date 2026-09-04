import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LocationsPreview } from "@/components/home/LocationsPreview";

export const metadata: Metadata = { title: "Locales" };
export default function LocationsPage() { return <><PageHero title="Locales" description="Ubicaciones ficticias para maquetación. No utilizar como información comercial." /><LocationsPreview /></>; }
