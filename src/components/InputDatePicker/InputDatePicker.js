import React, { useEffect, useRef, useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-GB';
import * as Styled from './InputDatePicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import useLanguage from '../../hooks/useLanguage';
import { AVAILABLE_LANGUAGES } from '../../constants';

const isoCodeWithLibraryCode = {
  [AVAILABLE_LANGUAGES.uk.toUpperCase()]: uk,
  [AVAILABLE_LANGUAGES.pl.toUpperCase()]: pl,
  [AVAILABLE_LANGUAGES.en.toUpperCase()]: en
};

const InputDatePicker = ({ dateFormat, disabled, onChange, selected, t }) => {
  const pickerRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (pickerRef.current !== null) {
      pickerRef.current.input.readOnly = true;
    }
  }, [pickerRef]);

  const selectedDate = moment(selected).toDate();

  const resolvedLocale = useMemo(() => {
    return isoCodeWithLibraryCode[language.toUpperCase()];
  }, [language]);

  const Container = ({ children }) => (
    <Styled.CalendarContainer>
      <Styled.Placeholder>{t('date_picker_text')}</Styled.Placeholder>
      <Styled.Calendar>{children}</Styled.Calendar>
    </Styled.CalendarContainer>
  );

  return (
    <Styled.InputDatePicker>
      <DatePicker
        ref={pickerRef}
        selected={selectedDate}
        onChange={onChange}
        dateFormat={dateFormat}
        disabled={disabled}
        calendarContainer={Container}
        locale={resolvedLocale}
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
