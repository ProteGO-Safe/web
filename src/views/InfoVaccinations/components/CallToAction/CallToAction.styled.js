import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 24px;
`;

export const Container = styled.a`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 120px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${Color.primaryLighter};
  overflow: hidden;
`;

export const Image = styled.div`
  position: relative;
  display: block;
  width: 90px;
  min-height: 120px;
  margin-right: 16px;
  svg {
    position: absolute;
    top: 22px;
    left: 10px;
    display: block;
    width: 64px;
    height: 70px;
    max-width: 100%;
    max-height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 90px;
    height: 90px;
    margin: -45px 0 0 -45px;
    background-color: ${Color.white};
    border-radius: 50%;
  }
  @media (max-width: 300px) {
    width: 70px;
    svg {
      left: -4px;
      width: 70px;
      height: 55px;
      top: 30px;
    }
    &:before {
      width: 70px;
      height: 70px;
      margin: -35px 0 0 -35px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 106px);
  padding: 22px 0;

  @media (max-width: 300px) {
    width: calc(100% - 86px);
  }
`;

export const Label = styled.span`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 10px;
  padding-right: 18px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};

  svg {
    position: absolute;
    top: 5px;
    right: 0;
    display: block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }

  @media (max-width: 300px) {
    padding-right: 14px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
  strong {
    font-size: 16px;
  }
`;

export const Small = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.primary};
  text-align: center;
`;
