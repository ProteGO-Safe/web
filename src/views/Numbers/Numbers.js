import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Routes from '../../routes';
import { Button, LineItem, PhoneNumber, Layout } from '../../components';
import { Paragraph } from '../../theme/typography';
import { Color } from '../../theme/colors';
import { Info, Phone, Line } from './Numbers.styled';

const Numbers = ({ t }) => {
  const history = useHistory();

  const goToHospitalsList = () => history.push(Routes.HospitalsList);

  return (
    <Layout isNavigation>
      <Info>{t('numbers_text1')}</Info>
      <PhoneNumber value="800190590">
        <Button
          onClick={() => null}
          className="small"
          label={t('numbers_text2')}
          type="border"
          icon={<Phone />}
        />
      </PhoneNumber>
      <Paragraph color={Color.primary}>{t('numbers_text4')}</Paragraph>
      <LineItem onClick={goToHospitalsList} text={t('numbers_text3')} />
      <Line />
    </Layout>
  );
};

export default withTranslation()(Numbers);
