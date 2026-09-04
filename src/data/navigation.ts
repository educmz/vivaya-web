export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Locales", href: "/locales" },
  { label: "Contacto", href: "/contacto" },
];