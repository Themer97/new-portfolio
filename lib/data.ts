import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import myInspireImg from "@/public/Splash Screen.png";
import babyWorldImg from "@/public/login.jpg";
import unidriveImg from "@/public/unidrive.png";
import cocktailDbImg from "@/public/cocktailDB.png";
import SkillsImg from "@/public/Skills-landingPage.png";
import adminDashboard from "@/public/myAdminDashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Geomatics(GIS) engineering",
    location: "Tunis",
    description: "I'm an engineer in landsurveying and geomatics.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Tunis",
    description:
      "I graduated after 6 months of studying. I was an intern in the company that i'm working for now for the whole bootcamp period",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Menzah, Ariana",
    description:
      "I'am working as a front-end developer for 1 year in this job.",
    icon: React.createElement(CgWorkAlt),
    date: "currently",
  },
] as const;

export const projectsData = [
  {
    title: "Unidrive",
    description:
      "Driving schools app,where both schools and students interact with each other. I was involved in the implementation and dynamisation of this app.",
    tags: ["React", "Next.js", "Sass", "Redux Toolkit"],
    imageUrl: unidriveImg,
    projectLink: "https://unidrive.app/",
  },
  {
    title: "MyInspire",
    description:
      "internal company app. We can using this app demand daysoff, remote work or authorizations. Also we can check our balances,I was in charge of the web and mobile app.",
    tags: ["React-native", "TypeScript", "Tailwind", "Redux"],
    imageUrl: myInspireImg,
  },
  {
    title: "Baby World",
    description:
      "Application for medical representatives to find out about doctors visits and products to market. I got involved in the implementation and dynamisation of this app.",
    tags: ["React-native", "TypeScript", "Tailwind", "Redux", "Framer"],
    imageUrl: babyWorldImg,
  },
  {
    title: "CocktailDB",
    description:
      "personal project to get a better understanding of Redux Toolkit using free api from theCocktailDB",
    tags: ["NextJs", "JavaScript", "AntD", "ReduxToolkit"],
    imageUrl: cocktailDbImg,
    projectLink: "https://themer-cocktail-db-chh.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    description:
      "This a fullstack project, an admin dashboard to track employees. I utilize the CRUD opertaions and authentication in this project.",
    tags: ["React", "Redux", "antD", "NodeJs", "Express", "MongoDB"],
    imageUrl: adminDashboard,
    projectLink:
      "https://dashboard-users-git-main-themer-saanounis-projects.vercel.app/",
  },
  {
    title: "Skills",
    description:
      "This is one of my first projects, it's a landing page for a company called Skills. I used a lot of CSS and JavaScript to make this project.",
    tags: ["React", "JavaScript", "Bootstrap"],
    imageUrl: SkillsImg,
    projectLink: "https://test-inspire.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sass",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
