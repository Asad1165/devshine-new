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

// ----------------------------------------------------------------------

export default function HomeHero() {
  const settings = useSettingsContext();
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', mb: 15 }}>
      <Grid
        container
        justifyContent={{
          xs: 'center',
          md: 'space-between',
        }}
        sx={{ mb: 5 }}
      >
        <Grid xs={12} md={8}>
          <Stack sx={{ mt: 15 }}>
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
        <Grid xs={12} md={4}></Grid>
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
