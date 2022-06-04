import React from 'react';
import {
  ChakraProvider,
  theme,
  Stack
} from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Descripcion from './components/Descripcion';
import Works from './components/Works';
import SocialMedias from './components/SocialMedias';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Hero/>
      <Descripcion title = "Sobre mi"></Descripcion>
      <Works/>
      <SocialMedias/>

      
    </ChakraProvider>
  );
}

export default App;
