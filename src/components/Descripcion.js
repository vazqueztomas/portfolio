import { Stack, Text, Image, ColorModeProvider } from '@chakra-ui/react';
import AboutMe from '../assets/images/aboutme.jpg';
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DoneIcon from '@mui/icons-material/Done';
import TitleRemarcado from './TitleRemarcado';

const Descripcion = (props) => {
  let color = '#ff9b5c';

  
  return (
    <Stack my={8}>
      <Stack textAlign={'center'}>
        <TitleRemarcado contenido={props.title}></TitleRemarcado>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        alignItems={['center', 'center']}
        justifyContent={['center', 'space-evenly']}
        my={10}
      >
        <Stack direction={'column'}>
          <Stack direction={'row'} id="task-list">
            <ComputerIcon color="pink" />
            <Text>Desarrollador frontend</Text>
          </Stack>
          <Stack direction={'row'} id="task-list">
            <DoneIcon />
            <Text>Estudiante Sistemas de Información</Text>
          </Stack>
          <Stack direction={'row'} id="task-list">
            <CurrencyBitcoinIcon />
            <Text>Interés en cryptomonedas</Text>
          </Stack>
        </Stack>

        <Stack>
          <Image src={AboutMe} w={['200px', '200px','300px']}></Image>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Descripcion;
