import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
// routes
import { Typography } from '@mui/material';
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
    const { title, path, children } = item;

    function renderListItem(givenTitle) {
      if (givenTitle === 'CTR Boss') {
        return (
          <Stack direction="row" alignItems="start" spacing={3}>
            {/* <Iconify width={24} color="#01B969" icon="ph:chart-bar-light" /> */}
            <Box
              component="img"
              alt="chart"
              src="/assets/icons/navbar/ic_chart_line.svg"
              sx={{ width: 24 }}
            />
            <Stack direction="column" alignItems="start" spacing={1}>
              {givenTitle}
              <Typography style={{ fontWeight: 400, fontSize: '12px', color: '#C6C7C9' }}>
                The Most Advanced CTR Platform
              </Typography>
            </Stack>
          </Stack>
        );
      }
      if (givenTitle === 'Local Rank Tracker') {
        return (
          <Stack direction="row" alignItems="start" spacing={3}>
            <Iconify width={24} color="#01B969" icon="ph:chart-bar-light" />
            <Stack direction="column" alignItems="start" spacing={1}>
              {givenTitle}
              <Typography style={{ fontWeight: 400, fontSize: '12px', color: '#C6C7C9' }}>
                Elevate Your Local SEO Game
              </Typography>
            </Stack>
          </Stack>
        );
      }
      // if (givenTitle !== 'CTRBOSS' && givenTitle !== 'Local Rank Tracker') {
      //   return givenTitle;
      // }
      return givenTitle;
    }
    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        offsetTop={offsetTop}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {renderListItem(title)}

        {!!children && title !== 'CTR Boss' && title !== 'Local Rank Tracker' && (
          <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />
        )}
      </ListItem>
    );

    // External link
    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function NavItemDashboard({ item, sx, ...other }) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};
