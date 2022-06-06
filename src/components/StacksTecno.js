import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
const StacksTecno = () => {
  let frontend_techs = [
    'HTML',
    'CSS3',
    'JavaScript',
    'Reactjs',
    'Bootstrap',
    'ChakraUI',
    'Sass',
  ];
  let backend_techs = ['Solidity (para web3)', 'Python', 'Nodejs', 'C#', 'Go'];
  let color = '#ff9b5c';
  return (
    <Stack
      direction={['column', 'row']}
      justifyContent={["center","center",'space-evenly']}
      alignItems={["center","center",'start']}
    >
      <Stack
        direction={'column'}
        textAlign={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        p={10}
        w={['100%','100%','33%']}
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
            Programo hace más de dos años, y la parte del cliente es la que mas
            me atrae.
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
        w={['100%','100%','33%']}
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
            Si bien me gusta la parte del diseño, también me gusta su
            contraparte.
          </Text>
          <Text fontSize={'lg'} color={color}>
            ¿Que lenguajes quiero aprender?
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
