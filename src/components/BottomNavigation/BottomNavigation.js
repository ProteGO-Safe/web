import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { menuItems } from './BottomNavigation.constants';
import useMenuContext from '../../hooks/useMenuContext';
import { Container, MenuItem } from './BottomNavigation.styled';

const BottomNavigation = ({ className, t }) => {
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
    if (menuVisible) {
      setValue(menuItems.length - 1);
    } else {
      const activeItemIndex = menuItems.findIndex(({ path, disabled }) => {
        if (location.pathname === path) {
          return true;
        }
        return disabled && path && location.pathname.startsWith(path);
      });

      setValue(activeItemIndex !== -1 ? activeItemIndex : null);
    }
  }, [location.pathname, menuVisible]);

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

        if (menuVisible) {
          hideMenu();
        }
      } else {
        setMenuVisible(!menuVisible);
      }
    },
    // eslint-disable-next-line
    [history, menuVisible]
  );

  const renderMenuItem = ({ id, label, disabled, Icon }) => (
    <MenuItem
      id={id}
      key={label}
      label={t(label)}
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

export default withTranslation()(BottomNavigation);
