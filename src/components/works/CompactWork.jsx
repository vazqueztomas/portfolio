import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardCompact = styled(motion.div)`
  overflow: hidden;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;
function CompactWork({ children, onExpand, disabled }) {
  return (
    <CardCompact
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </CardCompact>
  );
}

export default CompactWork;
