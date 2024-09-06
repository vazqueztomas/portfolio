import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import NewExperienceCard from './NewExperienceCard';
import { Box }  from '@chakra-ui/react';

export default function App() {

  return (
    <Box
      textAlign="center"
      p="4rem 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="16px"
    >
      <TitleRemarcado contenido="EXPERIENCE" />
      <NewExperienceCard />
    </Box>
  );
}
