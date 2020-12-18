import styled from 'styled-components';
import { FontWeight } from '../../../theme/fonts';
import { Color } from '../../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const MainTitle = styled.h1`
  margin: 0 0 4px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const Info = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;
export const Text = styled.div`
  width: calc(100% - 122px);
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
`;
export const Image = styled.div`
  display: block;
  width: 102px;
  height: 112px;
  margin-left: 20px;
  svg {
    display: block;
    max-width: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding-right: ${({ noPadding }) => (noPadding ? '0' : '43px')};
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
`;

export const CollapseWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  display: block;
  width: 100%;
`;
