/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
// components
import Iconify from 'src/components/iconify/iconify';
// style
import './index.scss';

const FrameButton = ({ children, onClick, style, type }) => {
  const openExternalLink = () => {
    window.location.href = 'https://app.ctrboss.com';
    // const url = 'https://app.ctrboss.com';
    // window.open(url, '_blank');
  };
  return (
    <button
      className="btn_animate_style"
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={type !== 'submit' ? onClick || openExternalLink : () => {}}
      style={style}
    >
      <div className="btn_animate1_text">{children}</div>
      <div className="btn_animate_circle_style">
        <Iconify icon="codicon:arrow-small-right" color="white" size={15} />
      </div>
    </button>
  );
};

export default FrameButton;

FrameButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};
