'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import './footer.scss';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
// @mui
import Box from '@mui/material/Box';
import { m, useScroll, useTransform } from 'framer-motion';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer copy';
import Header from './header';
import Navbar from './navbar';
import SmoothProjects from './smooth-projects';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const containerRef = useRef(null);
  const conclusionRef = useRef(null);
  const lenisRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: conclusionRef,
    offset: ['end end', 'end start'],
    // Remove container prop for Lenis (it handles the scroll container)
  });

  // Transform scroll progress to yPercent (-50% to 0%)
  const yPercent = useTransform(scrollYProgress, [0, 0.75], ['-50%', '0%']);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical', // Gesture direction
      smooth: true, // Enable smooth scroll
      mouseMultiplier: 1, // Mouse wheel sensitivity
      smoothTouch: false, // Disable smooth scroll on touch devices
      touchMultiplier: 2, // Touch sensitivity
      infinite: false, // Disable infinite scroll
    });

    lenisRef.current = lenis;

    // Connect Lenis with Framer Motion's scroll tracking
    lenis.on('scroll', () => {
      // This ensures Framer Motion's scroll tracking updates with Lenis
    });

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Box ref={conclusionRef} sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Header />
        <Navbar/>
        <Box
          component="main"
          class
          sx={{
            flexGrow: 1,
            pt: { xs: 8, md: 10 },
          }}
        >
          {children}
        </Box>
      </Box>

      {/* <div className="conclusion" ref={conclusionRef} /> */}
      <footer className="footer">
        <m.section
          className="footer-container"
          style={{
            y: yPercent,
          }}
          initial={{ y: '-75%' }}
        >
          <Footer/>
        </m.section>
      </footer>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
