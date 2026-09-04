import type { StoreLocation } from "@/types/location";

export const locations: StoreLocation[] = [
  {
    id: "location-01",
    name: "Local Norte",
    address: "Av. Principal 123, Barrio del Sol",
    schedule: "Lunes a viernes 8:00 AM - 9:00 PM · Sábados y domingos 9:00 AM - 7:00 PM",
    image: "/images/about/about-lifestyle.webp",
    mapsUrl: "",
    rappiUrl: "",
    active: true,
  },
  {
    id: "location-02",
    name: "Local Centro",
    address: "Calle Luna 45, Centro Histórico",
    schedule: "Lunes a sábado 7:00 AM - 10:00 PM · Domingos 10:00 AM - 6:00 PM",
    image: "/images/about/about-machine.webp",
    mapsUrl: "",
    rappiUrl: "",
    active: true,
  },
];
