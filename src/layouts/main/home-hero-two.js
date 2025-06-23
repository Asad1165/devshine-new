import { m, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient, textGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled(m.div)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  backgroundColor: 'black',
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: 'black',
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 16}rem`,
  fontFamily: theme.typography.fontSecondaryFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHeroTwo() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateY = useTransform(scrollYProgress, [0, 300], ['0%', '-10%']);

  const [percent, setPercent] = useState(0);

  // const getScroll = useCallback(() => {
  //   let heroHeight = 0;
  //   console.log(heroRef.current.offsetHeight);
  //   if (heroRef.current) {
  //     heroHeight = heroRef.current.offsetHeight;
  //   }

  //   scrollY.on('change', (scrollHeight) => {
  //     const scrollPercent = (scrollHeight * 5) / heroHeight;

  //     setPercent(Math.floor(scrollPercent));
  //   });
  // }, [scrollY]);

  // useEffect(() => {
  //   getScroll();
  // }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 60 * 4,
    repeat: Infinity,
  };

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        mx: 'auto',
        maxWidth: 480,
        // opacity: opacity > 0 ? opacity : 0,
        // mt: {
        //   md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        // },
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          The starting point for your next project is based on MUI.Easy customization Helps you
          build apps faster and better.
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack
          spacing={0.75}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 3 }}
        >
          <Rating readOnly value={4.95} precision={0.1} max={5} />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
              4.96/5
            </Box>
            (99+ reviews)
          </Typography>
        </Stack>
      </m.div>

      <m.div variants={varFade().in}>
        <Stack spacing={1.5} direction={{ xs: 'column-reverse', sm: 'row' }} sx={{ mb: 5 }}>
          <Stack alignItems="center" spacing={2}>
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="eva:flash-fill" width={24} />}
            >
              Live Preview
            </Button>

            <Link
              color="inherit"
              variant="caption"
              target="_blank"
              rel="noopener"
              href={paths.freeUI}
              sx={{
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
              Get Free Version
            </Link>
          </Stack>

          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
            target="_blank"
            rel="noopener"
            href={paths.figma}
            sx={{ borderColor: 'text.primary' }}
          >
            Design Preview
          </Button>
        </Stack>
      </m.div>

      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <m.div variants={varFade().in}>
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            Available For
          </Typography>
        </m.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {['js', 'ts', 'figma', 'nextjs', 'vite'].map((icon) => (
            <m.div key={icon} variants={varFade().in}>
              <Box
                component="img"
                alt={icon}
                src={`/assets/icons/platforms/ic_${icon}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            </m.div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <>
      {/* <Box sx={{ height: '100vh' }} /> */}

      <m.div
        component={m.div}
        ref={heroRef}
        sx={{
          width: '100%',
          position: 'relative',
          backgroundColor: 'black',
          transformOrigin: 'top',
        }}
        style={{ translateY }}
        // sx={{
        //   ...(hide && {
        //     opacity: 0,
        //   }),
        // }}
      >
        {/* {renderDescription} */}
        <StyledWrapper>
          {/* <Container component={MotionContainer}>{renderDescription}</Container> */}
          {renderDescription}
          {/* {renderEllipses} */}
        </StyledWrapper>
      </m.div>
    </>
  );
}
