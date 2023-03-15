import { motion } from 'framer-motion';
import React, { useState } from 'react';
import TitleRemarcado from './TitleRemarcado';
import codewitchers from '../assets/images/codewitchers.svg';
import cancheros from '../assets/images/cancheros.svg';
import devaluarg from '../assets/images/devaluarg.svg';
import './Works.css';

export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(-1);

  const works = [
    {
      title: 'OnEmpleo',
      src: 'https://onempleo.com/assets/logo_OnEmpleo.565f4192.svg',
      description:
        'OnEmpleo is a employment platform, geared to proffesionals who are not normally in others (like LinkedIn)',
    },
    {
      title: 'Code Witchers',
      src: codewitchers,
      description:
        'CodeWitchers is a software development company from Argentina',
    },
    {
      title: 'Devaluarg',
      // src: 'https://media.istockphoto.com/id/485112085/es/foto/d%C3%B3lares-en-primer-plano.jpg?s=612x612&w=0&k=20&c=-Ni4_ApeGd11_NjSSPJRdwpwGV6nBzoii0hh7sDrWt8=',
      src: devaluarg,
      description:
        'DevaluARG is a website with information about the prices of the dollar, bitcoin and other cryptocurrencies.',
    },
    {
      title: 'Cancheros',
      src: cancheros,
      description:
        'Cancheros is a web application for fans of football. The user can save the times they went to the matches, their results and their favorite teams',
    },
  ];

  return (
    <div style={{ backgroundColor: '#210011', textAlign: 'center' }}>
      <TitleRemarcado contenido="PROJECTS" />
      <div
        style={{
          display: 'flex',
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
            }}
            //hover
            whileHover={{
              scale: 1.1,
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
              console.log(work.title);
              setSelectedWorkIndex(index);
              setShowCard(!showCard);
            }}
          >
            <motion.img layout="position" key={work.src} src={work.src} />

            {selectedWorkIndex === index && (
              <>
                <motion.p
                  style={{ width: '100%', margin: '16px' }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  {/* <img src={work.src}></img> */}
                  {work.description}
                </motion.p>
                <motion.a
                  style={{ width: '100%', margin: '16px' }}
                  whileHover={{ scale: 1.2 }}
                >
                  Ir a{' '}
                </motion.a>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
