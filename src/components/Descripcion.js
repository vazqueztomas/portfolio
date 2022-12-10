import { Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import styled from 'styled-components';
import ScrollBottom from './ScrollBottom';

const TextOrange = styled.span`
    color: #e64017; font-weight: bold;
`
const Descripcion = props => {
  return (

    <Stack py={8} id="aboutme" backgroundColor={'#210011'} height={'100vh'} justifyContent = 'center' alignItems={'center'}>
      <Stack p={6} className = 'border-card-aboutme'>

      <Stack textAlign={'center'}>
        <TitleRemarcado contenido={'Sobre mi'}></TitleRemarcado>
      </Stack>
      <Stack
        direction={['column', 'column', 'column']}
        alignItems={['center', 'center']}
        justifyContent={['center', 'space-evenly']}
        my={10}
        >
        <Stack direction={'column'} maxW={'75ch'} textAlign={'center'} mx={6}>
          <Text fontSize={'lg'} color = {'#A11B36'}>
            Hola! Soy Tomás Vazquez. Desarrollo
            aplicaciones fullstack, utilizando tecnologías como <TextOrange>React, Node y Mongo.</TextOrange> Soy un apasionado por la técnologia y el diseño de <TextOrange> buen software tratando de utilizar buenas prácticas constantemente.</TextOrange> Me gusta mucho el mundo
            de las cryptomonedas y estoy enfocándome en aprender a desarrollar<TextOrange> web3</TextOrange>{' '}
          </Text>
        </Stack>
      </Stack>
      <ScrollBottom linkTo = 'aboutme'/>
        </Stack>
    </Stack>
  );
};

export default Descripcion;
