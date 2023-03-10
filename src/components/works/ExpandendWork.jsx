import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardExpanded = styled(motion.div)`
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
  width: 10rem;
  height: 10rem;
  background-color: navy;
  position: relative;
  left: -100%;
  top: 150%;
`;

const CardExpandedSecondary = styled(motion.p)`
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
  height: 10rem;
  background-color: navy;
  position: relative;
  left: -100%;
  top: 150%;
  background-color: white;
  height: 2.5rem;
  padding: 0.5rem;
  justify-content: center;
  width: 8rem;
  margin-left: 1rem;
`;
function ExpandedWork({ children, onCollapse }) {
  return (
    <>
      <CardExpanded
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </CardExpanded>
      <CardExpandedSecondary
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: '6rem' }}
        animate={{ opacity: 1, top: '3rem' }}
      >
        Today is clear
      </CardExpandedSecondary>
    </>
  );
}

export default ExpandedWork;
