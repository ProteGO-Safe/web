import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Routes from '../../../../routes';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Warning } from '../../../../components';
import * as Styled from '../../LabTest.styled';
import { Color } from '../../../../theme/colors';
import { Link, SmallText } from '../../../../theme/typography';
import { PHONE_NUMBER } from '../../labTest.constants';

const Step3 = ({ completedSteps, t }) => {
  const [isComplete, setIsComplete] = useState(false);

  if (completedSteps !== 2 || isComplete) {
    return <Redirect to={`${Routes.Home}`} />;
  }

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
          onClick={() => setIsComplete(true)}
          label={t('button_understand')}
        />
      </FieldSet>
    </>
  );
};

export default withTranslation()(Step3);
