import React, { useEffect, useState, useCallback, useMemo } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import CurrentRestrictions from './CurrentRestrictions';
import useModalContext from '../../hooks/useModalContext';
import { Layout } from '../../components';
import { NoData } from './components/NoData';
import {
  fetchDistrictsStatus,
  fetchForceDistrictsStatus,
  fetchSubscribedDistricts,
  subscribeDistrict,
  unsubscribeDistrict
} from '../../store/actions/restrictions';
import {
  getResult,
  getSubscribedDistricts,
  getUpdated,
  getVoivodeships
} from '../../store/selectors/restrictions';
import {
  flatDistricts,
  prepareVoivodeshipsWithDistricts
} from './currentRestrictions.helpers';
import { ModalContent, ModalFooter } from './components';
import { getRestrictionsModalShowed } from '../../store/selectors/app';
import { hideRestrictionsModal } from '../../store/actions/app';
import { FAILED } from '../../constants';

const dateFormat = 'D-MM-YYYY';

const CurrentRestrictionsContainer = () => {
  const { openModal, onClose } = useModalContext();

  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');
  const voivodeships = useSelector(getVoivodeships);
  const updated = useSelector(getUpdated);
  const restrictionsModalShowed = useSelector(getRestrictionsModalShowed);
  const subscribedDistricts = useSelector(getSubscribedDistricts);
  const fetchingDistrictsResult = useSelector(getResult);
  const [flattenDistricts, setFlattenDistricts] = useState([]);
  const [districts, setDistricts] = useState([]);

  const isFlatten = useMemo(() => filterText.length > 2, [filterText]);
  const dateUpdate = useMemo(
    () => (updated ? moment.unix(updated).format(dateFormat) : ''),
    [updated]
  );

  useEffect(() => {
    dispatch(fetchDistrictsStatus());
    dispatch(fetchSubscribedDistricts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (restrictionsModalShowed) {
      onClose();
      return;
    }
    openModal(
      <ModalContent />,
      'inner-content',
      null,
      <ModalFooter handleClick={handleModalClick} />
    );
    // eslint-disable-next-line
  }, [restrictionsModalShowed]);

  useEffect(() => {
    setDistricts(
      prepareVoivodeshipsWithDistricts(voivodeships, subscribedDistricts)
    );
  }, [voivodeships, subscribedDistricts]);

  useEffect(() => {
    if (filterText.length > 2) {
      setFlattenDistricts(
        flatDistricts(voivodeships, filterText, subscribedDistricts)
      );
    }
  }, [filterText, voivodeships, subscribedDistricts]);

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;
    setFilterText(value.toLocaleLowerCase());
  }, []);

  const handleModalClick = useCallback(() => {
    dispatch(hideRestrictionsModal());
    // eslint-disable-next-line
  }, []);

  const handleFetchForceDistrictsStatus = useCallback(() => {
    dispatch(fetchForceDistrictsStatus());
    // eslint-disable-next-line
  }, []);

  const handleResetInput = useCallback(() => {
    setFilterText('');
  }, []);

  const handleSubscribeDistrict = useCallback(districtId => {
    dispatch(subscribeDistrict(districtId));
    // eslint-disable-next-line
  }, []);

  const handleUnsubscribeDistrict = useCallback(districtId => {
    dispatch(unsubscribeDistrict(districtId));
    // eslint-disable-next-line
  }, []);

  return (
    <Layout isNavigation noMargin>
      {fetchingDistrictsResult === FAILED ? (
        <NoData handleClick={() => handleFetchForceDistrictsStatus()} />
      ) : (
        <CurrentRestrictions
          filterText={filterText}
          flattenDistricts={flattenDistricts}
          subscribedDistricts={subscribedDistricts}
          handleChangeInput={handleChangeInput}
          handleResetInput={handleResetInput}
          handleSubscribeDistrict={handleSubscribeDistrict}
          handleUnsubscribeDistrict={handleUnsubscribeDistrict}
          isFlatten={isFlatten}
          listDistrictsItems={districts}
          dateUpdate={dateUpdate}
        />
      )}
    </Layout>
  );
};

export default CurrentRestrictionsContainer;
