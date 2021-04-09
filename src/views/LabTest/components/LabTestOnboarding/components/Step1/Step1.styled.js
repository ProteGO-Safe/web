import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';

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
