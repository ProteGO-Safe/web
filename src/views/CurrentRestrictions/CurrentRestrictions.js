import React, { useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import { FollowDistricts } from '../FollowDistricts';
import { ListDistricts } from './components/ListDistricts';
import * as Styled from './CurrentRestrictions.styled';
import { Button, Input, T } from '../../components';
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
  dateUpdate,
  t
}) => {
  const renderList = useMemo(() => {
    if (isFlatten && flattenDistricts.length === 0) {
      return (
        <>
          <Styled.NoResults>
            <Styled.NoResultsTitle>
              <T i18nKey="current_restrictions_paragraph_3" />
            </Styled.NoResultsTitle>
            <Styled.NoResultsText>
              <T i18nKey="current_restrictions_paragraph_4" />
            </Styled.NoResultsText>
          </Styled.NoResults>

          <Styled.Title>
            <T i18nKey="current_restrictions_title_2" />
          </Styled.Title>
          <ListDistricts
            items={listDistrictsItems}
            handleSubscribeDistrict={handleSubscribeDistrict}
            handleUnsubscribeDistrict={handleUnsubscribeDistrict}
          />
        </>
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
        <Styled.Title>
          <T i18nKey="current_restrictions_title_2" />
        </Styled.Title>
        <ListDistricts
          items={listDistrictsItems}
          handleSubscribeDistrict={handleSubscribeDistrict}
          handleUnsubscribeDistrict={handleUnsubscribeDistrict}
        />
      </>
    );
  }, [isFlatten, flattenDistricts, listDistrictsItems, handleSubscribeDistrict, handleUnsubscribeDistrict]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title noMargin>
          <T i18nKey="current_restrictions_title_1" />
        </Styled.Title>
      </Styled.Container>

      <Styled.Container>
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
      </Styled.Container>

      <Styled.Container>{renderList}</Styled.Container>

      <Styled.Container>
        <Styled.Title>
          <T i18nKey="current_restrictions_title_3" />
        </Styled.Title>
        <Styled.Paragraph>
          <T i18nKey="current_restrictions_paragraph_2" />
        </Styled.Paragraph>

        <Styled.ButtonWrapper>
          <Styled.UrlLink href={t('current_restrictions_href')} target="_blank">
            <Button label={<T i18nKey="current_restrictions_button_name" />} onClick={() => null} />
          </Styled.UrlLink>

          <Styled.Small>
            <T i18nKey="current_restrictions_button_info" />
          </Styled.Small>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default withTranslation()(CurrentRestrictions);
