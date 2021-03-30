import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';

export const Title = styled.h2`
  margin: 0 0 30px 0;
  width: 100%;
  padding: 0 5px;
  font-size: 16px;
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
`;

export const ContentFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5px;
  margin-bottom: 25px;

  label {
    padding-left: 40px;

    > span {
      font-size: 14px;
      color: ${Color.black};
    }
  }
`;
