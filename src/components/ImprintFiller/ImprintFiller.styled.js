import styled from 'styled-components';
import { Paragraph, SmallText } from '../../theme/typography';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: #1b1b1b;
  margin: 10px 0 30px;
`;

export const Actions = styled.div`
  display: grid;
  grid-row-gap: 24px;
  margin: 40px 0;
  width: 100%;
`;

export const Label = styled(Paragraph)`
  color: ${Color.lightBlack};
  opacity: 0.87;
`;

export const Description = styled(SmallText)`
  margin-bottom: 25px;
`;

export const SubContainer = styled.div`
  padding-left: 56px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
`;
