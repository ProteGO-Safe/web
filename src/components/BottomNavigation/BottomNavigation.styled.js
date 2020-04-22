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
    z-index: 999;
  }
`;

export const MenuItem = styled(BottomNavigationActionBase)`
  &.MuiButtonBase-root {
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
  && {
    svg {
      width: 21px;
      stroke: currentColor;
      path,
      circle,
      line,
      polyline,
      path {
        stroke: currentColor;
      }
    }

    &:focus {
      background-color: ${Color.primary};
      color: ${Color.white};

      svg {
        stroke: ${Color.white};
        path: {
          stroke: ${Color.white};
        }
      }
    }
  }
`;
