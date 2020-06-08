import React from 'react';
import { Collapse, Url } from '../../../../../../components';

const NoRisk = () => (
  <>
    <Collapse title="Często myj ręce">
      <p>
        Regularnie myj ręce mydłem i wodą, lub dezynfekuj je środkiem na bazie
        alkoholu (min. 60%). Mycie rąk powinno trwać 30 sekund. Zapoznaj się z{' '}
        <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
          instrukcją mycia rąk
        </Url>{' '}
        na stronie Głównego Inspektoratu Sanitarnego.
      </p>
    </Collapse>
    <Collapse title="Zasłoń usta i nos gdy kaszlesz lub kichasz">
      <p>
        Gdy kaszlesz lub kichasz, zakrywaj usta i nos chusteczką jednorazową lub
        zgięciem łokcia. Chusteczkę jak najszybciej wyrzuć do kosza i dokładnie
        umyj ręce.
      </p>
    </Collapse>
    <Collapse title="Zachowaj bezpieczną odległość od innych (2 m)">
      <p>Unikaj bliskiego (mniej niż 2 metry) kontaktu z innymi osobami.</p>
    </Collapse>
    <Collapse title="Unikaj dotykania twarzy, szczególnie oczu, nosa i ust">
      <p>
        Wirus przedostaje się do organizmu przez usta, nos i oczy. Możesz go
        przenieść z zanieczyszczonej powierzchni. Wirusy mogą utrzymywać się do
        kilku godzin lub dni na przedmiotach, na których znajdują się
        wydzieliny, np. ślina. Zgodnie z obecnym stanem wiedzy, koronawirus może
        przetrwać do 3 godzin w formie aerozolu, do 24 godzin na powierzchni
        kartonowej i do 72 godzin na stali nierdzewnej lub plastiku.
      </p>
    </Collapse>
    <Collapse title="#ZostańWDomu">
      <p>
        Ogranicz wyjścia z domu do niezbędnego minimum. W ten sposób zmniejszych
        ryzyko rozprzestrzeniania się koronawirusa i chronisz siebie i innych.
      </p>
    </Collapse>
    <Collapse title="Obserwuj swój stan zdrowia">
      <p>
        Przejdź przez ten wywiad ponownie w przypadku pojawienia się nowych
        objawów lub kontaktu z osobą chorą.
      </p>
    </Collapse>
  </>
);

export default NoRisk;
