import React from 'react';
import * as Styled from './Banner.styled';

// Images
import { ReactComponent as Image1 } from '../../../../assets/img/info-vaccinations/info-vaccinations-1.svg';
import { ReactComponent as Image2 } from '../../../../assets/img/info-vaccinations/info-vaccinations-2.svg';
import { ReactComponent as Image3 } from '../../../../assets/img/info-vaccinations/info-vaccinations-3.svg';
import { ReactComponent as Image4 } from '../../../../assets/img/info-vaccinations/info-vaccinations-4.svg';

const Banner = ({ title }) => (
  <Styled.Wrapper>
    <Styled.Heading>{title}</Styled.Heading>

    <Styled.MainImage>
      <Image1 />
    </Styled.MainImage>

    <Styled.Virus1>
      <Image2 />
    </Styled.Virus1>
    <Styled.Virus2>
      <Image3 />
    </Styled.Virus2>
    <Styled.Virus3>
      <Image4 />
    </Styled.Virus3>
  </Styled.Wrapper>
);

export default Banner;
