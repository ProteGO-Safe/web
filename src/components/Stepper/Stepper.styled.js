import styled from 'styled-components';
import { Color } from '../../theme/colors';
import CheckIcon from '../../assets/img/icons/check-white.svg';
import { SmallText } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';

export const StepperWrapper = styled.div`
  margin: 16px auto 24px;
`;

export const StepperInner = styled.div`
  position: relative;
  left: calc(-${({ step }) => step} * 122px);
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  transition: all 0.4s linear;
`;

export const StepWrapper = styled.div`
  position: relative;
`;

export const StepLine = styled.div`
  height: 2px;
  width: 100px;
  background-color: ${Color.lighterGray};
`;

export const StepCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid ${Color.lighterGray};
  background-color: ${Color.white};
`;

export const StepCircleCurrent = styled(StepCircle)`
  border: 2px solid ${Color.primary};

  &:after {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${Color.primary};
    content: '';
  }
`;

export const StepCircleDone = styled(StepCircle)`
  border: 2px solid ${Color.primary};
  background-color: ${Color.primary};
  background-image: url(${CheckIcon});
  background-position: center;
  background-size: 10px;
  background-repeat: no-repeat;
`;

export const StepNumber = styled(SmallText)`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  text-align: center;
`;

export const StepNumberCurrent = styled(StepNumber)`
  color: ${Color.black};
  font-weight: ${FontWeight.Bold};
`;

export const StepNumberDone = styled(StepNumberCurrent)`
  color: ${Color.primary};
`;
