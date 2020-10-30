import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { TYPES } from './ImportantInfoItem.constants';
import * as Styled from './ImportantInfoItem.styled';
import { NavLink } from '../../../../components';

const ImportantInfoItem = ({
  danger,
  description,
  icon,
  link,
  newFeature,
  path,
  t,
  size,
  title,
  type
}) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (ref.current) {
      const wrapperHeight = ref.current.offsetHeight;
      setHeight(wrapperHeight);
    }
  }, [ref]);

  const Content = () => (
    <Styled.ImportantInfoItem ref={ref} size={size}>
      {newFeature && <Styled.Badge size={size}>{t('new')}</Styled.Badge>}
      <Styled.Icon size={size}>{icon}</Styled.Icon>
      <Styled.Content size={size}>
        <Styled.Title size={size} danger={danger}>
          {title}
        </Styled.Title>
        {windowWidth < 375 ? (
          <Styled.Description size={size}>{description}</Styled.Description>
        ) : (
          height > 186 && (
            <Styled.Description size={size}>{description}</Styled.Description>
          )
        )}
      </Styled.Content>
      {link && (
        <Styled.LinkGov size={size}>
          {t('important_info_button_info')}
        </Styled.LinkGov>
      )}
    </Styled.ImportantInfoItem>
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
        <Styled.UrlLink href={link} target="_blank">
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
  link: null,
  size: false,
  path: null,
  title: null
};

ImportantInfoItem.propTypes = {
  danger: PropTypes.bool,
  description: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf([TYPES.ROUTE, TYPES.LINK]).isRequired
};

export default withTranslation()(ImportantInfoItem);
