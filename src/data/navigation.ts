export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Productos", href: "/productos" },
  { label: "Promociones", href: "/promociones" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Locales", href: "/locales" },
  { label: "Club", href: "/club" },
  { label: "Contacto", href: "/contacto" },
];
