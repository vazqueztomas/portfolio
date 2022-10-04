import { Text, Stack, Button, WrapItem, Wrap } from '@chakra-ui/react';
import React from 'react';
import TitleRemarcado from './TitleRemarcado';
import WorkCard from './WorkCard';
import GitHubIcon from '@mui/icons-material/GitHub';
import BillabongSVG from '../assets/images/billabong.svg';
import BarberiaSVG from '../assets/images/barberia.svg';
import LaBarbDeTotoSVG from '../assets/images/labarberiadetoto.svg';
import RuinsSVG from '../assets/images/tipos-de-computadoras.svg';
import LyricsSVG from '../assets/images/lyrics.svg';
import DevaluargSVG from '../assets/images/devaluarg.svg';
import './Works.css';
const Works = props => {
  const proyects = [
    {
      link: 'https://billabongcopy.web.app/',
      name: 'Billabong Page',
      src: BillabongSVG,
    },
    {
      link: 'https://labarberiadetoto.web.app',
      name: 'La barberia de Toto',
      src: LaBarbDeTotoSVG,
    },
    {
      link: 'https://benescuela.web.app',
      name: 'Escuela Barberia',
      src: BarberiaSVG,
    },
    {
      link: 'https://ruinsdesign.web.app',
      name: 'Ruins Design',
      src: RuinsSVG,
    },
    {
      link: 'https://homelyricstudio.web.app/',
      name: 'Home Lyrics Studio',
      src: LyricsSVG,
    },
    { link: 'https://devaluarg.web.app', name: 'Devaluarg', src: DevaluargSVG },
  ];

  return (
    <Stack my={20} id="works">
      <Stack
        textAlign={'center'}
        direction={['column', 'column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        my={20}
      >
        <Text fontSize={['20px', '20px', '30px']}>Más de 2 años de</Text>
        <TitleRemarcado contenido="EXPERIENCIA"></TitleRemarcado>
      </Stack>

      <Wrap justify={'center'} align={'center'} spacing={6} p={2}>
        {proyects.map(proyect => {
          return (
            <WrapItem>
              <WorkCard image={proyect.src} link={proyect.link}></WorkCard>
            </WrapItem>
          );
        })}
      </Wrap>
      <Stack alignItems={'center'} justifyContent={'center'} pt={10}>
        <a
          href="https://github.com/vazqueztomas"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            colorScheme={'orange'}
            borderRadius={'20px 20px'}
            variant={'outline'}
            id="btn-github-seemore"
          >
            {' '}
            <GitHubIcon /> Mirá más en mi Github{' '}
          </Button>
        </a>
      </Stack>
    </Stack>
  );
};

export default Works;
