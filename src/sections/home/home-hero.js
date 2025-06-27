import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from 'src/components/settings';
// components
import { MotionContainer, varFade } from 'src/components/animate';
import AdvancedR3FCube from './advanced-r3f-cube';
// import FloatingCube from './floating-cube';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', width: '100%', mx: 'auto' }}>
      <Grid
        container
        justifyContent={{
          xs: 'center',
          md: 'space-between',
        }}
        sx={{ mb: 5 }}
      >
        <Grid xs={12} md={6}>
          <Stack sx={{ mt: 6 }}>
            <Typography
              variant="h2"
              sx={{
                mt: 3,
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              Your Digital Product Partner Designed to Shine
            </Typography>
            <Typography
              variant="h6"
              color="#6B7280"
              sx={{
                mt: 3,
                fontWeight: '500',
              }}
            >
              We partner with you to craft thoughtful, scalable products that are both beautiful and
              built to last. At DevShine, design and development go hand in hand empowering your
              team to shine as your product grows.
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} md={5}>
          {/* <Box
            component={m.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              minHeight: { xs: '350px', md: '450px' },
              position: 'relative',
            }}
          >

            <AdvancedR3FCube variant="main" />


            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                opacity: 0.6,
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                width: 15,
                height: 15,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #10b981, #06b6d4)',
                opacity: 0.4,
                animation: 'float 4s ease-in-out infinite reverse',
              }}
            />
          </Box> */}
          <AdvancedR3FCube variant="main" />
        </Grid>
      </Grid>
    </Container>
  );
}
// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
