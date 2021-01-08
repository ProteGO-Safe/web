import styled from 'styled-components';
import BottomNavigationBase from '@material-ui/core/BottomNavigation';
import BottomNavigationActionBase from '@material-ui/core/BottomNavigationAction';

import { hexToRgba } from '../../helpers/colors';
import { Color } from '../../theme/colors';

export const Container = styled(BottomNavigationBase)`
  && {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: inset 0 0.5px 0 0 ${hexToRgba(Color.black, 0.25)};
    background-color: rgba(250, 250, 250, 0.9);
    height: auto;
    margin-top: 14px;
    z-index: 998;
    .MuiBottomNavigationAction-root {
      min-width: auto;
    }
  }
`;

export const MenuItem = styled(BottomNavigationActionBase)`
  &.MuiButtonBase-root {
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
    color: ${Color.gray_5};

    &:before {
      content: '';
      display: ${({ custom }) => (custom ? 'block' : 'none')};
      position: absolute;
      top: -14px;
      left: 50%;
      width: 60px;
      height: 44px;
      margin-left: -30px;
      border-radius: 12px;
      background: ${Color.primary};
    }

    svg {
      width: 24px;
      height: 24px;
      stroke: currentColor;
    }

    &.custom-button {
      svg {
        position: relative;
        top: -12px;
        color: ${Color.white}!important;
        z-index: 99;
      }
    }

    .MuiBottomNavigationAction-label {
      font-size: 9px;
      line-height: 9px;
      margin-top: 1px;
    }

    &.Mui-selected {
      background-color: ${Color.primaryLighter};
      color: ${Color.primary};
    }
  }
`;
