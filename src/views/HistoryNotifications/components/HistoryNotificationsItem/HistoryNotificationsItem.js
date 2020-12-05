import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../../theme/colors';
import * as Styled from './HistoryNotificationsItem.styled';

import { ReactComponent as ArrowIcon } from '../../../../assets/img/icons/angle-right-blue.svg';

const HistoryNotificationsItem = ({ color, children, date, icon, isRead, title, onClick, open }) => (
  <Styled.HistoryNotificationsItem>
    <Styled.Icon color={color}>{icon}</Styled.Icon>

    <Styled.Content onClick={onClick}>
      <Styled.Header>
        <Styled.Date>{date}</Styled.Date>
        <Styled.Title open={open} status={isRead}>
          {title}
        </Styled.Title>
      </Styled.Header>

      <Styled.Description open={open}>{children}</Styled.Description>

      <Styled.Arrow open={open}>
        <ArrowIcon />
      </Styled.Arrow>
    </Styled.Content>
  </Styled.HistoryNotificationsItem>
);

HistoryNotificationsItem.defaultProps = {
  color: Color.primary
};

HistoryNotificationsItem.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  isRead: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default HistoryNotificationsItem;
