import React from 'react';
import { useDispatch } from 'react-redux';
import { showStartScreenSuccess } from '../../store/actions/app';
import StartScreen from './StartScreen';

const StartScreenContainer = () => {
  const dispatch = useDispatch();
  const onStartClick = () => {
    dispatch(showStartScreenSuccess());
  };

  return <StartScreen onStartClick={onStartClick} />;
};

export default StartScreenContainer;
