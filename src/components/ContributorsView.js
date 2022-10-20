import React from 'react';
import styled from 'styled-components';
import TextOrange from './common/TextOrange';
import TitleRemarcado from './TitleRemarcado';
import CardCrypto from './web3_section/CardCrypto';
import logoCrypto from '../assets/images/full.svg';
import { Wrap, WrapItem } from '@chakra-ui/react';
const ContributorsView = () => {
  const cryptoData = [{
    logoSrc: logoCrypto,
    heading : 'CriptoCars',
    subHeading : 'web3 Proyect',
    alt: 'Criptocars logo',
    infoCard: 'CriptoCars es un proyecto web3 de venta de vehiculos en criptomonedas de forma segura.',
    github: 'https://github.com/LautiRad/CriptoCars',
    linkWebPage: 'https://www.criptocars.io/',
  },
  {
    logoSrc: 'https://itsfoss.com/wp-content/uploads/2022/10/hacktoberfest-2022.png',
    heading : 'NFT Marketplace App',
    subHeading : 'web3 Proyect',
    alt: 'nft marketplace logo',
    infoCard: 'NFT Marketplace es un proyecto web3 de venta de NFT, en el hacktoberfest 2022.',
    github: 'https://github.com/vazqueztomas/backstage-hacktoberfest',
    linkWebPage: 'https://github.com/vazqueztomas/backstage-hacktoberfest',
  }]
  return (
      <Container direction="column" id ='colabs'>
        <Text size="28px" margin="12px 8px 0 0 ">
          Proyectos <TextOrange>web3</TextOrange> en los que{' '}
        </Text>
        <TitleRemarcado contenido="colaboré"></TitleRemarcado>
        <Wrap justify={'center'} align={'center'} spacing={6} mb={24} w={'100%'}>
        {cryptoData.map((data) => 
        <WrapItem>
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
      </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  margin: 16px 0 32px 0;
`;

const Text = styled.h2`
  font-size: ${props => props.size};
  margin: ${props => props.margin};
`;
export default ContributorsView;
