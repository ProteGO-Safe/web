import React from 'react';
import { Button, T } from '../../../../components';
import * as Styled from './NoData.styled';

const NoData = ({ handleClick }) => (
  <Styled.Container>
    <Styled.NoData>
      <Styled.TitleWrapper>
        <Styled.Icon />
        <Styled.Title>
          <T i18nKey="current_restrictions_nodata_title" />
        </Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Description>
        <T i18nKey="current_restrictions_nodata_text" />
      </Styled.Description>
    </Styled.NoData>

    <Button onClick={handleClick}>
      <T i18nKey="current_restrictions_nodata_button" />
    </Button>
  </Styled.Container>
);

export default NoData;
