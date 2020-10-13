import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import * as Styled from './NoData.styled';

const NoData = ({ handleClick, t }) => (
  <Styled.Container>
    <Styled.NoData>
      <Styled.TitleWrapper>
        <Styled.Icon />
        <Styled.Title>{t('current_restrictions_nodata_title')}</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.Description>
        {t('current_restrictions_nodata_text')}
      </Styled.Description>
    </Styled.NoData>

    <Button onClick={handleClick}>
      {t('current_restrictions_nodata_button')}
    </Button>
  </Styled.Container>
);

export default withTranslation()(NoData);
