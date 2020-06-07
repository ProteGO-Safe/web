import React from 'react';
import { Email, Url } from '../../../../components';
import {
  Annotation,
  Paragraph,
  Title,
  ListAlpha,
  ListRoman,
  ListNumber,
  ListItem
} from './PrivacyPolicyContent.styled';

const PrivacyPolicyContent = () => (
  <>
    <Paragraph>
      <strong>ProteGO Safe</strong>
    </Paragraph>
    <Paragraph>
      <strong>Najistotniejsze informacje dotyczące Twojej prywatności</strong>
    </Paragraph>
    <Paragraph>
      Przygotowaliśmy ten dokument, aby poinformować Cię jak przetwarzamy
      informacje i dane w ProteGO Safe, a także jakie prawa Ci przysługują.
      Poniżej znajdziesz kluczowe informacje związane z przetwarzaniem danych i
      informacji w ramach naszej Aplikacji.
      <br />
      Zaprojektowaliśmy ProteGO Safe zgodnie z zasadami Privacy by Default oraz
      Privacy by Design. Oznacza to, że domyślnie stosujemy ochronę Twojej
      prywatności i staraliśmy się ograniczyć przetwarzanie informacji o Tobie
      już na etapie projektowania i tworzenia aplikacji ProteGO Safe. Staramy
      się nie pozyskiwać od Ciebie informacji, które umożliwią Twoją
      identyfikację (tj. danych osobowych), gdyż wierzymy, że skuteczne
      zapobieganie pandemii{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> nie wymaga
      przetwarzania danych osobowych.
    </Paragraph>
    <Paragraph>
      <u>
        Informacje przetwarzane przez ProteGO Safe nie umożliwiają Twojej
        identyfikacji.
      </u>
    </Paragraph>
    <Paragraph>
      Nie będziemy mieli dostępu do informacji i danych osobowych, które
      wprowadzisz do aplikacji ProteGO Safe. Nie będziemy podejmowali aktywnych
      działań, aby Cię zidentyfikować. Nie będziemy także analizowali w jaki
      sposób korzystasz z ProteGO Safe.
    </Paragraph>
    <Paragraph>
      Informacje wprowadzone do ProteGO Safe związane z Triażem (samooceną
      ryzyka zarażenia{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> -
      Moduł Triażu) są analizowane w ramach ProteGO Safe bez opuszczania Twojego
      urządzenia.
    </Paragraph>
    <Paragraph>
      Funkcjonalność analizowania narażenia na zarażenie{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> w związku z
      kontaktem z innymi Użytkownikami Aplikacji (Moduł Analityczny) jest
      dobrowolna. Masz możliwość analizowania potencjalnego narażenia na
      zarażenie <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>{' '}
      wykorzystując do tego celu technologię Bluetooth. Jeśli zdecydujesz się na
      korzystanie z tej funkcjonalności Twoje Urządzenie będzie analizowało
      otoczenie, w którym się znajdujesz, w poszukiwaniu innych Urządzeń na
      których zainstalowana jest Aplikacja. W przypadku spotkania innego
      Urządzenia, na którym zainstalowana jest Aplikacja ProteGO Safe w obu
      Aplikacjach zapisze się informacja o tym spotkaniu. Historia spotykanych
      Urządzeń pozostaje na Twoim Urządzeniu nie dłużej niż przez 14 dni.
    </Paragraph>
    <Paragraph>
      Jeśli Twój test na{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> będzie miał
      wynik pozytywny zadzwoni do Ciebie konsultant Centrum Kontaktu, który
      poinformuje o pozytywnym wyniku testu. Następnie konsultant Centrum
      Kontaktu zapyta Cię, czy masz zainstalowaną aplikację ProteGO Safe. Jeśli
      tak będzie, konsultant Centrum Kontaktu zaproponuje Ci możliwość
      powiadomienia innych Użytkowników o tym, że przebywali w pobliżu
      Urządzenia Osoby Chorej na{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> w ciągu
      ostatnich 14 dni poprzez podyktowanie Ci Kodu PIN. Kod PIN ma na celu
      potwierdzenie, że Twoje urządzenie, to urządzenie osoby chorej na{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      Potwierdzenie to ma charakter anonimowy, ani my, ani inni Użytkownicy nie
      będą w stanie rozróżnić poszczególnych Urządzeń i przypisać do nich
      konkretnych Użytkowników. Po wprowadzeniu kodu PIN zostanie zainicjowany
      proces przesłania anonimowego Klucza Diagnostycznego na serwer ProteGO
      Safe, a następnie do Urządzeń innych Użytkowników w celu analizy ryzyka
      zarażenia <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      Wprowadzenie Kodu PIN do Urządzenia jest dobrowolne.
    </Paragraph>
    <Paragraph>
      Klucz Diagnostyczny wysłany z Twojego Urządzenia na Serwer ProteGO Safe
      nie będzie zawierał Twoich danych osobowych ani informacji o Urządzeniach
      z którymi miałeś styczność. Ty będziesz decydować o tym, czy chcesz
      oznaczyć swoje Urządzenie jako Urządzenie Osoby Chorej, co zainicjuje
      wysłanie anonimowego Klucza Diagnostycznego na Serwer ProteGO Safe a
      następnie do innych Użytkowników Aplikacji. Każda z Aplikacji, po
      otrzymaniu Klucza Diagnostycznego dokonuje automatycznej analizy spotkań
      poprzez odpowiednie porównanie otrzymanego Klucza Diagnostycznego z
      historią spotkań Urządzeń z zainstalowaną Aplikacją z ostatnich 14 dni.
      Analiza wykonywana jest niezależnie na Urządzeniu każdego Użytkownika,
      brana jest w niej pod uwagę w szczególności odległość Użytkowników (siła
      sygnału) oraz czas przebywania w pobliżu osoby zakażonej i w jej wyniku
      może zostać zmieniony status aktualnej grupy ryzyka.
    </Paragraph>
    <Annotation>§1.</Annotation>
    <Title>Postanowienia ogólne</Title>
    <ListNumber>
      <ListItem>
        Niniejsza Polityka Prywatności określa zasady zbierania, przetwarzania i
        ochrony prywatności Użytkowników w związku z korzystaniem z aplikacji
        ProteGO Safe. GIS ani MC nie przetwarzają Danych Osobowych w ramach
        ProteGO Safe.
      </ListItem>
      <ListItem>
        Poprzez pobranie ProteGO Safe ze sklepu Play lub AppStore oraz
        zainstalowanie Użytkownik wyraża zgodę, o której mowa w art. 173 ust. 1
        pkt. 2 Prawa Telekomunikacyjnego, a Regulamin oraz Polityka Prywatności
        stanowią informację, o której mowa w art. 173 ust. 1 pkt. 1 Prawa
        Telekomunikacyjnego.
      </ListItem>
      <ListItem>
        Niniejszy dokument jest przygotowany w oparciu o postanowienia
        Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
        kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
        przetwarzaniem Danych Osobowych i w sprawie swobodnego przepływu takich
        danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
        ochronie danych), ustawy z dnia 10 maja 2018 r. o ochronie Danych
        Osobowych (Dz.U. z 2018 r. poz. 1000) oraz innych przepisów powszechnie
        obowiązujących.
      </ListItem>
      <ListItem>
        W razie ogólnych pytań dotyczących prywatności, a także pytań
        dotyczących niniejszej Polityki Prywatności zachęcamy do kontaktu pod
        adresem: <Email>protego@mc.gov.pl</Email> lub{' '}
        <Email>iod@gis.gov.pl</Email>.
      </ListItem>
      <ListItem>
        GIS zapewnia, iż dokłada wszelkich starań, by Aplikacja Protego Safe
        zapewniała najwyższy standard ochrony prywatności Użytkowników, a w
        szczególności zapewnia, iż podjął wszelkie przewidziane prawem i możliwe
        technologicznie środki zmierzające do zabezpieczenia prywatności
        Użytkowników.
      </ListItem>
      <ListItem>
        GIS oświadcza, iż stosuje środki techniczne i organizacyjne zapewniające
        ochronę prywatności Użytkowników odpowiednią do zagrożeń oraz kategorii
        informacji objętych ochroną, a w szczególności stosuje szyfrowanie oraz
        zabezpiecza informacje przed ich udostępnieniem osobom nieupoważnionym,
        zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem prawa
        oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.
      </ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>Definicje</Title>
    <Paragraph>Ilekroć w Polityce Prywatności mowa o:</Paragraph>
    <ListNumber>
      <ListItem>
        <strong>MC </strong>- rozumie się przez to Ministra Cyfryzacji z
        siedzibą w Warszawie, ul. Królewska 27, 00 – 060 Warszawa. MC w oparciu
        o porozumienie wspiera GIS w rozwoju i utrzymaniu ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>GIS </strong> – rozumie się przez to Głównego Inspektora
        Sanitarnego z siedzibą w Warszawie, ul. Targowa 65, 03–729 Warszawa. GIS
        samodzielnie ustala cele i sposoby przetwarzania informacji przez
        ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>Danych Osobowych </strong>– rozumie się przez to wszelkie
        informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania
        osoby fizycznej w rozumieniu art. 4 pkt. 1 RODO;
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
        <strong>Plikach Cookies (tzw. ciasteczkach) </strong>– rozumie się przez
        to dane informatyczne stanowiące, w szczególności pliki tekstowe, które
        przechowywane są na Urządzeniu Użytkownika i przeznaczone są do
        korzystania z Modułu Triażu.
      </ListItem>
      <ListItem>
        <strong>Regulaminie </strong>– rozumie się przez to dokument, który
        określa warunki korzystania z ProteGO Safe, a także prawa i obowiązki
        GIS, MC oraz Użytkowników.
      </ListItem>
      <ListItem>
        <strong>Module Analitycznym </strong>- funkcjonalność ProteGO Safe
        umożliwiająca zapisywanie, tworzenie historii oraz analizowanie
        spotkania Urządzenia Użytkownika z innymi Urządzeniami Użytkowników
        Aplikacji. Moduł Analityczny jest oparty o Privacy-Preserving Contact
        Tracing API wytworzone oraz udostępnione przez Google oraz Apple.
        Szczegóły dotyczące Privacy-Preserving Contact Tracing API można
        odnaleźć tutaj:{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          exposurenotifications
        </Url>
        . Informacje generowane przez Moduł Analityczny wraz z wynikami jego
        pracy są przechowywane lokalnie na Urządzeniu przez 14 dni. Moduł
        Analityczny umożliwia Użytkownikowi zachowanie anonimowości.
      </ListItem>
      <ListItem>
        <strong>Moduł Triażu </strong>- funkcjonalność ProteGO Safe
        umożliwiająca wykonanie przez Użytkownika samooceny ryzyka narażenia na
        zakażenie <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        , stworzona na podstawie kwestionariusza WHO. Informacje wprowadzane do
        Modułu Triażu są przechowywane lokalnie na Urządzeniu Użytkownika.
      </ListItem>
      <ListItem>
        <strong>Klucz Diagnostyczny </strong>- generowany losowo, okresowy i
        alfanumeryczny ciąg znaków przekazywany na Serwer ProteGO Safe, który
        zawiera anonimowe informacje inicjujące proces analizy narażenia na
        zarażenie <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>{' '}
        w ramach Modułu Analitycznego. Klucz Diagnostyczny jest przekazywany na
        Serwer ProteGO Safe po wpisaniu do Aplikacji Kodu PIN przez Użytkownika
        będącego Osobą Chorą.
      </ListItem>
      <ListItem>
        <strong>Serwer ProteGO Safe </strong>- infrastruktura chmurowa
        utrzymywana przez Operatora Chmury Krajowej służąca do przekazania
        Klucza Diagnostycznego do Urządzeń Użytkowników. Klucze Diagnostyczne
        nie są przechowywane na Serwerze ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>Centrum Kontaktu </strong>- jednostka powiadamiająca
        telefonicznie o wyniku testu na{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>,
        przekazująca Kod PIN Użytkownikom Aplikacji i udzielająca informacji
        związanych z{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      </ListItem>
      <ListItem>
        <strong>Moduł Dziennik Zdrowia </strong> funkcjonalność ProteGO Safe o
        charakterze notatnika umożliwiająca Użytkownikowi odnotowywanie
        informacji o swoim stanie zdrowia. Informacje wprowadzane do Modułu
        Dziennik Zdrowia są przechowywane lokalnie na Urządzeniu Użytkownika.
      </ListItem>
      <ListItem>
        <strong>RODO </strong>– rozumie się przez to Rozporządzenia Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem Danych Osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
        95/46/WE (ogólne rozporządzenie o ochronie danych).
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
        <strong>Użytkowniku </strong> – rozumie się przez to osobę posiadającą
        pełną zdolność do czynności prawnych, która po zaakceptowaniu Regulaminu
        i Polityki Prywatności korzysta z ProteGO Safe.
      </ListItem>
      <ListItem>
        <strong>WHO </strong> - rozumie się przez to Światową Organizację
        Zdrowia (World Health Organisation).
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>Ogólne zasady</Title>
    <ListNumber>
      <ListItem>
        Protego Safe przetwarza informacje niebędące Danymi Osobowymi wyłącznie
        w następujących celach:
        <ListNumber>
          <ListItem>
            przeciwdziałania pandemii{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>;
          </ListItem>
          <ListItem>
            profilowania w ramach Modułu Analitycznego w celu przeciwdziałania
            pandemii{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>;
          </ListItem>
          <ListItem>
            korzystania przez Użytkownika z Aplikacji zgodnie z Regulaminem;
          </ListItem>
          <ListItem>analiza, organizowanie i ulepszanie ProteGO Safe.</ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        Protego Safe działa w związku z realizacją przez GIS obowiązków
        wynikających z art. 1, 2, 3, 6 oraz 8a ust. 1, 4 i 5 ustawy z dnia 14
        marca 1985 r o Państwowej Inspekcji Sanitarnej (Dz.U. z 2019 r. poz.
        59).
      </ListItem>
      <ListItem>
        ProteGO Safe przetwarza informacje niewymagające identyfikacji jak
        stanowi art. 11 RODO. GIS ani MC nie są w stanie zidentyfikować osoby,
        której dane dotyczą (Użytkownika). GIS przestrzega następujących zasad:
        <ListNumber>
          <ListItem>
            wdraża odpowiednie środki techniczne i organizacyjne, aby
            przetwarzanie danych o Użytkownikach Aplikacji odbywało się w sposób
            anonimowy bez ich identyfikacji zgodnie z przepisami o ochronie
            Danych Osobowych i aby móc to wykazać;
          </ListItem>
          <ListItem>
            wykonuje nadzór nad bezpieczeństwem danych przez cały okres ich
            posiadania w sposób zapewniający w szczególności ochronę przed
            dostępem osób nieuprawnionych, uszkodzeniem, zniszczeniem lub
            utratą;
          </ListItem>
          <ListItem>
            zachowuje poufność informacji dotyczących Użytkownika poprzez
            zastosowanie szyfrowania;
          </ListItem>
          <ListItem>
            zapewnia osobom, których dane dotyczą, realizację ich praw
            wynikających z przepisów prawa.
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        Aplikacja może przetwarzać następujące informacje:
        <ListNumber>
          <ListItem>
            Dane związane z wykorzystywaniem serwera zapewniającego
            przekazywanie Użytkownikom komunikatów:
            <ListAlpha>
              <ListItem>UID - losowy identyfikator Użytkownika,</ListItem>
              <ListItem>
                Średni czas korzystania z Aplikacji przez Użytkowników (dane
                statystyczne, których nie można powiązać z poszczególnymi
                Użytkownikami).
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            Dane statystyczne pochodzące ze sklepów z aplikacjami tj. Google
            Play Store oraz Apple AppStore, których nie można powiązać z
            poszczególnymi Użytkownikami (dane statystyczne):
            <ListAlpha>
              <ListItem>
                Informacja o instalacji, ostatnim korzystaniu i usunięciu
                Aplikacji;
              </ListItem>
              <ListItem>
                Lokalizacja, w której znajdował się Użytkownik podczas
                instalacji Aplikacji (określenie miasta lub kraju);
              </ListItem>
              <ListItem>Modele Urządzeń Użytkowników;</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            Dane przechowywane lokalnie na Urządzeniach, niezależnie od systemu
            operacyjnego Urządzenia. Dane te nie są przekazywane poza Urządzenie
            Użytkownika:
            <ListAlpha>
              <ListItem>ID Użytkownika,</ListItem>
              <ListItem>Historia wpisów do Dziennika Zdrowia,</ListItem>
              <ListItem>Historia wpisów do Modułu Triażu,</ListItem>
              <ListItem>
                Temporary_exposure_keys_upload_status - informacja czy
                przesłanie informacji w ramach Modułu Analitycznego zakończyło
                się pomyślnie czy też z błędem,
              </ListItem>
              <ListItem>
                informacja o tym, czy Aplikacja jest uruchamiana pierwszy raz,
              </ListItem>
              <ListItem>Informacja o połączeniu Internetowym,</ListItem>
              <ListItem>
                informacja o tym, czy Użytkownik udzielił zgodę na powiadomienia
                push w Aplikacji,
              </ListItem>
              <ListItem>
                informacja o tym, czy Użytkownik przydzielił Aplikacji
                uprawnienie konieczne dla funkcjonowania Modułu Analitycznego,
              </ListItem>
              <ListItem>
                informacja o tym, czy moduł Bluetooth urządzenia jest włączony,
              </ListItem>
              <ListItem>
                Informacja o stanie, włączeniu i aktywności Modułu
                Analitycznego,
              </ListItem>
              <ListItem>
                Informacja o stanie Aplikacji (czy jest włączona na pierwszym
                planie, czy w tle),
              </ListItem>
              <ListItem>
                Informacje usuwane po 14 dniach:
                <ListRoman>
                  <ListItem>
                    historia wyników analiz Modułu Analitycznego z ostatnich 14
                    dni,
                  </ListItem>
                  <ListItem>
                    okres kontaktu Urządzeń Użytkowników, wartości w zakresie
                    5-30 minut,
                  </ListItem>
                  <ListItem>data kontaktu Urządzeń Użytkowników.</ListItem>
                </ListRoman>
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            Dane przekazywane do innych Urządzeń za pośrednictwem Serwera
            ProteGO Safe:
            <ListAlpha>
              <ListItem>
                Klucz Diagnostyczny - zawiera informacje o kluczu,
                rollingPeriod, rollingStartNumber oraz transmissionRisk
                (dokładne informacje{' '}
                <Url value="https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey">
                  tutaj
                </Url>
                )
              </ListItem>
              <ListItem>region działania Aplikacji (Polska);</ListItem>
              <ListItem>
                informacja, że Klucz Diagnostyczny jest związany z aplikacją
                ProteGO Safe;
              </ListItem>
              <ListItem>potwierdzenie, że Kod PIN jest poprawny.</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            Anonimowy Plik Cookies zawierający UID Użytkownika przekazywany do
            Cloudflare Inc. w celu zapobiegania atakom DDOS oraz zapewnienia
            najwyższych standardów bezpieczeństwa Użytkowników.
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        Odbiorcami zanonimizowanych danych i informacji z ProteGO Safe mogą być:
        <ListNumber>
          <ListItem>
            podmioty, które współpracują z GIS w celu rozwoju i utrzymania
            ProteGO Safe:
            <ListAlpha>
              <ListItem>
                MC odpowiedzialny za nadzór nad rozwojem i utrzymaniem ProteGO
                Safe tj. Minister Cyfryzacji z siedzibą w Warszawie, ul.
                Królewska 27, 00 – 060 Warszawa, e-mail:{' '}
                <Email>mc@mc.gov.pl</Email>;
              </ListItem>
              <ListItem>
                podmiot odpowiedzialny za utrzymanie aplikacji ProteGO Safe, a
                także wykonywanie zleconych przez MC prac rozwojowych i
                deweloperskich nad ProteGO Safe: TYTANI24 Spółka z ograniczoną
                odpowiedzialnością z siedzibą we Wrocławiu, ul. Ząbkowicka 55,
                50 – 511 Wrocław (adres biura: ul. Kościerzyńska 32A, Wrocław,
                51 – 410), wpisana do rejestru przedsiębiorców Krajowego
                Rejestru Sądowego prowadzonego przez Sąd Rejonowy we Wrocławiu,
                VI Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem
                KRS 0000725465, REGON 369879064, NIP 8992843182, o kapitale
                zakładowym opłaconym w całości w wysokości 20 000,00 zł;
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            Operator Chmury Krajowej Sp. z o.o. podmiot dostarczający
            infrastrukturę umożliwiającą pobieranie i aktualizowanie ProteGO
            Safe oraz utrzymujący Serwer ProteGO Safe. Podmiot ten świadczy
            także utrzymanie usługi Google Firebase umożliwiającej przekazywanie
            Użytkownikom powiadomień push -{' '}
            <Url value="https://firebase.google.com/support/privacy">
              firebase
            </Url>
            ;
          </ListItem>
          <ListItem>
            Cloudflare Inc. 101 Townsend St, San Francisco, CA 94107, USA
            (usługa zapobiegania atakom DDOS oraz zapewnienia najwyższych
            standardów bezpieczeństwa Użytkowników).
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        ProteGO Safe będzie aktywne jedynie przez okres pandemii{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url> i może
        zostać dezaktywowana zgodnie z decyzją GIS. Po zaprzestaniu korzystania
        z ProteGO Safe wszystkie informacje zostaną usunięte wraz z Aplikacją.
      </ListItem>
      <ListItem>
        Informacje dotyczące Użytkownika w postaci anonimowego adresu UID mogą
        być przekazywane poza Europejski Obszar Gospodarczy w zakresie
        korzystania z usługi świadczonej przez Cloudflare w celu zapobiegania
        atakom DDOS oraz zapewnienia najwyższych standardów bezpieczeństwa
        Użytkowników. Numer UID Użytkownika pozostanie anonimowy i nie będzie
        umożliwiał identyfikacji Użytkownika. Takie przekazanie nastąpi także
        jedynie w sytuacji wyjątkowej, w szczególności wtedy, gdy Użytkownik
        będzie korzystał z Aplikacji poza terenem Europejskiego Obszaru
        Gospodarczego.
      </ListItem>
      <ListItem>
        GIS nie podejmuje względem Użytkownika decyzji w sposób zautomatyzowany
        w rozumieniu art. 22 RODO.
      </ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>Prawa Użytkowników</Title>
    <ListNumber>
      <ListItem>
        ProteGO Safe umożliwia Użytkownikowi w dowolnym czasie usunięcie
        historii Modułu Analitycznego, Modułu Dziennik Zdrowia oraz Modułu
        Triażu. W tym celu należy skorzystać z odpowiednich funkcjonalności
        ProteGO Safe.
      </ListItem>
      <ListItem>
        W sprawie jakichkolwiek pytań i wniosków związanych z prawami
        Użytkowników należy kontaktować się pod adresem:{' '}
        <Email>protego@mc.gov.pl</Email> lub <Email>iod@gis.gov.pl</Email>.
      </ListItem>
      <ListItem>
        Użytkownik, ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
        Osobowych, jeżeli uzna, że Przetwarzanie jego Danych Osobowych narusza
        przepisy RODO lub powszechnie obowiązujące przepisy. Skargę można wysłać
        pisemnie na adres: Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
        00-193 Warszawa lub elektroniczne za pośrednictwem portalu ePUAP.
      </ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>Postanowienia końcowe</Title>
    <ListNumber>
      <ListItem>
        W ProteGO Safe mogą pojawiać się linki do innych stron internetowych.
        Takie strony internetowe działają niezależnie od GIS i nie są w żaden
        sposób przez niego nadzorowane. Strony te mogą posiadać własne polityki
        prywatności oraz regulaminy, z którymi zalecamy się zapoznać.
      </ListItem>
      <ListItem>
        GIS zastrzega sobie prawo zmiany Polityki Prywatności poprzez
        opublikowanie nowej Polityki Prywatności na stronie ProteGO Safe.
      </ListItem>
    </ListNumber>
  </>
);

export default PrivacyPolicyContent;
