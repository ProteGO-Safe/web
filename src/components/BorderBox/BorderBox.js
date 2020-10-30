import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../theme/colors';
import {
  BorderBoxInfo,
  BorderBoxNavLink,
  Description,
  Title
} from './BorderBox.styled';

const BorderBox = ({
  children,
  colorBorder,
  colorDescription,
  colorTitle,
  path,
  title
}) => {
  const renderBorderBox = Component => (
    <Component color={colorBorder} to={path}>
      <Title color={colorTitle} arrow={path}>
        {title}
      </Title>
      <Description color={colorDescription}>{children}</Description>
    </Component>
  );

  return path
    ? renderBorderBox(BorderBoxNavLink)
    : renderBorderBox(BorderBoxInfo);
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
