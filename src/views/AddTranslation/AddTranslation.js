import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../components';
import * as Styled from './AddTranslation.styled';

const AddTranslation = ({ path, t }) => (
  <Styled.AddTranslation>
    <Styled.Title>{t('add_translation_title1')}</Styled.Title>

    <Styled.Paragraph>{t('add_translation_paragraph1')}</Styled.Paragraph>
    <Styled.Paragraph>{t('add_translation_paragraph2')}</Styled.Paragraph>

    <Styled.Title>{t('add_translation_title2')}</Styled.Title>

    <Styled.Steps>
      <Styled.Step>
        <Styled.Icon1 />
        <Styled.Description>
          <Styled.Number>1.</Styled.Number> {t('add_translation_step1')}
        </Styled.Description>
      </Styled.Step>
      <Styled.Step>
        <Styled.Icon2 />
        <Styled.Description>
          <Styled.Number>2.</Styled.Number> {t('add_translation_step2')}
        </Styled.Description>
      </Styled.Step>
      <Styled.Step>
        <Styled.Icon3 />
        <Styled.Description>
          <Styled.Number>3.</Styled.Number> {t('add_translation_step3')}
        </Styled.Description>
      </Styled.Step>
    </Styled.Steps>

    <Styled.Link href={path} target="_blank">
      <Button onClick={() => null}>{t('add_translation_button')}</Button>
    </Styled.Link>
  </Styled.AddTranslation>
);

export default withTranslation()(AddTranslation);
