import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  color: ${Color.primary};
`;

export const Item = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: calc(100% + 48px);
  margin: 0 -24px 0 -24px;
  padding: 20px 24px;
  border-bottom: 1px solid ${Color.gray_1};
`;

export const SelectedLang = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const Flag = styled.img`
  display: block;
  width: 38px;
  height: 26px;
  margin-right: 28px;
`;

export const Label = styled.span`
  display: inline-flex;
  flex-direction: row;
  width: auto;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.primary};
`;
