import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentModal, FooterModal } from './components';
import useModalContext from '../../hooks/useModalContext';
import { getInteroperabilityModalShowed } from '../../store/selectors/app';
import { hideInteroperabilityModal } from '../../store/actions/app';

const InfoInteroperability = () => {
  const { openModal, onClose } = useModalContext();

  const dispatch = useDispatch();
  const interoperabilityModalShowed = useSelector(
    getInteroperabilityModalShowed
  );

  const handleModalClickTrue = useCallback(() => {
    dispatch(hideInteroperabilityModal());
    // TODO: PSAFE-2666 - goTo(Routes)
    // eslint-disable-next-line
  }, []);

  const handleModalClickFalse = useCallback(() => {
    dispatch(hideInteroperabilityModal());
    onClose();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (interoperabilityModalShowed) {
      onClose();
      return;
    }
    openModal(
      <ContentModal
        title="info_interoperability_text1"
        content="info_interoperability_text2"
      />,
      'inner-content',
      null,
      <FooterModal
        handleClickTrue={handleModalClickTrue}
        handleClickFalse={handleModalClickFalse}
      />
    );
    // eslint-disable-next-line
  }, [interoperabilityModalShowed]);

  return null;
};

export default InfoInteroperability;
