import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: 0;
  overflow-x: hidden;
  transition: all 0.16s linear;
  background-image: linear-gradient(#0052a5 50px, #ffffff 50px);
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);

  @media (max-width: 300px) {
    background-image: linear-gradient(#0052a5 40px, #ffffff 40px);
  }

  &.menu-visible {
    left: -100%;

    header {
      left: -100%;
    }

    @media screen and (min-width: 375px) {
      left: -320px;

      header {
        left: -320px;
      }
    }
  }

  &.open-modal {
    height: 100vh;
    overflow-y: hidden;
  }
`;
