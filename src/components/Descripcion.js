import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import styled from 'styled-components';
import { BoxAnimated } from './Hero';
import { TECHNOLOGIES } from './common/techs.js'

const TextOrange = styled.span`
  color: #e64017;
  font-weight: bold;
`;
const Descripcion = () => {
  return (
    <Stack
      py={[0, 2, 8]}
      id="aboutme"
      height={['100%', '100vh']}
      justifyContent="center"
      alignItems={'center'}
      gap={[10, 10, 20]}
    >
      <BoxAnimated>
        <Stack p={[2, 2, 6]} className="border-card-aboutme" w={'100%'}>

          <Stack textAlign={'center'} justify="center" align="center">
            <TitleRemarcado contenido={'About me'}></TitleRemarcado>
          </Stack>
          <Stack
            direction={['column', 'column', 'column']}
            alignItems={['center', 'center']}
            justifyContent={['center', 'space-evenly']}
            my={10}
          >
            <Stack
              direction={'column'}
              maxW={'75ch'}
              textAlign={'center'}
              mx={[2, 2, 6]}
            >
              <Text fontSize={['sm', 'lg']} color={'#A11B36'}>
                Hi! My name is Tomás Vazquez. I'm a software developer, I use
                technologies like{' '}
                <TextOrange>React, Node, Mongo or Python. </TextOrange>I studied
                2 years in <TextOrange>University of Luján. </TextOrange>
                I'm a apassionate about technology and the desing of{' '}
                <TextOrange>
                  {' '}
                  quality software, trying to use the best practices steadily.
                </TextOrange>{' '}
              </Text>

              <Text fontSize={'lg'} color={'#A11B36'}>
                <TextOrange> Tech Stack:</TextOrange>{' '}
              </Text>
              <Stack
                direction={'row'}
                flexWrap="wrap"
                gap={2}
                my={6}
                textAlign="center"
                justifyContent={['center']}
              >
                {TECHNOLOGIES.map((tech, id) => (
                  <Text
                    key={id}
                    backgroundColor={'#A11B36'}
                    color="#e4b3a3"
                    p={1}
                    borderRadius={4}
                  >
                    {tech}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </BoxAnimated>
    </Stack>
  );
};

export default Descripcion;
