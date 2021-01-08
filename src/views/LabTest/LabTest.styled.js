import styled from 'styled-components';
import { H5, Paragraph, SmallText } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { StepLine, StepperInner, StepperWrapper } from '../../components/Stepper/Stepper.styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: block;
  margin: 0 auto 24px;
  width: 100%;

  & + & {
    margin-top: 0;
  }

  ${H5} {
    margin: 0 0 13px;
  }
`;

export const SubTitle = styled(Paragraph)`
  font-weight: ${FontWeight.Bold};
  line-height: 22px;
`;

export const List = styled.ol`
  padding: 0;
  list-style: none;
  counter-reset: li;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 35px;
  counter-increment: li;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: counter(li) '.';
    color: ${Color.primary};
    font-weight: ${FontWeight.SemiBold};
  }
`;

export const LabTestStepper = styled.div`
  ${StepperWrapper} {
    width: 100%;
    margin: 0 auto;
  }

  ${StepLine} {
    width: 50%;
  }

  ${StepperInner} {
    left: 0 !important;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: -18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% + 36px);
  height: 100%;
  padding-top: 110px;
  background-color: ${Color.white};

  ${SubTitle} {
    margin-bottom: 16px !important;
  }

  ${SmallText} {
    margin-bottom: 34px;
  }
`;

export const WarningWrapper = styled.div`
  margin: 16px 0;

  > * {
    margin-top: 0 !important;
  }
`;

export const Space = styled.div`
  display: block;
  height: 17px;
`;
