import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// import Card from '@mui/material/Card';

import { useScroll } from 'framer-motion';
import { projects } from './components/data';

import Lenis from '@studio-freight/lenis';
import styles from './page.module.scss';
import Card from './components/Card';

export default function ParallaxFrame() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', mb: 15 }}>
      <Stack flexDirection="column" justifyContent="center" alignItems="center">
        <Stack flexDirection="column" justifyContent="center" textAlign="center" maxWidth={700}>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            Partners
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            A good journey starts with great partners.
          </Typography>
        </Stack>
        <Stack
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          maxWidth={450}
          mt={2}
        >
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            We establish deep relations that keep adding value even when the project has finished.
          </Typography>
        </Stack>
      </Stack>
      <Box ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i - 1) * 0.06;
          // Calculate which card should be prominent based on scroll progress
          const currentCardIndex = Math.floor(scrollYProgress.get() * projects.length);
          const shouldBlur = i < currentCardIndex;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              shouldBlur={shouldBlur}
              totalCards={projects.length}
            />
          );
        })}
      </Box>
    </Container>
  );
}
