import styled from 'styled-components';
import { H5, Paragraph, SmallText } from '../../theme/typography';
import { Color } from '../../theme/colors';

export const Title = styled(H5)`
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
