import styled from 'styled-components';
import { ReactComponent as AddTranslationIcon1 } from '../../assets/img/icons/icon-rejestracja.svg';
import { ReactComponent as AddTranslationIcon2 } from '../../assets/img/icons/icon-tlumacz.svg';
import { ReactComponent as AddTranslationIcon3 } from '../../assets/img/icons/icon-tlumaczenie_sukces.svg';
import { Color } from '../../theme/colors';

export const AddTranslation = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${Color.black};
`;

export const Paragraph = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
  color: ${Color.black};
`;

export const Steps = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Step = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;
`;

export const Icon1 = styled(AddTranslationIcon1)`
  width: 70px;
  height: 70px;
  margin: 0 auto 30px;
`;

export const Icon2 = styled(AddTranslationIcon2)`
  width: 70px;
  height: 70px;
  margin: 0 auto 30px;
`;

export const Icon3 = styled(AddTranslationIcon3)`
  width: 70px;
  height: 70px;
  margin: 0 auto 30px;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;
export const Number = styled.div`
  display: inline;
  font-weight: 700;
  color: ${Color.primary};
`;
export const Link = styled.a`
  width: 100%;
`;
