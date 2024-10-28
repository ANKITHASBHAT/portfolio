import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  credain,
  reactjs,
  git,
  figma,
  java,
  python,
  springboot,
  npcil,
  // starbucks,
  tesla,
  // shopify,
  hubs,
  stinc,
  // jobit,
  ems,
  // tripguide,
  deepfake,
  threejs,
  white,
} from "../assets";

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
    title: "Software Development",
    icon: web,
  },
  {
    title: "Java - Spring boot",
    icon: mobile,
  },
  {
    title: "Full Stack",
    icon: creator,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  
];

const technologies = [
  {
    name:"java",
    icon: java,
  },
  {
    name:"python",
    icon: python,
  },
  {
    name:"Spring boot",
    icon: springboot,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "NPCIL, Karwar, India",
    icon: npcil,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developed a comprehensive Library Management Software using ColdFusion Markup Language, HTML5, CSS, JavaScript, and MS SQL",
      " Streamlined cataloging and check-out processes, reducing administrative tasks by 40%.",
      "Assisted the scientists and senior developers at the institution in reviewing codes in C and Fortran for Network Security.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Hubs, Bengaluru",
    //icon: hubs,
    iconBg: "#E6DEDD",
    date: "March 2024 - July 2024",
    points: [
      "An Early StartUp based in Bengaluru.",
      "I led and developed a MVP - an android app with a team of 4 using Flutter",
      "One of the top 100 ideas in START Mahakumbh, G20 Summit, 2024.",
      "Participated in fund raisings and meetings with VCs. Empowered my software as well as Interpersonal skills.",
    ],
  },
  {
    title: "Associate Engineering Intern",
    company_name: "Credain, Mumbai(Remote)",
    icon: credain,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "A fintech- financial services company where I work with the CEO closely in the Python team.",
      "I contribute to write algorithms and test cases for payment chain automation.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Stinc",
    description:
      "An android, Flutter and Java application that allows users to post and vote on neighborhood issues.",
    tags: [
      {
        name: "Flutter-Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: stinc,
    source_code_link: "https://github.com/ANKITHASBHAT/STINC",
  },
  {
    name: "EMS",
    description:
      "A Full Stack application for Employee Management system implementing simple CRUD operations built on REST API.",
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "reactJS",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: ems,
    source_code_link: "https://github.com/ANKITHASBHAT/Fullstack-EMS",
  },
  {
    name: "DeepFake Detection Model",
    description:
      "A detective model implemented using LSTM, RES-NET in Python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "PIL",
        color: "green-text-gradient",
      },
      {
        name: "CUDA-Tools",
        color: "pink-text-gradient",
      },
    ],
    image: deepfake,
    source_code_link: "https://github.com/ANKITHASBHAT/DeepFake-Detection-Model",
  },
];

export { services, technologies, experiences, projects };
