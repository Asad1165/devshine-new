import '../main/scss/ourProcess.scss';
import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { m, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import lottie from 'lottie-web';
import { processSteps } from '../../../src/constants/data';

export default function OurProcess() {
  const componentRef = useRef(null);
  const lottieRef = useRef(null);
  const stepsSectionRef = useRef(null);
  const animationRef = useRef(null);

  // Get scroll progress for the steps section
  const { scrollYProgress } = useScroll({
    target: stepsSectionRef,
    offset: ['start center', 'end end'],
  });

  // Add smooth spring transition to scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const container = lottieRef.current;
    if (!container || !container.offsetHeight) return;
    // Load Lottie animation
    const anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/Logo.json',
    });

    animationRef.current = anim;

    anim.addEventListener('DOMLoaded', () => {
      // Option 1: Use smooth spring progress (recommended for organic feel)
      const unsubscribe = smoothProgress.on('change', (progress) => {
        const frame = progress * (anim.totalFrames - 1);
        anim.goToAndStop(frame, true);
      });

      return unsubscribe;
    });

    return () => {
      anim?.destroy();
    };
  }, [smoothProgress]);

  return (
    <Box className="ourProcessWrapper" sx={{ mt: '14rem', pb: '6rem' }} ref={componentRef}>
      <Box className="rightContainer">
        <m.div className="lottieWrapper" ref={lottieRef} />
      </Box>

      <Box className="stepsSection" ref={stepsSectionRef}>
        {processSteps.map((item, index) => (
          <StepSection data={item} key={index} index={index} />
        ))}
      </Box>
    </Box>
  );
}

const StepSection = ({ data, index }) => {
  return (
    <Box className="stepContainer">
      <Typography className="stepTitle">{data.title}</Typography>

      <Typography className="stepText">{data.description1}</Typography>
    </Box>
  );
};
