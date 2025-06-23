'use client';
import '../main/scss/ourProcess.scss';
import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';
import { processSteps } from '../../../src/constants/data';
gsap.registerPlugin(ScrollTrigger);
const StepSection = ({ data }) => {
  return (
    <div className="stepContainer">
      <Typography className="stepTitle">{data.title}</Typography>
      <Typography className="stepText">{data.description1}</Typography>
      {data.description2 && <Typography className="stepText">{data.description2}</Typography>}
    </div>
  );
};
export default function OurProcess() {
  const componentRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const container = lottieRef.current;
    if (!container) return;
  
    const ctx = gsap.context(() => {
      const anim = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/Logo.json',
      });
      anim.addEventListener('DOMLoaded', () => {
        const playhead = { frame: 0 };
        gsap.to(playhead, {
          frame: anim.totalFrames - 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.stepsSection',
            start: 'top center',
            end: 'bottom bottom+=100%',
            scrub: 2, // ← increase to slow it down more
            onUpdate: () => {
              anim.goToAndStop(playhead.frame, true);
            },
          },
        });
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);
  
  

  return (
    <Box ref={componentRef} className="ourProcessWrapper">
      <Box id="test" className="processFlexContainer">
        <Box className="rightContainer">
          <Box className="lottieWrapper" ref={lottieRef} />
        </Box>
        <Box className="stepsSection" style={{ minHeight: '300vh' }}>
        {processSteps.map((item, index) => (
            <div className="stepContainer" key={index}>
              <StepSection data={item} />
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
