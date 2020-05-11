import React from 'react';
import PinInput from 'react-pin-input';
import Header from '../../../../components/Header/Header';
import { BottomNavigation } from '../../../../components/BottomNavigation';
import { Button } from '../../../../components';
import { Container, Content, View } from '../../../../theme/grid';
import { Paragraph } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import {
  Name,
  PinWrapper,
  ButtonWrapper
} from '../../UploadHistoricalData.styled';

const UploadData = ({ disableButton, userName, pin, onUploadData, setPin }) => {
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <Name>{userName},</Name>
          <Paragraph>
            aby potwierdzić Operatorowi Centrum Kontaktu swój stan zdrowia wpisz
            poniżej KOD PIN który otrzymałeś od niego w wiadomości SMS
          </Paragraph>
          <PinWrapper>
            <PinInput
              focus
              length={6}
              type="text"
              onChange={value => setPin(value)}
              inputStyle={{ borderColor: Color.lightGray }}
            />
          </PinWrapper>
          <ButtonWrapper>
            <Button
              onClick={onUploadData}
              text="Przekaż dane"
              disabled={pin.length !== 6 || disableButton}
            />
          </ButtonWrapper>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default UploadData;
