export interface VivayaLocation {
  id: string;
  name: string;
  address: string;
  schedule: string[];
  image: string;
  mapsUrl: string;
  orderUrl?: string;
  note?: string;
}

export const locations: VivayaLocation[] = [
  {
    id: "local-1",
    name: "Miraflores",
    address: "Av. de Ejemplo 123, Miraflores, Lima",
    schedule: [
      "Lunes a sábado: 8:00 a.m. – 10:00 p.m.",
      "Domingo: 8:00 a.m. – 9:00 p.m.",
    ],
    image: "/images/about/about-lifestyle.webp",
    mapsUrl: "#",
    note: "Dirección y fotografía temporales de muestra.",
  },
  {
    id: "local-2",
    name: "Surco",
    address: "Calle de Muestra 456, Surco, Lima",
    schedule: [
      "Lunes a sábado: 8:00 a.m. – 10:00 p.m.",
      "Domingo: 8:00 a.m. – 9:00 p.m.",
    ],
    image: "/images/about/about-team.webp",
    mapsUrl: "#",
    note: "Dirección y fotografía temporales de muestra.",
  },
];