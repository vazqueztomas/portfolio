import { motion } from 'framer-motion';
import React, { useState } from 'react';
import TitleRemarcado from './TitleRemarcado';
import './Works.css';
import { works } from './worksArray';
import { SimpleGrid } from '@chakra-ui/react';

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
      <TitleRemarcado contenido="PROJECTS" />
      <SimpleGrid
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          paddingBottom: '10%',
          background: '#210011',
          gap: '8px',
          margin: '0 10%',
        }}
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            style={{
              background: '#A11B36',
              padding: '16px 8px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0 16px',
              maxWidth: '20rem',
            }}
            //hover
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 10px rgba(0,0,0,0.4)',
            }}
            transition={{
              layout: {
                duration: 1,
                type: 'spring',
              },
            }}
            layout
            onClick={() => {
              setSelectedWorkIndex(index);
              setShowCard(!showCard);
            }}
          >
            <motion.img layout="position" key={work.src} src={work.src} />

            {selectedWorkIndex === index && (
              <>
                <motion.div
                  style={{
                    width: '100%',
                    margin: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <p>{work.description}</p>
                  <p id="technologies">
                    Technologies used: {work.technologies}
                  </p>
                  <a id="link" href={work.link}>
                    View site
                  </a>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </SimpleGrid>
    </div>
  );
}
