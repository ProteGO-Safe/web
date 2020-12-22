import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { menuItems } from './BottomNavigation.constants';
import { Container, MenuItem } from './BottomNavigation.styled';
import useNavigation from '../../hooks/useNavigation';
import useDelayedAction from '../../hooks/useDelayedAction';
import { T } from '../index';
import { setNavigationRoot } from '../../store/actions/navigation';

const BottomNavigation = ({ className }) => {
  const dispatch = useDispatch();
  const { goTo, route } = useNavigation();
  const { timeout } = useDelayedAction();
  const [value, setValue] = useState(null);

  useEffect(() => {
    const activeItemIndex = menuItems.findIndex(({ path }) => {
      return route === path;
    });

    setValue(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [route]);

  const handleSelectionChange = useCallback(
    (event, newValue) => {
      const menuItem = menuItems[newValue];
      dispatch(setNavigationRoot(menuItem.path));
      timeout(() => goTo(menuItem.path));
    },
    // eslint-disable-next-line
    []
  );

  const renderMenuItem = ({ id, label, disabled, Icon, customButton }) => (
    <MenuItem
      id={id}
      key={label}
      className={customButton && 'custom-button'}
      label={<T i18nKey={label} />}
      disabled={disabled}
      icon={<Icon />}
      custom={customButton ? 1 : 0}
    />
  );

  return (
    <Container className={className} onChange={handleSelectionChange} showLabels value={value}>
      {menuItems.map(renderMenuItem)}
    </Container>
  );
};

export default BottomNavigation;
