import React from 'react';
import { withTranslation } from 'react-i18next';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Warning } from '../../../../components';
import * as Styled from '../../LabTest.styled';
import { Color } from '../../../../theme/colors';
import { Link, SmallText } from '../../../../theme/typography';
import { PHONE_NUMBER } from '../../labTest.constants';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const Step3 = ({ t }) => {
  const { goTo } = useNavigation();
  return (
    <>
      <Styled.WarningWrapper>
        <Warning
          borderColor={Color.green}
          colorFont={Color.green}
          status="success"
          title={t('lab_test_text18')}
        />
      </Styled.WarningWrapper>
      <Styled.Content>
        <SmallText>{t('lab_test_text19')}</SmallText>
        <Styled.Space />
        <Styled.SubTitle>{t('lab_test_text20')}</Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>
            <strong>{t('lab_test_text21')}</strong>
          </Styled.ListItem>
          <Styled.ListItem>
            {t('lab_test_text22')}{' '}
            <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <FieldSet>
        <Button
          onClick={() => goTo(Routes.Home)}
          label={t('button_understand')}
        />
      </FieldSet>
    </>
  );
};

export default withTranslation()(Step3);
