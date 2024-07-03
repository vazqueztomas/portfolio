import React from 'react';
import { works } from './worksArray';

const NewExperienceCard = () => {
  return (
    <div style = {{display: 'flex', justifyContent: 'center'}}>
      {works.map((work, index) => (
        <div
          style={{
            background: 'white',
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
        >
          <div className="experience-header">
            <img
              src={work.src}
              alt="Company logo"
              style={{
                height: '50px',
                objectFit:
                  'cover' /* Esto asegura que la imagen mantenga su proporción y se recorte si es necesario */,
              }}
            />
            <div>
                  <h3 style = {{fontWeight: 'bold'}}>{work.company} - {work.role}</h3>
              <p style = {{color: 'gray'}}>{work.period}</p>
              <p>{work.location}</p>
            </div>
          </div>
          <p className="description" style = {{padding: '15px'}}>{work.description}</p>
          {work.technologies.map((tech, index) => (
            <p className="skills" key={index}>
              {tech}
            </p>
          
          ))}
        </div>
      ))}
    </div>
  );
};

export default NewExperienceCard;
