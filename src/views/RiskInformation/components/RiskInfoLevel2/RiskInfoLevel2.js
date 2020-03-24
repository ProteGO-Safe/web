import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RiskInfoLevel2 = () => (
  <Fragment>
    <ol>
      <li><strong>Zostań w domu i monitoruj stan swojego zdrowia. Wykonuj tylko pracę zdalną.</strong></li>
      <li><strong>Dokładnie myj ręce tak często jak się da (obowiązkowo: przed każdym posiłkiem, po każdym powrocie do domu, po kontakcie z telefonem komórkowym, klawiaturą, myszą, itp.)</strong></li>
      <li><strong>Minimum dwa razy dziennie prowadź <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link>: monitoruj stan swojego zdrowia, zapisuj objawy i temperaturę ciała, notuj spotkane osoby i odwiedzone miejsca.</strong></li>
      <li><strong>Zaniechaj wszelkich spotkań – wykorzystaj telefon lub internet do kontaktu z innymi osobami, nawet jeśli jest to sąsiad lub bliski krewny.</strong></li>
      <li><strong>Jeśli wystąpią u ciebie lub twoich bliskich objawy infekcji COVID-19 kontaktuj się z infolinią Rządową: <a href="tel:800190590">800 190 590</a> lub lokalną placówką służby zdrowia.</strong></li>
      <li><strong>Jeżeli jesteś zmuszony/a wyjść to:</strong>
        <ul>
          <li>NIE podawaj ręki na powitanie</li>
          <li>NIE całuj się na powitanie</li>
          <li>NIE całuj się na powitanie</li>
          <li>NIE dotykaj dłońmi twarzy, oczu i ust</li>
          <li>TAK, uchwyt do koszyka w sklepie dotykaj przez jednorazową chusteczkę</li>
          <li>TAK, płać bezdotykowo</li>
          <li>TAK, zasłaniaj usta łokciem kiedy kichasz lub kaszlesz</li>
        </ul>
      </li>
      <li><strong>Zostań w domu, do momentu odwołania zagrożenia epidemiologicznego.</strong></li>
      <li><strong>Zalecenia wg GIS*:</strong>
        <ul>
          <li>Jeżeli możesz – zostań w domu</li>
          <li>Bezwzględnie unikaj skupisk ludzkich (współdzielone biura, sale treningowe itp. )</li>
          <li>Unikaj kontaktu osobistego (z osobami spoza Twojego gospodarstwa domowego)</li>
          <li>Zawsze zachowuj 2 metry odstępu od innych ludzi</li>
          <li>Unikaj spotkań 1 na 1 trwających dłużej niż 10 minut</li>
          <li>Dokładnie myj ręce tak często jak się da (obowiązkowo: przed każdym posiłkiem, po każdym powrocie do domu, po kontakcie z telefonem komórkowym, klawiaturą, myszą, itp.)</li>
          <li>Zaniechaj wszelkich spotkań – wykorzystaj telefon lub internet do kontaktu z innymi osobami, nawet jeśli jest to sąsiad lub bliski krewny</li>
        </ul>
      </li>
      <li><strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku. <strong>Zdalnie</strong> pomóż im korzystać z <span className="primary-2"><strong>SafeSafe</strong></span> na ich telefonie. <strong>Zadbaj by ktoś inny zrobił dla nich zakupy.</strong></li>
      <li>Jeśli przyjechałeś/aś z zagranicy – skontaktuj się z Sanepidem i poddaj się kwarantannie przez 14 dni.</li>
    </ol>
    <p>&nbsp;</p>
    <p>GIS* - Główny Inspektorat Sanitarny w RP.</p>
  </Fragment>
);

export default RiskInfoLevel2;
