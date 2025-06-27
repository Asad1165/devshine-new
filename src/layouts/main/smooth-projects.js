import BlurFade from '../../components/Fade/BlurFade';
import { Box, Typography, Stack } from '@mui/material';
import '../main/scss/smooth-projects.scss';
import OurProcess from '../main/ourProcess';
import Container from '@mui/material/Container';

export default function SmoothProjects() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', mb: 15 }}>
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: '14rem' }}
      >
        <Stack flexDirection="column" justifyContent="center" textAlign="center" maxWidth={700}>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            Our process
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            Great process makes smooth projects.
          </Typography>
        </Stack>
        <Stack
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          maxWidth={450}
          mt={2}
        >
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            Rigorous with the methodology to create the best products for our partners.
          </Typography>
        </Stack>
      </Stack>
      <OurProcess />
    </Container>
  );
}
