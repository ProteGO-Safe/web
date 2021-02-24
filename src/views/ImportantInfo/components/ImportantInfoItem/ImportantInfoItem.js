import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { TYPES } from './ImportantInfoItem.constants';
import { NavLink, RippleEffect, T } from '../../../../components';
import * as Styled from './ImportantInfoItem.styled';

const ImportantInfoItem = ({ danger, description, icon, newFeature, path, isSmallDevice, title, type, t }) => {
  const Content = () => (
    <Styled.Wrapper>
      {newFeature && (
        <Styled.TopLabel>
          <T i18nKey="label_new" />
        </Styled.TopLabel>
      )}

      <Styled.ItemContent size={isSmallDevice}>
        <Styled.Icon size={isSmallDevice}>{icon}</Styled.Icon>

        <Styled.Title size={isSmallDevice} danger={danger}>
          {title}
        </Styled.Title>

        <Styled.Description size={isSmallDevice}>{description}</Styled.Description>

        {type === TYPES.LINK && (
          <Styled.LinkGov size={isSmallDevice}>
            <T i18nKey="important_info_button_info" />
          </Styled.LinkGov>
        )}

        <RippleEffect />
      </Styled.ItemContent>
    </Styled.Wrapper>
  );

  switch (type) {
    case TYPES.ROUTE: {
      return (
        <NavLink to={path}>
          <Content />
        </NavLink>
      );
    }
    case TYPES.LINK: {
      return (
        <Styled.UrlLink href={t(path)} target="_blank">
          <Content />
        </Styled.UrlLink>
      );
    }
    default: {
      return null;
    }
  }
};

ImportantInfoItem.defaultProps = {
  danger: false,
  description: '',
  icon: null,
  size: false,
  path: null,
  title: null
};

ImportantInfoItem.propTypes = {
  danger: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  icon: PropTypes.object,
  path: PropTypes.string,
  size: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  type: PropTypes.oneOf([TYPES.ROUTE, TYPES.LINK]).isRequired
};

export default withTranslation()(ImportantInfoItem);
