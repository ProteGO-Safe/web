import styled from 'styled-components';
import { Color } from '../../theme/colors';

import Arrow from '../../assets/img/icons/angle-right-white.svg';

export const Language = styled.div`
  display: flex;
  width: 100%;
  max-width: 232px;
  .flag-select {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: inherit;
    text-align: left;
    &__btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 50px;
      padding: 0 14px;
      color: ${Color.white};
      background: transparent;
      border: 1px solid ${Color.white};
      border-radius: 4px;
      &:focus {
        outline: none;
      }
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 14px;
        width: 12px;
        height: 12px;
        margin-top: -6px;
        background-image: url(${Arrow});
        background-size: 100%;
        transform: rotate(90deg);
      }
      &[aria-expanded='true']:after {
        transform: rotate(-90deg);
      }
      &:before {
        content: ' ';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        z-index: 999;
      }
    }
    &__option {
      &s {
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        max-height: 188px;
        margin: 0;
        padding: 0;
        list-style: none;
        background: ${Color.white};
        border-width: 1px;
        border-style: solid;
        border-color: ${Color.primary};
        border-radius: 4px;
        z-index: 999999;
        animation: openDropDown 0.3s;
        overflow: hidden auto;

        @keyframes openDropDown {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
      &--placeholder {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        cursor: pointer;
      }
      &:not(&--placeholder) {
        &:hover,
        &:focus {
          outline: none;
        }
      }
      &__label {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        position: relative;
        padding-left: 7px;
      }
      &__icon {
        display: block;
        width: 18px;
        height: auto;
        position: relative;
      }
      &.has-label {
        padding: 14px;
        > span {
          display: flex;
          flex-flow: nowrap row;
          justify-content: flex-start;
          align-items: center;
          width: 100% !important;
          height: auto !important;
        }
        &:not(:last-child) {
          border-bottom: 1px solid ${Color.gray_1};
        }
        .flag-select__option__label {
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          color: ${Color.primary};
        }
      }
    }
    .filterBox {
      width: 100%;
      input {
        width: 90%;
        margin: 0 4%;
        &:focus {
          outline: none;
        }
      }
    }
    .hidden {
      display: none;
    }
    .no--focus {
      pointer-events: none;
    }
  }
`;
