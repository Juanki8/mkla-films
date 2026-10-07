export const projects = [
  {
    slug: "espe-y-ale",
    number: "01",
    title: "Espe y Ale",
    category: "BODA",
    description:
      "Momentos reales, emociones sinceras e historias para siempre.",
    image: "/images/foto-espe.jpg",
    alt: "Pareja celebrando su boda",
  },
  {
    slug: "eu-y-joe",
    number: "02",
    title: "Eu y Joe",
    category: "CONCIERTO",
    description: "Personas reales e historias auténticas, sin guion.",
    image: "/images/foto-eu.jpg",
    alt: "Público disfrutando de un concierto",
  },
  {
    slug: "alba-y-alex",
    number: "03",
    title: "Alba y Alex",
    category: "DOCUMENTAL",
    description: "Energía, movimiento y momentos irrepetibles.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    alt: "Cámara de cine preparada para grabar",
  },
] as const;

export type Project = (typeof projects)[number];
