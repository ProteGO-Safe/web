import React from 'react';
import { Collapse } from '../../../Collapse';
import Url from '../../../Url';
import PhoneNumber from '../../../PhoneNumber';

const CallDoctor = () => (
  <>
    <Collapse title="Umów teleporadę z lekarzem POZ">
      <p>
        Jak najszybciej zadzwoń do swojego lekarza rodzinnego (POZ) i powiedz mu
        jakie masz objawy. Lekarz przeprowadzi z tobą wywiad medyczny i w razie
        potrzeby zaprosi cię na wizytę lekarską.
      </p>
      <p>
        Lista placówek POZ, które udzielają teleporad, a także inne placówki, w
        tym otwarte poradnie specjalistyczne, gabinety ginekologiczne i
        stomatologiczne, znajdują się na{' '}
        <Url value="https://www.nfz.gov.pl/aktualnosci/aktualnosci-oddzialow/gdzie-sie-leczyc-w-czasie-epidemii-koronawirusa,401.html">
          stronie internetowej NFZ
        </Url>{' '}
        . Informacje o placówkach są aktualizowane na bieżąco.
      </p>
      <p>Podczas teleporady możesz otrzymać:</p>
      <ul>
        <li>zalecenia,</li>
        <li>e-zwolnienie,</li>
        <li>e-receptę,</li>
        <li>
          sugestię osobistej wizyty w placówce lub kontaktu ze stacją
          sanitarno-epidemiologiczną.
        </li>
      </ul>
      <p>Teleporady medyczne:</p>
      <ul>
        <li>ograniczają ryzyko rozprzestrzeniania się koronawirusa,</li>
        <li>pozwalają rozwiać swoje wątpliwości, bez wychodzenia z domu,</li>
        <li>skracają czas oczekiwania na wizytę u lekarza.</li>
      </ul>
      <p>
        Teleporady nie utrudniają bezpośredniego dostępu do lekarza. Jeśli
        będzie taka potrzeba, lekarz skieruje cię do placówki medycznej lub
        zaleci kontakt ze stacją sanitarno-epidemiologiczną.
      </p>
    </Collapse>
    <Collapse title="Przestrzegaj kilku podstawowych zasad dotyczących higieny">
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
          <div className="bold">#ZostańWDomu</div>
          <div className="normal">
            Ogranicz wyjścia z domu do niezbędnego minimum. W ten sposób
            chronisz siebie i innych.
          </div>
        </li>
      </ul>
    </Collapse>
    <Collapse title="Obserwuj swój stan zdrowia. Jeżeli jest niepokojący lub się pogarsza – reaguj.">
      <p>
        W stanie zagrażającym życiu lub zdrowiu, nie czekaj, zadzwoń na numer
        alarmowy <PhoneNumber>999</PhoneNumber> lub{' '}
        <PhoneNumber>112</PhoneNumber> i wezwij pogotowie.
      </p>
    </Collapse>
  </>
);

export default CallDoctor;
