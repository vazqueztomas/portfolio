import React from 'react';
import TextOrange from './common/TextOrange';
import TitleRemarcado from './TitleRemarcado';
import CardCrypto from './web3_section/CardCrypto';
import logoCrypto from '../assets/images/full.svg';
import { Stack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { BoxAnimated } from './Hero';
import hacktoberfest_img from '../assets/images/oJ7mKaaj_400x400.jpg'
const ContributorsView = () => {
  const cryptoData = [{
    logoSrc: logoCrypto,
    heading : 'CriptoCars',
    subHeading : 'web3 Proyect',
    alt: 'Criptocars logo',
    infoCard: 'CriptoCars is a web3 project of cars sales with cryptocurrencies, safely.',
    github: 'https://github.com/LautiRad/CriptoCars',
    linkWebPage: 'https://www.criptocars.io/',
  },
  {
    logoSrc: hacktoberfest_img,
    heading : 'NFT Marketplace App',
    subHeading : 'web3 Proyect',
    alt: 'nft marketplace logo',
    infoCard: 'NFT Marketplace is a web3 marketplace of NFTs, made in Hacktoberfest 2022',
    github: 'https://github.com/vazqueztomas/backstage-hacktoberfest',
    linkWebPage: 'https://github.com/vazqueztomas/backstage-hacktoberfest',
  }]
  return (
    
    <Stack color = '#FFA475' backgroundColor = {'#210011'} direction="column" id ='colabs' justifyContent={'center'} alignItems = {'center'} p = {6} textAlign = {'center'}>
        <BoxAnimated duration = {.6}>
        <Text size={14} margin="12px 8px 0 0 ">
          <TextOrange>web3 projects</TextOrange> in which I {' '}
        </Text>
        <TitleRemarcado contenido="collaborated"></TitleRemarcado>
        </BoxAnimated>
        <BoxAnimated duration = {1.7}>

        <Wrap justify={'center'} align={'center'} spacing={6} mb={24} w={'100%'}>
        {cryptoData.map((data, id) => 
        <WrapItem key = {id}>
          <CardCrypto 
            logoSrc = {data.logoSrc} 
            heading ={data.heading} 
            subheading={data.subHeading} 
            infoCard = {data.infoCard}
            github = {data.github}
            linkWebPage = {data.linkWebPage}
            /> 
            </WrapItem>
        )}
        </Wrap>
        </BoxAnimated>
      </Stack>

  );
};

export default ContributorsView;
