import { motion } from 'framer-motion';
import React, { useState } from 'react';
import TitleRemarcado from './TitleRemarcado';
import './Works.css';
import { works } from './worksArray';
import { SimpleGrid } from '@chakra-ui/react';
import NewExperienceCard from './NewExperienceCard';

export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(-1);

  return (
    <div
      style={{
        backgroundColor: '#210011',
        textAlign: 'center',
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <TitleRemarcado contenido="EXPERIENCE" />
      <NewExperienceCard />
      
    </div>
  );
}
