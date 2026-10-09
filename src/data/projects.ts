export const projects = [
  {
    slug: "espe-y-ale",
    number: "01",
    title: "Espe y Ale",
    description:
      "Momentos reales, emociones sinceras e historias para siempre.",
    image: "/images/foto-espe.webp",
    video:
      "https://pub-accc02013dc34e678b7b28605c33edc5.r2.dev/videos/video-espe-y-ale.m4v",
    trailer: "https://pub-accc02013dc34e678b7b28605c33edc5.r2.dev/trailer-espe-ale.m4v",
    alt: "Pareja celebrando su boda",
  },
  {
    slug: "eu-y-joe",
    number: "02",
    title: "Eu y Joe",
    description: "Personas reales e historias auténticas, sin guion.",
    image: "/images/foto-eu.webp",
    video:
      "https://pub-accc02013dc34e678b7b28605c33edc5.r2.dev/videos/trailer-eu-joe.m4v",
    trailer:
      "https://pub-accc02013dc34e678b7b28605c33edc5.r2.dev/videos/trailer-eu-joe.m4v",
    alt: "Público disfrutando de un concierto",
  },
  {
    slug: "alba-y-alex",
    number: "03",
    title: "Alba y Alex",
    description: "Energía, movimiento y momentos irrepetibles.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    video:
      "https://pub-accc02013dc34e678b7b28605c33edc5.r2.dev/videos/video-alba-y-alex.m4v",

    trailer: undefined,
    alt: "Cámara de cine preparada para grabar",
  },
] as const;

export type Project = (typeof projects)[number];
