import React from 'react';
import { withTranslation } from 'react-i18next';
import { Email, Layout, Url } from '../../components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { Paragraph } from '../../theme/typography';
import { Title } from './ReportBug.styled';

const ReportBug = ({ t }) => {
  return (
    <Layout isNavigation>
      <Title>{t('report_bug_text1')}</Title>
      <Paragraph>
        {t('report_bug_text2')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      </Paragraph>
      <Paragraph>{t('report_bug_text3')}</Paragraph>
      <Paragraph color={Color.primary} fontWeight={FontWeight.Bold}>
        <Email>{t('report_bug_text4')}</Email>
      </Paragraph>
    </Layout>
  );
};

export default withTranslation()(ReportBug);
