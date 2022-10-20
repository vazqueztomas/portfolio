import React from 'react';
import { Stack, Image, Box, Link } from '@chakra-ui/react';
import styled from 'styled-components'
const ImageStyled = styled(Image)`
transition: all .2s ease-in-out;
:hover{
    transform: scale(1.02);
}

`
const WorkCard = props => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Stack alignItems={'center'}>
        <Link href={props.link}>
          <Box boxSize={'21,5rem'} maxW={340} px={[4, 0]}>
            <ImageStyled src={props.image} m={0} p={0} borderRadius={'12px'}></ImageStyled>
          </Box>
        </Link>
      </Stack>
    </Stack>
  );
};

export default WorkCard;
