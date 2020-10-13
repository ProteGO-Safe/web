import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { ReactComponent as IconAlert } from '../../../../assets/img/icons/icon-no-data.svg';

export const NoData = styled.div`
  width: 100%;
  margin-top: 26px;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid ${Color.primary};
  border-radius: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  flex-flow: wrap row;
  margin: 0;
  font-size: 1rem;
  line-height: 1.125rem;
  color: ${Color.primary};
`;
export const Icon = styled(IconAlert)`
  display: block;
  width: 28px;
  margin-right: 16px;
`;
export const Description = styled.p`
  width: 100%;
  margin-top: 10px;
  padding-left: 44px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${Color.black};
`;

export const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  max-width: 338px;
  margin: 24px auto 0;
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;
