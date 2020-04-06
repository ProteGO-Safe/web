import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components/Header';
import { Container } from '../../components';
import { GroupMultiple, GroupSingle, Single } from './components';

const Diagnosis = ({ clearDiagnosis, isLoading, inProgress, question }) => (
  <div className="view view__diagnosis view__diagnosis--single">
    <Header onBackClick={clearDiagnosis} />
    <Container>
      {!isLoading && inProgress && question && question.type === 'single' && (
        <Single question={question} />
      )}
      {!isLoading &&
        inProgress &&
        question &&
        question.type === 'group_single' && <GroupSingle question={question} />}
      {!isLoading &&
        inProgress &&
        question &&
        question.type === 'group_multiple' && (
          <GroupMultiple question={question} />
        )}
    </Container>
  </div>
);

Diagnosis.propTypes = {
  clearDiagnosis: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  question: PropTypes.shape({})
};

export default Diagnosis;
