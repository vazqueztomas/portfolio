import { Stack, Text, Link } from '@chakra-ui/react';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import './SocialMedias.css';
const SocialMedias = () => {
  return (
    <>
      <Stack m={0} id = "redes">
        <Stack id="youreinterested" textAlign={'center'}>
          <Text fontSize={['2xl']} fontWeight={'bolder'} mt={[2, 0, 20]} >
            Charlemos!
          </Text>
          <Text fontSize={'lg'} mt={20}>
            Siempre estoy abierto a realizar nuevas conexiones! Te dejo mis redes
            sociales{' '}
          </Text>
        </Stack>
        <Stack
          id="socialmedias"
          m={0}
          direction={'row'}
          spacing={8}
          justifyContent={'center'}
        >
          <Link href="https://github.com/vazquezcabj21" isExternal>
            <GitHubIcon
              id="btn-github"
              sx={{ fontSize: 45 }}
              className="socialMediaBtn"
              style={{
                border: '1px solid transparent',
                borderRadius: '50%',
                padding: '0.5rem',
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tom%C3%A1s-vazquez-88003a206/"
            isExternal
          >
            <LinkedInIcon
              id="btn-linkedin"
              sx={{ fontSize: 45 }}
              style={{
                border: '1px solid transparent',
                borderRadius: '50%',
                padding: '0.5rem',
              }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/tomasvazquez21/?hl=es-la"
            isExternal
          >
            <InstagramIcon
              id="btn-mail"
              sx={{ fontSize: 45 }}
              style={{
                border: '1px solid transparent',
                borderRadius: '50%',
                padding: '0.5rem',
              }}
            />
          </Link>
          <Link href="https://cafecito.app/vazquezcabj21" isExternal>
            <LocalCafeIcon
              id="btn-cafecito"
              sx={{ fontSize: 45 }}
              style={{
                border: '1px solid transparent',
                borderRadius: '50%',
                padding: '0.5rem',
              }}
            />
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default SocialMedias;
