import React from 'react';
import { useHistory } from 'react-router-dom';

import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './RiskTestData.scss';

const RiskTestData = () => {
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
          <h6 className="text-center">DZIŚ 19-03-2020</h6>
        </div>
        <div className="data">
          <div className="data__single">
            <p className="text-bold small">
              Czy w ciągu ostatniego tygodnia wychodziłeś z domu?
            </p>
            <p className="small">nie</p>
          </div>
          <div className="data__single">
            <p className="text-bold small">Temperatura</p>
            <p className="small">36,9 - 37,9</p>
          </div>
          <div className="data__single">
            <p className="text-bold small">Objawy</p>
            <p className="small">brak</p>
          </div>
          <div className="data__single">
            <p className="text-bold small">Przyznana grupa</p>
            <p className="small">niewielkie ryzyko infekcji</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RiskTestData;
