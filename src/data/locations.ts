import type { StoreLocation } from "@/types/location";

export const locations: StoreLocation[] = [
  {
    id: "location-01",
    name: "Miraflores",
    address: "Av. Larco 1234, Miraflores, Lima",
    schedule: "Lun - Dom: 7:00 a. m. - 9:00 p. m.",
    image: "/images/products/Locales/Miraflores.jpg",
    mapsUrl: "",
    rappiUrl: "",
    active: true,
  },
  {
    id: "location-03",
    name: "Surco",
    address: "Av. El Polo 740, Santiago de Surco, Lima",
    schedule: "Lun - Dom: 7:00 a. m. - 9:00 p. m.",
    image: "/images/products/Locales/Surco.jpeg",
    mapsUrl: "",
    rappiUrl: "",
    active: true,
  },
];
