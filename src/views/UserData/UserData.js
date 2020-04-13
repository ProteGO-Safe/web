import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, FieldSet } from '../../components';
import './UserData.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const UserData = () => {
  const history = useHistory();
  const handleClick = () => history.push(Routes.UserDataSettings);

  return (
    <div className="view view__user-data">
      <Header onBackClick={() => history.push(Routes.PrivacyPolicy)} />
      <Container>
        <h4 className="text-center medium">Dane</h4>
        <div className="content">
          <p className="p1 medium">
            W tym miejscu możesz zarządzać swoimi danymi
          </p>
        </div>
        <FieldSet>
          <Button onClick={handleClick} text="Zarządzaj danymi" />
        </FieldSet>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default UserData;
