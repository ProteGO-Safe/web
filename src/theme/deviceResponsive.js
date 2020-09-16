const size = {
  xs: '340px',
  sm: '374px',
  md: '413px',
  lg: '540px'
};

export const DEVICE = {
  XS: `@media(max-width: ${size.xs})`,
  SM: `@media(max-width: ${size.sm})`,
  MD: `@media(max-width: ${size.md})`,
  LG: `@media(max-width: ${size.lg})`
};
