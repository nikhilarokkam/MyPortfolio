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
    description: 'D-No: 8-30-10/1, Santoshi Building, Thotapalem, Vizianagaram, Andhra Pradesh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '9949561678',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'rokkamnikhila.20.cse@anits.edu.in',
  },

  /*{
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },*/

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hindi, Telugu',
  },
];

export const stats = [
  {
    id: 1,
    no: '2',
    title: 'Internships',
  },

  {
    id: 2,
    no: '6',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5',
    title: 'Certification <br /> Courses',
  },

  /*{
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },*/
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'October 2023 - December 2023',
    title: 'Web Developer Intern<span> SIRAOM PRIVATE LIMITED </span>',
    desc: 'Demonstrated proficiency in Laravel, a widely-used PHP web application framework, to develop and enhance features, coupled with strong database management skills utilizing MySQL for efficient data storage and retrieval.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'January 2024 - February 2024',
    title: 'Full Stack Developer Intern <span> Vaultboard Consulting </span>',
    desc: 'Wonderkids.club is a new-age ed-tech platform, which aims to revolutionize the ed-tech industry. My day-to-day responsibilities include developing, enhancing, and maintaining different features and modules and integrating them.',
  },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

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
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2024',
    title: 'Bachelor of Technology <span> Anil Neerukonda Institute of Technology & Sciences </span>',
    desc: 'Computer Science Engineering, CGPA : 9.00 (current)',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: 'Intermediate <span> Sri Chaitanya Junior College </span>',
    desc: 'Maths, Physics, Chemistry, CGPA : 9.94',
  },

  {
    id: 6,
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
    percentage: '30',
  },

  {
    id: 2,
    title: 'Python',
    percentage: '70',
  },

  {
    id: 3,
    title: 'HTML and CSS',
    percentage: '89',
  },

  {
    id: 4,
    title: 'JavaScript',
    percentage: '46',
  },

  {
    id: 5,
    title: 'PHP and MySQL',
    percentage: '65',
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
    percentage: '35',
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
    id: 5,
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
