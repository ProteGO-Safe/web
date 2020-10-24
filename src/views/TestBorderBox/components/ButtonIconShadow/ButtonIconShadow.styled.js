import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Color } from '../../../../theme/colors';

import { ReactComponent as IconWriting } from '../../../../assets/img/icons/pismo.svg';
import { ReactComponent as IconArrow } from '../../../../assets/img/icons/angle-right-blue.svg';

export const ButtonIconShadow = styled(NavLink)`
  position: relative;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: 100%;
  margin-top: 22px;
  padding: 4px 10px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  margin-right: 24px;
`;

export const Icon = styled(IconWriting)`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const Name = styled.span`
  width: calc(100% - 82px);
  padding-right: 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.primary};
`;

export const Arrow = styled(IconArrow)`
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -7px;
  width: 14px;
  height: 14px;
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px;
`;
