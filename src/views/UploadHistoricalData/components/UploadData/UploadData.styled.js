import styled from 'styled-components';
import { H5, Small, SmallText, TextLink } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { InfoIconContainer } from '../../../../components/InfoIcon/InfoIcon.styled';

export const Content = styled.div`
  display: block;
  margin: 0 auto 24px;
  width: 100%;

  ${H5} {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: 12px;
    margin: 0 0 16px;

    ${InfoIconContainer} {
      margin: 0;
    }
  }

  ${SmallText} {
    color: ${Color.black};
    margin-bottom: 21px;

    &:last-child {
      margin: 0;
    }
  }

  ${Small} {
    color: ${Color.black};
  }

  ${TextLink} {
    text-decoration: none;
  }
`;

export const PinWrapper = styled.div`
  margin: 30px 0;
`;

export const Warning = styled.div`
  margin: -14px 0 0;
`;

export const Info = styled.div`
  > ${InfoIconContainer} {
    margin-top: 0;
  }
`;
