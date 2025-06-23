'use client';

// React
import '../index.scss';
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
import PartnersFrame from '../partners-frame';
import SmoothProjects from 'src/layouts/main/smooth-projects';
import InteractiveCard from 'src/layouts/main/InteractiveCard';

// ----------------------------------------------------------------------
const faqs = [{}];
// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      {/* <ScrollProgress scrollYProgress={scrollYProgress} /> */}

      <HomeHero />
      <InteractiveCard/>
      <ParallaxFrame />
      <PartnersFrame />
      <SmoothProjects/>

    </MainLayout>
  );
}
