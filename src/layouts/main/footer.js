import './footer.scss';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// routes
import { RouterLink } from 'src/routes/components';
// _mock
// import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  const { scrollYProgress } = useScroll(); // ← observe global scroll

  const y = useTransform(scrollYProgress, [0.9, 1], ['50%', '0%']); // Adjust timing
  return (
    <m.footer style={{ y }} className="footer my-footer">
      <section className="footer-container">
        <div className="footer-row">
          <div className="logo"></div>
        </div>

        <div className="footer-row center">
          <div className="items">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="circles">
            <div className="circle"></div>
          </div>
        </div>

        <div className="footer-row">
          <div className="foot"></div>
        </div>
      </section>
    </m.footer>
  );
}
