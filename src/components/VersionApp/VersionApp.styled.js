import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const VersionAppWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: calc(50px + env(safe-area-inset-bottom));
  display: flex;
  flex-flow: wrap row;
  width: auto;
  padding: 8px;
`;

export const Version = styled.p`
  font-size: 12px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightGray};
`;
