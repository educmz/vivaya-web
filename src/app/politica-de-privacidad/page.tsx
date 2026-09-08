import type { Metadata } from "next";

import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce de forma clara cómo Vivanya trata la información relacionada con el uso de su sitio web.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}