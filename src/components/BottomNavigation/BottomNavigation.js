import React, { useCallback, useEffect, useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { menuItems } from './BottomNavigation.constants';
import useMenuContext from '../../hooks/useMenuContext';
import { Container, MenuItem } from './BottomNavigation.styled';
import useNavigation from '../../hooks/useNavigation';

const BottomNavigation = ({ className, t }) => {
  const { goTo, route } = useNavigation();
  const [value, setValue] = useState(null);
  const containerRef = useRef();
  const {
    setVisible: setMenuVisible,
    startHiding: hideMenu,
    visible: menuVisible
  } = useMenuContext();

  useEffect(() => {
    if (menuVisible) {
      setValue(menuItems.length - 1);
    } else {
      const activeItemIndex = menuItems.findIndex(({ path }) => {
        return route === path;
      });

      setValue(activeItemIndex !== -1 ? activeItemIndex : null);
    }
  }, [route, menuVisible]);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      containerRef.current.parentNode.style.paddingBottom = `${height + 14}px`;
    }
  }, [containerRef]);

  const handleSelectionChange = useCallback(
    (event, newValue) => {
      const menuItem = menuItems[newValue];

      if (!menuItem.openMenu) {
        goTo(menuItem.path);

        if (menuVisible) {
          hideMenu();
        }
      } else {
        setMenuVisible(!menuVisible);
      }
    },
    // eslint-disable-next-line
    [menuVisible]
  );

  const renderMenuItem = ({ id, label, disabled, Icon, panicButton }) => (
    <MenuItem
      id={id}
      key={label}
      className={panicButton && 'panic-button'}
      label={t(label)}
      disabled={disabled}
      icon={<Icon />}
      disableRipple
      panicButton={panicButton}
    />
  );

  return (
    <Container
      ref={containerRef}
      className={className}
      onChange={handleSelectionChange}
      showLabels
      value={value}
    >
      {menuItems.map(renderMenuItem)}
    </Container>
  );
};

export default withTranslation()(BottomNavigation);
