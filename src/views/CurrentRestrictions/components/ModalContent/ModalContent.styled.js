import styled from 'styled-components';
import { ReactComponent as Icon } from '../../../../assets/img/icons/current-restrictions-modal-image.svg';
import { Color } from '../../../../theme/colors';

export const ModalContent = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 212px;
  margin: 0 0 22px 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${Color.black};
  text-align: center;
  @media (max-width: 359px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Image = styled(Icon)`
  display: block;
  max-width: 100%;
  margin-bottom: 40px;
  @media (max-width: 359px) {
    margin-bottom: 24px;
  }
  @media (max-width: 359px) {
    height: 56px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const Paragraph = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  strong {
    font-weight: 600;
  }
  @media (max-width: 359px) {
    font-size: 0.875rem;
    line-height: 1.125rem;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;
