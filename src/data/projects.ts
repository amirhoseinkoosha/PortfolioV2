import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Meerkat",
    description:
      "Adaptive learning application with a dedicated admin panel for managing questions, gamification logic, rewards, and user progress. Designed scalable frontend architecture for both mobile app and management dashboard. Integrated dynamic content, gamified challenges, and reward systems.",
    href: "https://meerkat.school",
    tags: ["React", "React Native", "React", "Next.js"],
    image: {
      LIGHT: "/images/projects/meerkatLight.avif",
      DARK: "/images/projects/meerkatDark.avif",
    },
  },
  {
    index: 1,
    title: "Gonbad-kabud",
    description:
      "Interactive children's book and Children's audiobook  app built with React Native for Android platform.",
    href: "/projects",
    tags: ["React Native", "Android"],
    image: {
      LIGHT: "/images/projects/gonbadKabudLight.avif",
      DARK: "/images/projects/gonbadKabudDark.avif",
    },
  },
  // {
  //   index: 2,
  //   title: "Children's Audiobook App",
  //   description:
  //     "Children's audiobook application developed with React Native for Android platform.",
  //   href: "/projects",
  //   tags: ["React Native", "Android"],
  //   image: {
  //     LIGHT: "/images/projects/kanbanLight.webp",
  //     DARK: "/images/projects/kanbanDark.webp",
  //   },
  // },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Meerkat – Adaptive Learning Platform",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/meerkatLight.avif",
      "/images/projects/meerkatDark.png",
    ],
    description:
      "Adaptive learning application with a dedicated admin panel for managing questions, gamification logic, rewards, and user progress. Designed scalable frontend architecture for both mobile app and management dashboard. Integrated dynamic content, gamified challenges, and reward systems.",
    sourceCodeHref: "https://github.com/amirhoseinkoosha",
  },
  {
    name: "Gonbad-kabud – Interactive Children's Book App",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/gonbadKabudLight.avif",
      "/images/projects/gonbadKabudDark.avif",
    ],
    description:
      "Interactive children's book application built with React Native for Android platform.",
    sourceCodeHref: "https://github.com/amirhoseinkoosha",
  },
  // {
  //   name: "Children's Audiobook App",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/kanbanLight.webp",
  //     "/images/projects/kanbanDark.webp",
  //   ],
  //   description:
  //     "Children's audiobook application developed with React Native for Android platform.",
  //   sourceCodeHref: "https://github.com/amirhoseinkoosha",
  // },
  {
    name: "Algorithmic Trading Bots",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "Developed 10+ algorithmic trading bots using MQL4 and MQL5. Implemented custom trading strategies and indicators for automated trading systems.",
    sourceCodeHref: "https://github.com/amirhoseinkoosha",
  },
];
