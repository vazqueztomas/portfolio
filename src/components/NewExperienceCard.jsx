import React from 'react';
import { works } from './worksArray';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 75ch;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Asegura que la imagen se ajuste sin perder su aspecto */
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const Company = styled.span`
  font-size: 14px;
  color: #888;
`;

const Info = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  text-align: left;
`;

const Skills = styled.div`
  font-size: 14px;
  color: #555;
`;

const NewExperienceCard = () => {
  return (
    <Card>
      {works.map((work, index) => (
        <div>
          <Header>
            <LogoContainer>
              <Logo
                src={work.src}
                alt="Company logo"
                style={{
                  height: '50px',
                  objectFit:
                    'cover' /* Esto asegura que la imagen mantenga su proporción y se recorte si es necesario */,
                }}
              />
            </LogoContainer>
            <Title>
              <Role style={{ fontWeight: 'bold' }}>
                {work.company} - {work.role}
              </Role>
              <Company style={{ color: 'gray' }}>{work.period}</Company>
              <Company>{work.location}</Company>
            </Title>
          </Header>
          <Info className="description" style={{ padding: '15px' }}>
            {work.description}
          </Info>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              fontWeight: 'bold',
            }}
          >
            {work.technologies.map((tech, index) => (
              <Skills className="skills" key={index}>
                {tech}
              </Skills>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default NewExperienceCard;
