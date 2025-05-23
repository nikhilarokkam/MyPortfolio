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
import Work1 from './assets/Artboard-1.png';
import Work2 from './assets/cropped-cropped-birthday-1.png';
import Work3 from './assets/DBB-Logo-01.jpg';
import Work4 from './assets/cropped-favicon-1.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';
import Work9 from './assets/16605.jpg';

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
    title: 'Full Name : ',
    description: 'Rokkam Nikhila',
  },
  
  {
    id: 2,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 4,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Vizianagaram, AP',
  },

  {
    id: 6,
    title: 'Languages : ',
    description: 'English, Hindi, Telugu',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '9949561678',
  },

  /*{
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },*/

  {
    id: 8,
    title: 'Email : ',
    description: 'rokkamnikhilarn2003@gmail.com',
  },
];

export const stats = [
  {
    id: 1,
    no: '4',
    title: 'Internships <br /> (Full Time)',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5',
    title: 'Certification <br /> Courses',
  },

  {
    id: 4,
    no: '3',
    title: ' Freelance <br /> Projects',
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
    title: 'Software Developer (Internship)<span> Skarvi Systems Limited </span>',
    desc: 'Contributed for the development of Navigator using Core PHP and MySQL, empowering clients with comprehensive ETRM solutions.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2024 - April 2024',
    title: 'Web Developer (Internship)<span> BuzzBeamDigital </span>',
    desc: 'Handled the management of WordPress websites and crafted pages using Elementor, ensuring smooth functionality and visually appealing design.',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'April 2024 - June 2024',
    title: 'Full Stack Developer (Internship)<span> TouristTribe </span>',
    desc: 'Developed backend functionalities using Laravel and MySQL for TouristTribe`s online travel platform, focusing on trip package management and user experience enhancements',
  },

  {
    id: 5,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2024 - Present',
    title: 'Web Developer (Full Time)<span> Web Around Technologies </span>',
    desc: 'Designing and building website front-ends, implementing new features, and ensuring responsive and adaptive design. Conducting performance tests, troubleshooting content issues, and ensuring high performance and availability of the live website. Managing the technical aspects of the content management system, with a focus on consistent style across platforms and browsers. Utilizing front-end technologies and PHP backend development to build user interfaces and interact with RESTful APIs (JSON, XML).',
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
    title: 'Data Structures',
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
    title: 'Ambience Mall',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'One of the largest malls in India, spanning 1.8 million sq ft, home to luxury international brands and diverse dining options.',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Web Around Technologies',
      },
      {
        icon: <FaCode />,
        title: 'Technologies: ',
        desc: 'WordPress, HTML, CSS, JavaScript, PHP, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link: ',
        desc: 'http://35.154.133.93/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'HALF A BAWA HOSPITALITY',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Curate and Operate Hospitality Spaces',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Freelance (Shobhit Chawla)',
      },
      {
        icon: <FaCode />,
        title: 'Technologies: ',
        desc: 'WordPress, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link: ',
        desc: 'https://halfabawa.in/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'DBB',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Office and Commercial Interior Design Company',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Web Around Technologies',
      },
      {
        icon: <FaCode />,
        title: 'Technologies: ',
        desc: 'WordPress, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link: ',
        desc: 'https://www.dbb.com/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'InCorp Asia',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Business Expansion Expert in Vietnam',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Web Around Technologies',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'WordPress, HTML, CSS, JS, PHP, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Live: ',
        desc: 'https://vietnam.incorp.asia/',
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
