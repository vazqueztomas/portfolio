import React from 'react'
import { Text } from '@chakra-ui/react'
import styled from 'styled-components';
import './Titles.css'

const TitleRemarcado = (props) => {
  return (
    <Text fontSize={["40px","40px","40px"]} id = 'titles'>- {props.contenido} -
  </Text>
  )
}

export default TitleRemarcado