import { SiNextdotjs } from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import GithubSvg from "@/public/icons/github.svg";
import MetatraderSvg from "@/public/icons/metatrader.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "JavaScript (ES6+)",
        icon: JavascriptSvg,
      },
      {
        name: "MQL4",
        icon: MetatraderSvg,
      },
      {
        name: "MQL5",
        icon: MetatraderSvg,
      },
    ],
  },
  {
    sectionName: "Frontend Technologies",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React Native",
        icon: ReactjsSvg,
      },
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CsssSvg,
      },
    ],
  },
  {
    sectionName: "State Management",
    skills: [
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "Context API",
        icon: ReactjsSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GithubSvg,
      },
      {
        name: "REST API Integration",
        icon: ReactjsSvg,
      },
    ],
  },
];
