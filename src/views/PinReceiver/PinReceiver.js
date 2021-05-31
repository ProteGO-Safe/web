import React from 'react';
import * as Styled from './PinReceiver.styled';
import { Button, Layout, T } from '../../components';

const PinReceiver = ({ onClickButton }) => {
  // todo https://kyotu.atlassian.net/browse/PSAFE-3721
  return (
    <Layout isNavigation>
      <Styled.Title>
        <T i18nKey="pin_receiver_text_01" />
      </Styled.Title>
      <Styled.Text>
        <T i18nKey="pin_receiver_text_02" />
      </Styled.Text>
      <Styled.Item>
        <T i18nKey="pin_receiver_text_03" />
      </Styled.Item>
      <Button onClick={onClickButton} label={<T i18nKey="pin_receiver_text_04" />} />
      <Styled.Item>
        <T i18nKey="pin_receiver_text_05" />
      </Styled.Item>
      <Styled.Item>
        <T i18nKey="pin_receiver_text_06" />
      </Styled.Item>
    </Layout>
  );
};

export default PinReceiver;
