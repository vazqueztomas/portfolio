import pwc from '../assets/images/pwc.webp';
export const works = [
  {
    company: 'Price Waterhouse Coopers',
    role: 'Python Developer',
    location: 'Argentina',
    src: pwc,
    period: 'Oct 2023 - Present',
    description:
      'Code-Witchers is a company created by my mentor and me, with the purpose of venturing into freelance web application development projects.',
    link: 'https://codewitchers.com',
    technologies: ['React', 'Node', 'styled-components']
  },
  {
    company: 'OnEmpleo',
    location: 'Argentina',
    src: 'https://onempleo.com/assets/logo_OnEmpleo.565f4192.svg',
    role: 'Python Developer',
    period: 'Oct 2023 - Present',
    description:
      'OnEmpleo is a LinkedIn-style platform where users can find jobs. Within this project, I developed an API using Node.js and Express, storing the data in MongoDB. For the client-side, I used React.',
    link: 'https://onempleo.com',
    technologies:[
      'React', 'NodeJS', 'Express', 'MongoDB', 'Firebase', 'styled-components',]
  },

  {
    company: 'Bonsai Films',
    role: 'Python Developer',
    location: 'Argentina',
    period: 'Oct 2023 - Present',
    src: 'https://bonsaifilms.cl/wp-content/uploads/2021/08/01-logo.png',
    description:
      'BonsaiFilms is a project for a company in Chile, where we developed an application from scratch using React for the frontend and Node.js + Express for the backend, with MongoDB as the database. For this project, we decided to implement an MVC architecture.',
    link: 'https://bonsaifilms.cl/',
    technologies: ['React, Node, Express, Mongo, Firebase for Hosting']
  },
];
