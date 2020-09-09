import React from 'react';
import { withTranslation } from 'react-i18next';
import { Multiselect } from 'multiselect-react-dropdown';
import { Button, FieldSet } from '../../../../components';
import { Title } from '../../Diagnosis.styled';
import { Color } from '../../../../theme/colors';

import './Country.scss';
import locations from '../../../../services/diagnosisLogic/locations.json';

const Country = ({
  t,
  handleSubmit,
  selectedCountries,
  setSelectedCountries
}) => {
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

  const options = locations.map(location => {
    const {
      id,
      name,
      extras: { has_local_covid_transmission }
    } = location;
    return {
      name: t(name),
      id,
      covid: has_local_covid_transmission
    };
  });

  const handleChange = allValues => {
    const mappedValues = allValues.map(value => {
      const { id, covid } = value;
      if (covid) {
        return {
          id,
          choice_id: 'present'
        };
      }
      return {
        id,
        choice_id: 'absent'
      };
    });
    setSelectedCountries(mappedValues);
  };

  return (
    <>
      <Title>{t('country_text1')}</Title>
      <FieldSet>
        <Multiselect
          options={options}
          displayValue="name"
          onSelect={handleChange}
          onRemove={handleChange}
          style={rootStyle}
          closeIcon="cancel"
          avoidHighlightFirstOption
          emptyRecordMsg={t('country_text2')}
          placeholder={t('country_text3')}
        />
      </FieldSet>
      <Button
        disabled={selectedCountries.length === 0}
        onClick={handleSubmit}
        label={t('button_next')}
      />
    </>
  );
};

export default withTranslation()(Country);
