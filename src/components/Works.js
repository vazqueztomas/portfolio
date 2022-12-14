import { Stack,Img } from '@chakra-ui/react';
import React from 'react';
import BillabongSVG from '../assets/images/billabong.svg';
import BarberiaSVG from '../assets/images/barberia.svg';
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg';
import RuinsSVG from '../assets/images/ruins.jpg';
import LyricsSVG from '../assets/images/lyrics.jpg';
import DevaluargSVG from '../assets/images/devaluarg.jpg';
import './Works.css';
import ScrollBottom from './ScrollBottom';
import BtnSlider from './common/BtnSlider';


const Works = ()  => {
 
  return (
    <Stack id="works" gap = {16}background={'#210011;'} direction = {'column'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Stack
        textAlign={'center'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
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
      <ScrollBottom/>
    </Stack>
  );
};

export default Works;
