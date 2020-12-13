import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { StatusItem } from '../../components/StatusItem';
import { NavLink, T } from '../../components';
import { Routes } from '../../services/navigationService/routes';
import * as Styled from './FollowDistrictsSlider.styled';

import { ReactComponent as IconAdd } from '../../assets/img/icons/plus.svg';

const FollowDistrictsSlider = ({ items }) => {
  const ref = useRef(null);
  const renderItems = items.map(({ id, name, state }) => <StatusItem id={id} key={id} name={name} status={state} />);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const widthButton = ref.current.clientWidth;
      setWidth(widthButton);
    }
  }, []);

  return (
    <Styled.FollowDistrictsSlider>
      {items.length > 0 ? (
        <>
          <Styled.Title padding={width}>
            <T i18nKey="follow_district_title" />

            <NavLink to={Routes.CurrentRestrictions}>
              <Styled.Add ref={ref}>
                <IconAdd />
                <T i18nKey="follow_district_text_1" />
              </Styled.Add>
            </NavLink>
          </Styled.Title>

          <Styled.Slider>{renderItems}</Styled.Slider>
        </>
      ) : (
        <NavLink to={Routes.CurrentRestrictions}>
          <Styled.Button>
            <T i18nKey="follow_district_button_name" />
            <Styled.Icon />
          </Styled.Button>
        </NavLink>
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

export default FollowDistrictsSlider;
