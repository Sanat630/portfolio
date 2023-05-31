import React from "react";
import { FaFigma, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Sanat Abdunazarov",
  title: "Front-End Developer",
  social: {
    github: "https://github.com/Sanat630" ,
    instagram: "https://www.instagram.com/sanat630/",
    facebook: "https://twitter.com/Sanatboec",
    email: "sanatabdunazarov@gmail.com",
  },
  about: {
    title: "About Me",
    description:
      "Hello! I am Abdunazarov Sanat and I'm Front-End developer. Specializations: — Programmer, developer (Front-End developer). Ability tolearn. Technical savvy. Understanding the specifics and focus industries. Technical skills; Email skills; Working skills in program in Adobe Photoshop (general understanding). Do you have any hobbies? In my free time I like to listen to music. I am also interested in computer programs (Photoshop, Video Editing) and I love football (soccer).",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Figma",
      skillIcon: <FaFigma className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "RomSem",
      description: "The RomSem built with Javascript(ES6), HTML5 and CSS3",
      tags: [
        "TEMPLATE",
        "HTML",
        "JS",
        "CSS"
      ],
      link: "https://project-romsem.netlify.app" 
    },
    {
      title: "CINEMA",
      description: "The RomSem built with Javascript(ES6), HTML5 and CSS3.",
      tags: [
        "TEMPLATE",
        "HTML",
        "JS",
        "CSS"
      ],
      link: "https://stately-cobbler-4ca707.netlify.app"
    }
  ]
};
export default data;
