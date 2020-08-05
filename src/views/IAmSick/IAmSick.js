import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BottomNavigation, Header, PhoneNumber } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { Title, LinkStyle } from './IAmSick.styled';
import { ListNumber, ListNumberItem } from '../../theme/typography';

const IAmSick = ({ t }) => {
  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>{t('i_am_sick_text1')}</Title>
          <ListNumber>
            <ListNumberItem>
              <strong>{t('i_am_sick_text2')}</strong>
              {t('i_am_sick_text3')}{' '}
              <PhoneNumber value="800190590">
                {t('i_am_sick_text4')}
              </PhoneNumber>
              {t('i_am_sick_text5')}
            </ListNumberItem>
            <ListNumberItem>
              {t('i_am_sick_text6')}
              <strong>{t('i_am_sick_text7')}</strong>
              {t('i_am_sick_text8')}
            </ListNumberItem>
            <ListNumberItem>
              <strong>{t('i_am_sick_text9')}</strong>
              {t('i_am_sick_text10')}{' '}
              <Link to="/daily">
                <LinkStyle>{t('i_am_sick_text11')}</LinkStyle>
              </Link>
              {t('i_am_sick_text12')}
            </ListNumberItem>
            <ListNumberItem>
              {t('i_am_sick_text13')}
              <strong>{t('i_am_sick_text14')}</strong>
              {t('i_am_sick_text15')}
            </ListNumberItem>
            <ListNumberItem>
              {t('i_am_sick_text16')}{' '}
              <PhoneNumber value="800190590">
                {t('i_am_sick_text17')}
              </PhoneNumber>
              {t('i_am_sick_text18')} <strong>{t('i_am_sick_text19')}</strong>
              {t('i_am_sick_text20')}
            </ListNumberItem>
          </ListNumber>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default withTranslation()(IAmSick);
