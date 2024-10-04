import { Link, ProjectInfo} from "./types";

export const links: Link[] = [
  {
    nameEng:"Home",
    hash:"#home"
  },
  {
    nameEng:"About",
    hash:"#about"
  },
  {
    nameEng:"Projects",
    hash:"#projects"
  },
  {
    nameEng:"Skills",
    hash:"#skills"
  },
  {
    nameEng:"Contact",
    hash:"#contact"
  },
];

export const ProjectsData: ProjectInfo[] = [
  {
    title:"Snowlake Theme",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags:["React", "NextJS", "MongoDB", "TailwindCSS", "NodeJS"],
    imageUrl:"/image1.png",
    link:"https://www.google.com"
  },
  {
    title:"Budget App",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags:["React", "NextJS", "MongoDB", "TailwindCSS", "NodeJS"],
    imageUrl:"/image2.png",
    link:"https://www.google.com"
  },
  {
    title:"Storage App",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags:["React", "NextJS", "MongoDB", "TailwindCSS", "NodeJS"],
    imageUrl:"/image3.png",
    link:"https://www.google.com"
  },
  {
    title:"Missio Theme",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags:["React", "NextJS", "MongoDB", "TailwindCSS", "NodeJS"],
    imageUrl:"/image4.png",
    link:"https://www.google.com"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "NEXT.JS",
  "Node.JS",
  "Git",
  "Tailwind CSS",
  "Shadcn",
  "Express",
  "MongoDB",
  "Framer Motion"
];