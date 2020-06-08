import React, { useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Collapse,
  BottomNavigation,
  Header,
  PhoneNumber
} from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem } from '../../theme/typography';
import { Title } from './Hospitals.styled';
import './HospitalsList.scss';
import useLoaderContext from '../../hooks/useLoaderContext';
import Routes from '../../routes';
import { fetchHospitals, clearError } from '../../store/actions/externalData';

const HospitalsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { hospitalsData, isFetching, error } = useSelector(
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
    if (!hospitalsData && !error) {
      dispatch(fetchHospitals());
    }
  }, [hospitalsData, error, dispatch]);

  const renderAddressLine = address => {
    return reactStringReplace(address, phoneRegex, (match, i) => (
      <PhoneNumber key={i}>{match}</PhoneNumber>
    ));
  };

  if (error) {
    dispatch(clearError());
    history.push(Routes.Error);
  }

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
