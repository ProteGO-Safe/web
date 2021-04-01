import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin: ${({ noBorder }) => (noBorder ? '0 auto' : '21px auto 0')};
  padding: ${({ padding }) => (padding ? '20px 17px 0' : '20px 0 0')};
  ${({ pdgTop }) => pdgTop && `padding-top:${pdgTop}px !important;`}

  ${({ noBorder }) =>
    noBorder
      ? null
      : `
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: calc(100% - 34px);
        height: 1px;
        transform: translateX(-50%);
        background-color: ${Color.primaryLighter};
      }
    `}
`;

export default Wrapper;
