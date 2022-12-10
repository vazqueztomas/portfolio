import React from 'react'
import { Text } from '@chakra-ui/react'
import styled from 'styled-components';
import './Titles.css'

const Span = styled.p`
    background: linear-gradient(135deg, hsla(0, 0%, 100%, 0) 56%, #330C21 98%), linear-gradient(25deg, #e64017 23%, #bf1815 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const TitleRemarcado = (props) => {
  return (
    <Text fontSize={["40px","40px","40px"]} id = 'titles'>
    <Span id="span-title">- {props.contenido} - </Span>
  </Text>
  )
}

export default TitleRemarcado