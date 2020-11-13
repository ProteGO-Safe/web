import styled from 'styled-components';

import { ReactComponent as IconWarning } from '../../../../assets/img/icons/warning-current-color.svg';
import { Color } from '../../../../theme/colors';

export const WarningBox = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 24px;
  padding: 16px 14px;
  color: ${Color.primary};
  border-radius: 4px;
  border: 1px solid ${Color.primary};
`;

export const Icon = styled(IconWarning)`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

export const Description = styled.div`
  width: calc(100% - 44px);
`;

export const Title = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 14px;
  padding-top: 6px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${Color.primary};
`;

export const Paragraph = styled.p`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${Color.black};
`;
