import React from 'react';

import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { Header } from '../components';
import './RiskTestData.scss';

const RiskTestData = ({
  day,
  questions,
  idToChoiceResolver,
  isToday,
  triageLevelInformation
}) => (
  <div className="view view__risk-test-data">
    <Header background={Background} prevUrl="/risk-test" />
    <Container>
      <div className="title">
        <h4 className="h1 text-center medium">Test oceny ryzyka</h4>
        <br/>
        <p className="text-center">
          {isToday && 'DZIŚ'} {day}
        </p>
        <br/>
      </div>
      <div className="data">
        {questions.map(question => (
          <div key={question.text} className="data__single">
            <p className="text-bold">{question.text}</p>
            {question.items.map(item => (
              <div key={item.name}>
                {question.type !== 'single' && (
                  <p>{item.name}</p>
                )}
                <p>
                  {idToChoiceResolver(item.id, item.choices)}
                </p>
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
  </div>
);

export default RiskTestData;
