import React from 'react';
import PropTypes from 'prop-types';
import { Color } from '../../../../theme/colors';
import * as Styled from './HistoryActivitiesItem.styled';

import { ReactComponent as ArrowIcon } from '../../../../assets/img/icons/angle-right-blue.svg';

const HistoryActivitiesItem = ({ color, children, date, icon, isRead, title, onClick, open }) => (
  <Styled.HistoryActivitiesItem>
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
  </Styled.HistoryActivitiesItem>
);

HistoryActivitiesItem.defaultProps = {
  color: Color.primary
};

HistoryActivitiesItem.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  isRead: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default HistoryActivitiesItem;
