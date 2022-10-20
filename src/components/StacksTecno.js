import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
const StacksTecno = () => {
  let frontend_techs = [
    'React',
    'JavaScript',
    'Styled Components',
    'HTML-CSS',
    'ChakraUI',
    'Sass',
    'Styled Components',
  ];
  let backend_techs = ['NodeJS', 'Python', 'MongoDB', 'Express'];
  let color = '#ff9b5c';
  return (
    <Stack
      direction={['column', 'row']}
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems={['center', 'center', 'start']}
    >
      <Stack
        direction={'column'}
        textAlign={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        p={10}
        w={['100%', '100%', '33%']}
      >
        <ArchitectureIcon
          color={'orange'}
          sx={{ fontSize: 45, color: '#ff9b5c' }}
        />
        <Stack>
          <Text fontSize={'xl'} fontWeight={'bolder'}>
            Frontend
          </Text>
          <Text fontSize={'md'}>
            El diseño, las paletas de colores y los detalles.
          </Text>
          <Text fontSize={'lg'} color={color}>
            Lenguajes que utilizo día a día:
          </Text>
          {frontend_techs.map(e => (
            <Text fontSize={'md'}>{e}</Text>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction={'column'}
        textAlign={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        p={10}
        w={['100%', '100%', '33%']}
      >
        <CloudQueueIcon
          color={'orange'}
          sx={{ fontSize: 45, color: '#ff9b5c' }}
        />
        <Stack>
          <Text fontSize={'xl'} fontWeight={'bolder'}>
            Backend
          </Text>
          <Text fontSize={'md'}>
            La lógica, la razón y los algoritmos.
          </Text>
          <Text fontSize={'lg'} color={color}>
            Lenguajes que utilizo:
          </Text>
          {backend_techs.map(e => (
            <Text fontSize={'md'}>{e}</Text>
          ))}{' '}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StacksTecno;
