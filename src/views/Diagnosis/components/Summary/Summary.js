import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Button, Container, FieldSet } from '../../../../components';
import success from '../../../../assets/img/icons/success-icon.svg';
import Header from '../../../../components/Header/Header';
import { Title } from '../../Diagnosis.styled';
import './Summary.scss';

const Summary = ({ t, onSave }) => (
  <div className="view view__summary">
    <Header hideBackButton />
    <Container>
      <div className="content">
        <img
          className="icon"
          src={success}
          alt={t('diagnosis_summary_text1')}
        />
        <Title>{t('diagnosis_summary_text1')}</Title>
        <p className="big">{t('diagnosis_summary_text2')}</p>
        <p className="big">{t('diagnosis_summary_text3')}</p>
        <small>{t('diagnosis_summary_text4')}</small>
      </div>
      <FieldSet>
        <Button onClick={onSave} label={t('diagnosis_summary_text5')} />
      </FieldSet>
    </Container>
  </div>
);

Summary.propTypes = {
  onSave: PropTypes.func.isRequired
};

export default withTranslation()(Summary);
