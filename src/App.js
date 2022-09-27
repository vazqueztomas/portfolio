import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Descripcion from './components/Descripcion';
import Works from './components/Works';
import SocialMedias from './components/SocialMedias';
import StacksTecno from './components/StacksTecno';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Descripcion title="Sobre mi"></Descripcion>
      <Works />
      <SocialMedias />
      <StacksTecno />
    </ChakraProvider>
  );
}

export default App;
