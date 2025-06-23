import BlurFade from '../../components/Fade/BlurFade';
import { Box, Typography } from '@mui/material';
import '../main/scss/smooth-projects.scss';
import OurProcess from '../main/ourProcess';
export default function SmoothProjects() {
  return <>
    <Box className="container">
      <Typography className="section-title">Our process</Typography>
      <BlurFade delay={0.25} inView>
        <Typography
          variant="h1"
          className="main-heading"
          component="h1"
        >
          Great process <br className="desktop-only" />
          <span className="desktop-inline">makes</span> smooth projects.
        </Typography>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Typography className="sub-text">
          Rigorous with the methodology to create the best <br />
          products for our partners.
        </Typography>
      </BlurFade>
    </Box>
    <OurProcess/>
    </>
}
