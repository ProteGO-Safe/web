import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

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
  margin-top: auto;
  margin-bottom: 100px;
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

export const ContentFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5px;

  label {
    padding-left: 40px;

    > span {
      text-transform: uppercase;
      color: ${Color.gray_5};
    }
  }

  > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;
