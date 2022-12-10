import React from 'react'
import {Text} from '@chakra-ui/react'
import './BotonBotonera.css'

const BotonBotonera = (props) => {
  return (
    <Text fontSize={[12,14,18]} fontWeight={"500"} letterSpacing={1} className={"btn-botonera"} background = 'transparent'>{props.contenido}</Text>
  )
}

export default BotonBotonera