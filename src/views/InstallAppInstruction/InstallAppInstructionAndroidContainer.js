import React from 'react';
import InstallAppInstruction from './InstallAppInstruction';
import Icon1 from '../../assets/img/icons/dots.svg';
import Icon2 from '../../assets/img/icons/add-to-desktop.svg';
import Icon3 from '../../assets/img/icons/check-mark.svg';
import Icon4 from '../../assets/img/logo/sign.png';

const InstallAppInstructionAndroidContainer = () => {
  const steps = [
    {
      icon: Icon1,
      key: 1,
      text:
        'Odszukaj w przeglądarce symbol "menu" (trzy kropki) na górnym pasku przeglądarki'
    },
    {
      icon: Icon2,
      key: 2,
      text: 'W otwartej liście znajdź przycisk "Dodaj do ekranu początkowego"'
    },
    {
      icon: Icon3,
      key: 3,
      text:
        'Po naciśnięciu i akceptacji aplikacja zainstaluj się na Twoim telefonie.'
    },
    {
      icon: Icon4,
      key: 4,
      text:
        'Na głównym ekranie telefonu znajdź i naciśnij ikonę aplikacji "SafeSafe"'
    }
  ];

  return <InstallAppInstruction steps={steps} />;
};

export default InstallAppInstructionAndroidContainer;
