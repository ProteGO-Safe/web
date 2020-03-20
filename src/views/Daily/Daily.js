import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet,
  Legend
} from '../../components';

const Daily = () => {
  const history = useHistory();

  return (
    <div className="view view__my-health">
      <Banner background={Background}>
        <Back onClick={() => history.push('/')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="h1 text-center medium">Dziennik</h4>
        <Legend />
        <div className="today">
          <Button
            onClick={() => null}
            text="DZIŚ 19-03-2020 - KLIKNIJ I UZUPEŁNIJ DANE"
            type="success-blank"
          />
        </div>
        <div className="line" />
        <FieldSet>
          <Button onClick={() => null} text="środa 18-03-2020" type="black" />
          <Button
            onClick={() => null}
            text="wtorek 17-03-2020"
            type="success"
          />
          <Button
            onClick={() => null}
            text="poniedziałek 16-03-2020"
            type="black"
          />
        </FieldSet>
      </Container>
    </div>
  );
};

export default Daily;
