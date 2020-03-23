import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RiskInfoLevel1 = () => (
  <Fragment>
    <p>Jesteś w niskiej grupie ryzyka, żeby tak pozostało przestrzegaj zasad:</p>
    <ol>
      <li><strong>Jak dostosować codziene życie?</strong>
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
      <li><strong>Zadzwoń do rodziców i krewnych</strong> w podeszłym wieku. Pomóż im korzystać z <span className="primary-2"><strong>SafeSafe</strong></span> na ich telefonie. Zrób dla nich zakupy. Unikaj kontaktu osobistego.</li>
      <li>Jeśli przyjechałeś/aś z zagranicy – skontaktuj się z Sanepidem i poddaj się kwarantannie przez 14 dni.</li>
      <li><strong>Monitoruj stan swojego zdrowia i zapisuj go w <Link to="/daily">MÓJ DZIENNIK ZDROWIA</Link></strong> w tej aplikacji.</li>
    </ol>
    <p><strong>Jeśli wystąpią u ciebie lub twoich bliskich objawy infekcji COVID-19 kontaktuj się z infolinią Rządową: <a href="tel:800190590">800 190 590</a> lub lokalną placówką służby zdrowia.</strong></p>
    <p>&nbsp;</p>
    <p>GIS* - Główny Inspektorat Sanitarny w RP.</p>
  </Fragment>
);

export default RiskInfoLevel1;
