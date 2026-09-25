import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Reel from './components/Reel';
import Descripcion from './components/Descripcion';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: '#09080f',
        color: '#f0eeff',
        fontFamily: "'Montserrat', sans-serif",
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Reel />
      <Hero />
      <Descripcion />
      <Works />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
