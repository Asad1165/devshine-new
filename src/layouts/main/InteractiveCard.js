'use client';
import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { m, useMotionValue, useTransform, useSpring } from 'framer-motion';
import '../main/scss/interactiveCard.scss';

const imageUrls = [
  '/images/360_F_320899175_TuIgRgjVsNhv2Jl2y1YOdKelMxLTRCUl.jpg',
  '/images/download.jpg',
  '/images/images.jpg',
];

export default function FloatingImageBoxes() {
  const [activeIndex, setActiveIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <Box
      ref={containerRef}
      className="floating-boxes"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 5vw',
        overflow: 'hidden',
      }}
    >
      {imageUrls.map((src, i) => {
        const x = useTransform(mouseX, (val) => {
          if (activeIndex !== i) return 0;
          const center = window.innerWidth / 2;
          return (val - center) * 0.1;
        });

        const y = useTransform(mouseY, (val) => {
          if (activeIndex !== i) return 0;
          const center = window.innerHeight / 2;
          return (val - center) * 0.1;
        });

        const scale = useSpring(activeIndex === i ? 1.1 : 1, {
          stiffness: 300,
          damping: 30,
        });

        const boxSize = i === 1 ? '22vw' : '16vw';

        return (
          <m.div
            key={i}
            onMouseEnter={() => {
              setActiveIndex(i);
              document.body.style.cursor = 'none';
            }}
            onMouseLeave={() => {
              setActiveIndex(null);
              document.body.style.cursor = 'auto';
            }}
            style={{
              width: boxSize,
              height: boxSize,
              x,
              y,
              scale,
              boxShadow:
                activeIndex === i ? '0 30px 50px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'auto',
            }}
          >
            <img
              src={src}
              alt={`box-${i}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'inherit',
              }}
            />
          </m.div>
        );
      })}
    </Box>
  );
}
