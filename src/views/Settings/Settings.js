import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Switcher } from '../../components';
import { ItemWrapper, Text, Title } from './Settings.styled';

const Settings = ({ children, items, onBack, title }) => {
  const renderSettings = items.map(item => {
    const { checked, disabled, onChange, label, name } = item;

    return (
      <Switcher
        key={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        label={label}
        name={name}
      />
    );
  });

  return (
    <Layout onBackClick={onBack} isNavigation>
      <Title>{title}</Title>
      <Text>{children}</Text>
      <ItemWrapper>{renderSettings}</ItemWrapper>
    </Layout>
  );
};

Settings.defaultProps = {
  info: undefined,
  items: []
};

Settings.propTypes = {
  children: PropTypes.node.isRequired,
  info: PropTypes.node,
  items: PropTypes.array,
  title: PropTypes.string
};

export default Settings;
