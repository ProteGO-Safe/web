import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  margin: 0;
  padding: 1px 17px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${Color.gray_1};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding-right: 20px;
`;

export const Switch = styled.div`
  display: contents;

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
