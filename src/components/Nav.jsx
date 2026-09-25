import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  background: linear-gradient(to bottom, rgba(9,8,15,0.95) 0%, transparent 100%);
  backdrop-filter: blur(2px);

  @media (max-width: 768px) { padding: 16px 24px; }
`;

const NavLogo = styled.div`
  font-weight: 800;
  font-size: 18px;
  background: linear-gradient(135deg, #7C3AED, #5B21B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) { gap: 20px; }
  @media (max-width: 480px) { display: none; }
`;

const NavLink = styled.span`
  color: #C4B5FD;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s, color 0.2s;

  &:hover { opacity: 1; color: #F5C542; }
  @media (max-width: 768px) { font-size: 12px; }
`;

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Nav = () => (
  <NavWrapper>
    <NavLogo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>TV</NavLogo>
    <NavLinks>
      <li><NavLink onClick={() => scrollTo('about')}>About</NavLink></li>
      <li><NavLink onClick={() => scrollTo('experience')}>Experience</NavLink></li>
      <li><NavLink onClick={() => scrollTo('contact')}>Contact</NavLink></li>
    </NavLinks>
  </NavWrapper>
);

export default Nav;
