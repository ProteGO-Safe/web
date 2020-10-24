import React from 'react';
import { withTranslation } from 'react-i18next';
import { BorderBox, PhoneNumber } from '../../components';
import { ButtonIconShadow } from './components/ButtonIconShadow';

const TestBorderBox = ({ data, t }) => (
  <BorderBox
    title={t(data.title)}
    colorBorder={t(data.colorBorder)}
    path={data.path}
    colorDescription={t(data.colorDescription)}
    colorTitle={t(data.colorTitle)}
  >
    <>
      {t(data.description.paragraph_1)}{' '}
      {data.description.phone_number && (
        <PhoneNumber>{t(data.description.phone_number)}</PhoneNumber>
      )}
      {data.description.paragraph_2 && (
        <>
          <br />
          {t(data.description.paragraph_2)}
          <ButtonIconShadow name={t(data.buttonName)} path={data.buttonPath} />
        </>
      )}
    </>
  </BorderBox>
);

export default withTranslation()(TestBorderBox);
