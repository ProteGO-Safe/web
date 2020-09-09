import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const Paragraph = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.lightBlack};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.h3`
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const Annotation = styled.h2`
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 1.5;
  font-weight: ${FontWeight.Bold};
  color: ${Color.lightBlack};
`;

export const ListNumber = styled.ol`
  width: 100%;
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListAlpha = styled.ol`
  width: 100%;
  list-style-type: lower-alpha;
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListRoman = styled.ol`
  width: 100%;
  list-style-type: upper-roman;
  margin-top: 0;
  padding-left: 24px;
  ol {
    margin-top: 12px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.lightBlack};
  word-break: break-word;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
