import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, FieldSet } from '../../components';
import { Header } from '../components';
import './UserData.scss';

const UserData = () => {
  const history = useHistory();
  const handleClick = () => history.push('/user-data/settings');

  return (
    <div className="view view__user-data">
      <Header background={Background} prevUrl="/" />
      <Container>
        <h4 className="text-center medium">Dane</h4>
        <div className="content">
          <p className="p1 medium">W tym miejscu możesz zarządzać swoimi danymi</p>
        </div>
        <FieldSet>
          <Button onClick={handleClick} text="Zarządzaj danymi" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default UserData;
