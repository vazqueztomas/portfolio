import { motion } from 'framer-motion';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 48px;
  position: relative;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  color: #f0eeff;
`;

const TitleRemarcado = ({ contenido }) => (
  <TitleWrapper>
    {contenido}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        bottom: -8,
        left: 0,
        height: 3,
        width: '100%',
        background: 'linear-gradient(90deg, #F5C542, #7C3AED)',
        transformOrigin: 'left',
        borderRadius: 2,
      }}
    />
  </TitleWrapper>
);

export default TitleRemarcado;
