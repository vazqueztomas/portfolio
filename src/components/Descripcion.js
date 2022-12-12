import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import styled from 'styled-components';
import ScrollBottom from './ScrollBottom';

const TECNOLOGIAS = ['REACT', 'NODEJS', 'EXPRESS', 'PYTHON','MONGODB', 'HTML/CSS', 'STYLED-COMPONENTS', 'BLOCKCHAIN', 'SOLIDITY', 'UX/UI', 'ARQUITECTURA DE SOFTWARE', 'SMARTS CONTRACTS']

const Circle = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    left: ${props => props.left};
    background-color: #A11B3650;
    box-shadow: 0 0 60px 0 #A11B36;
    -webkit-filter: blur(35px);
    top: ${props => props.top};

    -webkit-animation-name: prop-600;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;

    position: inherit;
    :nth-child(2){
      position: absolute;
      -webkit-animation-name: prop-600;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    }

    @keyframes prop-600 {
    0% {
        -webkit-transform: translateX(0px);
    }
    50% {
        -webkit-transform: translateX(20%);
    }
    100% {
        -webkit-transform: translateX(0px);
    }

}  `

const TextOrange = styled.span`
    color: #e64017; font-weight: bold;
`
const Descripcion = () => {

  return (

    <Stack py={8} id="aboutme" backgroundColor={'#210011'} height={'100vh'} justifyContent = 'center' alignItems={'center'}>
      <Stack p={6} className = 'border-card-aboutme' w={'100%'}>
        <Circle size = {'170px'} left = {'-90%'} top = {'400px'}/>

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
            Hola! Mi nombre es Tomás Vazquez. Desarrollador de
            aplicaciones fullstack, utilizando tecnologías como <TextOrange>React, Node y Mongo.</TextOrange> Soy un apasionado por la técnologia y el diseño de <TextOrange> buen software tratando de utilizar buenas prácticas constantemente.</TextOrange> Me gusta mucho el mundo
            de las cryptomonedas y estoy enfocándome en aprender a desarrollar<TextOrange> web3</TextOrange>{' '}
          </Text>

          <Text fontSize={'lg'} color = {'#A11B36'}>
            <TextOrange> Tech Stack:</TextOrange>{' '}
          </Text>
          <Stack direction={'row'} flexWrap='wrap' gap={2} textAlign='center'>
            {TECNOLOGIAS.map((tech) => <Text backgroundColor={'#A11B36'} color='#e4b3a3' p={1} borderRadius={4}>{tech}</Text>)}
          </Stack>


        </Stack>
      </Stack>
        </Stack>
        {/* <Circle size = {'80px'} left = {'80%'}/> */}

      <ScrollBottom linkTo = 'works'/>

    </Stack>
  );
};

export default Descripcion;
