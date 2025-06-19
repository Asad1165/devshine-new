// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Typography from '@mui/material/Typography';

// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';

// components
import Logo from 'src/components/logo';
//
import { FrameButton } from 'src/components/anime-button';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { HeaderShadow } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              // color: '#212B3680',
              color: theme.palette.mode === 'dark' ? '#212B3680' : '#E3E3E380',
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1400px',
            width: '100%',
          }}
        >
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {/* {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />} */}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            {/* <DarkLightSwitch /> */}

            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
