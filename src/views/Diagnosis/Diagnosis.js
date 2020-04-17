import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { GroupMultiple, GroupSingle, Single } from './components';
import { DiagnosisWrapper, Container } from './Diagnosis.styled';

const Diagnosis = ({
  clearDiagnosis,
  isLoading,
  inProgress,
  question,
  showNavigation
}) => (
  <DiagnosisWrapper className="view view__diagnosis view__diagnosis--single">
    <Header onBackClick={clearDiagnosis} hideMenuButton hideBackButton />
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
    {showNavigation && <BottomNavigation />}
  </DiagnosisWrapper>
);

Diagnosis.propTypes = {
  clearDiagnosis: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  question: PropTypes.shape({})
};

export default Diagnosis;
