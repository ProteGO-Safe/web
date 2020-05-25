import React from 'react';
import { useHistory } from 'react-router-dom';
import Error from './Error';
import { Color } from '../../theme/colors';

import IconAlert from '../../assets/img/icons/icon-alert-big.svg';

const ErrorContainer = () => {
  const history = useHistory();
  const buttons = [
    {
      onClick: history.goBack,
      text: 'Wróć'
    }
  ];

  return (
    <Error
      icon={IconAlert}
      buttons={buttons}
      colorTitle={Color.danger}
      title="Wystąpił błąd podczas pobierania danych."
      text="Spróbuj ponownie później."
    />
  );
};

export default ErrorContainer;
