import { formatPrice } from "@/lib/utils";

interface EventPromotion {
  name: string;
  subtitle?: string;
  category?: string;
  description?: string;
  includes?: readonly string[];
  price?: number;
  priceFrom?: boolean;
  pricing?: readonly { label: string; price: number }[];
  secondaryPrice?: number;
  secondaryLabel?: string;
  people?: number;
  alcohol?: boolean;
  details?: readonly string[];
}

export function buildEventWhatsAppMessage(promotion: EventPromotion): string {
  const sections = [
    "Hola, quisiera solicitar información sobre la siguiente opción de VIVAYA:",
    `*${[promotion.name, promotion.subtitle].filter(Boolean).join(" — ")}*`,
  ];

  if (promotion.category) sections.push(`Categoría: ${promotion.category}`);
  if (promotion.description) sections.push(promotion.description);

  const includes = promotion.includes?.filter((item) => item.trim());
  if (includes?.length) sections.push(`Incluye:\n${includes.map((item) => `• ${item}`).join("\n")}`);

  if (promotion.price != null) {
    sections.push(`Precio: ${promotion.priceFrom ? "desde " : ""}${formatPrice(promotion.price)}`);
  }
  if (promotion.pricing?.length) {
    sections.push(`Opciones y precios:\n${promotion.pricing.map((option) => `• ${option.label}: ${formatPrice(option.price)}`).join("\n")}`);
  }
  if (promotion.secondaryPrice != null && promotion.secondaryLabel) {
    sections.push(`${promotion.secondaryLabel}: ${formatPrice(promotion.secondaryPrice)}`);
  }
  if (promotion.people != null) sections.push(`Ideal para: ${promotion.people} personas`);
  if (promotion.alcohol != null) sections.push(promotion.alcohol ? "Con alcohol" : "Sin alcohol");

  const details = promotion.details?.filter((item) => item.trim() && !includes?.includes(item));
  if (details?.length) sections.push(`Detalles:\n${[...new Set(details)].map((item) => `• ${item}`).join("\n")}`);

  sections.push("Me gustaría conocer la disponibilidad y coordinar los detalles del pedido.");
  return sections.join("\n\n");
}

export function buildEventWhatsAppUrl(phone: string, promotion: EventPromotion): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(buildEventWhatsAppMessage(promotion))}`;
}
