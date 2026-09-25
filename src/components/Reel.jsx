import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 96px 0 40px;
  background: #09080f;

  @media (max-width: 768px) { padding: 80px 0 24px; }
`;

const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) { padding: 0 20px; }
`;

const Frame = styled(motion.div)`
  border: 1px solid #1e1a30;
  border-radius: 6px;
  overflow: hidden;
  background: #0f0d1a;
  box-shadow: 0 0 40px rgba(124,58,237,0.15);

  video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

const Chapters = styled.nav`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 8px 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 6px;
  }
`;

const Label = styled.span`
  @media (max-width: 600px) { display: none; }
`;

const ChapterButton = styled.button`
  background: none;
  border: none;
  padding: 6px 0;
  cursor: pointer;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#f0eeff' : '#6B5B8A')};
  transition: color 0.2s;

  &:hover { color: #C4B5FD; }
  &:focus-visible { outline: 2px solid #F5C542; outline-offset: 4px; border-radius: 2px; }
`;

const Track = styled.div`
  height: 3px;
  margin-bottom: 10px;
  border-radius: 2px;
  background: #1e1a30;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #F5C542, #7C3AED);
  transform-origin: left;
`;

const Num = styled.span`
  color: #F5C542;
  margin-right: 6px;
`;

const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Reel = () => {
  const videoRef = useRef(null);
  const [chapters, setChapters] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch('/reel-chapters.json')
      .then((res) => res.json())
      .then(setChapters)
      .catch(() => setChapters([]));
  }, []);

  useEffect(() => {
    let raf;
    const tick = () => {
      if (videoRef.current) setTime(videoRef.current.currentTime);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const playChapter = (start) => {
    const video = videoRef.current;
    video.currentTime = start;
    video.play().catch(() => {});
  };

  return (
    <SectionWrapper id="reel">
      <Container>
        <Frame
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            src="/reel.mp4"
            poster="/reel-poster.jpg"
            autoPlay={!reducedMotion}
            controls={reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Tomás Vazquez, DevOps & Platform Engineer"
          />
        </Frame>

        {chapters.length > 0 && (
          <Chapters aria-label="Capítulos del video">
            {chapters.map(({ label, start, end }, i) => {
              const active = time >= start && time < end;
              const progress = Math.min(1, Math.max(0, (time - start) / (end - start)));
              return (
                <ChapterButton
                  key={label + i}
                  type="button"
                  $active={active}
                  aria-current={active ? 'true' : undefined}
                  aria-label={`${String(i + 1).padStart(2, '0')} ${label}`}
                  onClick={() => playChapter(start)}
                >
                  <Track>
                    <Fill style={{ transform: `scaleX(${progress})` }} />
                  </Track>
                  <Num>{String(i + 1).padStart(2, '0')}</Num>
                  <Label>{label}</Label>
                </ChapterButton>
              );
            })}
          </Chapters>
        )}
      </Container>
    </SectionWrapper>
  );
};

export default Reel;
