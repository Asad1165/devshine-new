import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import BlurFade from "../../components/Fade/BlurFade";
import "../main/scss/footer.scss";
const Footer = ({ isDark, isLight }) => {
  const bgColor = isDark ? "#000000" : isLight ? "#ffffff" : "#000000";
  const textColor = isDark ? "#ffffff" : isLight ? "#000000" : "#ffffff";
  const secondaryTextColor = "#737373";
  const svgColor = textColor;

  return (
<Box
  className="footer">
      <Box className="footer__content">
        <BlurFade delay={0.25} inView>
          <Typography variant="h1" className="footer__title" sx={{ color: textColor }}>
            Your next departure <br className="hide-mobile" /> starts here
          </Typography>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <Typography className="footer__subtext" sx={{ color: textColor }}>
            Let’s talk
          </Typography>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <svg
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer__icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0755 18.194C11.0755 14.2621 14.2628 11.0746 18.1947 11.0746H87.8047C91.7365 11.0746 94.9239 14.2621 94.9239 18.194V68.3012L66.7316 35.865C59.4787 27.5203 46.5213 27.5203 39.2684 35.865L11.0755 68.302V18.194ZM16.6895 94.7659C15.9365 94.6039 15.2278 94.3227 14.584 93.9431C11.0179 91.8196 9.75287 86.7054 12.8556 83.1355L47.6268 43.1301C50.4648 39.8648 55.5352 39.8648 58.3732 43.1301L93.1444 83.1355C96.2284 86.6838 94.9972 91.7578 91.4805 93.9042C90.8043 94.3127 90.0547 94.6119 89.2561 94.7773C88.7831 94.874 88.2873 94.9254 87.7711 94.9254H18.2289C17.6929 94.9254 17.1788 94.87 16.6895 94.7659ZM0.00114595 87.4997V18.194C0.00114595 8.14574 8.14666 0 18.1947 0H87.8047C97.8527 0 105.998 8.14574 105.998 18.194V87.4482C106.001 87.6517 106.001 87.855 105.996 88.0581C105.932 92.8261 104.033 97.1511 100.974 100.36C97.9958 103.532 93.8371 105.686 88.8865 105.968C88.5285 105.989 88.1679 106 87.8047 106H87.7711H18.2289H18.1947C17.8233 106 17.4546 105.989 17.0888 105.967C7.60318 105.398 0.0763915 97.5615 0.00170663 87.9503C-0.000360545 87.8003 -0.000552695 87.6501 0.00114595 87.4997Z"
              fill={svgColor}
            />
          </svg>
        </BlurFade>
      </Box>
      <Box className="footer__info">
        <Typography className="footer__slogan" sx={{ color: textColor }}>
          Design. Develop. Depart.
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="center">
          <Typography className="footer__label" sx={{ color: secondaryTextColor }}>
            Follow us
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography className="footer__link" sx={{ color: textColor }}>
              LinkedIn
            </Typography>
            <Typography className="footer__link" sx={{ color: textColor }}>
              Twitter / X
            </Typography>
            <Typography className="footer__link" sx={{ color: textColor }}>
              Instagram
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="center">
          <Typography className="footer__label" sx={{ color: secondaryTextColor }}>
            New business
          </Typography>
          <Typography className="footer__email" sx={{ color: textColor }}>
            info@wearedepart.com
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
