import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import myInspireImg from '@/public/Splash Screen.png';
import babyWorldImg from '@/public/login.jpg';
import unidriveImg from '@/public/unidrive.png';
import cocktailDbImg from '@/public/cocktailDB.png';
import SkillsImg from '@/public/Skills-landingPage.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Geomatics(GIS) engineering',
    location: 'Tunis',
    description: "I'm an engineer in landsurveying and geomatics.",
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Graduated bootcamp',
    location: 'Tunis',
    description:
      "I graduated after 6 months of studying. I was an intern in the company that i'm working for now for the whole bootcamp period",
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Front-End Developer',
    location: 'Menzah, Ariana',
    description:
      "I'am working as a front-end developer for 1 year in this job.",
    icon: React.createElement(CgWorkAlt),
    date: 'currently',
  },
] as const;

export const projectsData = [
  {
    title: 'Unidrive',
    description:
      'I worked as a front-end developer on this project for 6 months. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'Sass', 'Redux Toolkit'],
    imageUrl: unidriveImg,
    projectLink: 'https://unidrive.app/',
  },
  {
    title: 'MyInspire',
    description:
      'internal app for the developers in my company. We can using this app demand daysoff, remote work or authorizations. Also we can check our balance.',
    tags: ['React-native', 'TypeScript', 'Tailwind', 'Redux'],
    imageUrl: myInspireImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A tracking app for pharmaceutical company to track their medical representatives',
    tags: ['React-native', 'TypeScript', 'Tailwind', 'Redux', 'Framer'],
    imageUrl: babyWorldImg,
  },
  {
    title: 'CocktailDB',
    description:
      'personal project to get a better understanding of Redux Toolkit using free api from theCocktailDB',
    tags: ['NextJs', 'JavaScript', 'AntD', 'Redux'],
    imageUrl: cocktailDbImg,
    projectLink: 'https://themer-cocktail-db-chh.vercel.app/',
  },
  {
    title: 'Skills',
    description:
      'personal project to get a better understanding of Redux Toolkit using free api from theCocktailDB',
    tags: ['React', 'JavaScript', 'Bootstrap'],
    imageUrl: SkillsImg,
    projectLink: 'https://test-inspire.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React-Native',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Sass',
  'MongoDB',
  'Redux',
  'Redux Toolkit',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
