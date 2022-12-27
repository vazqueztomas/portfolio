import { Link, Stack, Text } from '@chakra-ui/react'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react'
import TextOrange from './common/TextOrange';
import { BoxAnimated } from './Hero';
import TitleRemarcado from './TitleRemarcado';

const Contact = () => {
  return (
    <Stack background={'#210011;'} justifyContent = {'center'} alignItems = {'center'} color = '#FFA475' padding = {[3, 0, 0]}>
      <BoxAnimated>

      <Stack color = {'#A11B36'}>
        <TitleRemarcado contenido = 'Contact with me'/>
      </Stack>
      <Text p = {[4, 0, 0]} textAlign = 'center'>Here you can see my social medias. Let's speak, i'm open to work!</Text>


      <Stack direction = {['column', 'column', 'row']} justify = 'space-evenly' align={'center'} w = '100%' pt = {4}>

        <Stack direction = 'column' textAlign={'center'} justify = 'center' align={'center'} py = {[4, 0, 0]}>
          <Stack direction = 'row' gap = {4}>
            <Link href = 'https://twitter.com/cabjquez' isExternal>
              <Twitter sx = {{fontSize: 40}}/>
            </Link>
            <Link href = 'https://github.com/vazqueztomas' isExternal>
              <GitHub sx = {{fontSize: 40}}/>
            </Link>
            <Link href = 'https://www.linkedin.com/in/vazqueztomas21' isExternal>
              <LinkedIn sx = {{fontSize: 40}}/>
            </Link>
          </Stack>

          <h6>My discord tag: <TextOrange>Tomasvazquez21#9149</TextOrange></h6>
          <h6>Send me an email: <TextOrange>vazquezt2018@gmail.com</TextOrange></h6>

        </Stack>

        <Stack direction = 'column ' gap = {4}>
          <h3>You can read my articles here!</h3>
          <Link href = 'https://tomasvazquez.hashnode.dev/' isExternal>
          <Text backgroundColor={'#A11B36'} p = {2} borderRadius={4} textAlign = 'center' fontWeight={'bold'}><TextOrange>HERE</TextOrange></Text>
          </Link>
        </Stack>
      </Stack>
      </BoxAnimated>

    </Stack>
  )
}

export default Contact