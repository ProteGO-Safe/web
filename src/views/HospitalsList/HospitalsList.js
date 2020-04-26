import React from 'react';

import Hospitals from './Hospitals.json';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Collapse } from '../../components';
import { Container, Content, View } from '../../theme/grid';
import { List, ListItem } from '../../theme/typography';
import { Title } from './Hospitals.styled';
import './HospitalsList.scss';

const HospitalsList = () => {
  const { voivodeships } = Hospitals;

  return (
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>Szpitale zakaźne:</Title>
          {voivodeships.map((voivodeship, key) => (
            <Collapse key={key} title={voivodeship.name}>
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
                        <ul>
                          {item.phones.map(phone =>
                            typeof phone === 'string' ? (
                              <li key={phone}>{phone}</li>
                            ) : (
                              <li key={`phones-${phone.type}`}>
                                <strong>{phone.type}</strong>:{' '}
                                {phone.items.join(', ')}
                              </li>
                            )
                          )}
                        </ul>
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
