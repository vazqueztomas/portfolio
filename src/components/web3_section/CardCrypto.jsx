import React from 'react'
import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Image,
    Link
  } from '@chakra-ui/react';
  import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import { orange } from '@mui/material/colors';
  
const BoxWithStyle = styled(Box)`
    transition: all .2s ease-in-out;
  :hover{
    transform: scale(1.02);
}
`

const CardCrypto = (props) => {
  return (
    <Center py={6} mb={12}>
    <BoxWithStyle
    display={'flex'}
    flexDirection={'column'}
      maxW={'320px'}
      w={'full'}
      backgroundColor = {'#A11B36'}
      color = {'#e4b3a3'}
      boxShadow={'1xl'}
      p={6}
      textAlign={'center'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Image
        boxSize={'150px'}
        w={'auto'}
        src={props.logoSrc}
        alt={props.alt}
        my={4}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {props.heading}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {props.subHeading}
      </Text>
      <Text
        textAlign={'center'}
        color={'#e4b3a3'}
        px={3}>
            {props.infoCard}{' '}
      </Text>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Link style = {{textDecoration: 'none'}}href={props.github} isExternal>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}
          color = {'#e4b3a3'}
          border = '1px solid black'
          backgroundColor = 'transparent'
>
        <GitHubIcon
              style={{
                border: '1px solid transparent',
                borderRadius: '50%',
                paddingRight: '4px',
              }}
            />
          Github
        </Button>
              </Link>
              <Link style = {{textDecoration: 'none'}}href = {props.linkWebPage} isExternal>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          border = '1px solid black'
          backgroundColor = 'transparent'
          color={'#e4b3a3'}
          boxShadow={'3xl'}
          _hover={{
              bg: '#A11B36',
            }}
            _focus={{
                bg: '#A11B36',
            }}>
          Ir al sitio
        </Button>
              </Link>
      </Stack>
    </BoxWithStyle>
  </Center>
  )
}

export default CardCrypto