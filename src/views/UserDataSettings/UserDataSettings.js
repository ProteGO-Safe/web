import React from 'react';
import { Button, Container, FieldSet } from '../../components';
import { ModalContent } from './components';
import '../UserData/UserData.scss';
import useModalContext from '../../hooks/useModalContext';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const UserDataSettings = () => {
  const { openModal } = useModalContext();
  const handleClick = () => openModal(<ModalContent />, 'dialog');

  return (
    <div className="view view__user-data">
      <Header />
      <Container>
        <h4 className="text-center medium">Zarządzaj danymi</h4>
        <div className="content">
          <p className="p1 medium">
            Jeżeli wymażesz swoje dane, aplikacja stanie się bezużyteczna. W
            takim przypadku będzie trzeba ponownie uzupełnić wszystkie dane.
            Archiwum Ankiet Oceny Ryzyka i Mój Dziennik Zdrowia zostanie
            bezpowrotnie usunięte.
          </p>
        </div>
        <FieldSet>
          <Button onClick={handleClick} text="Wymaż moje dane" />
        </FieldSet>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default UserDataSettings;
