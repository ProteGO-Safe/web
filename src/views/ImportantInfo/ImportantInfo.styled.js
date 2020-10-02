import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 8.5px));
  grid-template-rows: repeat(3, calc((100% / 3) - 11.5px));
  column-gap: 17px;
  row-gap: 17px;
  padding: 17px 17px 0 17px;

  width: 100%;
  height: calc(100vh - 118px);
  height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 118px
  );

  @media (max-height: 580px) {
    grid-template-columns: repeat(2, calc(50% - 6.5px));
    grid-template-rows: repeat(3, calc((100% / 3) - 8.5px));
    column-gap: 12px;
    row-gap: 12px;
    padding: 12px 12px 0 12px;
  }

  > a {
    -webkit-tap-highlight-color: transparent;
  }
`;
