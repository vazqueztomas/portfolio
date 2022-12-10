import React from 'react';
import { Stack, Text} from '@chakra-ui/react';
import './Hero.css';
import { Link } from 'react-scroll';
import ScrollBottom from './ScrollBottom';


const Hero = () => {
  return (
    <Stack
      id="hero"
      fontWeight={'bolder'}
      direction={['column',]}
      alignItems={['center', 'center']}
      justifyContent={'center'}
      color = '#FFA475' 
      height= {'100vh'}
      >
      <Stack id="hero-text" justifyContent={['center']} alignItems={'center'} pt={'260px'}>
        <Text fontSize={['5xl','6xl', '95px']} as = 'h1' px={[2, 1, 0]}>diseño y tecnología</Text>
      </Stack>
      <ScrollBottom linkTo = 'aboutme' />
      
    </Stack>
  );
};

export default Hero;
