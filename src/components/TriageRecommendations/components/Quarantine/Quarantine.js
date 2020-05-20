import React from 'react';
import { Collapse } from '../../../../components';
import Url from '../../../../components/Url';
import PhoneNumber from '../../../../components/PhoneNumber';

const Quarantine = () => (
  <>
    <Collapse title="Pozostań w domu przez 14 dni">
      <p>
        Kwarantannę musisz odbywać w domu, pod adresem, który wcześniej
        wskażesz. Nie możesz zmienić miejsca kwarantanny. Jeśli nie masz
        możliwości odbywania kwarantanny w domu, możesz ją odbyć we wskazanym
        przez odpowiednie służby ośrodku.
      </p>
    </Collapse>
    <Collapse title="Stosuj się do zasad kwarantanny">
      <ul>
        <li>
          W żadnym wypadku nie opuszczaj domu. Nie wolno ci wychodzić do sklepu,
          na spacer z psem, ani do lekarza.
        </li>
        <li>
          Jeśli masz pod swoją opieką zwierzęta, w miarę możliwości na czas
          trwania kwarantanny przekaż je pod opiekę rodzinie lub znajomym. Jeśli
          nie masz takiej możliwości, zwróć się telefonicznie o pomoc do gminy.
        </li>
        <li>
          Nie spotykaj się z innymi osobami i nie zapraszaj ludzi do domu.
        </li>
        <li>Jeśli mieszkasz z rodziną, ją również obowiązuje kwarantanna.</li>
        <li>Monitoruj temperaturę ciała minimum 2 razy dziennie.</li>
        <li>
          Udzielaj informacji o swoim stanie zdrowia dzwoniącym do ciebie
          pracownikom powiatowej stacji sanitarno-epidemiologicznej.
        </li>
        <li>
          Współpracuj z policjantami, którzy będą sprawdzać, czy przestrzegasz
          kwarantanny.
        </li>
      </ul>
    </Collapse>
    <Collapse title="Przestrzegaj zasad higieny">
      <ul>
        <li>
          <div className="bold">Często myj ręce</div>
          <div className="normal">
            Regularnie myj ręce mydłem i wodą, lub dezynfekuj je środkiem na
            bazie alkoholu (min. 60%). Mycie rąk powinno trwać 30 sekund.
            Zapoznaj się z{' '}
            <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
              instrukcją mycia rąk
            </Url>{' '}
            na stronie Głównego Inspektoratu Sanitarnego.
          </div>
        </li>
        <li>
          <div className="bold">Zasłoń usta i nos gdy kaszlesz lub kichasz</div>
          <div className="normal">
            Gdy kaszlesz lub kichasz, zakrywaj usta i nos chusteczką jednorazową
            lub zgięciem łokcia. Chusteczkę jak najszybciej wyrzuć do kosza i
            dokładnie umyj ręce.
          </div>
        </li>
        <li>
          <div className="bold">Zachowaj bezpieczną odległość od innych</div>
          <div className="normal">
            Unikaj bliskiego (mniej niż 2 metry) kontaktu z innymi osobami.
          </div>
        </li>
        <li>
          <div className="bold">
            Unikaj dotykania twarzy, szczególnie oczu, nosa i ust
          </div>
          <div className="normal">
            Wirus przedostaje się do organizmu przez usta, nos i oczy. Możesz go
            przenieść z zanieczyszczonej powierzchni. Wirusy mogą utrzymywać się
            do kilku godzin lub dni na przedmiotach, na których znajdują się
            wydzieliny, np. ślina. Zgodnie z obecnym stanem wiedzy, koronawirus
            może przetrwać do 3 godzin w formie aerozolu, do 24 godzin na
            powierzchni kartonowej i do 72 godzin na stali nierdzewnej lub
            plastiku.
          </div>
        </li>
        <li>
          <div className="bold">
            Używaj oddzielnych naczyń i osobnej łazienki
          </div>
          <div className="normal">
            Jeśli nie masz możliwości korzystania z osobnej łazienki lub
            toalety, zdezynfekuj ją dostępnym środkiem czystości.
          </div>
        </li>
        <li>
          <div className="bold">Wietrz mieszkanie kilka razy dziennie</div>
        </li>
        <li>
          <div className="bold">Dezynfekuj powierzchnie</div>
          <div className="normal">
            Często dezynfekuj powierzchnie takie jak: blaty, klamki czy ekrany
            telefonów. Myj po sobie urządzenia, z których korzystasz.
          </div>
        </li>
      </ul>
    </Collapse>
    <Collapse title="Obserwuj swój stan zdrowia. Jeżeli jest niepokojący lub się pogarsza – reaguj.">
      <p>
        W przypadku nagłego pogorszenia stanu zdrowia i wystąpienia takich
        objawów jak:
      </p>
      <ul>
        <li>gorączka powyżej 38°C,</li>
        <li>kaszel,</li>
        <li>duszność i problemy z oddychaniem,</li>
      </ul>
      <p>
        bezzwłocznie, telefonicznie powiadom powiatową stację
        sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału
        zakaźnego lub oddziału obserwacyjno-zakaźnego.
      </p>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#znajdz-stacje-sanitarno-epidemiologiczna">
          Znajdź numer najbliższej stacji
        </Url>{' '}
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          Sprawdź, gdzie jest szpital z oddziałem zakaźnym
        </Url>
      </p>
      <p>
        W trakcie przemieszczania się do szpitala zakaźnego koniecznie załóż
        maseczkę i zawsze zasłaniaj usta i nos gdy kaszlesz lub kichasz. Udając
        się do szpitala, nie korzystaj z transportu zbiorowego. Jeśli nie
        posiadasz własnego transportu, stacja sanitarno-epidemiologiczna ma
        możliwość wysłania po Ciebie karetki.
      </p>
      <p>
        W stanie zagrażającym życiu lub zdrowiu (np. duszność), wezwij
        pogotowie, dzwoniąc na numer alarmowy <PhoneNumber>999</PhoneNumber> lub{' '}
        <PhoneNumber>112</PhoneNumber>. Koniecznie uprzedź, że może chodzić o
        pacjenta z koronawirusem.{' '}
      </p>
    </Collapse>
    <Collapse title="Nie bój się prosić o pomoc">
      <p>
        Podczas odbywania kwarantanny nie jesteś pozostawiony|pozostawiona
        sam|sama sobie. Wiele miejsc udziela niezbędnych informacji i oferuje
        dodatkową pomoc, np. pomoc materialną i pomoc w zakupach:
      </p>
      <ul>
        <li>
          <p>
            <strong>Ośrodek pomocy społecznej</strong>
          </p>
          <p>
            Zadzwoń do ośrodka pomocy społecznej w miejscowości, w której
            mieszkasz. Pracownik socjalny ośrodka pomocy społecznej skontaktuje
            się z tobą telefonicznie.
          </p>
        </li>
        <li>
          <p>
            <strong>Policja</strong>
          </p>
          <p>
            Funkcjonariusze policji, którzy sprawdzają, czy przebywasz w domu,
            szczególną uwagę będą zwracać na osoby samotne, starsze, czy
            niepełnosprawne. Informacje o takich osobach przekażą do ośrodka
            pomocy społecznej.
          </p>
        </li>
        <li>
          <p>
            <strong>Gmina (ciepłe posiłki i produkty żywnościowe)</strong>
          </p>
          <p>
            Jeśli nie jesteś w stanie sam|sama zapewnić sobie gorącego posiłku
            lub żywności i nie możesz liczyć na pomoc rodziny, pomocy udzieli ci
            gmina. Posiłki i produkty żywnościowe będą dostarczane przez osoby
            wyznaczone we współpracy z wolontariuszami organizacji
            pozarządowych.
          </p>
        </li>
        <li>
          <p>
            <strong>Psycholog</strong>
          </p>
          <p>
            Jeśli potrzebujesz pomocy psychologa, zadzwoń do ośrodka pomocy
            społecznej w swojej gminie bądź powiatowego centrum pomocy rodzinie
            w swoim powiecie.
          </p>
        </li>
      </ul>
    </Collapse>
  </>
);

export default Quarantine;
