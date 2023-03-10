import { motion } from 'framer-motion';
import styled from 'styled-components';
const Title = styled(motion.h1)`
  color: navy;
  font-weight: 800;
  margin: 0;
`;
function Content({ day, disabled }) {
  return (
    <Title
      className="title"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {day}
    </Title>
  );
}

export default Content;
