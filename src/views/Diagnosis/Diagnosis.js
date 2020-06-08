import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Country, GroupMultiple, GroupSingle, Single } from './components';
import { DiagnosisWrapper, Container } from './Diagnosis.styled';

const Diagnosis = ({
  clearDiagnosis,
  isCountryQuestion,
  isLoading,
  inProgress,
  question,
  showNavigation
}) => {
  const chooseQuestion = () => {
    const { type } = question;
    if (isLoading || !inProgress) {
      return '';
    }
    if (isCountryQuestion()) {
      return <Country />;
    }
    if (type === 'single') {
      return <Single question={question} />;
    }
    if (type === 'group_single') {
      return <GroupSingle question={question} />;
    }
    if (type === 'group_multiple') {
      return <GroupMultiple question={question} />;
    }

    return '';
  };
  return (
    <DiagnosisWrapper className="view view__diagnosis view__diagnosis--single">
      <Header onBackClick={clearDiagnosis} hideBackButton />
      <Container>{chooseQuestion()}</Container>
      {showNavigation && <BottomNavigation />}
    </DiagnosisWrapper>
  );
};

Diagnosis.propTypes = {
  clearDiagnosis: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  isCountryQuestion: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  question: PropTypes.shape({})
};

export default Diagnosis;
