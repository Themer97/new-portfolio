import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "I worked as a front-end developer on this project for 6 months. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Sass", "Redux Toolkit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
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
