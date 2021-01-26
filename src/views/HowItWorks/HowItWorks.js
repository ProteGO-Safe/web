import React from 'react';
import { Collapse, Layout, T } from '../../components';
import * as Styled from './HowItWorks.styled';

const HowItWorks = () => (
  <Layout isNavigation>
    <Styled.MainTitle>
      <T i18nKey="how_it_works_1" />
    </Styled.MainTitle>
    <Styled.Image />
    <Styled.Paragraph>
      <T i18nKey="how_it_works_2" />
    </Styled.Paragraph>
    <Styled.Title>
      <T i18nKey="how_it_works_3" />
    </Styled.Title>
    <Styled.Paragraph>
      <T i18nKey="how_it_works_4" />
    </Styled.Paragraph>
    <Styled.Warning>
      <Styled.Icon />
      <Styled.Description>
        <T i18nKey="how_it_works_5" />
      </Styled.Description>
    </Styled.Warning>
    <Styled.Title>
      <T i18nKey="how_it_works_6" />
    </Styled.Title>
    <Styled.ListNumber>
      <Styled.ListItem>
        <T i18nKey="how_it_works_7" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_8" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_9" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_10" />
      </Styled.ListItem>
    </Styled.ListNumber>
    <Styled.Title>
      <T i18nKey="how_it_works_11" />
    </Styled.Title>
    <Styled.ListNumber>
      <Styled.ListItem>
        <T i18nKey="how_it_works_12" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_13" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_14" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_15" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_16" />
      </Styled.ListItem>
    </Styled.ListNumber>
    <Styled.Paragraph>
      <T i18nKey="how_it_works_17" />
    </Styled.Paragraph>
    <Styled.MainTitle mgrBottom>
      <T i18nKey="how_it_works_18" />
    </Styled.MainTitle>
    <Collapse title={<T i18nKey="how_it_works_19" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_20" />
      </Styled.Paragraph>
    </Collapse>
    <Collapse title={<T i18nKey="how_it_works_21" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_22" />
      </Styled.Paragraph>
    </Collapse>
    <Collapse title={<T i18nKey="how_it_works_23" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_24" />
      </Styled.Paragraph>
    </Collapse>
    <Collapse title={<T i18nKey="how_it_works_25" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_26" />
      </Styled.Paragraph>
    </Collapse>
    <Collapse title={<T i18nKey="how_it_works_27" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_28" />
      </Styled.Paragraph>
    </Collapse>
    <Collapse title={<T i18nKey="how_it_works_29" />}>
      <Styled.Paragraph>
        <T i18nKey="how_it_works_30" />
      </Styled.Paragraph>
    </Collapse>
    <Styled.Title mgrTop semiBold>
      <T i18nKey="how_it_works_31" />
    </Styled.Title>
    <Styled.ListNumber>
      <Styled.ListItem>
        <T i18nKey="how_it_works_32" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_33" />
      </Styled.ListItem>
      <Styled.ListItem>
        <T i18nKey="how_it_works_34" />
      </Styled.ListItem>
    </Styled.ListNumber>
  </Layout>
);

export default HowItWorks;
