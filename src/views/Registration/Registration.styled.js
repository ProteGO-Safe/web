import styled from 'styled-components';
import { H5, Paragraph, SmallText } from '../../theme/typography';
import { Color } from '../../theme/colors';

export const Title = styled(H5)`
  margin-bottom: 40px;
`;

export const Actions = styled.div`
  display: grid;
  grid-row-gap: 24px;
  margin-top: 40px;
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
  padding-left: 65px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
`;
