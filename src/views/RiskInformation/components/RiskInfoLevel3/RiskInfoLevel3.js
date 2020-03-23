import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RiskInfoLevel3 = () => (
  <Fragment>
    <ol>
      <li><strong><span className="primary-2">Zostań w domu</span> i monitoruj stan swojego zdrowia. Skontaktuj się z Infolinią Rządową <a href="tel:800190590">800 190 590</a> lub telefonicznie z lokalną placówką służby zdrowia.</strong></li>
      <li><strong>Ogranicz kontakt z innymi ludźmi i domownikami do minimum. Przebywaj w osobnym pomieszczeniu i spożywaj posiłki o innych porach.</strong></li>
      <li><strong>Minimum dwa razy dziennie prowadź <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: monitoruj stan swojego zdrowia, zapisuj objawy i temperaturę ciała, notuj spotkane osoby.</strong></li>
      <li><strong><span className="primary-2">Ściśle przestrzegaj zasad higieny</span>, zasłaniaj usta podczas kaszlu i kichania - używaj chusteczki bądź zagięcia łokcia, wyrzucaj zużyte chusteczki oraz często i bardzo dokładnie myj ręce. </strong></li>
      <li><strong>NIE opuszczaj domu.</strong></li>
      <li><strong>NIE wychodź do sklepu.</strong></li>
      <li><strong>NIE spaceruj z psem po swojej okolicy.</strong></li>
      <li><strong>NIE spotykaj się z innymi osobami.</strong></li>
      <li><strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku. Pomóż im korzystać z <span className="primary-2"><strong>SafeSafe</strong></span> na ich telefonie. <strong>Zadbaj by ktoś inny zrobił dla nich zakupy.</strong></li>
      <li>Jeśli przyjechałeś/aś z zagranicy – skontaktuj się z Sanepidem i poddaj się kwarantannie przez 14 dni.</li>
      <li><strong>Jeżeli wystąpią lub nasilą się objawy infekcji ponów kontakt z Infolinią Rządową <a href="tel:800190590">800 190 590</a> lub telefonicznie z lokalną placówką służby zdrowia.</strong></li>
    </ol>
  </Fragment>
);

export default RiskInfoLevel3;
