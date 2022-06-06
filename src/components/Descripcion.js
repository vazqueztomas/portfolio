import { Stack, Text, Image, ColorModeProvider } from '@chakra-ui/react';
import AboutMe from '../assets/images/aboutme.jpg';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';

const Descripcion = (props) => {

  
  return (
    <Stack my={8} id = "aboutme">
      <Stack textAlign={'center'}>
        <TitleRemarcado contenido={props.title}></TitleRemarcado>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        alignItems={['center', 'center']}
        justifyContent={['center', 'space-evenly']}
        my={10}
      >
        <Stack direction={'column'} maxW={"75ch"} textAlign={"center"} mx={6}>
         
          <Text fontSize={"lg"}>Hola! Soy Tomás Vazquez. Me dedico actualmente a desarrollar aplicaciones en el lado del frontend, utilizando tecnologías como React. Soy un apasionado por éste mundo, me encanta tener que aprender todos los días algo nuevo. Además, me gusta mucho el mundo de las cryptomonedas y estoy enfocándome en aprender a desarrollar web3. </Text>
        </Stack>

        <Stack>
          <Image src={AboutMe} w={['200px', '200px','300px']}></Image>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Descripcion;
