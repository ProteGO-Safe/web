import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentModal, FooterModal } from './components';
import useModalContext from '../../hooks/useModalContext';
import useNavigation from '../../hooks/useNavigation';
import { getInteroperabilityModalShowed } from '../../store/selectors/app';
import { hideInteroperabilityModal } from '../../store/actions/app';
import { Routes } from '../../services/navigationService/routes';
import { TYPE } from '../../components/Modal/Modal.helpers';

const InfoInteroperability = () => {
  const { openModal, onClose } = useModalContext();
  const { goTo } = useNavigation();

  const dispatch = useDispatch();
  const interoperabilityModalShowed = useSelector(
    getInteroperabilityModalShowed
  );

  const handleModalClickTrue = useCallback(() => {
    dispatch(hideInteroperabilityModal());
    goTo(Routes.WarningInEurope);
    onClose();
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
      TYPE.DEFAULT,
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
