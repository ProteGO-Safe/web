import React from 'react';
import { Banner } from '../../components/Banner';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Container } from '../../components';
import { GroupMultiple, GroupSingle, Single } from './components';

const Diagnosis = ({ isLoading, inProgress, question, clearDiagnosis }) => (
  <div className="view view__diagnosis view__diagnosis--single">
    <Banner background={Background}>
      <Back onClick={clearDiagnosis} />
    </Banner>
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

export default Diagnosis;
