import styled from 'styled-components';
import { Color } from '../../theme/colors';

import ArrowIcon from '../../assets/img/icons/angle-right-blue.svg';
import { ReactComponent as CalendarIcon } from '../../assets/img/icons/calendar.svg';

export const Icon = styled(CalendarIcon)`
  position: absolute;
  top: 50%;
  right: 20px;
  display: block;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  z-index: 0;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: -44px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${Color.lightGray};
  border-radius: 4px;
  background-color: ${Color.white};
`;

export const Calendar = styled.div`
  position: relative;
  padding-bottom: 16px;
`;

export const InputDatePicker = styled.div`
  position: relative;
  width: 100%;

  .react-datepicker-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 1;
  }
  .react-datepicker {
    &-popper {
      position: relative !important;
      transform: none !important;
      width: 100%;
      &[data-placement^='bottom'] {
        margin-top: 0;
      }
    }
    &__header {
      padding-top: 0;
      background-color: ${Color.white};
      border: 0;
    }
    &__month-container {
      width: 100%;
    }
    &__day-names,
    &__week {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px;
    }
    &__month {
      margin: 0;
    }
    &__day-name,
    &__day,
    &__time-name {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    &__day--today,
    &__month-text--today,
    &__quarter-text--today,
    &__year-text--today {
      font-weight: 400;
    }
    &__day--outside-month {
      opacity: 0.2;
    }
    &__day--selected {
      background-color: ${Color.primary}!important;
    }
    &__day-name {
      color: ${Color.gray_2};
    }
    &__current-month {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: ${Color.primary};
    }
    &__navigation {
      position: absolute;
      top: 10px;
      width: 24px;
      height: 24px;
      padding: 0;
      border: 0;
      line-height: 16px;
      text-align: center;
      cursor: pointer;
      z-index: 1;
      text-indent: -999em;
      overflow: hidden;
      background-image: url(${ArrowIcon});
      background-size: 16px 16px;
      background-repeat: no-repeat;
      background-position: center;
      color: ${Color.primary};
      outline: none;
      &--next {
        right: 24px;
      }
      &--previous {
        left: 24px;
        transform: rotate(-180deg);
      }
    }
    &__input-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      > input {
        height: 44px;
        width: 100%;
        padding: 2px 44px 2px 12px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: ${Color.lightGray};
        font-size: 18px;
        line-height: 24px;
        color: ${Color.primary};
        background: transparent;
        -webkit-appearance: none;
        -webkit-user-select: none;
        &:focus {
          outline: none !important;
        }
      }
    }
    &__day:hover,
    &__month-text:hover,
    &__quarter-text:hover,
    &__year-text:hover {
      background-color: inherit;
    }
  }
`;

export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${Color.primary};
  text-align: center;
`;
