import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border-top: 1px solid #1e1a30;
  padding: 32px;
  text-align: center;
  font-size: 12px;
  color: #6B5B8A;
  font-weight: 500;
  letter-spacing: 0.06em;
  background: #09080f;
`;

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()} Tomás Vazquez · Buenos Aires, Argentina
  </FooterWrapper>
);

export default Footer;
