import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, FieldSet } from '../../components';
import { Header } from '../components';
import { ModalContent } from './components';
import '../UserData/UserData.scss';
import useModalContext from '../../hooks/useModalContext';

const UserDataSettings = () => {
  const { openModal } = useModalContext();
  const handleClick = () => openModal(<ModalContent />, 'dialog');

  return (
    <div className="view view__user-data">
      <Header background={Background} prevUrl="/user-data" />
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
          <Button onClick={handleClick} text="Wymarz moje dane" />
        </FieldSet>
      </Container>
    </div>
  );
};

export default UserDataSettings;
