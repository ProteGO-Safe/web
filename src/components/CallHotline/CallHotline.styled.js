import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { hexToRgba } from '../../helpers/colors';

export const CallHotline = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  padding: 22px 24px;
  background: ${Color.gray_6};
  border-radius: 4px;
  box-shadow: 2px 2px 3px ${hexToRgba(Color.black, 0.26)};
`;

export const Icon = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 22px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: calc(100% - 72px);
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${Color.primary};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${Color.primary};
`;
