import React from 'react';
import { works } from './worksArray';
import styled from 'styled-components';
import { Box, Text } from '@chakra-ui/react';

const Logo = styled.img`
  object-fit: contain;
`;

const NewExperienceCard = () => {
  return (
    <Box
      border="1px solid #ddd"
      borderRadius="8px"
      padding="16px"
      fontFamily="Arial, sans-serif"
      display="flex"
      flexDirection="column"
      maxWidth="75ch"
    >
      {works.map((work, index) => (
        <Box p="12px">
          <Box display="flex" alignItems="center" mb="16px">
            <Logo
              src={work.src}
              alt="Company logo"
              style={{
                height: '50px',
                objectFit: 'cover',
              }}
            />
            <Box display='flex' flexDirection='column'
            textAlign='left' m='0 16px'>
              <Text m='0' fontSize='18px' color='#333'>
                {work.company} - {work.role}
              </Text>
              <Text as="span" fontSize="14px" color="#888">
                {work.period}
              </Text>
              <Text as="span" fontSize="14px" color="#888">
                {work.location}
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            fontWeight="bold"
            m="0"
            p="0"
          >
            {work.technologies.map((tech, index) => (
              <Box
                fontSize="14px"
                color="#999"
                m="0 8px 0 0"
                className="skills"
                key={index}
              >
                {tech} -
              </Box>
            ))}
          </Box>
          <Text
            as="p"
            fontSize="14px"
            color="#666"
            whiteSpace="pre-wrap"
            align="left"
          >
            {work.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default NewExperienceCard;
