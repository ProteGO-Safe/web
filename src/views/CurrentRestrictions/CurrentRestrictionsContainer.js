import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import CurrentRestrictions from './CurrentRestrictions';
import { Layout } from '../../components';
import { fetchDistrictsStatus } from '../../store/actions/restrictions';
import {
  getUpdateTimestamp,
  getVoivodeships
} from '../../store/selectors/restrictions';
import flatDistricts from './currentRestrictions.helpers';

const dateFormat = 'D-MM-YYYY';

const CurrentRestrictionsContainer = () => {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState('');
  const voivodeships = useSelector(getVoivodeships);
  const updateTimestamp = useSelector(getUpdateTimestamp);
  const [flattenDistricts, setFlattenDistricts] = useState([]);

  const isFlatten = useMemo(() => filterText.length > 2, [filterText]);
  const dateUpdate = useMemo(
    () =>
      updateTimestamp ? moment.unix(updateTimestamp).format(dateFormat) : '',
    [updateTimestamp]
  );

  useEffect(() => {
    dispatch(fetchDistrictsStatus());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterText.length > 2) {
      setFlattenDistricts(flatDistricts(voivodeships, filterText));
    }
  }, [filterText, voivodeships]);

  const followDistrictsItems = [
    {
      id: 1,
      name: 'grodziski',
      state: 1,
      is_subscribed: true
    },
    {
      id: 5,
      name: 'garwoliński',
      state: 0,
      is_subscribed: false
    }
  ];

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;
    setFilterText(value.toLocaleLowerCase());
  }, []);

  const handleResetInput = useCallback(() => {
    setFilterText('');
  }, []);

  const handleSubscribeDistrict = useCallback((districtId) => {
    // todo PSAFE-2381
  }, []);

  return (
    <Layout isNavigation noMargin>
      <CurrentRestrictions
        filterText={filterText}
        flattenDistricts={flattenDistricts}
        followDistrictsItems={followDistrictsItems}
        handleChangeInput={handleChangeInput}
        handleResetInput={handleResetInput}
        handleSubscribeDistrict={handleSubscribeDistrict}
        isFlatten={isFlatten}
        listDistrictsItems={voivodeships}
        dateUpdate={dateUpdate}
      />
    </Layout>
  );
};

export default CurrentRestrictionsContainer;
