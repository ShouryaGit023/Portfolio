// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import cf from './assets/tech_logo/images.png';
import cc from './assets/tech_logo/CodeChef_Logo.png';
import lc from './assets/tech_logo/LeetCode_logo_black.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Codeforces', logo: cf, link:"https://codeforces.com/profile/Shourya823" },
      { name: 'CodeChef', logo: cc, link:"https://www.codechef.com/users/free_poem_85" },
      { name: 'LeetCode', logo: lc, link: "https://leetcode.com/u/uUBNEsgA5h/" }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      // img: glaLogo,
      school: "National Institute Of Technology,Raipur",
      date: "Aug 2024 - Present",
      grade: "8.87spi",
      desc: "Doing BTech in CSE from NIT Raipur",
      degree: "BTech in Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Delhi Public School,Ambikapur",
      date: "2023-2024",
      grade: "94%",
      desc: "I completed my class 12 education from DPS,Ambikapur",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      // img: vpsLogo,
      school: "Delhi Public School, Ambikapur",
      date: "2021-2022",
      grade: "97.6%",
      desc: "",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "QTrack",
      description:
        "A Digital Queue Management System speacially made for government offices and emergency departments like hostpital and all. Aimed to provide info about the waiting time and help to reduce and digitalize it",
      // image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Twilio-API"],
      github: "https://github.com/ShouryaGit023/Qtrack-2025-",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Communit-i",
      description:
        "A fullstack community website made for NITRR,to provide studensts to anonomously interact with seniors and had a special event and club formation page along with notification feature",
      // image: csprepLogo,
      tags: ["HTML", "CSS", "DJango", "Javascript"],
      github: "https://github.com/ShouryaGit023/Communit-i",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Password Generator",
      description:
        "A React based web app web app to generate random password allowing user to choose special character and the lenght of the password",
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ShouryaGit023/Password-generator",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "CodeUtsava 9.0 trial Website",
      description:
        "A trial website for NITRR yearly hack-a-thon CODEUTSAVA 9.0. Featuring dual theme with based on character chosen.",
      // image: npmLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/ShouryaGit023/codeutsava-9.0-naruto",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    }
  ];  