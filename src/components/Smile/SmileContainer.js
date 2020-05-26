import React from 'react';
import { useSelector } from 'react-redux';
import { getLastDate } from '../../utils/calendar';
import useFilledDays from '../../hooks/useFilledDays';
import useTriage from '../../hooks/useTriage';
import Smile from './Smile';

const SmileContainer = () => {
  const { name: userName } = useSelector(state => state.user);
  const filledDays = useFilledDays();
  const lastDate = getLastDate(filledDays);
  const { isExposure, riskGroup, IconComponent } = useTriage();

  const getContent = () => {
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
        przeanalizowaliśmy Twoje odpowiedzi. Wynik testu z{' '}
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
