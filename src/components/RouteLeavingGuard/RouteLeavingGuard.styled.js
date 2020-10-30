import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { Paragraph, SmallText } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;
  background-color: ${Color.darkGray};
`;

export const Box = styled.div`
  position: relative;
  z-index: 2;
  max-width: 341px;
  width: 100%;
  padding: 30px 20px 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  background-color: ${Color.white};
`;

export const Title = styled(Paragraph)`
  font-size: 18px;
  font-weight: ${FontWeight.Bold};
  margin-bottom: 10px !important;
`;

export const Description = styled(SmallText)`
  color: ${Color.black};
  margin-bottom: 30px;
`;
