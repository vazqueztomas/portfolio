import { motion } from 'framer-motion';
import styled from 'styled-components';
import { works } from './worksArray';

const Card = styled(motion.div)`
  background: #0f0d1a;
  border: 1px solid #1e1a30;
  border-bottom: none;
  padding: 32px;
  box-shadow: 0 0 20px rgba(124,58,237,0.08);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s, border-color 0.3s;

  &:first-child { border-radius: 6px 6px 0 0; }
  &:last-child  { border-radius: 0 0 6px 6px; border-bottom: 1px solid #1e1a30; }

  &::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #F5C542, #7C3AED);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 0 2px 2px 0;
  }

  &:hover {
    box-shadow: 0 0 32px rgba(124,58,237,0.14);
    border-color: #2d2550;
  }

  &:hover::before { transform: scaleY(1); }

  @media (max-width: 768px) { padding: 24px 20px; }
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 4px;
  background: #110e1f;
  padding: 6px;
  flex-shrink: 0;
`;

const Meta = styled.div`
  flex: 1;
  @media (max-width: 480px) { text-align: center; }
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #C4B5FD;
  letter-spacing: -0.3px;
  line-height: 1.2;
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #6B5B8A;
  margin-top: 4px;
`;

const Period = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #6B5B8A;
  opacity: 0.7;
  margin-top: 3px;
  letter-spacing: 0.04em;
`;

const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 20px;
  padding: 0;
`;

const BulletItem = styled.li`
  font-size: 14px;
  color: #9D8FBF;
  padding-left: 20px;
  position: relative;
  line-height: 1.55;
  font-weight: 500;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #F5C542;
    font-size: 11px;
    top: 1px;
  }
`;

const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechPill = styled.span`
  padding: 4px 10px;
  border: 1px solid rgba(124,58,237,0.5);
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  color: #C4B5FD;
  letter-spacing: 0.04em;
  background: transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(124,58,237,0.15);
    color: #F5C542;
    border-color: #F5C542;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const NewExperienceCard = () => (
  <div>
    {works.map((work, index) => (
      <Card
        key={index}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Header>
          <LogoImg src={work.src} alt={`${work.company} logo`} />
          <Meta>
            <Role>{work.role}</Role>
            <Company>{work.company} · {work.location}</Company>
            <Period>{work.period}</Period>
          </Meta>
        </Header>

        <Bullets>
          {work.description.map((bullet, i) => (
            <BulletItem key={i}>{bullet}</BulletItem>
          ))}
        </Bullets>

        <Techs>
          {work.technologies.map((tech, i) => (
            <TechPill key={i}>{tech}</TechPill>
          ))}
        </Techs>
      </Card>
    ))}
  </div>
);

export default NewExperienceCard;
