import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../theme/colors';
import {
  BorderBoxInfo,
  BorderBoxNavLink,
  Description,
  Title
} from './BorderBox.styled';
import { NavLink } from '../NavLink';

const BorderBox = ({
  children,
  colorBorder,
  colorDescription,
  colorTitle,
  path,
  title
}) => {
  const box = useMemo(() => {
    return (
      <>
        <Title color={colorTitle} arrow={path}>
          {title}
        </Title>
        <Description color={colorDescription}>{children}</Description>
      </>
    );
  }, [colorTitle, path, title, colorDescription, children]);

  return path ? (
    <NavLink to={path}>
      <BorderBoxNavLink color={colorBorder}>{box}</BorderBoxNavLink>
    </NavLink>
  ) : (
    <BorderBoxInfo color={colorBorder}>{box}</BorderBoxInfo>
  );
};

BorderBox.defaultProps = {
  colorBorder: Color.primary,
  colorDescription: Color.black,
  colorTitle: Color.primary,
  path: null
};

BorderBox.propTypes = {
  children: PropTypes.node.isRequired,
  colorBorder: PropTypes.string,
  colorDescription: PropTypes.string,
  colorTitle: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default BorderBox;
