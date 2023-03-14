import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import TitleRemarcado from './TitleRemarcado';
import './Works.css';

function Content({ day, disabled }) {
  return (
    <motion.div
      className="title"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      <img src={day} />
    </motion.div>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
      {/* <motion.p
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: '6rem' }}
        animate={{ opacity: 1, top: '3rem' }}
      >
        Today is clear
      </motion.p> */}
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
  );
}

function DateButton({ day, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-container">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} day={day}>
            <Content day={day} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <Content day={day} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function App() {
  const [expandedDay, setCollapsedDay] = useState();
  const days = [
    'https://onempleo.com/assets/logo_OnEmpleo.565f4192.svg',
    'https://img.freepik.com/vector-premium/diseno-logotipo-cara-mago-blanco-negro_497517-273.jpg?w=2000',
    'https://media.istockphoto.com/id/485112085/es/foto/d%C3%B3lares-en-primer-plano.jpg?s=612x612&w=0&k=20&c=-Ni4_ApeGd11_NjSSPJRdwpwGV6nBzoii0hh7sDrWt8=',
    'https://wallpapercave.com/wp/wp3164738.jpg',
  ];

  return (
    <>
      <div className="container">
        <TitleRemarcado contenido="PROJECTS" />
        <div className="dates">
          {days.map(day => (
            <DateButton
              key={day}
              day={day}
              disabled={expandedDay !== day && expandedDay !== undefined}
              onExpand={() => setCollapsedDay(day)}
              onCollapse={() => setCollapsedDay()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
