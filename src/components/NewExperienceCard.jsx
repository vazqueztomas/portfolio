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

const Logo = styled.img`
  object-fit: contain; /* Asegura que la imagen se ajuste sin perder su aspecto */
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 16px;
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
  color: #999;
  margin :0 8px 0 0;
`;

const CardContainer = styled.div`
  padding: 16px 0 ;
`

const NewExperienceCard = () => {
  return (
    <Card>
      {works.map((work, index) => (
        <CardContainer>
          <Header>
              <Logo
                src={work.src}
                alt="Company logo"
                style={{
                  height: '50px',
                  objectFit:
                    'cover' ,
                }}
              />
            <Title>
              <Role>
                {work.company} - {work.role}
              </Role>
              <Company >{work.period}</Company>
              <Company>{work.location}</Company>
            </Title>
          </Header>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              fontWeight: 'bold',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            {work.technologies.map((tech, index) => (
              <Skills className="skills" key={index}>
                {tech}
              </Skills>
            ))}
          </div>
          <Info>
            {work.description}
          </Info>
         
        </CardContainer>
      ))}
    </Card>
  );
};

export default NewExperienceCard;
