import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const SingleLogo = forwardRef(({ disabledLink = false, sx }, ref) => {
  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box component="img" src="/logo/without_text_Logo.svg" sx={{ cursor: 'pointer', ...sx }} />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

SingleLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default SingleLogo;
