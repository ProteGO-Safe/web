import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import { Button, GovFooter } from '../../components/index';
import { Container, Content, View } from '../../theme/grid';
import { Paragraph, Small, ButtonWrapper } from './FirstDiagnosisAsking.styled';

const FirstDiagnosisAsking = ({ t, onYesClick, onNoClick }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Paragraph>
            {t('first_diagnosis_asking_text1')}
            <br />
            {t('first_diagnosis_asking_text2')}
          </Paragraph>
          <Small>{t('first_diagnosis_asking_text3')}</Small>
          <ButtonWrapper>
            <Button label={t('first_diagnosis_asking_text4')} onClick={onYesClick} />
            <Button
              label={t('first_diagnosis_asking_text5')}
              type="outline"
              onClick={onNoClick}
            />
          </ButtonWrapper>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(FirstDiagnosisAsking);
