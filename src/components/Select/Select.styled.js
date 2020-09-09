import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: ${({ white }) => (white ? '232px' : 'none')};

  > * {
    width: 100%;
  }

  select {
    line-height: 24px;
    height: ${({ white }) => (white ? '48px' : '44px')};
    padding: ${({ white }) =>
      white ? '10px 15px 10px 15px' : '10px 12px 9px 11px'};
    box-sizing: border-box;
    color: ${({ white }) => white && Color.white}!important;
    font-weight: ${({ white }) => white && '700'}!important;
    font-size: ${({ white }) => white && '18px'}!important;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ white }) => white && Color.white}!important;
    border-width: ${({ white }) => white && '1px'} !important;
  }

  .MuiSelect-icon {
    color: ${({ white }) => white && Color.white}!important;
  }
`;
