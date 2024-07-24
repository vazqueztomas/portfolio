import onempleo from '../assets/images/onempleo.png'
import bonsai from '../assets/images/bonsai.png'
import pwc from '../assets/images/pwc.png'

export const works = [
  {
    company: 'Price Waterhouse Coopers',
    role: 'Python MLOps Developer',
    location: 'United States',
    src: pwc,
    period: 'Oct 2023 - Present',
    description:
      'As a developer in MLOps Team im working with programming languages like Python, upgrading my skills levels on DevOps side and Azure Pipelines, using tools like Docker and Kubernetes.',
    technologies: ['Python', 'DevOps', 'Azure DevOps', 'Azure Pipeline']
  },
  {
    company: 'Bonsai Films',
    role: 'Backend Developer',
    location: 'Chile',
    period: 'Aug 2022 - Aug 2023',
    src: bonsai,
    description:
      'BonsaiFilms is a project for a company in Chile, where we developed an application from scratch using React for the frontend and Node.js + Express for the backend, with MongoDB as the database. For this project, we decided to implement an MVC architecture.',
    technologies: ['React', 'Node', 'Express', 'Mongo', 'Firebase']
  },
  {
    company: 'OnEmpleo',
    location: 'Argentina',
    src: onempleo,
    role: 'Javascript Fullstack Developer',
    period: 'Jul 2022 - Aug 2023',
    description:
      `* Rebuilt the entire web application from scratch using a Figma prototype as a blueprint.\n* User authentication and accounts systems implemented.\n* Built an API using Node.js and Express, followed by integration of authentication system for the company.\n
      `,
    technologies:[
      'React', 'NodeJS', 'Express', 'MongoDB', 'Firebase', 'styled-components',]
  },

];
