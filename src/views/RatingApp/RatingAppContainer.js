import React from 'react';
import { useDispatch } from 'react-redux';
import { ifElse } from 'ramda';
import RatingApp from './RatingApp';
import { rateApplication, rateApplicationShowed } from '../../store/actions/app';
import useShowRatingApp from './hooks/useShowRatingApp';

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
    dispatch(rateApplicationShowed());
  };

  const renderComponent = () => (
    <RatingApp handleYes={handleLikeApp} handleNo={handleDislikeApp} handleClose={handleClose} />
  );
  const renderEmptyView = () => null;

  return ifElse(() => showRatingApp, renderComponent, renderEmptyView)();
};

export default RatingAppContainer;
