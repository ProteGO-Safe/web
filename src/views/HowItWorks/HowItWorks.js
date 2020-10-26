import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, Layout } from '../../components';
import * as Styled from './HowItWorks.styled';

const HowItWorks = ({ t }) => {
  return (
    <Layout isNavigation>
      <Styled.MainTitle>{t('how_it_works_main_title1')}</Styled.MainTitle>
      <Styled.Image />
      <Styled.Paragraph>{t('how_it_works_paragraph1')}</Styled.Paragraph>
      <Styled.Paragraph>{t('how_it_works_paragraph2')}</Styled.Paragraph>
      <Styled.Title>{t('how_it_works_title1')}</Styled.Title>
      <Styled.Paragraph>
        {t('how_it_works_paragraph3_1')}{' '}
        <strong>{t('how_it_works_paragraph3_2')}</strong>{' '}
        {t('how_it_works_paragraph3_3')}
      </Styled.Paragraph>
      <Styled.Paragraph>
        <strong>{t('how_it_works_paragraph4')}</strong>
      </Styled.Paragraph>
      <Styled.Warning>
        <Styled.Icon />
        <Styled.Description>
          {t('how_it_works_warning_description')}
        </Styled.Description>
      </Styled.Warning>
      <Styled.Paragraph>{t('how_it_works_paragraph5')}</Styled.Paragraph>
      <Styled.Paragraph>{t('how_it_works_paragraph6')}</Styled.Paragraph>
      <Styled.Paragraph>{t('how_it_works_paragraph7')}</Styled.Paragraph>
      <Styled.Title>{t('how_it_works_title2')}</Styled.Title>
      <Styled.Paragraph>{t('how_it_works_paragraph8')}</Styled.Paragraph>
      <Styled.Paragraph>{t('how_it_works_paragraph9')}</Styled.Paragraph>
      <Styled.Paragraph>{t('how_it_works_paragraph10')}</Styled.Paragraph>
      <Styled.Paragraph>
        <strong>{t('how_it_works_paragraph11_1')}</strong>
        <Styled.Link href="https://www.gov.pl/web/protegosafe" target="_blank">
          {t('how_it_works_paragraph11_2')}
        </Styled.Link>
      </Styled.Paragraph>
      <Styled.MainTitle>{t('how_it_works_main_title2')}</Styled.MainTitle>
      <Collapse title={t('how_it_works_collapse_title1')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children1_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children1_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children1_3')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children1_4')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children1_5')}
        </Styled.Paragraph>
      </Collapse>
      <Collapse title={t('how_it_works_collapse_title2')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children2_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children2_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children2_3')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children2_4')}
        </Styled.Paragraph>
      </Collapse>
      <Collapse title={t('how_it_works_collapse_title3')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children3_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children3_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children3_3')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children3_4')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children3_5')}
        </Styled.Paragraph>
      </Collapse>
      <Collapse title={t('how_it_works_collapse_title4')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children4_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children4_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children4_3')}
        </Styled.Paragraph>
      </Collapse>
      <Collapse title={t('how_it_works_collapse_title5')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children5_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children5_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children5_3')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children5_4')}
        </Styled.Paragraph>
      </Collapse>
      <Collapse title={t('how_it_works_collapse_title6')}>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children6_1')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children6_2')}
        </Styled.Paragraph>
        <Styled.Paragraph>
          {t('how_it_works_collapse_children6_3')}
        </Styled.Paragraph>
      </Collapse>

      <Styled.Title mgrTop>{t('how_it_works_title3')}</Styled.Title>
      <Styled.ListNumber>
        <Styled.ListItem>{t('how_it_works_list_number_item1')}</Styled.ListItem>
        <Styled.ListItem>{t('how_it_works_list_number_item2')}</Styled.ListItem>
        <Styled.ListItem>{t('how_it_works_list_number_item3')}</Styled.ListItem>
      </Styled.ListNumber>
    </Layout>
  );
};

export default withTranslation()(HowItWorks);
