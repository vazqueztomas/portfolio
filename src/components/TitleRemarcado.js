import React from 'react'
import { Text } from '@chakra-ui/react'
const TitleRemarcado = (props) => {
  return (
    <Text fontSize={["40px","40px","60px"]} >
    <span id="span-title">{props.contenido}</span>
  </Text>
  )
}

export default TitleRemarcado