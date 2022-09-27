import React from 'react';
import { Stack } from '@chakra-ui/react';
import BotonBotonera from './BotonBotonera';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <>
      <Stack
        direction={['row']}
        spacing={12}
        justifyContent={['center']}
        alignItems={'center'}
        my={8}
      >
        <Link to="aboutme" smooth={true}>
          <BotonBotonera contenido="sobre mi" />
        </Link>
        <Link to="works" smooth={true}>
          <BotonBotonera contenido="trabajos" />
        </Link>
        <Link to="redes" smooth={true}>
          <BotonBotonera contenido="contacto" />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
