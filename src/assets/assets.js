import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.avif";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "TypeScript"],
  },
  // {
  //   title: "Backend Development",
  //   icon: FaServer,
  //   description: "Creating robust server-side applications and RESTful APIs.",
  //   tags: ["Node.js", "Express", "Django", "Laravel"],
  // },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MySQL", "Firebase"],
  },
  // {
  //   title: "Mobile Development",
  //   icon: FaMobileAlt,
  //   description:
  //     "Building cross-platform mobile applications with modern tools.",
  //   tags: ["React Native", "Flutter", "Ionic", "Swift"],
  // },
  // {
  //   title: "Cloud & DevOps",
  //   icon: FaCloud,
  //   description: "Deploying and managing applications in cloud environments.",
  //   tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  // },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Figma", "VS Code"],
  },
];

export const projects = [
  {
    title: "Coffee Shop Website",
    description:
      "A stylish coffee website highlighting aromatic blends, artisanal brews, and a passion for great taste.",
    image: projectImg1,
    tech: ["React", "Tailwind CSS"],
    // icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://best-coffee-shop-aoxob0a5x-adithi15s-projects.vercel.app/",
    code: "https://github.com/adithi15/Coffee-website",
  },
  {
    title: "Fit-Elite Fitness App",
    description:
      "A modern fitness app designed to track workouts, monitor progress, and inspire a healthier lifestyle.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS"],
    demo: "https://fit-elite-nrftlw6sz-adithi15s-projects.vercel.app/",
    code: "https://github.com/adithi15/FitElite",
  },
  {
  title: "Travel Agent App",
  description:
    "A web application for exploring travel destinations, viewing galleries, and planning trips.",
  image: projectImg3,
  tech: ["React", "Vite", "Tailwind CSS"],
  icons: [FaReact, FaDatabase],
  demo: "https://travel-agent-app-eta.vercel.app/",
  code: "https://github.com/adithi15/travel-agent-app"
},

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Chat App",
  //   description:
  //     "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description:
  //     "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
];

export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];
