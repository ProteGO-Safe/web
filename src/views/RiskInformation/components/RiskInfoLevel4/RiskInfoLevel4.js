import React from 'react';
import { Collapse } from '../../../../components';

const RiskInfoLevel4 = () => (
  <>
    <Collapse title="Bezzwłocznie, telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną lub udaj się do oddziału zakaźnego">
      <p>
        Przed udaniem się na oddział skonsultuj się telefonicznie ze szpitalem
        lub, jeśli jest to możliwe, skorzystaj z kontaktu telefonicznego z
        lekarzem podstawowej opieki zdrowotnej.
      </p>
      <p>
        Lista placówek POZ udzielających teleporad w twojej okolicy jest
        dostępna na stronie NFZ.
      </p>
    </Collapse>
    <Collapse title="Zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego">
      <p>
        W trakcie przemieszczania się koniecznie załóż maseczkę i zawsze
        zakrywaj usta i nos podczas kaszlu lub kichania.
      </p>
      <p>
        Udając się do szpitala, nie korzystaj z transportu zbiorowego. Jeśli nie
        posiadasz własnego transportu, inspektor sanitarny ma możliwość wysłania
        po ciebie pojazdu.
      </p>
      <p>
        W stanie zagrażającym życiu lub zdrowiu (np. duszność), wezwij
        pogotowie, dzwoniąc na numer alarmowy 999 lub 112. Koniecznie uprzedź,
        że może chodzić o pacjenta z koronawirusem.
      </p>
    </Collapse>
    <Collapse title="Noś maseczkę ochronną">
      <p>
        Jeśli masz maseczkę, zakładaj ją za każdym razem, gdy ktoś z zewnątrz ma
        wejść do pomieszczenia lub pojazdu, w którym przebywasz. Załóż ją
        również, gdy wchodzisz do placówek medycznych. Osoby w pobliżu również
        powinny założyć maseczkę, szczególnie jeżeli ty nie możesz jej założyć
        (np. gdy nasila ona trudności w oddychaniu).
      </p>
    </Collapse>
    <Collapse title="Ściśle przestrzegaj zasad higieny">
      <p>
        Kilka prostych zasad, dzięki którym możesz zdecydowanie zmniejszyć
        ryzyko zakażenia samego siebie lub przeniesienia infekcji na innych:
      </p>
      <ul>
        <li>Unikaj dotykania twarzy, zwłaszcza oczu, nosa i ust.</li>
        <li>
          Zasłaniaj usta i nos chusteczką jednorazową lub zgięciem łokcia, gdy
          kaszlesz lub kichasz, a także dezynfekuj dłonie po tym, jak kichniesz.
        </li>
        <li>
          Wybierz komplet kubków, sztućców oraz innych przyborów kuchennych,
          których tylko ty będziesz używać.
        </li>
      </ul>
    </Collapse>
  </>
);

export default RiskInfoLevel4;
