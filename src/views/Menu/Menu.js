import React from 'react';
import PropTypes from 'prop-types';
import useNavigation from '../../hooks/useNavigation';
import { T } from '../../components';
import * as Styled from './Menu.styled';

const Menu = ({ items }) => {
  const { goTo } = useNavigation();

  const renderItems = items.map(item => {
    const { color, disable, icon, invisible, path, slug, title } = item;

    return (
      !invisible && (
        <Styled.Item key={slug} disable={disable} color={color} onClick={() => goTo(path)}>
          {icon}
          <T i18nKey={title} />
        </Styled.Item>
      )
    );
  });

  return <Styled.Wrapper>{renderItems}</Styled.Wrapper>;
};

Menu.defaultProps = {
  items: []
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      disable: PropTypes.bool,
      // eslint-disable-next-line react/forbid-prop-types
      icon: PropTypes.object.isRequired,
      invisible: PropTypes.bool,
      path: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default Menu;
