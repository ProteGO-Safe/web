const size = {
  xs: '374px',
  sm: '413px',
  md: '540px',
  lg: '920px'
};

export const DEVICE = {
  XS: `@media(max-width: ${size.xs})`,
  SM: `@media(max-width: ${size.sm})`,
  MD: `@media(max-width: ${size.md})`,
  LG: `@media(max-width: ${size.lg})`,
  minXS: `@media(min-width: ${size.xs})`,
  minSM: `@media(min-width: ${size.sm})`,
  minMD: `@media(min-width: ${size.md})`,
  minLG: `@media(min-width: ${size.lg})`
};
