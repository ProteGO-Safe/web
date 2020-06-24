import React from 'react';
import { Email, Url, PhoneNumber } from '../../../../components';
import {
  Annotation,
  Paragraph,
  Title,
  ListNumber,
  ListItem
} from './RegulationsContent.styled';

const RegulationsContent = () => (
  <>
    <Paragraph>
      <strong>ProteGO Safe</strong>
    </Paragraph>
    <Annotation>§1.</Annotation>
    <Title>Postanowienia ogólne</Title>
    <ListNumber>
      <ListItem>
        Niniejszy regulamin (zwany dalej: „<strong>Regulaminem</strong>”)
        normuje zasady i warunki korzystania z aplikacji ProteGO Safe (zwanej
        dalej: „ProteGO Safe” lub “Aplikacją”).
      </ListItem>
      <ListItem>
        Przed przystąpieniem do korzystania z ProteGO Safe, Użytkownik powinien
        zaakceptować Regulamin poprzez zaznaczenie odpowiedniego checkboxa.
        Zaprzestanie korzystania z Aplikacji następuje z momentem usunięcia
        ProteGO Safe przez Użytkownika z Urządzenia.
      </ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>Definicje</Title>
    <Paragraph>Ilekroć w Regulaminie mowa o:</Paragraph>
    <ListNumber>
      <ListItem>
        <strong>GIS </strong>- rozumie się przez to Głównego Inspektora
        Sanitarnego z siedzibą w Warszawie, ul. Targowa 65, 03–729 Warszawa. GIS
        ustala cele i sposoby przetwarzania informacji przez ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>MC </strong>- rozumie się przez to Ministra Cyfryzacji z
        siedzibą w Warszawie, ul. Królewska 27, 00 – 060 Warszawa. MC w oparciu
        o porozumienie wspiera GIS w rozwoju i utrzymaniu ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>Module Analitycznym </strong>- rozumie się przez to
        funkcjonalność ProteGO Safe umożliwiająca zapisywanie, tworzenie
        historii oraz analizowanie spotkania Urządzenia Użytkownika z innymi
        Urządzeniami Użytkowników Aplikacji. Moduł Analityczny jest oparty o
        Privacy-Preserving Contact Tracing API wytworzone oraz udostępnione
        przez Google oraz Apple. Informacje generowane przez Moduł Analityczny
        wraz z wynikami jego pracy są przechowywane lokalnie na Urządzeniu przez
        14 dni. Google oraz Apple w swojej dokumentacji, którą można odnaleźć
        tutaj:{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          exposurenotifications
        </Url>{' '}
        oraz{' '}
        <Url value="https://developer.apple.com/documentation/exposurenotification">
          exposurenotification
        </Url>{' '}
        zapewniają, że stosują najwyższe standardy bezpieczeństwa, aby chronić
        prywatność Użytkowników.
      </ListItem>
      <ListItem>
        <strong>Module Triażu </strong>- rozumie się przez to funkcjonalność
        ProteGO Safe umożliwiająca wykonanie przez Użytkownika samooceny ryzyka
        narażenia na zakażenie{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>,
        stworzona na podstawie kwestionariusza WHO. Informacje wprowadzane do
        Modułu Triażu są przechowywane lokalnie na Urządzeniu Użytkownika.
      </ListItem>
      <ListItem>
        <strong>Module Dziennik Zdrowia </strong>- rozumie się przez to
        funkcjonalność ProteGO Safe o charakterze notatnika umożliwiającą
        Użytkownikowi odnotowywanie informacji o swoim stanie zdrowia.
        Informacje wprowadzane do Modułu Dziennik Zdrowia są przechowywane
        lokalnie na Urządzeniu Użytkownika.
      </ListItem>
      <ListItem>
        <strong>Podmioty, o których mowa w § 2 pkt. 1 i 2 </strong>- rozumie się
        przez to MC i GIS występujących oraz działających wspólnie.
      </ListItem>
      <ListItem>
        <strong>ProteGO Safe lub Aplikacji </strong>– rozumie się przez to
        aplikację ProteGO Safe, która zawiera Moduł Analityczny, Moduł Triażu
        oraz Moduł Dziennik Zdrowia, a także wspiera w profilaktyce i
        zapobieganiu zarażeniem, przekazuje istotne informacje związane z
        pandemią <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>{' '}
        oraz przypomina o bezpiecznych zachowaniach i nawykach codziennej
        higieny.
      </ListItem>
      <ListItem>
        <strong>Urządzeniu </strong>– rozumie się przez to elektroniczne
        urządzenie za pośrednictwem, którego Użytkownik uzyskuje dostęp do
        ProteGO Safe (tablet, smartphone itp.) z aktywnym modułem Bluetooth,
        systemem Android 5.0 lub wyższym z dostępem do sklepu Google Play albo z
        systemem iOS w wersji nie niższej niż 13.5 z dostępem do sklepu
        AppStore. Moduł Analityczny będzie działał jedynie w Urządzeniach z
        systemem Android 6.0 wspierających technologię BLE lub wyższym albo z
        systemem iOS w wersji nie niższej niż 13.5.
      </ListItem>
      <ListItem>
        <strong>Użytkowniku </strong>- rozumie się przez to osobę posiadającą
        pełną zdolność do czynności prawnych, która po zaakceptowaniu Regulaminu
        i Polityki Prywatności korzysta z ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>Kod PIN </strong>- rozumie się przez to generowane losowo i
        aktywne przez pół godziny alfanumeryczne hasło przekazywane
        Użytkownikowi, który jest Osobą Chorą przez konsultanta Centrum
        Kontaktu. Kod PIN może być wprowadzony do ProteGO Safe celem anonimowego
        potwierdzenia, że Urządzenie należy do Osoby Chorej i zainicjowania
        procesu przekazania Klucza Diagnostycznego do Serwera ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>Klucz Diagnostyczny </strong>- rozumie się przez to generowany
        losowo, okresowy i alfanumeryczny ciąg znaków przekazywany na Serwer
        ProteGO Safe, który zawiera anonimowe informacje inicjujące proces
        analizy narażenia na zarażenie{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> w ramach
        Modułu Analitycznego. Klucz Diagnostyczny jest przekazywany na Serwer
        ProteGO Safe po wpisaniu do Aplikacji Kodu PIN przez Użytkownika
        będącego Osobą Chorą.
      </ListItem>
      <ListItem>
        <strong>Osoba Chora </strong>- rozumie się przez to osobę fizyczną,
        posiadającą pełną zdolność do czynności prawnych, która uzyskała
        pozytywny wynik testu na{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>. Osoba
        Chora nie musi być Użytkownikiem.
      </ListItem>
      <ListItem>
        <strong>Centrum Kontaktu </strong>- rozumie się przez to jednostkę
        powiadamiającą telefonicznie o wyniku testu na{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> oraz
        przekazującą Kod PIN Użytkownikom Aplikacji i udzielającą informacji
        związanych z{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      </ListItem>
      <ListItem>
        <strong>Regulaminie </strong>– rozumie się niniejszy dokument, który
        reguluje stosunek prawny między Użytkownikiem a Podmiotami, o których
        mowa w § 2 ust. 1 i 2 zawierany z momentem złożenia przez Użytkownika
        oświadczenia o akceptacji Regulaminu.
      </ListItem>
      <ListItem>
        <strong>Serwerze ProteGO Safe </strong> rozumie się przez to
        infrastrukturę chmurową utrzymywaną przez Operatora Chmury Krajowej
        służącą do przekazania Klucza Diagnostycznego do Urządzeń Użytkowników.
        Klucze Diagnostyczne są przechowywane na Serwerze ProteGO Safe w postaci
        zaszyfrowanej przez 14 (czternaście) dni.
      </ListItem>
      <ListItem>
        <strong>WHO </strong> rozumie się przez to Światową Organizację Zdrowia
        (World Health Organisation).
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>Aplikacja</Title>
    <ListNumber>
      <ListItem>
        Korzystanie z Aplikacji ProteGO Safe, jest bezpłatne i obejmuje swym
        zakresem Moduł Triażu, Moduł Analityczny, Moduł Dziennik Zdrowia,
        wsparcie w profilaktyce i zapobieganiu zarażeniu, informowanie o
        istotnych informacjach związanych z pandemią{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> oraz
        przypominacz bezpiecznych zachowań i nawyków codziennej higieny. W
        ramach ProteGO Safe możliwe jest ustalenie czynników ryzyka infekcji,
        tworzenie i prowadzenie historii medycznej, istniejących schorzeń,
        aktualnej farmakoterapii oraz prowadzenie dziennika profilaktyki.
        ProteGO Safe przekazuje Użytkownikom informacje i wytyczne WHO oraz GIS,
        ale przekazywane informacje nie mają charakteru konsultacji medycznej
        lub świadczenia zdrowotnego (w tym w szczególności medycznego lub
        farmaceutycznego).
      </ListItem>
      <ListItem>
        Moduł Analityczny ma charakter dobrowolny. Moduł Analityczny świadczony
        jest przy użyciu technologii Bluetooth i wymaga włączenia modułu
        Bluetooth w Urządzeniu, a także odpowiednio dla Urządzeń z systemem
        operacyjnym Android: włączenia systemowej opcji rejestrowania narażenia
        na <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> oraz
        udzielenia zgody na lokalizację (w zakresie modułu Bluetooth, ProteGO
        Safe nie wykorzystuje danych GPS), a dla Urządzeń z systemem operacyjnym
        iOS: zaznaczenia opcji Rejestrowanie narażenia na
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>. W celu
        skutecznego korzystania z pełnej funkcjonalności Modułu Analitycznego
        należy pozostawić uruchomioną Aplikację w tle. Aplikacja uruchomiona w
        tle będzie skanować otoczenie w poszukiwaniu Urządzeń innych
        Użytkowników Aplikacji, jak również sama będzie podlegać skanowaniu
        przez inne Urządzenia. Urządzenie Użytkownika Aplikacji zapisuje
        historię spotykanych Urządzeń, na których jest zainstalowana Aplikacja.
        Informacje te (historia spotykanych Urządzeń) pozostają na Urządzeniach
        Użytkowników przez 14 dni.
      </ListItem>
      <ListItem>
        Konsultant Centrum Kontaktu przekazując telefonicznie informację o
        zarażeniu <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>{' '}
        Osobie Chorej zapyta, czy Osoba Chora jest Użytkownikiem ProteGO Safe.
        Jeżeli Osoba Chora jest Użytkownikiem ProteGO Safe, konsultant Centrum
        Kontaktu zaproponuje wprowadzenie do ProteGO Safe Kodu PIN celem
        anonimowego potwierdzenia, że Urządzenie należy do Osoby Chorej i
        zainicjowania procesu przekazania komunikatu o narażeniu na zakażenie
        innym Użytkownikom Aplikacji (poprzez przesłanie Klucza
        Diagnostycznego). Wprowadzenie Kodu PIN inicjuje proces wysłania Klucza
        Diagnostycznego na Serwer ProteGO Safe, który następnie przekazuje Klucz
        Diagnostyczny do Urządzeń Użytkowników Aplikacji.
      </ListItem>
      <ListItem>
        Po otrzymaniu przez Urządzenie Użytkownika Aplikacji Klucza
        Diagnostycznego Moduł Analityczny dokonuje analizy porównując Klucz
        Diagnostyczny z danymi historycznymi dotyczącymi spotkań innych Urządzeń
        z zainstalowaną Aplikacją zapisanymi lokalnie na Urządzeniu Użytkownika
        w celu oceny ryzyka narażenia na zarażenie{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>. Jeśli
        analiza prawdopodobieństwa zarażenia{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> wykaże
        wysokie lub średnie ryzyko narażenia na zakażenie{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> status
        Użytkownika w Aplikacji zmieni się odpowiednio.
      </ListItem>
      <ListItem>
        Wprowadzenie przez Użytkownika Kodu PIN do ProteGO Safe jest dobrowolne.
      </ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>Wymagania techniczne</Title>
    <ListNumber>
      <ListItem>
        Warunkiem korzystania z ProteGO Safe jest posiadanie przez Użytkownika
        odpowiedniego Urządzenia z aktualnym oprogramowaniem i podłączonego do
        sieci Internet.
      </ListItem>
      <ListItem>
        Korzystanie z ProteGO Safe możliwe jest bez ograniczeń terytorialnych.
      </ListItem>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 nie ponoszą odpowiedzialności
        za utrudnienia w korzystaniu z Aplikacji wynikające z niespełnienia
        wymagań technicznych wskazanych w ust. 1, w tym z błędnej konfiguracji
        Urządzenia, bądź wynikające z problemów z Urządzeniem lub łączem
        internetowym Użytkownika.
      </ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>Postanowienia dotyczące własności intelektualnej</Title>
    <Paragraph>
      Podmioty, o których mowa w § 2 pkt. 1 i 2 są uprawnione do dokonywania
      zmian funkcjonalności ProteGO Safe, celem poprawy jakości Aplikacji oraz
      do zmiany interfejsu ProteGO Safe w całości lub w części. Nazwa ProteGO
      Safe, logo, zasady działania ProteGO Safe, wszystkie jego elementy
      graficzne, interfejs podlegają ochronie prawnej. Oprogramowanie, na którym
      opiera się ProteGO Safe oraz kod źródłowy oddawany jest przez MC w oparciu
      o licencję GNU GPL-3.0, której szczegóły zawarte są pod adresem:
      <Url value="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</Url>.
    </Paragraph>
    <Annotation>§6.</Annotation>
    <Title>Odpowiedzialność Podmiotów, o których mowa w § 2 pkt. 1 i 2</Title>
    <ListNumber>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 zobowiązują się do dołożenia
        wszelkich starań celem zapewnienia działania ProteGO Safe bez
        jakichkolwiek zakłóceń, a także przekazania najbardziej aktualnych
        wytycznych WHO lub GIS.
      </ListItem>
      <ListItem>
        ProteGO Safe ma charakter informacyjny. Podmioty, o których mowa w § 2
        pkt. 1 i 2 nie świadczą usług zdrowotnych, świadczeń zdrowotnych (w tym
        w szczególności medycznych lub farmaceutycznych), nie są pośrednikami
        powyższych usług oraz świadczeń ani nie realizują działalności
        leczniczej poprzez ProteGO Safe. W związku z powyższym Podmioty, o
        których mowa w § 2 pkt. 1 i 2 nie ponoszą odpowiedzialności za
        jakiekolwiek skutki wynikające z korzystania przez Użytkownika z ProteGO
        Safe w obszarze zdrowia i życia.
      </ListItem>
      <ListItem>
        Korzystanie z ProteGO Safe nie może zastąpić świadczeń zdrowotnych w tym
        konieczności konsultacji z lekarzem lub właściwą stacją sanitarno -
        epidemiologiczną. Jeżeli Użytkownik dostrzega jakiekolwiek pogorszenie
        stanu zdrowia lub ma wątpliwości co do swojego stanu zdrowia powinien
        niezwłocznie skontaktować się z numerem alarmowym{' '}
        <PhoneNumber>112</PhoneNumber> w celu wezwania pogotowia ratunkowego lub
        poinformować właściwą stację sanitarno - epidemiologiczną lub udać się
        do najbliższej placówki służby zdrowia.
      </ListItem>
      <ListItem>
        Jeśli korzystanie z ProteGO Safe nie jest możliwe, jest utrudnione lub
        trwa zbyt długo, a stan zdrowia lub samopoczucie Użytkownika pogarsza
        się, Użytkownik powinien niezwłocznie skontaktować się z numerem
        alarmowym <PhoneNumber>112</PhoneNumber> w celu wezwania pogotowia
        ratunkowego lub poinformować właściwą stację sanitarno -
        epidemiologiczną lub udać się do najbliższej placówki służby zdrowia.
      </ListItem>
      <ListItem>
        W przypadkach szczególnych, mających wpływ na bezpieczeństwo lub
        stabilność systemu teleinformatycznego, Podmioty, o których mowa w § 2
        pkt. 1 i 2 mają prawo do czasowego zaprzestania bądź ograniczenia
        świadczenia ProteGO Safe lub funkcjonalności ProteGO Safe, bez
        wcześniejszego powiadomienia o tym Użytkowników. W szczególności
        Podmioty, o których mowa w § 2 pkt. 1 i 2 są uprawnione do
        przeprowadzenia prac konserwacyjnych mających na celu przywrócenie
        bezpieczeństwa i stabilności systemu teleinformatycznego. Użytkownikowi
        ProteGO Safe nie przysługują żadne roszczenia w związku z przerwą lub
        zaprzestaniem świadczenia ProteGO Safe przez Podmioty, o których mowa w
        § 2 pkt. 1 i 2.
      </ListItem>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 mają prawo również zaprzestać
        świadczenia ProteGO Safe w każdym czasie, jeżeli takie uzasadnione
        żądanie zostanie zgłoszone wobec niego przez dostawcę Internetu lub inny
        uprawniony podmiot. Z zastrzeżeniem odpowiednich przepisów prawa oraz
        niniejszego Regulaminu, Podmioty, o których mowa w § 2 pkt. 1 i 2 nie
        odpowiadają za szkody spowodowane wadliwym działaniem systemu
        transmisji, w tym awariami sprzętu, opóźnieniami i zakłóceniami przesyłu
        informacji.
      </ListItem>
    </ListNumber>
    <Annotation>§7.</Annotation>
    <Title>Warunki zaprzestania korzystania z ProteGO Safe</Title>
    <ListNumber>
      <ListItem>
        Użytkownik może zaprzestać korzystania z ProteGO Safe ze skutkiem
        natychmiastowym i bez wskazywania przyczyn poprzez usunięcie ProteGO
        Safe ze swojego Urządzenia.
      </ListItem>
      <ListItem>
        GIS może zaprzestać dostarczania oraz wspierania i aktualizowania
        ProteGO Safe ze skutkiem natychmiastowym poprzez przesłanie
        Użytkownikowi stosownego oświadczenia za pośrednictwem Aplikacji lub
        poprzez inne dostępne środki komunikacji.
      </ListItem>
    </ListNumber>
    <Annotation>§8.</Annotation>
    <Title>Siła Wyższa</Title>
    <Paragraph>
      Podmioty, o których mowa w § 2 pkt. 1 i 2 nie będą ponosić
      odpowiedzialności za niewypełnienie swoich zobowiązań z tytułu niniejszego
      Regulaminu w czasie, w każdym przypadku gdy ich wypełnienie jest opóźnione
      lub niemożliwe z powodu okoliczności lub wydarzeń będących poza kontrolą
      Podmiotów, o których mowa w § 2 pkt. 1 i 2, co uniemożliwia lub znacząco
      utrudnia Podmiotom, o których mowa w § 2 pkt. 1 i 2 działanie zgodne z
      Regulaminem, takich jak między innymi: pożar, powódź, nałożenie embargo,
      strajk, zamieszki, niemożność zabezpieczenia materiałów i infrastruktury,
      awaria lub przerwanie pracy maszyn, w każdym przypadku z przyczyn leżących
      poza kontrolą Podmiotów, o których mowa w § 2 pkt. 1 i 2. Jeżeli takie
      opóźnienie trwać będzie dłużej niż 30 (trzydzieści) dni, Podmioty, o
      których mowa w § 2 pkt. 1 i 2 będą miały prawo zaprzestać dostarczania
      oraz wspierania i aktualizowania ProteGO Safe w trybie natychmiastowym.
    </Paragraph>
    <Annotation>§9.</Annotation>
    <Title>Ochrona Prywatności Użytkowników</Title>
    <Paragraph>
      Szczegółowe zasady dotyczące prywatności Użytkowników ProteGO Safe i
      innych osób korzystających z ProteGO Safe lub wszelkich form kontaktu
      opisane są w Polityce Prywatności.
    </Paragraph>
    <Annotation>§10.</Annotation>
    <Title>Postanowienia końcowe</Title>
    <ListNumber>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 zastrzegają sobie możliwość
        wprowadzania zmian w Regulaminie. Aktualna wersja Regulaminu będzie
        dostępna w ProteGO Safe.
      </ListItem>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 informują, że instalacja
        aktualizacji ProteGO Safe może być konieczna dla prawidłowego działania
        Aplikacji i należytego zabezpieczenia zawartych w Aplikacji danych.
      </ListItem>
      <ListItem>
        Podmioty, o których mowa w § 2 pkt. 1 i 2 mogą zakończyć działanie
        ProteGO Safe w każdym czasie.
      </ListItem>
      <ListItem>
        Dla rozpatrywania ewentualnych sporów pomiędzy Podmiotami, o których
        mowa w § 2 ust. 1 i 2 a Użytkownikiem właściwe jest prawo polskie.
      </ListItem>
      <ListItem>
        Reklamacje związane z funkcjonowaniem aplikacji mogą być składane
        elektronicznie na adres: <Email>protego@mc.gov.pl</Email>.
      </ListItem>
    </ListNumber>
  </>
);

export default RegulationsContent;
