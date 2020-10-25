import React from 'react';
import { withTranslation } from 'react-i18next';
import { BorderBox } from '../../components';

const TestBorderBox = ({ data, t }) => (
  <BorderBox
    title={t(data.title)}
    colorBorder={t(data.colorBorder)}
    path={data.path}
    colorDescription={t(data.colorDescription)}
    colorTitle={t(data.colorTitle)}
  >
    {data.content}
  </BorderBox>
);

export default withTranslation()(TestBorderBox);
