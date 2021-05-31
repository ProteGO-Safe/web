import React from 'react';
import { Button, Layout, T } from '../../components';
import * as Styled from './PinReceiver.styled';

const PinReceiver = ({ onClickButton }) => (
  <Layout isNavigation>
    <Styled.Title>
      <T i18nKey="pin_receiver_text_01" />
    </Styled.Title>

    <Styled.Text>
      <T i18nKey="pin_receiver_text_02" />
    </Styled.Text>

    <Styled.List>
      <Styled.Item>
        <T i18nKey="pin_receiver_text_03" />
      </Styled.Item>
    </Styled.List>

    <Styled.ButtonWrapper>
      <Button onClick={onClickButton} label={<T i18nKey="pin_receiver_text_04" />} />
    </Styled.ButtonWrapper>

    <Styled.List>
      <Styled.Item>
        <T i18nKey="pin_receiver_text_05" />
      </Styled.Item>
      <Styled.Item>
        <T i18nKey="pin_receiver_text_06" />
      </Styled.Item>
    </Styled.List>
  </Layout>
);

export default PinReceiver;
