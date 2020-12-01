import React from 'react';
import { BorderBox, T } from '../../components';

const TestBorderBox = ({ data }) => (
  <BorderBox
    title={<T i18nKey={data.title} />}
    colorBorder={data.colorBorder}
    path={data.path}
    colorDescription={data.colorDescription}
    colorTitle={data.colorTitle}
  >
    {data.content}
  </BorderBox>
);

export default TestBorderBox;
