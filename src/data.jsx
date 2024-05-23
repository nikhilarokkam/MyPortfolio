import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaAward,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';


import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-6.jpg';
import Work8 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Nikhila',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Rokkam',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Vizianagaram, AP',
  },

  {
    id: 7,
    title: 'Languages : ',
    description: 'English, Hindi, Telugu',
  },

  {
    id: 8,
    title: 'Phone : ',
    description: '9949561678',
  },

  /*{
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },*/

  {
    id: 10,
    title: 'Email : ',
    description: 'rokkamnikhila2003@gmail.com',
  },
];

export const stats = [
  {
    id: 1,
    no: '5',
    title: 'Internships <br /> (Full Time)',
  },

  {
    id: 2,
    no: '6+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5',
    title: 'Certification <br /> Courses',
  },

  {
    id: 4,
    no: '1',
    title: ' Freelance <br /> Project',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'October 2023 - November 2023',
    title: 'Web Developer (Internship)<span> SIRAOM PRIVATE LIMITED </span>',
    desc: 'Collaborated within a team to revamp the user interface (UI) of Wainsy`s e-commerce platform, enhancing user experience and visual appeal.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'January 2024 - March 2024',
    title: 'Web Developer (Internship)<span> RA CAP </span>',
    desc: 'Led the development of a responsive WordPress website for RA CAP, improving their online presence.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'January 2024 - March 2024',
    title: 'Software Developer (Internship)<span> Skarvi Systems Limited </span>',
    desc: 'Contributed for the development of Navigator using Core PHP and MySQL, empowering clients with comprehensive ETRM solutions.',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2024 - April 2024',
    title: 'Web Developer (Internship)<span> BuzzBeamDigital </span>',
    desc: 'Handled the management of WordPress websites and crafted pages using Elementor, ensuring smooth functionality and visually appealing design.',
  },

  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'April 2024 - Present',
    title: 'Full Stack Developer (Internship)<span> TouristTribe </span>',
    desc: 'Currently implementing advanced web development methodologies with Laravel and MySQL to refine Tourist Tribe`s e-commerce infrastructure, ensuring seamless integration with AI-powered tour package arrangements and elevating user satisfaction through optimized performance.',
  },

  {
    id: 1,
    category: 'certifications',
    icon: <FaAward />,
    year: 'Feb 1, 2023',
    title: 'Python Programming',
    desc: 'Issued by Codetantra',
  },

  {
    id: 2,
    category: 'certifications',
    icon: <FaAward />,
    year: 'Jan - Mar 2023',
    title: 'DSA using Python <span>consolidated score: 66%</span>',
    desc: 'Issued by NPTEL',
  },

  {
    id: 3,
    category: 'certifications',
    icon: <FaAward />,
    year: 'May 17, 2023',
    title: 'Responsive Web Design',
    desc: 'Issued by freeCodeCamp',
  },
  
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'Bachelor of Technology <span> Anil Neerukonda Institute of Technology & Sciences </span>',
    desc: 'Computer Science Engineering, CGPA : 9.05',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: 'Intermediate <span> Sri Chaitanya Junior College </span>',
    desc: 'Maths, Physics, Chemistry, CGPA : 9.94',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Schooling <span> St.Joseph`s English Medium High School </span>',
    desc: 'Primary Education, CGPA : 10',
  },

  
];

export const skills = [
  {
    id: 1,
    title: 'Laravel',
    percentage: '55',
  },

  {
    id: 2,
    title: 'Python',
    percentage: '70',
  },

  {
    id: 3,
    title: 'HTML and CSS',
    percentage: '92',
  },

  {
    id: 4,
    title: 'JavaScript',
    percentage: '50',
  },

  {
    id: 5,
    title: 'PHP and MySQL',
    percentage: '75',
  },

  {
    id: 6,
    title: 'NodeJS and MongoDB',
    percentage: '25',
  },

  {
    id: 7,
    title: 'DSA using Python',
    percentage: '50',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
  {
    id: 9,
    title: 'WordPress',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Mini Facebook',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Mini Facebook',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'HTML, CSS, JavaScript, PHP, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub: ',
        desc: 'https://github.com/nikhilarokkam/Mini-Facebook',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Time Table Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Automated University Time Table Management System',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Academic Project',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'NodeJS, Express.js, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub: ',
        desc: 'https://github.com/nikhilarokkam/Automated-University-TimeTable-Management-System',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'MyShop Ecommerce Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Ecommerce Store',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Academic Project',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'Flask, SQLAlchemy',
      },
      {
        icon: <FiExternalLink />,
        title: 'GitHub: ',
        desc: 'https://github.com/nikhilarokkam/MyShop-Ecommerce-Store',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Puzzle Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Interactive Puzzle Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Academic Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS, PHP, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live: ',
        desc: 'http://puzzleapp.infinityfreeapp.com/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'WorkHive: Freelancing',
    details: [
      {
        title: 'Project : ',
        desc: 'Freelancing Platform',
      },
      {
        title: 'Client : ',
        desc: 'Academic Project',
      },
      {
        title: 'Language : ',
        desc: 'MongoDB, Express.js, ReactJS, Node.js',
      },
      {
        title: 'GitHub: ',
        desc: 'https://github.com/nikhilarokkam/WorkHive-Empowering-Independent-Professionals.git',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Expense Manager',
    details: [
      {
        title: 'Project: ',
        desc: 'Personal Expense Manager with Visual Analytics',
      },
      {
        title: 'Client: ',
        desc: 'Personal Project',
      },
      {
        title: 'Language: ',
        desc: 'ReactJS, Material-UI, Chart.js',
      },
      {
        title: 'Live: ',
        desc: 'https://courageous-pastelito-59f7eb.netlify.app/',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'RA CAP',
    details: [
      {
        title: 'Project : ',
        desc: 'Finance Website',
      },
      {
        title: 'Client : ',
        desc: 'Freelance Project by RA CAP',
      },
      {
        title: 'CMS : ',
        desc: 'WordPress',
      },
      {
        title: 'Link: ',
        desc: 'https://racap.in/',
      },
    ],
  },
  
  {
    id: 8,
    img: Work8,
    title: 'Seizure Prediction',
    details: [
      {
        title: 'Project : ',
        desc: 'EEG-Based Epileptic Seizure Prediction using Ensemble Learning',
      },
      {
        title: 'Client : ',
        desc: 'Final Year Project',
      },
      {
        title: 'Technologies : ',
        desc: 'Python, Streamlit, Keras',
      },
      {
        title: 'Github: ',
        desc: 'https://github.com/nikhilarokkam/EEG-BASED-EPILEPTIC-SEIZURE-PREDICTION-USING-ENSEMBLE-LEARNING',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
