import styled from 'styled-components';
import { Color } from '../../theme/colors';

import { ReactComponent as ImageSVG } from '../../assets/img/icons/how-it-works.svg';
import { ReactComponent as IconWarning } from '../../assets/img/icons/icon-no-data.svg';

export const MainTitle = styled.h1`
  width: 100%;
  margin: ${({ mgrBottom }) => (mgrBottom ? '0 0 20px 0' : '0')};
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
`;
export const Image = styled(ImageSVG)`
  display: block;
  max-height: 136px;
  margin: 0 auto 24px;
`;
export const Paragraph = styled.p`
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${Color.black};
  strong,
  a {
    font-weight: 700;
  }
`;
export const Title = styled.h2`
  width: 100%;
  margin: ${({ mgrTop }) => (mgrTop ? '20px 0 16px 0' : '0 0 16px 0')};
  font-size: 16px;
  line-height: 22px;
  font-weight: ${({ semiBold }) => (semiBold ? '600' : '700')};
  color: ${Color.black};
`;
export const Warning = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 24px;
  padding: 14px 16px;
  border-radius: 4px;
  border: 1px solid ${Color.primary};
  color: ${Color.primary};
`;
export const Icon = styled(IconWarning)`
  width: 28px;
  height: 28px;
  margin-right: 16px;
`;
export const Description = styled.div`
  width: calc(100% - 44px);
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${Color.black};
  > strong {
    font-weight: 700;
  }
`;
export const ListNumber = styled.ol`
  margin: 0 0 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: counter;
`;
export const ListItem = styled.li`
  position: relative;
  counter-increment: counter;
  padding-left: 34px;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:before {
    content: counter(counter) '. ';
    position: absolute;
    top: -2px;
    left: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: ${Color.primary};
  }
`;
