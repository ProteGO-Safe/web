import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.lightBlack};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const Annotation = styled.h2`
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 1.5;
  font-weight: ${FontWeight.Bold};
  color: ${Color.lightBlack};
`;

export const ListNumber = styled.ol`
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListAlpha = styled.ol`
  list-style-type: lower-alpha;
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListRoman = styled.ol`
  list-style-type: upper-roman;
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.lightBlack};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
