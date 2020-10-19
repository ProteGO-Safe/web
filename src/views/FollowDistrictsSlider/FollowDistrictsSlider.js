import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Routes from '../../routes';
import * as Styled from './FollowDistrictsSlider.styled';
import { StatusItem } from '../../components/StatusItem';

const FollowDistrictsSlider = ({ items, t }) => {
  const renderItems = items.map(({ id, name, state }) => (
    <StatusItem id={id} key={id} name={name} status={state} />
  ));

  return (
    <Styled.FollowDistrictsSlider padding={items.length === 0}>
      {items.length > 0 ? (
        <>
          <Styled.Title>
            {t('follow_district_title')}:{' '}
            <Styled.Badge>{items.length}</Styled.Badge>
          </Styled.Title>
          <Styled.Slider>{renderItems}</Styled.Slider>
        </>
      ) : (
        <Styled.Button to={Routes.CurrentRestrictions}>
          {t('follow_district_button_name')}
          <Styled.Icon />
        </Styled.Button>
      )}
    </Styled.FollowDistrictsSlider>
  );
};

FollowDistrictsSlider.defaultProps = {
  items: []
};

FollowDistrictsSlider.propTypes = {
  items: PropTypes.array
};

export default withTranslation()(FollowDistrictsSlider);
