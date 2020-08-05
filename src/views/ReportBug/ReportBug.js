import React from 'react';
import { withTranslation } from 'react-i18next';

import { BottomNavigation, Email, Header, Url } from '../../components';

import { Container, Content, View } from '../../theme/grid';
import { Title } from './ReportBug.styled';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { Paragraph } from '../../theme/typography';

const ReportBug = ({ t }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container>
          <Title>{t('report_bug_text1')}</Title>
          <Paragraph>
            {t('report_bug_text2')}{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
          </Paragraph>
          <Paragraph>{t('report_bug_text3')}</Paragraph>
          <Paragraph color={Color.primary} fontWeight={FontWeight.Bold}>
            <Email>{t('report_bug_text4')}</Email>
          </Paragraph>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(ReportBug);
