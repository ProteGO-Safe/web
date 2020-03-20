import React from 'react';
import { Banner } from '../../components/Banner';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Container } from '../../components';
import { GroupMultiple, GroupSingle, Single } from './components';

const Diagnosis = ({ isLoading, question }) => (
  <div className="view view__diagnosis view__diagnosis--single">
    <Banner background={Background}>
      <Back onClick={() => null} />
    </Banner>
    <Container>
      {!isLoading && question && question.type === 'single' && (
        <Single question={question} />
      )}
      {!isLoading && question && question.type === 'group_single' && (
        <GroupSingle question={question} />
      )}
      {!isLoading && question && question.type === 'group_multiple' && (
        <GroupMultiple question={question} />
      )}
    </Container>
  </div>
);

export default Diagnosis;
