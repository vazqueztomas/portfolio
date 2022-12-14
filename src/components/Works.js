import { Stack,Img } from '@chakra-ui/react';
import React from 'react';
import BillabongSVG from '../assets/images/billabong.svg';
import BarberiaSVG from '../assets/images/barberia.svg';
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg';
import RuinsSVG from '../assets/images/ruins.jpg';
import LyricsSVG from '../assets/images/lyrics.jpg';
import DevaluargSVG from '../assets/images/devaluarg.jpg';
import './Works.css';
import { BoxAnimated } from './Hero';


const Works = ()  => {
 
  return (
    <Stack id="works" gap = {16}background={'#210011;'} direction = {'column'} height={'100vh'} alignItems={'center'} justifyContent={'center'} py = {'300'}>
      <BoxAnimated>

      <Stack
        textAlign={'center'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
      >
      </Stack>
      <Stack justifyContent={'center'} direction = {['column', 'column', 'row' ]} gap = {2} p = {4} alignItems= {['center','center']} w={'100%'} maxW={['95%', '80%', '100%']} py={2}>
            <Img w={[300,400,250]}  h = {[150, 250 ,515 ]}src = {BillabongSVG} objectFit= 'cover'/>
          <Stack direction={['row', 'row ','column']} gap = {2}>
          <Img src = {DevaluargSVG} w={[130,250]} h = {[130, 250]} objectFit = 'cover'/>
          <Img src = {RuinsSVG}  w={[130,250]} h = {[130,250]} objectFit = 'cover' />
          </Stack>
          <Stack direction={'column'} margin = {'0 auto'} gap = {2}>
          <Img src = {BarberiaSVG} objectFit = 'cover' w={[300, 400,500]} h = {[150,250,250]}/>
          <Stack direction = {['row','column','row']} gap = {2}>

          <Img src={LyricsSVG} w={[130, 250]} h = {[130, 250]} objectFit = 'cover'/>
          <Img src = {LaBarbDeTotoSVG} w={[130, 250]} h = {[130, 250]} objectFit = 'cover'/>
          </Stack>
          </Stack>
      </Stack>
      </BoxAnimated>

    </Stack>
  );
};

export default Works;
