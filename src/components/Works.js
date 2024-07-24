import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import './Works.css';
import NewExperienceCard from './NewExperienceCard';

export default function App() {

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <TitleRemarcado contenido="EXPERIENCE" />
      <NewExperienceCard />
    </div>
  );
}
