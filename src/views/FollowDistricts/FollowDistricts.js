import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { StatusItem } from '../../components';
import * as Styled from './FollowDistricts.styled';

const FollowDistricts = ({
  dateUpdate,
  handleUnsubscribeDistrict,
  items,
  t
}) => {
  if (!items) {
    return null;
  }
  const renderItems = items.map(({ id, name, state }) => (
    <StatusItem
      key={id}
      name={name}
      status={state}
      handleClick={() => handleUnsubscribeDistrict(id)}
    />
  ));

  return (
    <Styled.FollowDistricts>
      <Styled.DateUpdate>
        {t('follow_district_date_update')} {dateUpdate}
      </Styled.DateUpdate>

      <Styled.Content>
        <Styled.Title>
          {t('follow_district_title')} ({items.length}):
        </Styled.Title>
        {renderItems}
      </Styled.Content>
    </Styled.FollowDistricts>
  );
};

FollowDistricts.propTypes = {
  dateUpdate: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default withTranslation()(FollowDistricts);
