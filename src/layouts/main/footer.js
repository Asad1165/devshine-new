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

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Contact',
    children: [
      { name: 'support@ctrboss.com', href: 'mailto:support@ctrboss.com' },
      { name: 'partners@ctrboss.com', href: 'partners@ctrboss.com' },
      {
        name: `media@ctrboss.com`,
        href: 'media@ctrboss.com',
      },
    ],
  },
  // {
  //   headline: 'Audit',
  //   children: [
  //     { name: 'support@ctrboss.com', href: '#' },
  //     { name: 'Partner@ctrboss.com', href: '#' },
  //     { name: 'press@ctrboss.com', href: '#' },
  //   ],
  // },
  {
    headline: 'Help & Contact',
    children: [
      { name: 'Support', href: '/contact' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme();

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{ mb: 5 }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
              color="text.primary"
            >
              Rise the ranks on search engines with undetectable human-like traffic. For the first
              time ever, send geo-targeted traffic from your city.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
              spacing={2}
            >
              {/* {_socials.map((social) => (
                <Button
                  variant="outlined"
                  key={social.name}
                  sx={{
                    '&:hover': {
                      border: '0px',
                      bgcolor: alpha(social.color, 0.08),
                    },
                    minWidth: '24px',
                    padding: '6px',
                  }}
                  onClick={() => {
                    window.open(social.path, '_blank');
                  }}
                >
                  <Iconify color="text.primary" icon={social.icon} />
                </Button>
              ))} */}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color={theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary'}
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 5,
          }}
        >
          <Logo />
          <Typography variant="body2">Copyright 2023 © CTR Boss</Typography>
        </Stack>
      </Container>
    </Box>
  );

  return mainFooter;
}
