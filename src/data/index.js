import {
  bootstrap,
  css3,
  html5,
  js,
  reactjs,
  sass,
  tailwindcss,
  vite,
} from "./assets";

import spaceTourism from "../assets/space-tourism.png";
import urlShorteningApi from "../assets/url-shortening-api.png";

// tech stack objects
const tech = {
  html: {
    title: "HTML",
    icon: html5,
  },
  css: {
    title: "CSS",
    icon: css3,
  },
  js: {
    title: "JavaScript",
    icon: js,
  },
  react: {
    title: "React",
    icon: reactjs,
  },
  bootstrap: {
    title: "Bootstrap",
    icon: bootstrap,
  },
  tailwindcss: {
    title: "Tailwind CSS",
    icon: tailwindcss,
  },
  sass: {
    title: "Sass",
    icon: sass,
  },
  vite: {
    title: "Vite",
    icon: vite,
  },
};

// Tech Stack section data
export const techStack = [
  tech.html,
  tech.css,
  tech.js,
  tech.react,
  tech.bootstrap,
  tech.tailwindcss,
  tech.sass,
  tech.vite,
];

// Projects section data
export const projects = [
  {
    img: spaceTourism,
    title: "Space Tourism",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: [tech.html, tech.js, tech.sass, tech.react],
    previewLink: "https://kagiso31.github.io/space-tourism",
    codeLink: "https://github.com/Kagiso31/space-tourism",
  },
  {
    img: urlShorteningApi,
    title: "URL shortening API",
    desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: [tech.html, tech.css, tech.js, tech.react],
    previewLink: "https://kagiso31.github.io/url-shortening-api",
    codeLink: "https://github.com/Kagiso31/url-shortening-api",
  },
];
