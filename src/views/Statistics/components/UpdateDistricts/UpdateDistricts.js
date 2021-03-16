import React from 'react';
import { Small } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';
import { ReactComponent as IconAdd } from '../../../../assets/img/icons/plus.svg';
import * as Styled from './UpdateDistricts.styled';
import { T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const UpdateDistricts = () => {
  const { goTo } = useNavigation();

  const handleClick = () => {
    goTo(Routes.CurrentRestrictions);
  };

  return (
    <Styled.Wrapper onClick={handleClick}>
      <IconAdd />
      <Small color={Color.primary} fontWeight={FontWeight.Bold}>
        <T i18nKey="statistics_view_text_29" />
      </Small>
    </Styled.Wrapper>
  );
};

export default UpdateDistricts;
