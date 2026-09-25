import bonsai from '../assets/images/bonsai.png';
import pwc from '../assets/images/pwc.png';
import onempleo from '../assets/images/onempleo.png';

export const works = [
  {
    company: 'PricewaterhouseCoopers',
    role: 'DevOps & Platform Engineer',
    location: 'United States',
    src: pwc,
    useLogo: true,
    period: 'Oct 2023 — Present',
    description: [
      'Managed application deployments across 15+ repos via GitHub Actions and Azure Pipelines',
      'Operated Kubernetes clusters through Rafay: service deployments, troubleshooting, and incident response',
      'Administered HashiCorp Vault: secret management, policy changes, and environment rotations',
      'Maintained Azure-native infrastructure: Functions, Service Bus, CosmosDB, Log Analytics',
      'Built DataDog observability coverage: dashboards, monitors, log-based production troubleshooting',
      'Ensured code quality via pre-commit hooks and CI/CD-integrated test suites (unit + integration)',
      'Collaborated with Microsoft on LLM and agentic tooling (AutoGen, RAG) for audit-domain applications',
    ],
    technologies: [
      'GitHub Actions',
      'Azure Pipelines',
      'Kubernetes',
      'HashiCorp Vault',
      'DataDog',
      'Azure',
      'Docker',
      'Python',
    ],
  },
  {
    company: 'Bonsai Films',
    role: 'Software Developer',
    location: 'Chile',
    src: bonsai,
    useLogo: true,
    period: 'Aug 2022 — Aug 2023',
    description: [
      'Developed a REST API using Node.js, Express, and Firebase to power the core application',
      'Implemented JWT-based authentication systems for user management',
      'Built custom frontend logic and algorithms using React',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
  },
  {
    company: 'OnEmpleo',
    role: 'Software Developer',
    location: 'Argentina',
    src: onempleo,
    useLogo: true,
    period: 'Jul 2022 — Jan 2023',
    description: [
      'Rebuilt the entire web application from scratch using a Figma prototype as blueprint',
      'Built a Node.js/Express API with integrated authentication system',
      'Implemented user authentication and account management',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
  },
];
