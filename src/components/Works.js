import { Stack, Img, Link } from '@chakra-ui/react';
import React from 'react';
import BillabongSVG from '../assets/images/billabong.svg';
import BarberiaSVG from '../assets/images/barberia.svg';
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg';
import RuinsSVG from '../assets/images/ruins.jpg';
import DevaluargSVG from '../assets/images/devaluarg.jpg';
import './Works.css';
import { BoxAnimated } from './Hero';
import TitleRemarcado from './TitleRemarcado';

const Works = () => {
  return (
    <Stack
      id="works"
      gap={16}
      background={'#210011;'}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingY={'6rem'}
      textAlign={'center'}
    >
      <BoxAnimated>
        <TitleRemarcado contenido="PROJECTS" />
        <Stack
          justifyContent={'center'}
          direction={['column', 'column', 'row']}
          gap={2}
          p={4}
          alignItems={['center', 'center']}
          w={'100%'}
          py={2}
        >
          <Link href="https://billabongcopy.web.app">
            <Img
              w={[300, 400, 250]}
              h={[150, 250, 515]}
              src={'https://onempleo.com/assets/logo_OnEmpleo.565f4192.svg'}
              objectFit="contain"
              backgroundColor={'white'}
              padding={6}
            />
          </Link>
          <Stack direction={['row', 'row ', 'column']} gap={2}>
            <Link href="https://devaluarg.web.app">
              <Img
                src={DevaluargSVG}
                w={[130, 250]}
                h={[130, 250]}
                objectFit="cover"
              />
            </Link>
            <Link href="https://ruins-design.web.app">
              <Img
                src={RuinsSVG}
                w={[130, 250]}
                h={[130, 250]}
                objectFit="cover"
              />
            </Link>
          </Stack>
          <Stack direction={'column'} margin={'0 auto'} gap={2}>
            <Link href="https://benescuela.web.app">
              <Img
                src={BarberiaSVG}
                objectFit="cover"
                w={[300, 400, 500]}
                h={[150, 250, 250]}
              />
            </Link>
            <Stack direction={['row', 'rows', 'row']} gap={2}>
              <Link href="https://cancheros-15f93.web.app/">
                <Img
                  src={
                    'https://holaservicios.com.ar/wp-content/uploads/2023/01/AFA.jpg'
                  }
                  w={[150, 250]}
                  h={[150, 250]}
                  objectFit="cover"
                />
              </Link>
              <Link href="https://labarberiadetoto.web.app">
                <Img
                  src={LaBarbDeTotoSVG}
                  w={[150, 250]}
                  h={[150, 250]}
                  objectFit="cover"
                />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </BoxAnimated>
    </Stack>
  );
};

export default Works;
