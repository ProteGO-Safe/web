import React from 'react';
import { cond, is, T } from 'ramda';

import Hospitals from './Hospitals.json';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Collapse } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem } from '../../theme/typography';
import { Title } from './Hospitals.styled';
import PhoneNumber from '../../components/PhoneNumber';
import './HospitalsList.scss';

const HospitalsList = () => {
  const { voivodeships } = Hospitals;

  const renderSimpleNumber = phone => (
    <li key={phone}>
      <PhoneNumber>{phone}</PhoneNumber>
    </li>
  );

  const renderComplexNumber = phone => (
    <li key={`phones-${phone.type}`}>
      <strong>{phone.type}</strong>:{' '}
      {phone.items.map((number, index) => (
        <>
          <PhoneNumber key={number}>{number}</PhoneNumber>
          {phone.items.length - 1 !== index ? ', ' : ''}
        </>
      ))}
    </li>
  );

  const renderPhoneNumber = cond([
    [is(String), renderSimpleNumber],
    [T, renderComplexNumber]
  ]);

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
                    <p>{item.address}</p>
                    {item.phones.length ? (
                      <>
                        <div className="phone">Telefon:</div>
                        <ul>{item.phones.map(renderPhoneNumber)}</ul>
                      </>
                    ) : null}
                  </ListItem>
                ))}
              </List>
            </Collapse>
          ))}
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default HospitalsList;
