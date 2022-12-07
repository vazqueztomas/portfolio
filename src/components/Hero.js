import React from 'react';
import { Image, Stack } from '@chakra-ui/react';
import './Hero.css';
import Avatar from '../assets/images/profile.jpg';
import TitleRemarcado from './TitleRemarcado';

const Hero = () => {
  return (
    <Stack
      id="hero"
      fontWeight={'bolder'}
      direction={['column', 'row', 'row']}
      alignItems={['center', 'center']}
      justifyContent={['center', 'center', 'space-evenly']}
      mb={8}
    >
      <Stack id="hero-text" justifyContent={['center']} alignItems={'center'}>
        <p>Hola! Mi nombre es</p>
        <TitleRemarcado contenido="Tomás Vazquez" />
        <h2>- Software Developer -</h2>
      </Stack>
      <Image src={Avatar} borderRadius={8} w={['200px', '300px']}></Image>
    </Stack>
  );
};

export default Hero;
