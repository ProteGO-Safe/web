import React from 'react';
import { Country, GroupMultiple, GroupSingle, Single } from './components';
import { DiagnosisWrapper } from './Form.styled';

const Form = ({ onBack, onNext, question }) => {
  const isCountryQuestion = question.items.some(value => value.id === 'p_5');

  const renderContent = Component => <Component question={question} onBack={onBack} onNext={onNext} />;

  const chooseQuestion = () => {
    const { type } = question;
    if (isCountryQuestion) {
      return renderContent(Country);
    }
    if (type === 'single') {
      return renderContent(Single);
    }
    if (type === 'group_single') {
      return renderContent(GroupSingle);
    }
    if (type === 'group_multiple') {
      return renderContent(GroupMultiple);
    }

    return null;
  };

  return (
    <DiagnosisWrapper className="view view__diagnosis view__diagnosis--single" data-cy="diagnosis-wrapper">
      {chooseQuestion()}
    </DiagnosisWrapper>
  );
};

export default Form;
