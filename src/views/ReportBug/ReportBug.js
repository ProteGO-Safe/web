import React from 'react';
import { Layout, T, UrlCovid } from '../../components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';
import { Paragraph } from '../../theme/typography';
import { Title } from './ReportBug.styled';

const ReportBug = () => {
  return (
    <Layout isNavigation>
      <Title>
        <T i18nKey="report_bug_text1" />
      </Title>
      <Paragraph>
        <T i18nKey="report_bug_text2" /> <UrlCovid />.
      </Paragraph>
      <Paragraph>
        <T i18nKey="report_bug_text3" />
      </Paragraph>
      <Paragraph color={Color.primary} fontWeight={FontWeight.Bold}>
        <T i18nKey="report_bug_text4" />
      </Paragraph>
    </Layout>
  );
};

export default ReportBug;
