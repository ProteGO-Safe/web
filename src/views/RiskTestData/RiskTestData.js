import React from 'react';

import { Container } from '../../components';
import './RiskTestData.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const RiskTestData = ({
  day,
  onBack,
  questions,
  idToChoiceResolver,
  isToday,
  triageLevelInformation
}) => (
  <div className="view view__risk-test-data">
    <Header onBackClick={onBack} />
    <Container>
      <div className="title">
        <h4 className="h1 text-center medium">Test oceny ryzyka</h4>
        <br />
        <p className="text-center">
          {isToday && 'DZIŚ'} {day}
        </p>
        <br />
      </div>
      <div className="data">
        {questions.map(question => (
          <div key={question.text} className="data__single">
            <p className="text-bold">{question.text}</p>
            {question.items.map(item => (
              <div key={item.name}>
                {question.type !== 'single' && <p>{item.name}</p>}
                <p>{idToChoiceResolver(item.id, item.choices)}</p>
              </div>
            ))}
          </div>
        ))}
        <div className="data__single">
          <p className="text-bold">Przyznana grupa</p>
          <p>{triageLevelInformation}</p>
        </div>
      </div>
    </Container>
    <BottomNavigation />
  </div>
);

export default RiskTestData;
