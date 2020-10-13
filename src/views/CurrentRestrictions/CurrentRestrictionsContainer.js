import React, { useEffect, useState, useCallback, useMemo } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import CurrentRestrictions from './CurrentRestrictions';
import useModalContext from '../../hooks/useModalContext';
import { Layout } from '../../components';
import { NoData } from './components/NoData';
import {
  fetchDistrictsStatus,
  fetchSubscribedDistricts,
  subscribeDistrict,
  unsubscribeDistrict
} from '../../store/actions/restrictions';
import {
  getSubscribedDistricts,
  getUpdateTimestamp,
  getVoivodeships
} from '../../store/selectors/restrictions';
import {
  flatDistricts,
  prepareVoivodeshipsWithDistricts
} from './currentRestrictions.helpers';
import { ModalContent, ModalFooter } from './components';
import { getRestrictionsModalShowed } from '../../store/selectors/app';
import { hideRestrictionsModal } from '../../store/actions/app';

const dateFormat = 'D-MM-YYYY';

const CurrentRestrictionsContainer = () => {
  const { openModal } = useModalContext();

  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');
  const voivodeships = useSelector(getVoivodeships);
  const updateTimestamp = useSelector(getUpdateTimestamp);
  const restrictionsModalShowed = useSelector(getRestrictionsModalShowed);
  const subscribedDistricts = useSelector(getSubscribedDistricts);
  const [flattenDistricts, setFlattenDistricts] = useState([]);
  const [districts, setDistricts] = useState([]);

  const isFlatten = useMemo(() => filterText.length > 2, [filterText]);
  const dateUpdate = useMemo(
    () =>
      updateTimestamp ? moment.unix(updateTimestamp).format(dateFormat) : '',
    [updateTimestamp]
  );

  useEffect(() => {
    dispatch(fetchDistrictsStatus());
    dispatch(fetchSubscribedDistricts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!restrictionsModalShowed) {
      openModal(
        <ModalContent />,
        'inner-content',
        null,
        <ModalFooter handleClick={handleModalClick} />
      );
    }
    // eslint-disable-next-line
  }, []);

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
      <NoData handleClick={() => null} />
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
    </Layout>
  );
};

export default CurrentRestrictionsContainer;
