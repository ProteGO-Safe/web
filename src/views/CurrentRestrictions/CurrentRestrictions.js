import React from 'react';
import { withTranslation } from 'react-i18next';
import { FollowDistricts } from '../FollowDistricts';
import { ListDistricts } from '../ListDistricts';
import * as Styled from './CurrentRestrictions.styled';
import { Button } from '../../components';

const CurrentRestrictions = ({ t }) => {
  const followDistrictsItems = [
    {
      id: 1,
      name: 'grodziski',
      state: 1,
      is_subscribed: true
    },
    {
      id: 5,
      name: 'garwoliński',
      state: 0,
      is_subscribed: false
    }
  ];

  const listDistrictsItems = [
    {
      id: 1,
      name: 'mazowieckie',
      districts: [
        {
          id: 1,
          name: 'grodziski',
          state: 1,
          is_subscribed: true
        },
        {
          id: 5,
          name: 'garwoliński',
          state: 0,
          is_subscribed: false
        }
      ]
    },
    {
      id: 2,
      name: 'donlośląskie',
      districts: [
        {
          id: 1,
          name: 'wrocławski',
          state: 1,
          is_subscribed: true
        },
        {
          id: 2,
          name: 'świdnicki',
          state: 2,
          is_subscribed: false
        }
      ]
    }
  ];

  return (
    <Styled.CurrentRestrictions>
      <Styled.Container>
        <Styled.Title noMargin>
          {t('current_restrictions_title_1')}
        </Styled.Title>
      </Styled.Container>

      <FollowDistricts items={followDistrictsItems} dateUpdate="20.20.2020" />

      <Styled.Container>
        <Styled.Title>{t('current_restrictions_title_2')}</Styled.Title>
        <ListDistricts items={listDistrictsItems} />
      </Styled.Container>

      <Styled.Container>
        <Styled.Title>{t('current_restrictions_title_3')}</Styled.Title>
        <Styled.Paragraph>
          {t('current_restrictions_paragraph_2')}
        </Styled.Paragraph>

        <Styled.ButtonWrapper>
          <Styled.UrlLink href="#" target="_blank">
            <Button
              label={t('current_restrictions_button_name')}
              onClick={() => null}
            />
          </Styled.UrlLink>

          <Styled.Small>{t('current_restrictions_button_info')}</Styled.Small>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Styled.CurrentRestrictions>
  );
};

export default withTranslation()(CurrentRestrictions);
