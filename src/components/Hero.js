import React from 'react';
import { Stack, Text} from '@chakra-ui/react';
import './Hero.css';
import { motion} from "framer-motion";

export const BoxAnimated = ({children, ...props}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: {duration: props.duration || 1} }}
    className="box">
      {children}
    </motion.div>
  );
};


const Hero = () => {
  return (
    <Stack
      id="hero"
      fontWeight={'bolder'}
      direction={['column',]}
      alignItems={['center', 'center']}
      justifyContent={['start','center']}
      color = '#FFA475' 
      height= {['800px','100vh']}
      >
      <BoxAnimated>
      <Stack id="hero-text" justifyContent={['center']} alignItems={'center'} pt={'260px'}>
        <Text fontSize={['4xl','5xl','6xl', '95px']} as = 'h1' px={[2, 1, 0]}>Technology & design</Text>
      </Stack>
      </BoxAnimated>
      
    </Stack>
  );
};

export default Hero;
