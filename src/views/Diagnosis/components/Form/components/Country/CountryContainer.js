import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { withTranslation } from 'react-i18next';
import Country from './Country';
import { Layout, T } from '../../../../../../components';
import { Container } from '../../Form.styled';
import { DIAGNOSIS_FORM_FIELDS } from '../../../../diagnosis.constants';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../../../constants';
import locations from '../../../../../../services/diagnosisLogic/locations';

const CountryContainer = ({ onBack, onNext, t }) => {
  const { setFieldValue, values } = useFormikContext();
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const existingCountries = locations
      .filter(({ id }) => {
        return values[id] !== undefined;
      })
      .map(({ id, name }) => {
        return {
          id,
          name: <T i18nKey={name} />
        };
      });
    setSelectedCountries(existingCountries);
  }, [values]);

  const availableCountries = (() => {
    return locations.map(value => {
      const { id, name } = value;
      return { id, name: t(name) };
    });
  })();

  const back = () => {
    locations.forEach(({ id }) => {
      delete values[id];
    });
    onBack();
  };

  const hasCovid = id => {
    const {
      extras: { has_local_covid_transmission: covid }
    } = locations.find(({ id: locationId }) => locationId === id);
    return covid;
  };

  const next = () => {
    const mappedSelectedCountries = selectedCountries.map(({ id }) => {
      return { id, choice_id: hasCovid(id) ? VALUE_PRESENT : VALUE_ABSENT };
    });
    const current = [...values[DIAGNOSIS_FORM_FIELDS.QUESTIONS]];
    current.push(mappedSelectedCountries);
    setFieldValue(DIAGNOSIS_FORM_FIELDS.QUESTIONS, current);
    onNext();
  };

  const change = allSelectedCountries => {
    setSelectedCountries(allSelectedCountries);
    locations.forEach(({ id }) => {
      delete values[id];
    });
    allSelectedCountries.forEach(({ id }) => {
      setFieldValue(id, hasCovid(id));
    });
  };

  return (
    <Layout onBackClick={back}>
      <Container>
        <Country onChange={change} onNext={next} options={availableCountries} selectedValues={selectedCountries} />
      </Container>
    </Layout>
  );
};

export default withTranslation()(CountryContainer);
