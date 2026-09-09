import type { Metadata } from "next";

import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Conoce de forma clara cómo Vivaya utiliza cookies y servicios externos en su sitio web.",
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}