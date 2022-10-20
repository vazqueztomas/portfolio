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
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
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
        color={useColorModeValue('gray.700', 'gray.400')}
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
          }}>
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
          bg={'orange.400'}
          color={'white'}
          boxShadow={'3xl'}
          _hover={{
              bg: 'orange.500',
            }}
            _focus={{
                bg: 'orange.500',
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