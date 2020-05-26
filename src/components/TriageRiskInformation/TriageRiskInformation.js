import React, { useEffect, useState, useRef } from 'react';
import useTriage from '../../hooks/useTriage';
import { InfoContainer } from './TriageRiskInformation.styled';
import { CallHelpline } from '../CallHelpline';

const TriageRiskInformation = () => {
  const { isDangerous = false, color, content } = useTriage();

  const ref = useRef(null);
  const [hideText, setHideText] = useState(false);

  const onScroll = () => {
    const offsetTopElement = ref.current.offsetTop;
    const scrollPosition = window.scrollY;

    return offsetTopElement < scrollPosition
      ? setHideText(true)
      : setHideText(false);
  };

  useEffect(() => {
    if (isDangerous) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    isDangerous && (
      <InfoContainer color={color} ref={ref}>
        <p>{content}</p>
        <CallHelpline
          hideText={hideText}
          color={color}
          phoneNumber="0 22 000 111 222"
        />
      </InfoContainer>
    )
  );
};

export default TriageRiskInformation;
