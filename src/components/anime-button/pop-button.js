import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// routes
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

// style
import './index.scss';

const PopButton = ({ children, onClick, style }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? 'black' : 'white';
  const background = theme.palette.mode === 'light' ? 'white' : 'black';

  return (
    <Box
      // component="div"
      component={RouterLink}
      href={paths.contact}
      onClick={onClick}
      sx={{ ...style, cursor: 'pointer' }}
    >
      <Box component="a" className="btn" sx={{ color }}>
        <span className="btn__circle" style={{ color, boxShadow: `0 0 1px 1px ${color}` }} />
        <span className="btn__inner-circle" style={{ background: color }} />

        <span className="btn__white-circle" style={{ background: color, color }}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.99988H10.25M10.25 5.99988L5.875 1.62488M10.25 5.99988L5.875 10.3749"
              stroke={background}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="btn__text">{children}</span>
      </Box>
    </Box>
  );
};

export default PopButton;

PopButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
