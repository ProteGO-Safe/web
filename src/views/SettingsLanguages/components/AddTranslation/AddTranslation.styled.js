import styled from 'styled-components';
import { ReactComponent as IconTranslation } from '../../../../assets/img/icons/add-translation.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/img/icons/arrow-current-color.svg';
import { Color } from '../../../../theme/colors';

export const AddTranslation = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: calc(100% + 48px);
  margin: 0 -24px 0 -24px;
  padding: 20px 24px;
  color: ${Color.primary};
`;

export const Icon = styled(IconTranslation)`
  display: block;
  max-width: 38px;
  margin-right: 28px;
`;

export const Arrow = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  right: 24px;
  width: 14px;
  height: 14px;
  margin-top: -7px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 66px);
  padding-right: 44px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.primary};
`;
