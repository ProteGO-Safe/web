import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import CurrentRestrictions from './CurrentRestrictions';
import { Layout } from '../../components';
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

const dateFormat = 'D-MM-YYYY';

const CurrentRestrictionsContainer = () => {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');
  const voivodeships = useSelector(getVoivodeships);
  const updateTimestamp = useSelector(getUpdateTimestamp);
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
