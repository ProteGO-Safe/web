import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Hospitals from './Hospitals.json';
import './HospitalsList.scss';
import Collapsible from './components/Collapsible/Collapsible';
import Routes from '../../routes';
import Header from '../../components/Header/Header';

const HospitalsList = () => {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState(0);

  const { voivodeships } = Hospitals;

  const goBack = () => history.push(Routes.Home);

  return (
    <div className="view view__hospitals-list">
      <Header onBackClick={goBack} />
      <div className="container">
        <h4 className="h1 text-center medium">Szpitale zakaźne w Polsce</h4>
        {voivodeships.map((voivodeship, index) => (
          <Collapsible
            open={index === activeItem}
            key={voivodeship.name}
            title={voivodeship.name}
            toggle={() => {
              setActiveItem(index === activeItem ? null : index);
            }}
          >
            <ul className="hospitals-list">
              {voivodeship.items.map(item => (
                <li
                  className="hospital"
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
                </li>
              ))}
            </ul>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;
