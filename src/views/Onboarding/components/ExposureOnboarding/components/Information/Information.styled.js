import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

import { ReactComponent as InformationIcon } from '../../../../../../assets/img/icons/three-people.svg';

export const Icon = styled(InformationIcon)`
  height: 96px;
  width: auto;
`;

export const More = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.44;
  color: ${Color.primary};
  text-decoration: underline;
`;
