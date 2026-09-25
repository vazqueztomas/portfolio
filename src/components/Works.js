import { motion } from 'framer-motion';
import styled from 'styled-components';
import TitleRemarcado from './TitleRemarcado';
import NewExperienceCard from './NewExperienceCard';

const SectionWrapper = styled.div`
  padding: 100px 0;
  background: #0c0b14;

  @media (max-width: 768px) { padding: 72px 0; }
`;

const Container = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) { padding: 0 20px; }
`;

const Works = () => (
  <SectionWrapper id="experience">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <TitleRemarcado contenido="Experience" />
      </motion.div>
      <NewExperienceCard />
    </Container>
  </SectionWrapper>
);

export default Works;
