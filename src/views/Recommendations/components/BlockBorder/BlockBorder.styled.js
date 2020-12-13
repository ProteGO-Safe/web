import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid ${Color.primary};
  border-radius: 4px;
`;

export const SmallTitle = styled.h3`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const List = styled.ul`
  width: 100%;
  margin: 10px 0 0 0;
  padding: 0 0 0 17px;
`;

export const ListItem = styled.li`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
`;
