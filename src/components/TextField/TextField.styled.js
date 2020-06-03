import styled from 'styled-components';
import { SmallText } from '../../theme/typography';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const TextFieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  > * {
    width: 100%;
  }

  input {
    line-height: 24px;
    height: 44px;
    padding: 10px 12px 9px 11px;
    box-sizing: border-box;
  }
`;

export const Label = styled(SmallText)`
  color: ${Color.black};
  margin-bottom: 4px;
`;

export const Information = styled.span`
  display: block;
  width: 100%;
  margin: 32px 0 0 0;
  font-size: 12px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
