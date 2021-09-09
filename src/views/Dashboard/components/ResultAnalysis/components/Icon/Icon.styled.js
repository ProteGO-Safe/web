import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 42px;
  height: 42px;
  transform: translateY(-50%);

  ${({ size }) =>
    size &&
    `
    width: 68px;
    height: 68px;
    top: 22px;
    right: 1px;
  `}
`;
