import { Stack,Img } from '@chakra-ui/react';
import React from 'react';
import BillabongSVG from '../assets/images/billabong.svg';
import BarberiaSVG from '../assets/images/barberia.svg';
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg';
import RuinsSVG from '../assets/images/tipos-de-computadoras.svg';
import LyricsSVG from '../assets/images/lyrics.svg';
import DevaluargSVG from '../assets/images/devaluarg.jpg';
import './Works.css';
import ScrollBottom from './ScrollBottom';


const Works = ()  => {
 
  return (
    <Stack id="works" background={'#210011;'}>
      <Stack
        textAlign={'center'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        my={5}
      >
      </Stack>
      <Stack justifyContent={'center'} direction = {['column', 'column', 'row' ]} gap = {2} paddingLeft = {4} alignItems= {['center','center']} w={'100%'} maxW={['95%', '80%', '100%']}>
            <Img w={[300,400,250]}  h = {[150, 250 ,515 ]}src = {BillabongSVG} objectFit= 'cover'/>
          <Stack direction={['row', 'row ','column']} gap = {2}>
          <Img src = {DevaluargSVG} w={[130,250]} h = {[130, 250]} objectFit = 'cover'/>
          <Img src = {RuinsSVG}  w={[130,250]} h = {[130,250]} objectFit = 'cover' />
          </Stack>
          <Stack direction={'column'} margin = {'0 auto'} gap = {2}>
          <Img src = {BarberiaSVG} objectFit = 'cover' w={'100%'} h = {[150,250]}/>
          <Stack direction = {['row','column','row']} gap = {2}>

          <Img src={LyricsSVG} w={[150, 250]} h = {[150, 250]} objectFit = 'cover'/>
          <Img src = {LaBarbDeTotoSVG} w={[130, 250]} h = {[130, 250]} objectFit = 'cover'/>
          </Stack>
          </Stack>
      </Stack>
      {/* <Stack alignItems={'center'} justifyContent={'center'} pt={10}>
        <a
          href="https://github.com/vazqueztomas"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            colorScheme={'#fe4b23'}
            borderRadius={'20px 20px'}
            variant={'outline'}
            id="btn-github-seemore"
          >
            {' '}
            <GitHubIcon /> Mirá más en mi Github{' '}
          </Button>
        </a>
      </Stack> */}\
      <ScrollBottom/>
    </Stack>
  );
};

export default Works;
