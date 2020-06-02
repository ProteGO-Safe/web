import React, { useEffect, useState, useRef } from 'react';
import useTriage from '../../../../hooks/useTriage';
import { InfoContainer } from './TriageRiskInformation.styled';
import { CallHelpline } from '../../../../components/CallHelpline';

const TriageRiskInformation = () => {
  const { color, content } = useTriage();

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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <InfoContainer color={color} ref={ref}>
      <p>{content}</p>
      <CallHelpline
        hideText={hideText}
        color={color}
        phoneNumber="222 500 115"
      />
    </InfoContainer>
  );
};

export default TriageRiskInformation;
