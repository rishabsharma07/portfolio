// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import flask from './assets/tech_logo/flask.webp';

// Project Section Logo's

import agrioraclephoto from './assets/work_logo/agrioraclephoto.png';
import geoglancephoto from './assets/work_logo/geoglancephoto.png';
import passiqphoto from './assets/work_logo/passiqphoto.png';
import emsphoto from './assets/work_logo/emsphoto.png';
import portfolio from './assets/work_logo/portfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Flask', logo: flask },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  export const education = [

    {
      id: 1,
      school: "Vivekananda Institute of Professional Studies-Technical Campus, Delhi",
      year: "2023-2027",
      desc: "Currently pursuing a B.Tech in specialization in AIML. The program focuses on core computer science principles, software development, and emerging technologies. Engaged in hands-on projects and internships to apply theoretical knowledge in real-world scenarios.",
      degree: "B.Tech - CSE(AIML)",
    },
    {
      id: 2,
      school: "Universal Public School, Delhi",
      year: "2023",
      grade: "Grade: 87.6%",
      desc: "Focused on Physics, Chemistry, Mathematics, and Computer Science. Gained a solid foundation in analytical problem-solving and developed programming skills using Python.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      school: "Universal Public School, Delhi",
      year: "2021",
      grade: "Grade: 92%",
      desc: "I completed class X from Universal Public School, DelhiCompleted Class 10 with a strong academic foundation, focusing on core subjects like Mathematics, Science, and English. Developed analytical and problem-solving skills during this period., under the CBSE board",
      degree: "CBSE (X)", 
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Agri Oracle: One Stop Solution for Farmers",
      description:
        "AgriOracle is an integrated platform designed to empower farmers by addressing key agricultural challenges. The solution combines advanced technologies like image-based disease detection using deep learning, intelligent crop recommendation systems, and strategic crop intercropping suggestions to maximize yield and soil health. It also provides easy access to essential crop-related information, making it a comprehensive digital assistant for modern farming.",
      image: agrioraclephoto,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Flask", "Python"],
      github: "https://github.com/rishabsharma07/AgriOracle-full",
      webapp: "https://agri-oracle-ruddy.vercel.app/",
    },
    {
      id: 1,
      title: "GeoGlance",
      description:
        "GeoGlance is a web-based application that offers detailed information about every country in the world through an intuitive interface. By integrating a public API, the platform provides users with real-time data on countries' geography, population, and more—making it a handy tool for quick reference, learning, or travel planning.",
      image: geoglancephoto,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API",],
      github: "https://github.com/rishabsharma07/GeoGlance",
      webapp: "https://geo-glance.vercel.app/",
    },
    {
      id: 2,
      title: "PassIQ- Password Manager",
      description:
        "PassIQ is a user-friendly password management application designed to securely store and organize user credentials. Built with a focus on privacy and efficiency, the system encrypts and saves passwords in a MongoDB database, offering users a safe and centralized solution to manage their digital security.",
      image: passiqphoto,
      tags: ["HTML", "TailwindCSS", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/rishabsharma07/PassIQ-full",
      webapp: "https://passiq.vercel.app/",
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "*ONLY FRONTEND* The Employee Management System is a web-based application developed to efficiently manage task assignments and tracking within an organization. It includes two separate dashboards: one for administrators and another for employees, each with its own secure login system. The Admin Dashboard allows administrators to create new tasks, assign them to specific employees, and monitor the overall progress of all tasks. Admins can view tasks categorized by their status—pending, accepted, completed, or failed—making it easy to manage workloads and track employee performance. On the other hand, the Employee Dashboard enables employees to log in, view their assigned tasks, and update the status of each task as they work on them. They can accept tasks, mark them as completed upon finishing, or indicate if a task has failed. The system is designed with a clean and responsive user interface, promoting ease of use and effective communication between admins and employees, ultimately contributing to better workflow management and organizational productivity.",
      image: emsphoto,
      tags: ["HTML", "TailwindCSS", "JavaScript", "React JS"],
      github: "https://github.com/rishabsharma07/ems",
      webapp: "https://ems-ruby-nu.vercel.app/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "My portfolio website",
      image: portfolio,
      tags: ["HTML", "TailwindCSS", "JavaScript", "React JS", "EmailJS"],
      github: "https://github.com/rishabsharma07/portfolio",
      webapp: "https://rishabsharma.vercel.app/",
    },
  ]