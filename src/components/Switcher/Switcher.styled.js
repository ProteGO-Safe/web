import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const SwitcherWrapper = styled.div`
  display: flex;
  width: 100%;
  .MuiFormControlLabel-root {
    display: flex;
    flex-flow: wrap row-reverse;
    justify-content: space-between;
    align-items: center !important;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .MuiTypography-root {
    width: calc(100% - 52px);
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #1b1b1b;
  }

  .MuiSwitch-root {
    margin-right: -9px;
  }

  .MuiSwitch-track {
    opacity: 1;
    background-color: ${Color.gray_8};
  }

  .MuiSwitch-switchBase {
    color: ${Color.gray_5};
  }

  .MuiSwitch-colorSecondary.Mui-checked {
    color: ${Color.primary};

    + .MuiSwitch-track {
      background-color: ${Color.skyblue};
    }
  }
`;
