import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const LabTestActionButton = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 87px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${Color.primaryLighter};
  overflow: hidden;
`;

export const Image = styled.div`
  position: relative;
  display: block;
  width: 60px;
  min-height: 87px;
  margin-right: 16px;
  svg {
    position: absolute;
    left: ${({ iconPos }) => (iconPos ? '6px' : '0')};
    bottom: 0;
    display: block;
    width: 60px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    background-color: ${Color.white};
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 76px);
  padding: 10px 0;
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
  color: ${Color.primary};
`;
