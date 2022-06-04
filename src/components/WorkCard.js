import React from 'react';
import { Stack, Image, Button, Box, Link } from '@chakra-ui/react';

const WorkCard = props => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Stack
        // border={'1px solid transparent'}

        alignItems={'center'}
      > 
        <Link href = {props.link}>
        <Box boxSize={"21,5rem"} maxW={340} px={[4, 0]}>
          <Image src={props.image} m={0} p={0} borderRadius={'12px'}></Image>
        </Box>
        </Link>
      </Stack>
    </Stack>
  );
};

export default WorkCard;
