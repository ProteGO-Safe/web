import React from 'react';
import { useDispatch } from 'react-redux';
import { ifElse } from 'ramda';
import RatingApp from './RatingApp';
import { rateApplication, rateApplicationShowed, setShowingRateApplication } from '../../store/actions/app';
import useShowRatingApp from './hooks/useShowRatingApp';
import { addDays, getTimestamp } from '../../utils/date';

const RatingAppContainer = () => {
  const dispatch = useDispatch();
  const showRatingApp = useShowRatingApp();

  const handleLikeApp = () => {
    dispatch(rateApplication(true));
  };

  const handleDislikeApp = () => {
    dispatch(rateApplication(false));
  };

  const handleClose = () => {
    dispatch(rateApplicationShowed()).then(() => {
      const days30AfterNow = addDays(getTimestamp(), 30);
      dispatch(setShowingRateApplication(days30AfterNow));
    });
  };

  const renderComponent = () => (
    <RatingApp handleYes={handleLikeApp} handleNo={handleDislikeApp} handleClose={handleClose} />
  );
  const renderEmptyView = () => null;

  return ifElse(() => showRatingApp, renderComponent, renderEmptyView)();
};

export default RatingAppContainer;
