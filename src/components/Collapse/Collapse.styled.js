import styled from 'styled-components';
import { Color } from "../../theme/colors";

export const CollapseWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: -1px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 54px;
  padding: 12px 40px 12px 7px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
  color: ${Color.primary};
  border-top: solid 1px ${Color.veryLightGrey};
  border-bottom: solid 1px ${Color.veryLightGrey};
  img {
    position: absolute;
    top: 50%;
    right: 7px;
    display: block;
    max-height: 14px;
    margin-top: -7px;
    transform: rotate(90deg);
  }
  &.open {
    border-bottom: solid 1px transparent;
    img {
      transform: rotate(-90deg);
    }
  }
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  padding: 0 7px 10px 7px;
  font-size: 14px;
  line-height: 1.61;
  color: ${Color.lightBlack};
  white-space: pre-line;
  * {
    font-size: 14px;
    line-height: 1.61;
    color: ${Color.lightBlack};
  }
  a {
    color: ${Color.primary};
  }
`;
