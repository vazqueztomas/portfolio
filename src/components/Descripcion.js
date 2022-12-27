import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import styled from 'styled-components';
import { BoxAnimated } from './Hero';

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

    @media (max-width: 568px) {
      display: none;
    }

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
}
`

const TextOrange = styled.span`
    color: #e64017; font-weight: bold;
`
const Descripcion = () => {

  return (
    
    <Stack py={[0, 2, 8]} id="aboutme" backgroundColor={'#210011'} height={['100%','100vh']} justifyContent = 'center' alignItems={'center'} gap = {[10, 10, 20]}>
      <BoxAnimated>
      <Stack p={[2,2,6]} className = 'border-card-aboutme' w={'100%'}>
        <Circle size = {'170px'} left = {'-90%'} top = {'400px'}/>

      <Stack textAlign={'center'}>
        <TitleRemarcado contenido={'About me'}></TitleRemarcado>
      </Stack>
      <Stack
        direction={['column', 'column', 'column']}
        alignItems={['center', 'center']}
        justifyContent={['center', 'space-evenly']}
        my={10}
        >


        <Stack direction={'column'} maxW={'75ch'} textAlign={'center'} mx={[2, 2, 6]}>
          <Text fontSize={['sm','lg']} color = {'#A11B36'}>
            Hi! My name is Tomás Vazquez. I'm a software developer, I use technologies like  <TextOrange>React, Node, Mongo or Python. </TextOrange>
            I'm a apassionate about technology and the desing of <TextOrange> quality software, 
            trying to use the best practices steadily.</TextOrange> I love 
            cryptocurrencies and blockchain world, and my idea is to improve my development <TextOrange> web3 applications.</TextOrange>{' '}
          </Text>

          <Text fontSize={'lg'} color = {'#A11B36'}>
            <TextOrange> Tech Stack:</TextOrange>{' '}
          </Text>
          <Stack direction={'row'} flexWrap='wrap' gap={2} my={6} textAlign='center' justifyContent={['center']}>
            {TECNOLOGIAS.map((tech, id) => <Text key = {id} backgroundColor={'#A11B36'} color='#e4b3a3' p={1} borderRadius={4}>{tech}</Text>)}
          </Stack>


        </Stack>
      </Stack>
        </Stack>
    </BoxAnimated>

    </Stack>

  );
};

export default Descripcion;
