import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import BotonBotonera from "./BotonBotonera";
const Navbar = () => {
  return (
    <>
      <Stack direction={["row"]} spacing = {12} justifyContent={["center"]} alignItems={"center"} my={8}>
          <BotonBotonera contenido = "sobre mi"/>
          <BotonBotonera contenido = "trabajos"/>
          <BotonBotonera contenido = "contacto"/>         
          
      </Stack>
    </>
  );
};

export default Navbar;
