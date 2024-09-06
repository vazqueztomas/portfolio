import onempleo from '../assets/images/onempleo.png';
import bonsai from '../assets/images/bonsai.png';
import pwc from '../assets/images/pwc.png';

export const works = [
  {
    company: 'Price Waterhouse Coopers',
    role: 'Python MLOps - DevOps Engineer',
    location: 'United States',
    src: pwc,
    period: 'Oct 2023 - Present',
    description: `* Developed Continuous Integration and Continuous Deployment pipelines for Python Packages\n* Developed Python Packages as a Docker Images\n* Worked on Deployments of Python Packages codebases.\n* Ensure the quality of the codebase by implementing unit tests and integration tests. \n* Worked on the development of a Python Package for a Auditory System. \n *Ensure quality code appliyng pre-commit configurations in local and CI/CD pipelines.
      `,
    technologies: [
      'Python',
      'Docker',
      'Continuous Integration',
      'Continuous Deployment',
      'Azure Pipelines',
    ],
  },
  {
    company: 'Bonsai Films',
    role: 'Backend Developer',
    location: 'Chile',
    period: 'Aug 2022 - Aug 2023',
    src: bonsai,
    description:
      'BonsaiFilms is a project for a company in Chile, where we developed an application from scratch using React for the frontend and Node.js + Express for the backend, with MongoDB as the database. For this project, we decided to implement an MVC architecture.',
    technologies: ['React', 'Node', 'Express', 'Mongo', 'Firebase'],
  },
  {
    company: 'OnEmpleo',
    location: 'Argentina',
    src: onempleo,
    role: 'Javascript Fullstack Developer',
    period: 'Jul 2022 - Aug 2023',
    description: `* Rebuilt the entire web application from scratch using a Figma prototype as a blueprint.\n* User authentication and accounts systems implemented.\n* Built an API using Node.js and Express, followed by integration of authentication system for the company.\n
      `,
    technologies: [
      'React',
      'NodeJS',
      'Express',
      'MongoDB',
      'Firebase',
      'styled-components',
    ],
  },
];
