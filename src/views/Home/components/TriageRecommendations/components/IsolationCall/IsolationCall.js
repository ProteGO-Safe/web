import React from 'react';
import { Collapse, PhoneNumber, Url } from '../../../../../../components';

const IsolationCall = () => (
  <>
    <Collapse title="Bezzwłocznie, telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną lub udaj się do oddziału zakaźnego">
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#znajdz-stacje-sanitarno-epidemiologiczna">
          Znajdź numer najbliższej stacji
        </Url>{' '}
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          Sprawdź, gdzie jest szpital z oddziałem zakaźnym
        </Url>
      </p>
      <p>
        Przed udaniem się na oddział skonsultuj się telefonicznie ze szpitalem
        lub, jeśli jest to możliwe, skorzystaj z kontaktu telefonicznego z
        lekarzem podstawowej opieki zdrowotnej.
      </p>
      <p>
        Lista placówek POZ udzielających teleporad w twojej okolicy jest
        dostępna{' '}
        <Url value="https://bit.ly/teleporady-lista">na stronie NFZ</Url>
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
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          Sprawdź, gdzie jest szpital z oddziałem zakaźnym
        </Url>
      </p>
      <p>
        W stanie zagrażającym życiu lub zdrowiu (np. duszność), wezwij
        pogotowie, dzwoniąc na numer alarmowy <PhoneNumber>999</PhoneNumber> lub{' '}
        <PhoneNumber>112</PhoneNumber>. Koniecznie uprzedź, że może chodzić o
        pacjenta z koronawirusem.
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
      <p>
        <Url value="https://pacjent.gov.pl/bez-maski-ani-rusz#Jak-zakladac-i-zdejmowac-maske">
          Zobacz jak bezpiecznie zakładać i zdejmować maskę
        </Url>
      </p>
    </Collapse>
    <Collapse title="Ściśle przestrzegaj zasad higieny">
      <p>
        Kilka prostych zasad, dzięki którym możesz zdecydowanie zmniejszyć
        ryzyko zakażenia samego siebie lub przeniesienia infekcji na innych:
      </p>
      <ul>
        <li>
          Regularnie myj ręce mydłem i wodą, lub dezynfekuj je środkiem na bazie
          alkoholu (min. 60%). Mycie rąk powinno trwać 30 sekund. Zapoznaj się z{' '}
          <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
            instrukcją mycia rąk
          </Url>{' '}
          na stronie Głównego Inspektoratu Sanitarnego.
        </li>
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

export default IsolationCall;
