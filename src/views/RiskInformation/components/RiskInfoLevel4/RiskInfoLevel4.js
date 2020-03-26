import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RiskInfoLevel4 = () => (
  <Fragment>
    <ol>
      <li><strong><span className="text-error">Bezwzględnie zostań w domu</span> i monitoruj stan swojego zdrowia.  Skontaktuj się z infolinią rządową <a href="tel:800190590">800 190 590</a> lub <span className="primary-2">zadzwoń (nie idź!)</span> do lokalnej placówki służby zdrowia.</strong></li>
      <li><strong>Żeby czuć się komfortowo, <span className="primary-2">przygotuj swoje leki i najpotrzebniejsze rzeczy osobiste. Prawdopodobnie nie będą Ci potrzebne, ale lepiej być przygotowanym.</span></strong></li>
      <li><strong>Unikaj kontaktu z domownikami, przebywaj w osobnym pomieszczeniu i spożywaj posiłki o innych porach. Używaj odrębnych naczyń i sztućców. Dezynfekuj toaletę.</strong></li>
      <li><strong>Minimum dwa razy dziennie uzupełniaj w tej aplikacji zakładkę <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: monitoruj stan swojego zdrowia, zapisuj objawy i temperaturę ciała, notuj spotkane osoby.</strong></li>
      <li><strong><span className="primary-2">Ściśle przestrzegaj zasad higieny</span>, zasłaniaj usta podczas kaszlu i kichania - używaj chusteczki bądź zagięcia łokcia, wyrzucaj zużyte chusteczki oraz często i bardzo dokładnie myj ręce.</strong></li>
      <li><strong>NIE opuszczaj domu.</strong></li>
      <li><strong>NIE wychodź do sklepu.</strong></li>
      <li><strong>NIE spaceruj z psem po swojej okolicy.</strong></li>
      <li><strong>NIE spotykaj się z innymi osobami.</strong></li>
      <li><strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku. <strong>Zdalnie</strong> pomóż im korzystać z <span className="primary-2"><strong>SafeSafe</strong></span> na ich telefonie. <strong>Zadbaj, by ktoś inny zrobił dla nich zakupy.</strong></li>
      <li>Jeśli przyjechałeś/aś z zagranicy – skontaktuj się z sanepidem i poddaj się 14-dniowej kwarantannie.</li>
      <li><strong>Jeżeli wystąpią lub nasilą się objawy infekcji, ponów kontakt z infolinią rządową <a href="tel:800190590">800 190 590</a> lub <span className="primary-2">zadzwoń (nie idź!)</span> do lokalnej placówki służby zdrowia.</strong></li>
    </ol>
  </Fragment>
);

export default RiskInfoLevel4;
