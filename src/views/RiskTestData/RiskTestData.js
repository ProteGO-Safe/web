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
        <h6 className="text-center">
          {isToday && 'DZIŚ'} {day}
        </h6>
      </div>
      <div className="data">
        {questions.map(question => (
          <div key={question.text} className="data__single">
            <p className="text-bold small">{question.text}</p>
            {question.items.map(item => (
              <div key={item.name}>
                {question.type !== 'single' && (
                  <p className="small">{item.name}</p>
                )}
                <p className="small">
                  {idToChoiceResolver(item.id, item.choices)}
                </p>
              </div>
            ))}
          </div>
        ))}
        <div className="data__single">
          <p className="text-bold small">Przyznana grupa</p>
          <p className="small">{triageLevelInformation}</p>
        </div>
      </div>
    </Container>
  </div>
);

export default RiskTestData;
