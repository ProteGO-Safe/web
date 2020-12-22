import React from 'react';
import { FieldSet } from '../../../../components/FieldSet';
import { Button, Warning, T } from '../../../../components';
import * as Styled from '../../LabTest.styled';
import { Color } from '../../../../theme/colors';
import { Link, SmallText } from '../../../../theme/typography';
import { PHONE_NUMBER } from '../../labTest.constants';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const Step3 = () => {
  const { goTo } = useNavigation();
  return (
    <>
      <Styled.WarningWrapper>
        <Warning
          borderColor={Color.green}
          colorFont={Color.green}
          status="success"
          title={<T i18nKey="lab_test_text18" />}
        />
      </Styled.WarningWrapper>
      <Styled.Content>
        <SmallText>
          <T i18nKey="lab_test_text19" />
        </SmallText>
        <Styled.Space />
        <Styled.SubTitle>
          <T i18nKey="lab_test_text20" />
        </Styled.SubTitle>
        <Styled.List>
          <Styled.ListItem>
            <strong>
              <T i18nKey="lab_test_text21" />
            </strong>
          </Styled.ListItem>
          <Styled.ListItem>
            <T i18nKey="lab_test_text22" /> <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Content>
      <FieldSet>
        <Button onClick={() => goTo(Routes.Home)} label={<T i18nKey="button_understand" />} />
      </FieldSet>
    </>
  );
};

export default Step3;
