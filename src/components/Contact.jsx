import { motion } from 'framer-motion';
import styled from 'styled-components';
import TitleRemarcado from './TitleRemarcado';

const SectionWrapper = styled.div`
  padding: 100px 0;
  background: #09080f;

  @media (max-width: 768px) { padding: 72px 0; }
`;

const Container = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) { padding: 0 20px; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Intro = styled.p`
  font-size: 16px;
  color: #C4B5FD;
  line-height: 1.7;
  font-weight: 500;
  margin-bottom: 32px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: #C4B5FD;
  font-size: 15px;
  font-weight: 600;
  transition: color 0.2s;
  padding: 10px 0;

  &:hover { color: #F5C542; }
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid #1e1a30;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0d1a;
  color: #C4B5FD;
  flex-shrink: 0;
  transition: border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;

  ${ContactLink}:hover & {
    border-color: #F5C542;
    background: rgba(245,197,66,0.08);
    transform: scale(1.2) rotate(5deg);
    box-shadow: 0 0 16px rgba(245,197,66,0.25);
  }
`;

const BlogSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BlogLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6B5B8A;
`;

const BlogTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #C4B5FD;
  line-height: 1.2;
`;

const BlogDesc = styled.div`
  font-size: 14px;
  color: #6B5B8A;
  line-height: 1.6;
  font-weight: 500;
`;

const BtnBlog = styled.a`
  display: inline-block;
  margin-top: 8px;
  padding: 12px 28px;
  border: 1px solid #F5C542;
  border-radius: 4px;
  color: #F5C542;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: #F5C542;
    color: #09080f;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(245,197,66,0.35);
  }
`;

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => (
  <SectionWrapper id="contact">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <TitleRemarcado contenido="Contact" />
      </motion.div>

      <Grid>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Intro>
              Open to senior platform &amp; DevOps roles. Let's talk infrastructure, reliability, and engineering quality.
            </Intro>
          </motion.div>

          <LinkList>
            {[
              { href: 'mailto:vazquezt2018@gmail.com', label: 'vazquezt2018@gmail.com', icon: <EmailIcon />, delay: 0 },
              { href: 'https://github.com/vazqueztomas', label: 'github.com/vazqueztomas', icon: <GitHubIcon />, delay: 1 },
              { href: 'https://www.linkedin.com/in/vazqueztomas21', label: 'linkedin.com/in/vazqueztomas21', icon: <LinkedInIcon />, delay: 2 },
            ].map(({ href, label, icon, delay }) => (
              <ContactLink
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                custom={delay}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <IconBox>{icon}</IconBox>
                {label}
              </ContactLink>
            ))}
          </LinkList>
        </div>

        <BlogSide
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <BlogLabel>Technical Blog</BlogLabel>
          <BlogTitle>Engineering Notes &amp; Write-ups</BlogTitle>
          <BlogDesc>
            Articles on platform engineering, Kubernetes operations, CI/CD patterns, and
            observability — from production experience.
          </BlogDesc>
          <BtnBlog
            href="https://tomasvazquez.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Blog
          </BtnBlog>
        </BlogSide>
      </Grid>
    </Container>
  </SectionWrapper>
);

export default Contact;
