import React from 'react';
import { useHistory } from 'react-router-dom';

import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './RiskTestData.scss';

const RiskTestData = ({
  day,
  questions,
  idToChoiceResolver,
  isToday,
  triageLevelInformation
}) => {
  const history = useHistory();
  const handleBack = () => history.push('/risk-test');

  return (
    <div className="view view__risk-test-data">
      <Banner background={Background}>
        <Back onClick={handleBack} />
        <Brand content={false} small white />
      </Banner>
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
};

export default RiskTestData;
