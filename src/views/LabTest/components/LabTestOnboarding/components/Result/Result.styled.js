import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const Title = styled.h2`
  margin: 0 0 30px 0;
  width: 100%;
  padding: 0 5px;
  font-size: 20px;
  line-height: 24px;
`;

export const Text = styled.span`
  width: 100%;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.black};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  > * {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const BoxBorder = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  padding-left: 21px;
  padding-right: 44px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.SemiBold};
  color: ${Color.black};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${Color.primary};
  }
`;

export const Annotation = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${Color.black};
`;

export const AnnotationContent = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
`;

export const Link = styled.span`
  display: inline;
  color: ${Color.primary};
  cursor: pointer;
`;
