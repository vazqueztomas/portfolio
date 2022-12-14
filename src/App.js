import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Hero from './components/Hero';
import Descripcion from './components/Descripcion';
import Works from './components/Works';
import SocialMedias from './components/SocialMedias';
import StacksTecno from './components/StacksTecno';
import ContributorsView from './components/ContributorsView';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Descripcion title="Sobre mi"></Descripcion>
      <Works />
      <Slider/>
      <SocialMedias />
      <StacksTecno />
      <ContributorsView />
    </ChakraProvider>
  );
}

export default App;
