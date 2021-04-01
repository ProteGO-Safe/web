import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Tabs = styled.div`
  margin: -24px 0 0;
  border-bottom: 1px solid ${Color.primaryLighter};
  max-width: 100%;

  > div {
    margin: 0 auto;
  }

  .MuiTabs-indicator {
    height: 3px;
    bottom: -1px;
  }

  .MuiTab-textColorInherit:not(.Mui-selected) {
    color: ${Color.gray_5};
    opacity: 1;
  }
`;
