import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, FieldSet, Imprint } from '../../components';
import './UserData.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { useSelector } from 'react-redux';

const UserData = () => {
  const history = useHistory();
  const userName = useSelector(state => state.user.name);

  return (
    <div className="view view__user-data">
      <Header />
      <Container>
        <h4 className="text-center medium">Moje dane</h4>
        <div className="content">
          <h3 className="medium">{userName}</h3>
          <p className="p1 medium">
            Poniżej znajdują się dane, które podałeś w trakcie rejestracji swojego konta.
          </p>
          <Imprint hidePhoneNumber />
        </div>
        <FieldSet>
          <Button
            onClick={() => history.push(Routes.UserDataSettings)}
            text="Zarządzaj danymi"
          />
          <Button
            onClick={() => history.push(Routes.UserData)}
            disabled={true}
            type="secondary"
            text="Zmień dane"
          />
        </FieldSet>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default UserData;
