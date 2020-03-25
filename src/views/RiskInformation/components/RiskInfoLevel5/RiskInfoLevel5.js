import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RiskInfoLevel5 = () => (
  <Fragment>
    <ol>
      <li><strong><span className="text-error">Bezwzględnie zostań w domu</span> i monitoruj stan swojego zdrowia. Powiadom służby medyczne pod numerem <a href="tel:800190590">800 190 590</a> i ściśle podporządkuj się zaleceniom. Pozostań w kontakcie.</strong></li>
      <li><strong><span className="primary-2">Przygotuj swoje leki i najpotrzebniejsze rzeczy osobiste na wypadek ewentualnej hospitalizacji.</span></strong></li>
      <li><strong>Bezwzględnie pozostań w domu i <span className="primary-2">unikaj wszelkich kontaktów także z domownikami.</span></strong></li>
      <li><strong><span className="text-error">Musisz przebywać w oddzielnym pomieszczeniu i w odosobnieniu spożywać posiłki, używaj przy tym tylko swoich naczyń i sztućców. Dezynfekuj toaletę.</span></strong></li>
      <li><strong>Minimum dwa razy dziennie uzupełniaj w tej aplikacji zakładkę <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: monitoruj stan swojego zdrowia, zapisuj objawy i temperaturę ciała, notuj spotkane osoby.</strong></li>
      <li><strong><span className="primary-2">Ściśle przestrzegaj zasad higieny</span>, zasłaniaj usta podczas kaszlu i kichania - używaj chusteczki bądź zagięcia łokcia, wyrzucaj zużyte chusteczki oraz często i bardzo dokładnie myj ręce.</strong></li>
      <li><strong>NIE opuszczaj domu.</strong></li>
      <li><strong>NIE wychodź do sklepu.</strong></li>
      <li><strong>NIE spaceruj z psem po swojej okolicy.</strong></li>
      <li><strong>NIE spotykaj się z innymi osobami.</strong></li>
      <li><strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku. <strong>Zdalnie</strong> pomóż im korzystać z <span className="primary-2"><strong>SafeSafe</strong></span> na ich telefonie. <strong>Zadbaj, by ktoś inny zrobił dla nich zakupy.</strong></li>
      <li><strong>Jeżeli wystąpią lub nasilą się objawy infekcji, ponów kontakt z infolinią rządową <a href="tel:800190590">800 190 590</a> lub <span className="primary-2">zadzwoń (nie idź!)</span> do lokalnej placówki służby zdrowia.</strong></li>
    </ol>
  </Fragment>
);

export default RiskInfoLevel5;
