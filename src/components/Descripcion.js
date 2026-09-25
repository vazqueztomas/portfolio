import { motion } from 'framer-motion';
import styled from 'styled-components';
import TitleRemarcado from './TitleRemarcado';
import { TECHNOLOGIES } from './common/techs.js';

const SectionWrapper = styled.div`
  padding: 100px 0;
  background: #09080f;

  @media (max-width: 768px) { padding: 72px 0; }
`;

const Container = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) { padding: 0 20px; }
`;

const TextBlock = styled.div`
  flex: 1;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: linear-gradient(to bottom, #F5C542, #7C3AED);
    border-radius: 2px;
  }

  p {
    font-size: 16px;
    line-height: 1.75;
    color: #C4B5FD;
    font-weight: 500;
    margin: 0;
  }

  strong { color: #f0eeff; }
`;

const BadgesLabel = styled.div`
  margin-top: 32px;
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6B5B8A;
`;

const BadgesContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Badge = styled(motion.span)`
  padding: 6px 14px;
  border: 1px solid rgba(124,58,237,0.6);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  color: #C4B5FD;
  background: transparent;
  letter-spacing: 0.04em;
  cursor: default;
  transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;

  &:hover {
    background: rgba(124,58,237,0.15);
    color: #F5C542;
    border-color: #F5C542;
    box-shadow: 0 0 12px rgba(245,197,66,0.2);
  }
`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const Descripcion = () => (
  <SectionWrapper id="about">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <TitleRemarcado contenido="About Me" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <TextBlock>
          <p>
            Hi! I'm <strong>Tomás Vazquez</strong>, a DevOps &amp; Platform Engineer focused on
            building reliable, scalable infrastructure. I work across CI/CD pipelines, Kubernetes,
            cloud-native Azure services, and observability tooling — always aiming for operational
            excellence and engineering quality.
          </p>
          <BadgesLabel>Tech Stack</BadgesLabel>
          <BadgesContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TECHNOLOGIES.map((tech, id) => (
              <Badge key={id} variants={badgeVariants}>
                {tech}
              </Badge>
            ))}
          </BadgesContainer>
        </TextBlock>
      </motion.div>
    </Container>
  </SectionWrapper>
);

export default Descripcion;
