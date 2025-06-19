import Container from '@mui/material/Container';
import AutoScroll from 'embla-carousel-auto-scroll';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel } from 'src/components/carousel';
import { _brands } from 'src/_mock';

export default function PartnersFrame({ sx, ...other }) {
  const carousel = useCarousel({ loop: true, slidesToShow: 'auto', slideSpacing: '80px' }, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);
  return (
    <Box
      component="section"
      sx={[{ pt: 12, pb: { xs: 5, md: 15 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Stack flexDirection="row" justifyContent="center" alignItems="center" mb={5}>
          Te presentamos a algunos de nuestros partners.
        </Stack>
      </Container>

      <Carousel carousel={carousel}>
        {_brands.map((brand) => (
          <Box
            key={brand.id}
            className="partner-card"
            sx={{ mr: 5 /* 5 * 8 = 40px, adjust as needed */ }}
          >
            <SvgColor src={brand.image} sx={{ width: 106, height: 32, color: 'text.primary' }} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
