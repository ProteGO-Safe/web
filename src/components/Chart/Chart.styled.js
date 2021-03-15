import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'header' 'chart' 'footer';
  grid-row-gap: 8px;
  margin: 15px 0;
`;

export const Header = styled.div`
  grid-area: header;
  text-align: right;
`;

export const Footer = styled.div`
  grid-area: footer;
  text-align: right;
`;

export const Chart = styled.div`
  position: relative;
  max-width: 100%;

  > .VictoryContainer {
    line {
      opacity: 0;
    }
    
    text {
      font-weight: ${FontWeight.Bold};

      &[id*='labels'] {
        display: none;
      }

      &[id*='labels-${({ numberOfValues }) => numberOfValues - 1}'] {
        display: block;
      }
    }
  }
`;
