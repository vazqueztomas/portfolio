import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import './SocialMedias.css';
const SocialMedias = () => {
  return (
    <>
      <Stack m={0}>
        <Stack id="youreinterested" textAlign={'center'}>
          <Text fontSize={['2xl']} fontWeight={'bolder'} mt={[0,0,20]}>
            Charlemos!
          </Text>
          <Text fontSize={'lg'} mt={20}>
            Querés que dialoguemos? Te dejo mis redes sociales!{' '}
          </Text>
        </Stack>
        <Stack
          id="socialmedias"
          m={0}
          direction={'row'}
          spacing={8}
          justifyContent={'center'}
        >
          <GitHubIcon  id = "btn-github" sx={{ fontSize: 45 }} className="socialMediaBtn" style={{
              border: '1px solid transparent',
              borderRadius: '50%',
              padding: '0.5rem',
            }}/>
          <LinkedInIcon id = 'btn-linkedin' sx={{ fontSize: 45 }}style={{
              border: '1px solid transparent',
              borderRadius: '50%',
              padding: '0.5rem',
            }} />
          <EmailIcon id = "btn-mail"sx={{ fontSize: 45 }} style={{
              border: '1px solid transparent',
              borderRadius: '50%',
              padding: '0.5rem',
            }}/>
          <LocalCafeIcon
          id = "btn-cafecito"
            sx={{ fontSize: 45 }}
            style={{
              border: '1px solid transparent',
              borderRadius: '50%',
              padding: '0.5rem',
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default SocialMedias;
