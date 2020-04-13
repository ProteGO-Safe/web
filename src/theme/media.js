import { css } from 'styled-components';

export const Breakpoint = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  Desktop: 'desktop'
};

export const sizes = {
  [Breakpoint.Mobile]: 480,
  [Breakpoint.Tablet]: 768,
  [Breakpoint.Desktop]: 1024
};

const getWindowWidth = () => window.innerWidth;

export const getBreakpointMediaQuery = sizeLabel =>
  `(min-width: ${sizes[sizeLabel]}px)`;

export const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  acc[`${label}Retina`] = (...args) => css`
    @media (min-width: ${sizes[
        label
      ]}px) and (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi) {
      ${css(...args)}
    }
  `;
  acc[`${label}Landscape`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (orientation: landscape) {
      ${css(...args)}
    }
  `;
  acc[`${label}Portrait`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (orientation: portrait) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

Media.portait = (...args) => css`
  @media (orientation: portrait) {
    ${css(...args)}
  }
`;

Media.landscape = (...args) => css`
  @media (orientation: landscape) {
    ${css(...args)}
  }
`;

export const isMobile = () => {
  const width = getWindowWidth();
  return width < sizes.tablet;
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= sizes.tablet;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= sizes.desktop;
};
