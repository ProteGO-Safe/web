import React from 'react';
import { useDispatch } from 'react-redux';
import { showStartScreenSuccess } from '../../store/actions/app';
import StartScreen from './StartScreen';

const StartScreenContainer = () => {
  const dispatch = useDispatch();
  const onStartClick = () => {
    dispatch(showStartScreenSuccess());
  };

  const handleChangeLang = countryCode => console.log(countryCode);

  return (
    <StartScreen
      onStartClick={onStartClick}
      languages={['PL', 'NO', 'UA']}
      customLabels={{
        PL: 'Polski (PL)',
        NO: 'Norski (NO)',
        UA: 'Yкраїнська (UA)'
      }}
      defaultLang="PL"
      onSelect={handleChangeLang}
    />
  );
};

export default StartScreenContainer;
