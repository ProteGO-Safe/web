import React, { useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Collapse } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem } from '../../theme/typography';
import { Title } from './Hospitals.styled';
import PhoneNumber from '../../components/PhoneNumber';
import './HospitalsList.scss';
import useLoaderContext from '../../hooks/useLoaderContext';
import { fetchHospitals } from '../../store/actions/externalData';

const HospitalsList = () => {
  const dispatch = useDispatch();

  const { hospitalsData, isFetching } = useSelector(
    state => state.externalData
  );
  const { setLoader } = useLoaderContext();

  const phoneRegex = /([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{9,})/g;

  useEffect(() => {
    if (isFetching) {
      setLoader(true);
      return;
    }
    setLoader(false);
  }, [isFetching, setLoader]);

  useEffect(() => {
    if (!hospitalsData) {
      dispatch(fetchHospitals());
    }
  }, [hospitalsData, dispatch]);

  const renderAddressLine = address => {
    return reactStringReplace(address, phoneRegex, (match, i) => (
      <PhoneNumber key={i}>{match}</PhoneNumber>
    ));
  };

  if (!hospitalsData) {
    return null;
  }

  const { elements: voivodeships = [], watermark } = hospitalsData;

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>Szpitale zakaźne:</Title>
          {voivodeships.map((voivodeship, key) => (
            <Collapse key={voivodeship.name} title={voivodeship.name}>
              <List>
                {voivodeship.items.map(item => (
                  <ListItem
                    key={`${voivodeship.name}-${item.city}-${item.address}`}
                  >
                    <strong>{item.city}</strong>
                    <p>{renderAddressLine(item.address)}</p>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          ))}
          <p className="watermark details">{watermark}</p>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default HospitalsList;
