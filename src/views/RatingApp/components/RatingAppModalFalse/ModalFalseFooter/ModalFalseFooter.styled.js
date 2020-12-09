import styled from 'styled-components';
import { Color } from '../../../../../theme/colors';

export const ModalFalseFooter = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  padding: 0 20px 20px;
  > *:not(:last-child) {
    margin-bottom: 10px;
  }
  .link {
    width: 100%;
  }
`;

export const UrlLink = styled.a`
  display: block;
  width: 100%;
  *:first-child {
    margin-bottom: 0 !important;
  }
`;

export const Small = styled.small`
  display: block;
  width: 100%;
  margin-top: 4px;
  font-size: 10px;
  line-height: 12px;
  color: ${Color.primary};
  text-align: center;
`;
