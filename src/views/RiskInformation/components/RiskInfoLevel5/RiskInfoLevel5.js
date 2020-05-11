import React from 'react';
import { Collapse } from '../../../../components';
import PhoneNumber from '../../../../components/PhoneNumber';

const RiskInfoLevel5 = () => (
  <>
    <Collapse title="Bezzwłocznie zadzwoń do Powiatowej Stacji Sanitarno-Epidemiologiczną i zgłoś się do najbliższego szpitalnego oddziału zakaźnego lub obserwacyjno-zakaźnego.">
      <p>
        Przed udaniem się na oddział, telefonicznie skonsultuj się ze szpitalem
        lub - jeśli jest to możliwe - zadzwoń do lekarza podstawowej opieki
        zdrowotnej (POZ).
      </p>
      <p>
        Listę placówek POZ udzielających teleporad znajdziesz na stronie
        Narodowego Funduszu Zdrowia (www.nfz.gov.pl). Wybierz najbliższą.
      </p>
    </Collapse>
    <Collapse title="Zgłoś się do najbliższego szpitalnego oddziału zakaźnego lub obserwacyjno-zakaźnego.">
      <p>
        W trakcie przemieszczania się koniecznie załóż maseczkę i zawsze
        zakrywaj usta i nos podczas kaszlu lub kichania.
      </p>
      <p>
        Udając się do szpitala, nie korzystaj z transportu zbiorowego. Jeśli nie
        posiadasz własnego transportu, inspektor sanitarny ma możliwość wysłania
        po Ciebie pojazdu.
      </p>
      <p>
        W stanie zagrażającym życiu lub zdrowiu (np. duszność), wezwij pogotowie
        (zadzwoń na numer alarmowy <PhoneNumber>999</PhoneNumber> lub{' '}
        <PhoneNumber>112</PhoneNumber>). Koniecznie uprzedź, że jesteś pacjentem
        z podejrzeniem zakażenia koronawirusem.
      </p>
    </Collapse>
    <Collapse title="Noś maseczkę ochronną">
      <p>
        Zakładaj ją za każdym razem, gdy ktoś z zewnątrz ma wejść do
        pomieszczenia lub pojazdu, w którym przebywasz oraz wchodząc do placówek
        medycznych. Osoby w Twoim pobliżu również powinny nosić maseczkę,
        szczególnie jeżeli Ty nie możesz jej założyć (np. gdy powoduje trudności
        w oddychaniu).
      </p>
    </Collapse>
    <Collapse title="Ściśle przestrzegaj zasad higieny">
      <p>
        Kilka prostych zasad, dzięki którym możesz zdecydowanie zmniejszyć
        ryzyko przeniesienia infekcji na innych:
      </p>
      <ul>
        <li>Unikaj dotykania twarzy, zwłaszcza oczu, nosa i ust.</li>
        <li>
          Gdy kaszlesz lub kichasz, zasłaniaj usta i nos chusteczką jednorazową
          lub zgięciem łokcia. Dezynfekuj dłonie po tym, jak kichniesz.
        </li>
        <li>
          Nie korzystaj z tych samych przyborów kuchennych, co inni domownicy.
        </li>
      </ul>
    </Collapse>
  </>
);

export default RiskInfoLevel5;
