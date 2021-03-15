import React from 'react';
import { useTranslation } from 'react-i18next';
import { Small } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';
import { ReactComponent as IconAdd } from '../../../../assets/img/icons/plus.svg';
import * as Styled from './UpdateDistricts.styled';

const UpdateDistricts = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    // todo PSAFE-3523
    // redirect to add / change districts
  };

  return (
    <Styled.Wrapper onClick={handleClick}>
      <IconAdd />
      <Small color={Color.primary} fontWeight={FontWeight.Bold}>
        {t('statistics_view_text_29')}
      </Small>
    </Styled.Wrapper>
  );
};

export default UpdateDistricts;
