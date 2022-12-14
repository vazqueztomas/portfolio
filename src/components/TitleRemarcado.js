import React from 'react'
import { Text } from '@chakra-ui/react'
import './Titles.css'

const TitleRemarcado = (props) => {
  return (
    <Text fontSize={["30px","40px","40px"]} id = 'titles'>- {props.contenido} -
  </Text>
  )
}

export default TitleRemarcado