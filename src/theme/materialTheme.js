import { createMuiTheme } from '@material-ui/core';

import { Color } from './colors';

export const materialTheme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans'
  },
  palette: {
    primary: {
      main: Color.primary
    },
    secondary: {
      main: Color.secondary
    }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        height: 50
      }
    },
    MuiBottomNavigationAction: {
      root: {
        transition: 'all 200ms ease-in-out',
        paddingTop: 8,
        color: Color.primary,
        '&$selected': {
          paddingTop: 8,
          backgroundColor: Color.primary,
          color: Color.white
        },
        '&:disabled': {
          color: Color.lightGray
        }
      },
      label: {
        fontSize: 10,
        '&$selected': {
          fontSize: 10
        }
      }
    }
  }
});
