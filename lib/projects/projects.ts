import ConvoVerse from "@/public/convoverse.png";
import ImageFlux from "@/public/imageflux.jpeg";
import NPM from "@/public/npm-package.jpeg";
import { Projects } from "@/types/projects";
import { icons } from "../icons/icons";

export const projects: Projects[] = [
  {
    name: "ConvoVerse",
    description:
      "ConvoVerse is a sleek, cost-efficient AI chat platform that connects users with today’s most advanced language models through a unified interface. Built for speed, simplicity, and scalability, it offers developers, researchers, and AI enthusiasts a powerful alternative to expensive, one-size-fits-all tools — at a fraction of the cost.",
    image: ConvoVerse,
    type: "web",
    github: "https://github.com/MahfujulSagor/ConvoVerse",
    icons: [
      {
        icon: icons.react,
        height: 30,
      },
      {
        icon: icons.nextjs,
        height: 30,
      },
      {
        icon: icons.appwrite,
        height: 30,
      },
      {
        icon: icons.nodejs,
        height: 30,
      },
      {
        icon: icons.javascript,
        height: 30,
      },
      {
        icon: icons.tailwindcss,
        height: 30,
      },
    ],
  },
  {
    name: "ImageFlux",
    description:
      "ImageFlux is a lightweight mobile app that uses AI to enhance low-resolution images in real-time. Designed with a minimal UI and powered by Expo, it enables quick photo upscaling with near-instant results — no GPU required.",
    image: ImageFlux,
    type: "mobile",
    github: "https://github.com/MahfujulSagor/ImageFlux",
    icons: [
      {
        icon: icons.react,
        height: 30,
      },
      {
        icon: icons.expo,
        height: 30,
      },
      {
        icon: icons.appwrite,
        height: 30,
      },
      {
        icon: icons.nodejs,
        height: 30,
      },
      {
        icon: icons.javascript,
        height: 30,
      },
      {
        icon: icons.tailwindcss,
        height: 30,
      },
    ],
  },
  {
    name: "Native Image Comparison Slider",
    description:
      "A React component that allows users to compare two images interactively using a slider. Published to npm, fully open-source, and ideal for before/after visualizations in portfolios, ecommerce, or AI image tools.",
    image: NPM,
    type: "npm",
    github: "https://github.com/MahfujulSagor/native-image-comparison-slider",
    icons: [
      {
        icon: icons.react,
        height: 30,
      },
      {
        icon: icons.expo,
        height: 30,
      },
      {
        icon: icons.typescript,
        height: 30,
      },
      {
        icon: icons.tailwindcss,
        height: 30,
      },
    ],
  },
];

export const mobileProjects: Projects[] = [
  {
    name: "ImageFlux",
    description:
      "ImageFlux is a lightweight mobile app that uses AI to enhance low-resolution images in real-time. Designed with a minimal UI and powered by Expo, it enables quick photo upscaling with near-instant results — no GPU required.",
    image: ImageFlux,
    type: "mobile",
    github: "https://github.com/MahfujulSagor/ImageFlux",
    icons: [
      {
        icon: icons.react,
        height: 30,
      },
      {
        icon: icons.expo,
        height: 30,
      },
      {
        icon: icons.appwrite,
        height: 30,
      },
      {
        icon: icons.nodejs,
        height: 30,
      },
      {
        icon: icons.javascript,
        height: 30,
      },
      {
        icon: icons.tailwindcss,
        height: 30,
      },
    ],
  },
];
