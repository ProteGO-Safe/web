import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import * as Styled from './InputDatePicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

const InputDatePicker = ({ dateFormat, disabled, onChange, selected, t }) => {
  const selectedDate = moment(selected).toDate();

  const months = [
    t('months_1'),
    t('months_2'),
    t('months_3'),
    t('months_4'),
    t('months_5'),
    t('months_6'),
    t('months_7'),
    t('months_8'),
    t('months_9'),
    t('months_10'),
    t('months_11'),
    t('months_12')
  ];
  const days = [
    t('day_1'),
    t('day_2'),
    t('day_3'),
    t('day_4'),
    t('day_5'),
    t('day_6'),
    t('day_7')
  ];

  const locale = {
    localize: {
      month: n => months[n],
      day: n => days[n]
    },
    formatLong: {}
  };

  const Container = ({ children }) => (
    <Styled.CalendarContainer>
      <Styled.Placeholder>{t('date_picker_text')}</Styled.Placeholder>
      <Styled.Calendar>{children}</Styled.Calendar>
    </Styled.CalendarContainer>
  );

  return (
    <Styled.InputDatePicker>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat={dateFormat}
        disabled={disabled}
        calendarContainer={Container}
        locale={locale}
      />
      <Styled.Icon />
    </Styled.InputDatePicker>
  );
};

InputDatePicker.defaultProps = {
  dateFormat: 'd MMMM yyyy',
  disabled: false
};

InputDatePicker.protoTypes = {
  dateFormat: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default withTranslation()(InputDatePicker);
