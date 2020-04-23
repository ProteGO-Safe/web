import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Content, View } from '../../theme/grid';
import { Container, ItemWrapper, Text, Title } from './Settings.styled';
import { Switcher } from '../../components';

const Settings = ({ children, items, onBack, title }) => {
  const renderSettings = items.map(item => {
    const { checked, onChange, label, name } = item;

    return (
      <Switcher
        key={label}
        checked={checked}
        onChange={onChange}
        label={label}
        name={name}
      />
    );
  });

  return (
    <View>
      <Header onBackClick={onBack} />
      <Content>
        <Container>
          <Title>{title}</Title>
          <Text>{children}</Text>
          <ItemWrapper>{renderSettings}</ItemWrapper>
        </Container>
      </Content>
      <BottomNavigation />
    </View>
  );
};

Settings.defaultProps = {
  items: []
};

Settings.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  title: PropTypes.string
};

export default Settings;
