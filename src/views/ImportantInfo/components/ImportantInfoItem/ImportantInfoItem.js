import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { TYPES } from './ImportantInfoItem.constants';
import * as Styled from './ImportantInfoItem.styled';

const ImportantInfoItem = ({
  danger,
  description,
  icon,
  link,
  path,
  title,
  type,
  t
}) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const wrapperHeight = ref.current.offsetHeight;
      setHeight(wrapperHeight);
    }
  }, [ref]);

  const Content = () => (
    <Styled.ImportantInfoItem ref={ref}>
      <Styled.Icon>
        <Styled.Image src={icon} alt={title} />
      </Styled.Icon>
      <Styled.Title danger={danger}>{title}</Styled.Title>
      {height > 186 && <Styled.Description>{description}</Styled.Description>}

      {link && (
        <Styled.LinkGov>{t('important_info_button_info')}</Styled.LinkGov>
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
  path: null,
  title: null
};

ImportantInfoItem.propTypes = {
  danger: PropTypes.bool,
  description: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf([TYPES.ROUTE, TYPES.LINK]).isRequired
};

export default withTranslation()(ImportantInfoItem);
