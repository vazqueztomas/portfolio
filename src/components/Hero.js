import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import './Hero.css';

const gridDrift = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 60px 60px; }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.1); }
`;

const bounceDown = keyframes`
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50%       { transform: rotate(45deg) translateY(5px); }
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #09080f;
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridDrift} 20s linear infinite;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%);
  pointer-events: none;
`;

const HeroGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glowPulse} 5s ease-in-out infinite;
  pointer-events: none;
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 0 20px;
`;

const HeroName = styled.h1`
  font-size: clamp(36px, 8vw, 88px);
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1;
  background: linear-gradient(135deg, #f0eeff 20%, #C4B5FD 55%, #F5C542 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 375px) { letter-spacing: -1.5px; }
`;

const HeroSubtitle = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  font-size: clamp(14px, 2.5vw, 20px);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #F5C542;
`;

const HeroTagline = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  font-size: clamp(13px, 1.8vw, 15px);
  color: #6B5B8A;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

const HeroCTA = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BtnPrimary = styled.a`
  display: inline-block;
  padding: 12px 28px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
  background: linear-gradient(135deg, #6D28D9, #7C3AED);
  color: #f0eeff;
  border: none;
  box-shadow: 0 4px 20px rgba(124,58,237,0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(124,58,237,0.5);
    color: #f0eeff;
  }

  @media (max-width: 480px) { width: 100%; max-width: 240px; text-align: center; }
`;

const BtnOutline = styled.a`
  display: inline-block;
  padding: 12px 28px;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
  background: transparent;
  color: #F5C542;
  border: 1px solid #F5C542;

  &:hover {
    background: rgba(245,197,66,0.08);
    transform: translateY(-2px);
    color: #F5C542;
  }

  @media (max-width: 480px) { width: 100%; max-width: 240px; text-align: center; }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #6B5B8A;
    font-weight: 600;
  }
`;

const ScrollChevron = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid #F5C542;
  border-bottom: 2px solid #F5C542;
  transform: rotate(45deg);
  animation: ${bounceDown} 1.5s ease-in-out infinite;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay || 0, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <HeroWrapper id="hero">
      <HeroGrid />
      <HeroGlow />

      <HeroContent>
        <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="show">
          <HeroName>Tomás Vazquez</HeroName>
        </motion.div>

        <motion.div custom={0.5} variants={fadeUp} initial="hidden" animate="show">
          <HeroSubtitle>DevOps &amp; Platform Engineer</HeroSubtitle>
        </motion.div>

        <motion.div custom={0.75} variants={fadeUp} initial="hidden" animate="show">
          <HeroTagline>Kubernetes · Azure · CI/CD · Observability</HeroTagline>
        </motion.div>

        <motion.div custom={1.0} variants={fadeUp} initial="hidden" animate="show">
          <HeroCTA>
            <BtnPrimary
              href="#experience"
              onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}
            >
              View Experience
            </BtnPrimary>
            <BtnOutline
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Get in Touch
            </BtnOutline>
          </HeroCTA>
        </motion.div>
      </HeroContent>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <ScrollIndicator onClick={() => scrollTo('about')}>
          <span>Scroll</span>
          <ScrollChevron />
        </ScrollIndicator>
      </motion.div>
    </HeroWrapper>
  );
};

export default Hero;
