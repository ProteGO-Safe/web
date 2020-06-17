import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: #1b1b1b;
`;

export const List = styled.ul`
  margin: 24px 0 44px 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    width: 38px;
    height: auto;
    margin-right: 18px;
  }
  p {
    width: calc(100% - 56px);
    font-size: 14px;
    line-height: 1.68;
    color: ${Color.lightBlack};
  }
`;

export const Warning = styled.div`
  margin-bottom: 33px;
  padding: 14px 14px 20px 14px;
  border-radius: 2px;
  border: solid 1px ${Color.lightGray};
`;

export const WarningLabel = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.7;
  color: ${Color.danger};
  img {
    display: block;
    width: 35px;
    height: 35px;
    margin-right: 6px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
`;

export const Watermark = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 7px;
  line-height: 1;
  font-weight: ${FontWeight.Normal};
  color: ${Color.watermark};
`;

export const RepliesList = styled.ul`
  padding-left: 18px;
`;

export const RepliesListItem = styled.li`
  font-size: 14px;
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const LinkStyle = styled.span`
  color: #0052a5;
  font-weight: bold;
`;
