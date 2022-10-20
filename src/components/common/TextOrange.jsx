import React from 'react'
import styled from 'styled-components';

const Text = styled.span`
    /* color: var(--chakra-colors-orange-400); */
    font-weight: bold;
    background: rgb(255,236,74);
    background: linear-gradient(90deg, #F6AD55 0%, rgba(255,168,11,1) 100%);
    /* background: -webkit-linear-gradient(#eee, #333); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const TextOrange = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default TextOrange