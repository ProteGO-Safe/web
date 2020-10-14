import React, { useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import { FollowDistricts } from '../FollowDistricts';
import { ListDistricts } from './components/ListDistricts';
import * as Styled from './CurrentRestrictions.styled';
import { Button, Input } from '../../components';
import SearchIcon from '../../assets/img/icons/lupa.svg';
import { FlattenListDistricts } from './components/FlattenListDistricts';

const CurrentRestrictions = ({
  filterText,
  flattenDistricts,
  subscribedDistricts,
  handleChangeInput,
  handleResetInput,
  handleSubscribeDistrict,
  handleUnsubscribeDistrict,
  isFlatten,
  listDistrictsItems,
  t,
  dateUpdate
}) => {
  const renderList = useMemo(() => {
    if (isFlatten && flattenDistricts.length === 0) {
      return (
        <Styled.Paragraph>
          {t('current_restrictions_paragraph_3')}
        </Styled.Paragraph>
      );
    }
    if (isFlatten) {
      return (
        <FlattenListDistricts
          handleSubscribeDistrict={handleSubscribeDistrict}
          handleUnsubscribeDistrict={handleUnsubscribeDistrict}
          items={flattenDistricts}
        />
      );
    }
    return (
      <>
        <Styled.Title>{t('current_restrictions_title_2')}</Styled.Title>
        <ListDistricts
          items={listDistrictsItems}
          handleSubscribeDistrict={handleSubscribeDistrict}
          handleUnsubscribeDistrict={handleUnsubscribeDistrict}
        />
      </>
    );
  }, [
    isFlatten,
    flattenDistricts,
    listDistrictsItems,
    handleSubscribeDistrict,
    t
  ]);

  return (
    <Styled.CurrentRestrictions>
      <Styled.Container>
        <Styled.Title noMargin>
          {t('current_restrictions_title_1')}
        </Styled.Title>
      </Styled.Container>

      <FollowDistricts
        items={subscribedDistricts}
        dateUpdate={dateUpdate}
        handleUnsubscribeDistrict={handleUnsubscribeDistrict}
      />

      <Styled.SearchWrapper>
        <Input
          reset={handleResetInput}
          icon={SearchIcon}
          type="text"
          name="search"
          placeholder=""
          value={filterText}
          onChange={handleChangeInput}
        />
      </Styled.SearchWrapper>

      <Styled.Container>{renderList}</Styled.Container>

      <Styled.Container>
        <Styled.Title>{t('current_restrictions_title_3')}</Styled.Title>
        <Styled.Paragraph>
          {t('current_restrictions_paragraph_2')}
        </Styled.Paragraph>

        <Styled.ButtonWrapper>
          <Styled.UrlLink
            href="https://www.gov.pl/web/koronawirus/regionalne-obostrzenia-dla-powiatow"
            target="_blank"
          >
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
