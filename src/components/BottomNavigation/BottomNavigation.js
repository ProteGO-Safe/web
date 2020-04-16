import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { menuItems } from './BottomNavigation.constants';
import useMenuContext from '../../hooks/useMenuContext';
import Routes from '../../routes';
import { Container, MenuItem } from './BottomNavigation.styled';

const BottomNavigation = ({ className }) => {
  const history = useHistory();
  const location = useLocation();
  const containerRef = useRef();
  const [value, setValue] = useState(null);
  const {
    setVisible: setMenuVisible,
    startHiding: hideMenu,
    visible: menuVisible
  } = useMenuContext();

  useEffect(() => {
    const activeItemIndex = menuItems.findIndex(({ path, disabled }) => {
      if (location.pathname === Routes.Home && path === Routes.Home) {
        return true;
      }
      return disabled && path && location.pathname.startsWith(path);
    });

    setValue(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location.pathname]);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      containerRef.current.parentNode.style.paddingBottom = `${height}px`;
    }
  }, [containerRef]);

  const handleSelectionChange = useCallback(
    (event, newValue) => {
      const menuItem = menuItems[newValue];

      if (!menuItem.openMenu) {
        history.push(menuItem.path);
        return;
      }

      if (menuVisible) {
        hideMenu();
        return;
      }

      setMenuVisible(true);
    },
    // eslint-disable-next-line
    [history, menuVisible]
  );

  const renderMenuItem = ({ label, disabled, Icon }) => (
    <MenuItem
      key={label}
      label={label}
      disabled={disabled}
      icon={<Icon />}
      disableRipple
    />
  );

  return (
    <Container
      ref={containerRef}
      value={value}
      className={className}
      onChange={handleSelectionChange}
      showLabels
    >
      {menuItems.map(renderMenuItem)}
    </Container>
  );
};

export default BottomNavigation;
