import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Hero from './components/Hero';
import Descripcion from './components/Descripcion';
import Works from './components/Works';
import ContributorsView from './components/ContributorsView';
import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Descripcion title="About me "></Descripcion>
      <Works />
      {/* <SocialMedias /> */}
      {/* <StacksTecno /> */}
      <ContributorsView />
      <Contact/>
    </ChakraProvider>
  );
}

export default App;
