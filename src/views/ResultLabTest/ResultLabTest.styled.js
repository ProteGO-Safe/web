import styled from 'styled-components';
import { Color } from '../../theme/colors';

import { ReactComponent as IconNotes } from '../../assets/img/icons/icon-rejestracja.svg';

export const ResultLabTest = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  padding-bottom: 14px;
`;

export const Icon = styled(IconNotes)`
  display: block;
  height: 70px;
  margin: 26px auto 22px;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0 0 22px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
`;

export const Paragraph = styled.p`
  width: 100%;
  margin-bottom: auto;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${Color.black};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
  margin-top: auto;
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;
