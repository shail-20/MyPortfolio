import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import mic from '../assets/tech/mic.png';
import certificate from '../assets/tech/certificate.png';
import cplusplus from '../assets/tech/cplusplus.png';
import express from '../assets/tech/express.png';
import mysql from '../assets/tech/mysql.png';
import c from '../assets/tech/c.png';
import youtube from '../assets/youtube.png';
import chatapp from '../assets/chatapp.png';
import aiImageGen from '../assets/aiImageGen.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  }
  // {
  //   title: " Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C",
    icon: c,
  },
];

const experiences = [
  {
    title: "DU Hackathon",
    company_name: "",
    icon: web,
    iconBg: "#383E56",
    date: "February 2023",
    points: [
      "Secured a position among the top 15 teams in DU Hacks 2.0, a national-level hybrid hackathon.",
      "Developed and presented a YouTube clone using React and Material UI, integrating real-time video data through Rapid API.", "Dedicated over 20 hours in a week to closely replicate the core features of the original platform, showcasing strong skills in front-end development and API integration.",
    ],
  },
  {
    title: "HackHaven, GDSC-ABES",
    company_name: "",
    icon: web,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Finalist in HackHaven, where I, along with my team members, developed a decentralized Google Drive clone.",
      "The project leveraged blockchain technology to ensure secure and distributed file storage, eliminating single points of failure.", 
      "Demonstrated strong expertise in decentralized application development, focusing on security, data integrity, and user accessibility.",
      "The solution highlighted my ability to innovate and apply cutting-edge technologies to solve real-world problems.",
    ],
  },
  {
    title: "Certifications",
    company_name: "",
    icon: certificate,
    iconBg: "#383E56",
    date: "Jan 2023 - August 2024",
    points: [
      "AWS Academy Graduate: AWS Academy Cloud Foundations",
      "CISCO: Networking and Cybersecurity Certifications",
      "Coding Blocks: DSA in C++ certification",
      "Postman API Fundamentals Student Expert",
      "Problem Solving Certification by HackerRank"
    ],
  },
  {
    title: "Public Speaker",
    company_name: "",
    icon: mic,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Event head in the literary society of ABESEC (Minerva)",
      "Hosted and organized various events, including debates, quizzes, and poetry slams, showcasing strong leadership and communication skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Application",
    description:
      "Developed MERN-based chat application for real-time messaging and seamless user interactions. Implemented WebSocket protocol for efficient bidirectional communication, enhancingthe app’s responsiveness and user engagement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/shail-20/Mern-chat",
  },
  {
    name: "AI Image Generation App",
    description:
      "Engineered a sophisticated web application leveraging the MERN stack to create stunning images from textual descriptions using OpenAI’s DALL-E model. The project features a sleek homepage, user authentication, a dynamic create post page.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: aiImageGen,
    source_code_link: "https://github.com/",
  },
  {
    name: "YouTube Clone",
    description:
      "Developed a fully functional YouTube clone replicating core features such as video playback, user authentication, and dynamic content loading with seamless navigation and user interaction. Real-time data fetching and efficient video management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/shail-20/youtube",
  },
];

export { services, technologies, experiences, testimonials, projects };