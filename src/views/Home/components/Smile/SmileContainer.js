import React from 'react';
import { useSelector } from 'react-redux';
import useFilledDiagnosis from '../../../../hooks/useFilledDiagnosis';
import useTriage from '../../../../hooks/useTriage';
import Smile from './Smile';

const SmileContainer = () => {
  const { name: userName } = useSelector(state => state.user);
  const { lastDate } = useFilledDiagnosis();
  const { isCovid, isExposure, riskGroup, IconComponent } = useTriage();

  const getContent = () => {
    if (isCovid) {
      return (
        <>
          Dziękujemy, że myślisz o innych! To odpowiedzialna i solidarna
          decyzja. Przekazana przez Ciebie informacja o ryzyku kontaktu trafi na
          urządzenia osób, które mogły mieć z Tobą kontakt.
        </>
      );
    }
    if (isExposure) {
      return (
        <>
          <strong>
            Moduł powiadamiania o możliwym kontakcie z koronawirusem
          </strong>{' '}
          przeanalizował Twoje dane. Twój wynik to:&nbsp;
          <strong>{riskGroup}</strong>.
        </>
      );
    }
    return (
      <>
        przeanalizowaliśmy Twoje odpowiedzi. Wynik testu z&nbsp;
        <strong className="nowrap">{lastDate}</strong> kwalifikuje Cię do
        grupy:&nbsp;
        <strong>{riskGroup}</strong>.
      </>
    );
  };
  return (
    <Smile
      userName={userName}
      IconComponent={IconComponent}
      content={getContent()}
    />
  );
};

export default SmileContainer;
