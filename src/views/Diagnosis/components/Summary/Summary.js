import React from 'react';
import PropTypes from 'prop-types';

import { Banner, Button, Container, FieldSet, User } from '../../../../components';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import Background from '../../../../assets/img/banners/banner-1.png';

import './Summary.scss';

const Summary = ({ onSave, onTryAgain }) => (
  <div className="view view__summary">
    <Banner background={Background} />
    <Container>
      <div className="content">
        <h4 className="medium">Świetna robota!</h4>
        <p>Wspólnie mamy większe szanse opanować epidemię!</p>
        <h5>Podsumujmy:</h5>
      </div>
      <User />
      <div className="box">
        <p className="medium text-bold">
          Kliknij poniżej, aby zapisać odpowiedzi
        </p>
        <p className="smaller">Będą one dostępne w Twoim "Dzienniku"</p>
      </div>
      <div className="line" />
      <FieldSet>
        <Button icon={Icon} onClick={onSave} text="Zapisz" type="primary" />
        <Button onClick={onTryAgain} text="Wróć i popraw dane" type="blank" />
      </FieldSet>
    </Container>
  </div>
);

Summary.propTypes = {
  onSave: PropTypes.func.isRequired,
  onTryAgain: PropTypes.func.isRequired
};

export default Summary;
