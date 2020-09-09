import styled from 'styled-components';
import { ReactComponent as AddTranslationIcon } from '../../assets/img/icons/add-translation-view.svg';
import { Color } from '../../theme/colors';

export const AddTranslation = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
`;

export const Icon = styled(AddTranslationIcon)`
  display: block;
  width: auto;
  height: 106px;
`;
export const Title = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  color: ${Color.black};
`;
export const Subtitle = styled.div`
  margin-top: 12px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${Color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  margin-top: 66px;
  margin-bottom: 112px;
  a {
    font-weight: 700;
    text-decoration: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${Color.black};
`;
