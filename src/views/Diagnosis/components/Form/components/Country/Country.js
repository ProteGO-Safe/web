import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { withTranslation } from 'react-i18next';
import { Button, FieldSet, T } from '../../../../../../components';
import { Title } from '../../../../Diagnosis.styled';
import { Color } from '../../../../../../theme/colors';

import './Country.scss';

const Country = ({ onChange, onNext, options, selectedValues, t }) => {
  const rootStyle = {
    multiselectContainer: {
      marginBottom: 32
    },
    searchBox: {
      minHeight: 44,
      padding: '0 12px',
      borderRadius: 4,
      border: `1px solid ${Color.lightGray}`
    },
    inputField: {
      margin: 0,
      height: 44,
      width: '100%',
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 16,
      color: Color.lightBlack
    },
    chips: {
      // display: 'none',
      alignItems: 'normal',
      background: Color.primary,
      margin: '6px 6px 0 0'
    },
    optionListContainer: {
      marginTop: 6
    },
    optionContainer: {
      border: `1px solid ${Color.lightGray}`,
      boxShadow: '0 0 6px 0 rgba(0,0,0, 0.3)'
    },
    option: {
      marginTop: 0,
      padding: '8px 12px',
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 14,
      color: Color.lightBlack
    }
  };

  return (
    <>
      <Title>
        <T i18nKey="country_text1" />
      </Title>
      <FieldSet>
        <Multiselect
          options={options}
          displayValue="name"
          onSelect={onChange}
          onRemove={onChange}
          style={rootStyle}
          closeIcon="cancel"
          avoidHighlightFirstOption
          emptyRecordMsg={t('country_text2')}
          placeholder={t('country_text3')}
          selectedValues={selectedValues}
        />
      </FieldSet>
      <Button disabled={selectedValues.length === 0} onClick={onNext} label={<T i18nKey="button_next" />} />
    </>
  );
};

export default withTranslation()(Country);
