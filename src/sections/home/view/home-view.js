'use client';

// React

// @mui
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';

//
// import HomeUnlockPower from 'src/sections/products/ctrboss/home-unlock-power';
import HomeHero from '../home-hero';
import ParallaxFrame from '../parallax-frame';

// ----------------------------------------------------------------------
const faqs = [{}];
// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      {/* <ScrollProgress scrollYProgress={scrollYProgress} /> */}

      <HomeHero />
      <ParallaxFrame />
    </MainLayout>
  );
}
