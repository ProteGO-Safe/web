import React, { useEffect, useRef, useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-GB';
import de from 'date-fns/locale/de';
import tr from 'date-fns/locale/tr';
import ru from 'date-fns/locale/ru';
import * as Styled from './InputDatePicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import useLanguage from '../../hooks/useLanguage';
import { AVAILABLE_LANGUAGES } from '../../constants';
import { T } from '../index';

const isoCodeWithLibraryCode = {
  [AVAILABLE_LANGUAGES.pl.toUpperCase()]: pl,
  [AVAILABLE_LANGUAGES.en.toUpperCase()]: en,
  [AVAILABLE_LANGUAGES.uk.toUpperCase()]: uk,
  [AVAILABLE_LANGUAGES.de.toUpperCase()]: de,
  [AVAILABLE_LANGUAGES.tr.toUpperCase()]: tr,
  [AVAILABLE_LANGUAGES.ru.toUpperCase()]: ru
};

const InputDatePicker = ({ dateFormat, disabled, onChange, selected }) => {
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
      <Styled.Placeholder>
        <T i18nKey="date_picker_text" />
      </Styled.Placeholder>
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

export default InputDatePicker;
