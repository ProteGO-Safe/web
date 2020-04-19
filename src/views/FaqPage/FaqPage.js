import React from 'react';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container } from '../../components';
import './FaqPage.scss';

const FaqPage = () => {

  return (
    <div className="view view__user-data">
      <Header />
      <Container>
        <h4 className="text-center medium">Pytania i odpowiedzi</h4>
        <div className="content">
          
          <div className="article-area main-container ">
            <article className="article-area__article " id="main-content">
                <p className="intro">Szanowni Państwo! Niecodzienna sytuacja związana z epidemią nasuwa nam wszystkim wiele pytań – jak funkcjonuje transport publiczny, do kiedy są kontrole na granicy, komu przysługuje dodatkowy zasiłek opiekuńczy na dziecko. Odpowiedzi na te i inne pytania zbieramy w jednym miejscu, a zakładka jest na bieżąco aktualizowana. Pytania są podzielone tematycznie.</p>
                <div className="editor-content">
                    <h3>Wychodzisz z domu? Zasłoń usta i nos!</h3>
                    <div>
                        <details>
                            <summary>Czy tylko za pomocą maski mogę zasłonić usta i nos?</summary>
                            <p>Nie. Dopuszcza się również zakrywanie ust i nosa przy pomocy części odzieży (np. chusty, apaszki, szalika) czy za pomocą przyłbicy.</p>
                        </details>
                        <details>
                            <summary>Czy w samochodzie również obowiązuje nakaz?</summary>
                            <p>Jeśli podróżujemy sami lub z bliskimi, z którymi mieszkamy lub z dzieckiem do 4 lat – nie ma obowiązku zasłaniania twarzy. Jeśli jednak jedziemy z pasażerami obcymi, tzn. z takimi, z którymi nie mieszkamy – musimy zasłonić usta i nos.</p>
                        </details>
                        <details>
                            <summary>Czy w kościele również powinniśmy zasłaniać usta i nos?</summary>
                            <p>Tak, nakaz obowiązuje w miejscach kultu religijnego. Jedynie kapłani, którzy odprawiają obrzęd, są zwolnieni z tego obowiązku.</p>
                        </details>
                        <details>
                            <summary>Czy w sklepach i na targowiskach obowiązuje nakaz zasłaniania ust i nosa?</summary>
                            <p>Tak, nakaz obowiązuje we wszystkich obiektach handlowych, placówkach handlowych i na targowiskach. Nie dotyczy jedynie pracowników tych miejsc, którzy nie mają kontaktów z klientami. Magazynier rozładowujący towar na zapleczu – nie musi zakrywać twarzy. Kasjer, który obsługuje klientów – musi mieć zakryte usta i nos.</p>
                        </details>
                        <details>
                            <summary>Jestem rolnikiem. Czy muszę zakrywać twarz, kiedy pracuję na polu, w gospodarstwie?</summary>
                            <p>Nie. Rolnicy wykonujący prace gospodarskie nie muszą zasłaniać twarzy.</p>
                        </details>
                        <details>
                            <summary>Obowiązek zakrywania twarzy obowiązuje w miejscach publicznych. Czy mogę odsłonić twarz, jeśli jestem w banku, wypłacam pieniądze, a kasjer chce sprawdzić, czy jestem osobą, za którą się podaje?</summary>
                            <p>Tak. Policjanci, strażnicy graniczni, kasjerzy w banku czy sprzedawcy w sklepie mogą zażądać od nas odkrycia twarzy w celu identyfikacji. Mamy obowiązek uczynić to na ich prośbę.</p>
                        </details>
                        <details>
                            <summary>Jestem kasjerką. W jaki sposób mam wytrzymać w maseczce wiele godzin? To bardzo niekomfortowe.</summary>
                            <p>Pracownicy sklepów i punktów usługowych mogą zakrywać twarze przy pomocy przyłbicy, jeśli wszystkie kasy, punkty sprzedaży, okienka itd. są oddzielone od klientów dodatkową przesłoną ochronną.</p>
                        </details>
                        <details>
                            <summary>Pracuję na poczcie. Część obowiązków wykonuję na zapleczu, część przy okienku. Kiedy muszę zasłaniać usta i nos?</summary>
                            <p>Nie ma obowiązku zakrywania twarzy w miejscu pracy. Wyjątkiem jest sytuacja, w której dana osoba ma kontakt z kimś z zewnątrz – klientem, interesantem itp. Dlatego osoba obsługująca obywateli przy okienku musi mieć zakrytą twarz, a ta pracująca na zapleczu już nie.</p>
                        </details>
                        <details>
                            <summary>Przy domu mam ogród. Czy na swoim prywatnym terenie muszę również zakrywać usta i nos?</summary>
                            <p>Jeśli przebywamy na terenie prywatnym, a więc na tarasie, czy w ogrodzie, nie musimy zasłaniać twarzy.</p>
                        </details>
                        <details>
                            <summary>W naszym bloku znajduje się pralnia i suszarnia. Czy trzeba tam zakrywać nos i usta?</summary>
                            <p>Jeżeli przebywamy w takich miejscach jak parking podziemny, suszarnia, strych, pralnia, klatka schodowa, piwnica – które są częścią wspólną bloków mieszkalnych – wówczas również mamy obowiązek zasłonięcia ust i nosa.</p>
                        </details>
                        <p> </p>
                    </div>
                </div>
                <div className="editor-content">
                    <h3>W sklepie mniej osób, ograniczenia w poruszaniu nieletnich, a parki, plaże i bulwary zamknięte </h3>
                    <div>
                        <p><span className="font-11pt"><strong>NOWE ZASADY KORZYSTANIA ZE SKLEPÓW, TARGOWISK I PLACÓWEK POCZTOWYCH</strong></span></p>
                        <details>
                            <summary>W sklepie mamy 7 kas. Czy to znaczy, że na terenie sklepu może być 21 osób, włącznie z obsługą? Czy pracownicy sklepów wliczają się do tego działania?</summary>
                            <p>Nie. Zasada „maksymalnie 3 razy więcej osób niż kas” dotyczy tylko klientów danego sklepu czy punktu usługowego. Dlatego też w opisanym sklepie może się znaleźć 21 osób plus obsługa.</p>
                        </details>
                        <details>
                            <summary>Czy jeśli w sklepie są 4 kasy, ale na stałe działają tylko 3, to znaczy, że na terenie mojego sklepu może się znajdować maksymalnie 9 osób? Czy 12?</summary>
                            <p>W takim przypadku w sklepie może być maksymalnie 12 osób (plus obsługa). Zawsze przy obliczaniu bierze się pod uwagę liczbę wszystkich kas – również tych aktualnie nieczynnych.</p>
                        </details>
                        <details>
                            <summary>Dlaczego tylko osoby po 65. roku życia mogą robić zakupy między 10:00 a 12:00?</summary>
                            <p><span className="font-11pt">Osoby starsze są najbardziej narażone z powodu koronawirusa. Dlatego też chcemy ograniczyć ich kontakt z pozostałymi osobami. To czas, aby zrealizować zakupy bez kontaktu z innymi osobami, które mogą zarażać. Osoby powyżej 65. roku życia mogą robić zakupy też w innych godzinach, ale te dwie godziny są specjalnym czasem do realizacji ich potrzeb</span></p>
                        </details>
                        <details>
                            <summary>Czy sklepy mają obowiązek zapewnić rękawiczki dla klientów?</summary>
                            <p><span className="font-11pt">Sklepy będą miały obowiązek zapewnienia jednorazowych rękawiczek lub środków do dezynfekcji rąk. Natomiast zalecamy, żeby również klient we własnym zakresie miał ze sobą rękawiczki. Obowiązek ten wprowadzamy od 2 kwietnia 2020 r.</span></p>
                        </details>
                        <details>
                            <summary>Dlaczego należy nosić rękawiczki w sklepie?</summary>
                            <p><span className="font-11pt">Noszenie rękawiczek w miejscach publicznych<strong> </strong>zmniejsza ryzyko zakażenia<strong> </strong>koronawirusem. Pamiętaj! Po zdjęciu rękawiczek należy umyć ręce, a także dbać o to, aby nie dotykać twarzy, nosząc rękawiczki. </span></p>
                        </details>
                        <details>
                            <summary>Czy osoby poniżej 65. roku życia będą mogły wejść do sklepu w godzinach 10:00-12:00?</summary>
                            <p><span className="font-12pt"><span className="font-11pt">Nie. <span className="color-222222">W godzinach od 10:00 do 12:00 sklepy i punkty usługowe mogą przyjmować i obsługiwać jedynie osoby powyżej 65 roku życia. </span></span>
                                </span>
                            </p>
                            <p><span className="font-11pt">Stacje benzynowe zostają wyłączone z tzw. „godzin dla seniora”. </span></p>
                            <p><span className="font-11pt">Apteki natomiast w czasie tych dwóch godzin będą mogły obsługiwać także tych, dla których nabycie leku lub środka spożywczego specjalnego przeznaczenia jest konieczne ze względu na nagłe zagrożenie życia lub zdrowia.</span></p>
                        </details>
                        <p><strong><span className="font-11pt">WYJŚCIA Z DOMU ORAZ PRZEMIESZCZANIE SIĘ</span></strong> </p>
                        <details>
                            <summary>Mój syn ma 16 lat. Czy nie może beze mnie wyjść na ulicę?</summary>
                            <p><span className="font-11pt">Nie, nie może. Wszystkie osoby niepełnoletnie nie mogą wychodzić z domu bez opieki osoby dorosłej. Ponadto podkreślamy, że każdego obowiązuje zasada, że opuszczenie domu możliwe jest tylko w trzech przypadkach:</span></p>
                            <ul>
                                <li><span className="font-12pt"><strong><span className="font-11pt"><span className="color-222222">dojazdu do pracy</span></span>
                                    </strong><span className="font-11pt"><span className="color-222222">. Jeśli jesteś pracownikiem, prowadzisz swoją firmę, czy gospodarstwo rolne, masz prawo dojechać do swojej pracy. Masz również prawo udać się po zakup towarów i usług związanych ze swoją zawodową działalnością.</span></span>
                                    </span>
                                </li>
                                <li><span className="font-12pt"><strong><span className="font-11pt"><span className="color-222222">wolontariatu na rzecz walki z COVID-19. </span></span>
                                    </strong><span className="font-11pt"><span className="color-222222">Jeśli<strong> </strong>działasz na rzecz walki z koronawirusem i pomagasz potrzebującym przebywającym na kwarantannie lub osobom, które nie powinny wychodzić z domu, możesz się przemieszczać w ramach tej działalności.</span></span>
                                    </span>
                                </li>
                                <li><strong><span className="font-11pt"><span className="color-222222">załatwiania spraw niezbędnych do życia codziennego. </span></span></strong><span className="font-11pt"><span className="color-222222">Będziesz mógł się przemieszczać, aby zrobić niezbędne zakupy, wykupić lekarstwa, udać się do lekarza, opiekować się bliskimi, wyprowadzić psa.</span></span>
                                </li>
                            </ul>
                        </details>
                        <details>
                            <summary>Czy mogę iść na spacer do lasu lub jechać tam rowerem, skoro parki są zamknięte?</summary>
                            <p><span className="font-11pt">Należy unikać miejsc, gdzie gromadzą się ludzie i nie narażać się na ryzyko zachorowania. <span className="color-222222">Ostatnie doświadczenia pokazują, że lasy to niestety miejsca, w których dochodzi do gromadzenia się wielu osób, a tym samym zwiększenia szans na zakażenie.</span></span>
                            </p>
                        </details>
                        <details>
                            <summary>Czy będę mógł wejść do parku, gdy nie będzie w nim ludzi?</summary>
                            <p><span className="font-11pt">Nie. Wprowadzamy całkowity zakaz poruszania się po parkach, bulwarach, ogródkach jordanowskich, ogrodach botanicznych i zoologicznych.</span></p>
                        </details>
                        <details>
                            <summary>Czy bulwary wiślane będą zamknięte?</summary>
                            <p>Tak.</p>
                        </details>
                        <details>
                            <summary>Czy mogę skorzystać z rowerów miejskich?</summary>
                            <p><span className="font-11pt">Nie. Wprowadzony jest zakaz korzystania z wypożyczalni rowerów miejskich. </span></p>
                        </details>
                        <details>
                            <summary>Mam podopiecznego, który jeździ na wózku inwalidzkim. W jaki sposób mam zachować odstęp 2 metrów od niego, skoro to ja prowadzę wózek?</summary>
                            <p><span className="font-11pt">Z obowiązku utrzymania właściwej odległości od drugiej osoby zwolnieni są opiekunowie dzieci lub osób niepełnosprawnych. </span></p>
                        </details>
                        <details>
                            <summary>Jestem prywatnym przewoźnikiem – jeżdżę busem. Jakie ograniczenia na mnie ciążą?</summary>
                            <p><span className="font-11pt">Od 2 kwietnia prywatni przewoźnicy muszą stosować zasady, które w związku z koronawirusem stosuje już publiczny transport zbiorowy. Oznacza to, że kierowca prywatnego autokaru lub busa może w jednym czasie przewieźć tyle pasażerów, ile wynosi połowa miejsc siedzących w pojeździe. <span className="color-222222">Jeśli w busie przewoźnika prywatnego jest 20 miejsc siedzących, to na pokład pojazdu może jednorazowo wejść maksymalnie 10 osób.</span></span>
                            </p>
                        </details>
                        <details>
                            <summary>Czy w taksówce mogą jechać dwie osoby plus kierowca?</summary>
                            <p><span className="font-11pt">Tak. Obostrzenia nie dotyczą samochodów osobowych.</span></p>
                        </details>
                        <details>
                            <summary>Czy mogę wyjść na spacer?</summary>
                            <p><span className="font-11pt">Aktywność na zewnątrz powinna być ograniczona do minimum. Traktujmy możliwość wyjścia na zewnątrz jako niezbędny środek higieny. Wychodźmy się przewietrzyć wtedy, gdy naprawdę tego potrzebujemy</span></p>
                        </details>
                        <details>
                            <summary>Od kiedy będę miał obowiązek zakrywania nosa i ust?</summary>
                            <p>Od 16 kwietnia 2020 r.</p>
                            <p><span className="bg-white"><span className="color-1b1b1b">Każda osoba w miejscu publicznym będzie musiała nosić maseczkę, szalik czy chustkę, która zakryje zarówno usta, jak i nos. Obowiązek dotyczy wszystkich, którzy znajdują się na ulicach, w urzędach, sklepach czy miejscach świadczenia usług oraz zakładach pracy.</span></span>
                            </p>
                        </details>
                        <details>
                            <summary>Czy od 16 kwietnia konieczne będzie noszenie maseczek?</summary>
                            <p>Od 16 kwietnia wprowadzamy obowiązek zakrywania nosa i ust w miejscach publicznych. W tym celu możesz wykorzystać maseczkę, ale również szalik lub chustkę.</p>
                        </details>
                        <p><span className="font-11pt"><strong>USŁUGI</strong></span></p>
                        <details>
                            <summary>Od kiedy obowiązują ograniczenia w funkcjonowaniu salonów fryzjerskich, kosmetycznych, tatuażu i piercingu?</summary>
                            <p>Ograniczenia obowiązują od 1 kwietnia.</p>
                            <p>Bieżące daty obowiązywania zasad bezpieczeństwa dostępne są na <span className="link">https://www.gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</span> gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</p>
                        </details>
                        <details>
                            <summary>Czy jeżeli ktoś prowadzi zakład kosmetyczny w domu/z dojazdem do klienta, czy może kontynuować pracę?</summary>
                            <p><span className="font-11pt"><span className="color-222222">Zamknięte zostają bez wyjątków wszystkie zakłady fryzjerskie, salony tatuażu, piercingu i wykonujące usługi kosmetyczne. Nie będzie można realizować również tych usług poza salonami – np. poprzez wizyty w domach.</span></span>
                            </p>
                        </details>
                        <p><strong> <span className="font-11pt">HOTELE</span></strong></p>
                        <details>
                            <summary>Prowadzę pensjonat w górach – obecnie goszczę 10 osób. Czy muszę je wykwaterować?</summary>
                            <p><span className="font-11pt"><span className="color-222222">Hotele i inne miejsca noclegowe zostają zamknięte. Mogą pozostać otwarte tylko i wyłącznie dla:</span></span>
                            </p>
                            <ul>
                                <li><span className="font-11pt"><span className="color-222222">osób w kwarantannie lub izolacji, </span></span>
                                </li>
                                <li><span className="font-11pt"><span className="color-222222">personelu medycznego,</span></span>
                                </li>
                                <li><span className="font-11pt"><span className="color-222222">osób w delegacji i dla tych, którzy korzystają z usług noclegowych w ramach wykonywania obowiązków służbowych (dotyczy to np. pracowników budowlanych),</span></span>
                                </li>
                                <li><span className="font-11pt"><span className="color-222222">osób, które były zakwaterowane w obiekcie noclegowym przed 31 marca. </span></span>
                                </li>
                            </ul>
                        </details>
                        <details>
                            <summary>Czy z hoteli nie będzie można korzystać podczas wyjazdów służbowych?</summary>
                            <p><span className="font-11pt">Z pobytu w hotelach będą mogły korzystać jedynie osoby nocujące w związku z wykonywaniem przez nie czynności zawodowych (np. pracownicy budowlani) lub zadań służbowych, lub pozarolniczej działalności gospodarczej, lub prowadzenia działalności rolniczej.</span></p>
                        </details>
                    </div>
                </div>
                <div className="editor-content">
                    <h3>Nowe zasady bezpieczeństwa w związku z koronawirusem – do 19 kwietnia 2020 r.</h3>
                    <div>
                        <p>Wprowadzamy nowe zasady bezpieczeństwa, w tym ograniczenie w przemieszczaniu się. Obowiązek pozostania w domu nie będzie dotyczył jednak dojazdu do pracy czy załatwiania niezbędnych codziennych potrzeb, takich jak zakup jedzenia, lekarstw czy opieki nad bliskimi. Zależy nam na tym, aby Polacy nie narażali siebie i innych na zakażenie koronawirusem. </p>
                        <hr />
                        <h4>Podstawa prawna</h4>
                        <p><span className="link">http://dziennikustaw.gov.pl/DU/2020/522</span> Rozporządzenie Ministra Zdrowia z dnia 24 marca 2020 r. zmieniające rozporządzenie w sprawie ogłoszenia na obszarze Rzeczypospolitej Polskiej stanu epidemii</p>
                        <details>
                            <summary>Do kiedy będą obowiązywać dodatkowe ograniczenia?</summary>
                            <p>Do 19 kwietnia 2020 r.</p>
                            <p>Bieżące daty obowiązywania zasad bezpieczeństwa dostępne są na <span className="link">https://www.gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</span> gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</p>
                        </details>
                        <details>
                            <summary>Dlaczego wprowadzane są dodatkowe ograniczenia?</summary>
                            <p>W Polsce coraz więcej osób jest zarażonych koronawirusem. Wciąż jednak mamy lepszą sytuację niż inne kraje w Europie i na świecie. Zależy nam, aby tak zostało. Podjęta przez polski rząd decyzja o wprowadzeniu dodatkowych ograniczeń ma za zadanie jak najszybciej zwalczyć koronawirusa w Polsce. Wierzymy, że wprowadzenie ograniczeń na wczesnym etapie pozwoli nam uniknąć sytuacji z Włoch czy Hiszpanii.</p>
                        </details>
                        <details>
                            <summary>Czy komunikacja miejska będzie funkcjonować normalnie?</summary>
                            <p>Tak, jednak w autobusie, tramwaju lub metrze tylko połowa miejsc siedzących może być zajęta. Najlepiej – żeby co drugie miejsce siedzące pozostało puste. Jeśli miejsc siedzących w pojeździe jest 70, to na jego pokładzie może znajdować się maksymalnie 35 osób.</p>
                        </details>
                        <details>
                            <summary>Czy przez wprowadzone ograniczenie będę mógł uczestniczyć w nabożeństwie w kościele?</summary>
                            <p>Tylko w zakresie limitu osób. Ograniczenia w przemieszczaniu się nie dotyczą osób, które chcą uczestniczyć w sprawowaniu kultu religijnego. Wprowadzamy jednak nowe zasady: na danym terenie lub w danym obiekcie może znajdować się –zarówno wewnątrz, jak i na zewnątrz pomieszczeń – nie więcej niż 5 osób (z wyłączeniem osób sprawujących posługę). Dlatego zachęcamy wszystkich do uczestnictwa w mszach online lub za pośrednictwem radia i telewizji.</p>
                        </details>
                        <details>
                            <summary>Na czym polega ograniczenie zgromadzeń publicznych?</summary>
                            <p>Ograniczenie dotyczy organizowania zgromadzeń, spotkań, imprez czy zebrań. Obowiązuje zakaz wszelkich zgromadzeń, spotkań, imprez czy zebrań powyżej 2 osób. Obostrzenie to nie dotyczy spotkań z najbliższymi.</p>
                            <p>Z obowiązku wyłączone są również zakłady pracy. Pracodawcy będą musieli jednak zapewnić dodatkowe środki bezpieczeństwa swoim pracownikom. I tak:</p>
                            <ul>
                                <li>stanowiska pracy poszczególnych osób muszą być oddalone od siebie o co najmniej 1,5 metra,</li>
                                <li>pracownicy mają obowiązek używania rękawiczek, a także mieć dostęp do płynów dezynfekujących.</li>
                            </ul>
                            <p><strong>Ważne! </strong>Pracodawca musi zapewnić te środki bezpieczeństwa od czwartku, 2 kwietnia 2020 roku.&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;</p>
                            <p>Ograniczenie organizowania zgromadzeń publicznych, imprez, spotkań, czy zebrań powyżej 2 osób obowiązuje do odwołania.</p>
                        </details>
                        <details>
                            <summary>Czy policja będzie egzekwować zakaz gromadzenia się osób?</summary>
                            <p>W związku z ograniczeniami wprowadzonymi przez ministra zdrowia (dotyczącymi m.in. zakazu przebywania w przestrzeni publicznej grupy składającej się z więcej niż dwóch osób np. zgromadzeń, spotkań, imprez czy zebrań) policjanci będą początkowo prowadzili przede wszystkim intensywną akcję informacyjno-edukacyjną. Jak zaznaczył Mariusz Kamiński, minister spraw wewnętrznych i administracji, celem nadrzędnym jest zwalczenie problemu rozprzestrzeniania się koronawirusa, a nie karanie mieszkańców. Policjanci będą również kontrolować, czy komunikacja miejska nie jest przepełniona. Sprawdzą, czy zgodnie z nowymi zasadami w autobusie, tramwaju lub metrze zajęta jest maksymalnie połowa miejsc siedzących. Funkcjonariusze współpracują w tym zakresie z władzami samorządowymi.</p>
                        </details>
                        <details>
                            <summary>Jestem rolnikiem. Czy mogę wykonywać swoją pracę normalnie?</summary>
                            <p>Tak. Ograniczenie w przemieszczaniu się nie dotyczy prowadzenia działalności rolniczej, wykonywania pozarolniczej działalności gospodarczej i prac w gospodarstwie rolnym, a także zakupów towarów i usług związanych z tymi aktywnościami (np. zakup nawozów sztucznych przez rolników czy zakup towarów do sklepu spożywczego prowadzonego przez indywidualnego przedsiębiorcę).</p>
                        </details>
                        <details>
                            <summary>Czy sklepy spożywcze i apteki będą otwarte?</summary>
                            <p>Tak. Nie zamykamy sklepów spożywczych, aptek, banków, pralni i drogerii.</p>
                        </details>
                        <details>
                            <summary>Na jakiej podstawie wprowadzane są nowe ograniczenia?</summary>
                            <p>Na podstawie ustawy z dnia 5 grudnia 2008 r. o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi.</p>
                        </details>
                        <details>
                            <summary>Opiekuję się starszą osobą. Czy przez wprowadzone ograniczenia będę mógł jej pomagać?</summary>
                            <p>Tak. Nadal będzie można pomagać takiej osobie.</p>
                        </details>
                        <details>
                            <summary>Nie mogę pracować zdalnie. Czy mogę przemieszczać się do miejsca pracy?</summary>
                            <p>Tak. Ograniczenia w przemieszczaniu się nie dotyczą pracowników w drodze do i z pracy.</p>
                        </details>
                        <details>
                            <summary>Pracuję na umowę cywilnoprawną, czy mogę normalnie przemieszczać się do miejsca pracy?</summary>
                            <p>Tak. Wszyscy pracownicy zatrudnieni na umowę o pracę oraz umowy cywilnoprawne mogą bez przeszkód przemieszczać się do miejsca pracy.</p>
                        </details>
                        <details>
                            <summary>Czy restauracje nadal będą mogły wydawać posiłki na wynos?</summary>
                            <p>Tak, nadal będą mogły prowadzić tego typu usługi.</p>
                        </details>
                        <details>
                            <summary>Na czym polegają ograniczenia w przemieszczaniu się?</summary>
                            <p>Ograniczenie dotyczy przemieszczania się, podróżowania, przebywania w miejscach publicznych.</p>
                            <p>Wychodzenie z domu powinno być ograniczone do absolutnego minimum, a odległość utrzymana od innych pieszych powinna wynosić co najmniej 2 metry.</p>
                            <p>Przemieszczać się możesz w przypadku:</p>
                            <ul>
                                <li>dojazdu do i z pracy (dotyczy to także zakupu towarów i usług związanych z zawodową działalnością),</li>
                                <li>wolontariatu na rzecz walki z COVID-19 (dotyczy to pomocy osobom przebywającym na kwarantannie lub osobom, które nie powinny wychodzić z domu),</li>
                                <li>załatwiania spraw niezbędnych do życia codziennego (do czego zalicza się np., niezbędne zakupy, wykupienie lekarstw, wizyta u lekarza, opieka nad bliskimi).</li>
                            </ul>
                            <p><strong>Ważne!</strong> Przemieszczać się można jedynie w grupie do dwóch osób – jedynie rodziny są wyjęte spod tego ograniczenia i mogą poruszać się w większych grupach.</p>
                            <p><strong>Ważne! </strong>2 metry – minimalna odległość między pieszymi</p>
                            <p>Wprowadzamy obowiązek utrzymania co najmniej 2-metrowej odległości między pieszymi. Dotyczy to także rodzin i bliskich.</p>
                            <p>Wyłączeni z tego obowiązku są:</p>
                            <ul>
                                <li>rodzice z dziećmi wymagającymi opieki (do 13 roku życia),</li>
                                <li>a także osoby niepełnosprawne lub niemogące się samodzielnie poruszać i ich opiekunowie. </li>
                            </ul>
                        </details>
                        <details>
                            <summary>Co to znaczy „niezbędne sprawy życia codziennego”?</summary>
                            <p>To na przykład konieczność wizyty u lekarza, zrobienia zakupów, wykupienia leków.</p>
                        </details>
                        <details>
                            <summary>Ile osób naraz może być w autobusie lub tramwaju?</summary>
                            <p><span className="font-12pt"><span className="font-11pt">W autobusie, tramwaju lub metrze tylko połowa miejsc siedzących może być zajęta. Najlepiej – żeby co drugie miejsce siedzące pozostało puste. Jeśli miejsc siedzących w pojeździe jest 70, to na jego pokładzie może znajdować się maksymalnie 35 osób.</span></span>
                            </p>
                        </details>
                        <details>
                            <summary>Czy mogę wyjść na spacer do parku lub lasu, wyjść z dziećmi na plac zabaw?</summary>
                            <p>Ograniczenie dotyczy przebywania na terenach zielonych, pełniących funkcje publiczne. Zakaz dotyczy więc parków, zieleńców, promenad, bulwarów, ogrodów botanicznych i zoologicznych czy ogródków jordanowskich. Zakaz obejmuje również plaże.</p>
                            <p>Nie będzie można także korzystać z rowerów miejskich.</p>
                        </details>
                        <details>
                            <summary>Dojeżdżam do pracy. Czy muszę mieć zaświadczenie od pracodawcy w razie kontroli?</summary>
                            <p>Nie. W przypadku ewentualnej kontroli należy poinformować funkcjonariuszy o celu podróży: czy jadę do pracy, czy wracam z niej, a także o miejscu wykonywania obowiązków zawodowych.</p>
                        </details>
                        <details>
                            <summary>Czy złamaniem obostrzeń jest samodzielne uprawianie sportu na zewnątrz, w tym rekreacyjna jazda na rowerze?</summary>
                            <p>Przepisy pozwalają wychodzić z domu m.in. w celu realizacji niezbędnych codziennych potrzeb. Do takiej kategorii można zaliczyć np. jednorazowe wyjście w celach sportowych. Należy jednak pamiętać o zachowaniu odpowiedniej odległości od innych oraz o tym, że powinniśmy uprawiać sport w grupie maksymalnie dwuosobowej (nie dotyczy to jednak rodzin).</p>
                        </details>
                        <details>
                            <summary>Czy mogę dojeżdżać do stajni lub szpitala czy poradni weterynaryjnej w celu opieki nad zwierzętami?</summary>
                            <p>Tak. Taki dojazd wchodzi do katalogu niezbędnych codziennych potrzeb i jest dozwolony.</p>
                        </details>
                        <details>
                            <summary>Czy mogę biegać?</summary>
                            <p>Przepisy pozwalają wychodzić z domu m.in. w celu realizacji niezbędnych codziennych potrzeb. Do takiej kategorii można zaliczyć np. jednorazowe wyjście w celach sportowych. Należy jednak pamiętać o zachowaniu odpowiedniej odległości od innych oraz o tym, że powinniśmy uprawiać sport w grupie maksymalnie dwuosobowej (nie dotyczy to jednak rodzin).</p>
                        </details>
                        <details>
                            <summary>Na czym polega zakaz wychodzenia na ulicę nieletnich?</summary>
                            <p>Ograniczenie dotyczy przebywania osób do 18 roku życia poza domem bez opieki dorosłego. Dzieci i młodzież, które nie ukończyły 18 roku życia, nie mogą wyjść z domu bez opieki. Tylko obecność rodzica, opiekuna prawnego lub kogoś dorosłego usprawiedliwia ich obecność na ulicy i tylko w określonych przypadkach:</p>
                            <ul>
                                <li>dojazdu do i z pracy,</li>
                                <li>wolontariatu na rzecz walki z COVID-19,</li>
                                <li>czy też załatwiania spraw niezbędnych do życia codziennego.</li>
                            </ul>
                        </details>
                        <details>
                            <summary>Jak będą działały instytucje kultury?</summary>
                            <p>Wszystkie instytucje kultury pozostają zamknięte. Są to m.in. muza, galerie sztuki, teatry, filharmonie, opery, kina, kluby filmowe, biblioteki, archiwa oraz stała działalność związana z kulturą.</p>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Dla rodziców – zajęcia w szkołach i przedszkolach</h3>
                    <div>
                        <p>Zdecydowaliśmy się na zawieszenie zajęć, żeby dzieci i młodzież nie były narażone na kontakt z dużymi skupiskami ludzi.  </p>
                        <details>
                            <summary>Dlaczego w szkołach, przedszkolach, żłobkach i na uczelniach zawieszane są zajęcia?</summary>
                            <p>Działamy zapobiegająco i profilaktycznie. Dzięki takim działaniom ograniczymy w Polsce duże skupiska ludzi. Im mniej ludzi w jednym miejscu, tym mniejsze szanse na szybkie rozprzestrzenianie się koronawirusa lub innych wirusów. Stąd decyzja o ograniczeniu miejsc pełnych ludzi, żebyśmy mogli działać zapobiegawczo.</p>
                        </details>
                        <details>
                            <summary>Na jakiej podstawie zawieszone są zajęcia?</summary>
                            <p>Dzięki tzw. specustawie – specjalnej ustawie dotyczącej szczególnych rozwiązań w walce z epidemią koronawirusa. Dzięki tej ustawie rodzicom dzieci w wieku do lat 8, będzie przysługiwał dodatkowy zasiłek opiekuńczy w przypadku nieprzewidzianego zamknięcia żłobka, przedszkola, szkoły lub klubu dziecięcego.</p>
                        </details>
                        <details>
                            <summary>Na jaki okres są zawieszone zajęcia?</summary>
                            <p>Od 12 marca 2020 r. do 26 kwietnia 2020 r.</p>
                            <p><span className="color-1b1b1b">Lekcje i zajęcia nie odbywają się stacjonarnie, a przez Internet za pomocą platform e-learningowych. Lekcje na odległość prowadzone są według określonych zasad. <span className="bg-white"><span className="color-1b1b1b">Nauczyciele i uczniowie na stronie </span></span>
                                </span><span className="link">http://www.gov.pl/zdalnelekcje" alt="zdalne lekcje</span> <span className="color-0052a5">www.gov.pl/zdalnelekcje</span><span className="color-1b1b1b"><span className="bg-white"><span className="color-1b1b1b"> mogą znaleźć materiały dydaktyczne zgodne z aktualną podstawą programową.</span></span>
                                </span>
                            </p>
                        </details>
                        <details>
                            <summary>Kiedy odbędą się egzaminy ósmoklasisty i egzaminy maturalne?</summary>
                            <p>Matury i egzamin kończący podstawówkę zostaną przełożone. Odbędą się najwcześniej w czerwcu. Jednak o konkretnych terminach będziemy informować co najmniej 3 tygodnie przed datą egzaminów.</p>
                            <p>Ponadto wszystkie szkoły pozostają zamknięte do niedzieli 26 kwietnia. Do tego czasu – tak jak dotychczas – placówki mają obowiązek prowadzić nauczanie zdalne.</p>
                        </details>
                        <details>
                            <summary>W których placówkach oświatowych jest zawieszenie zajęć?</summary>
                            <p>Zawieszenie zajęć dydaktyczno-wychowawczych dotyczy przedszkoli, szkół i placówek oświatowych (publicznych i niepublicznych) z wyjątkiem:  </p>
                            <ul>
                                <li>poradni psychologiczno-pedagogicznych, </li>
                                <li>specjalnych ośrodków szkolno-wychowawczych,</li>
                                <li>młodzieżowych ośrodków wychowawczych, młodzieżowych ośrodków socjoterapii, specjalnych ośrodków wychowawczych, ośrodków rewalidacyjno-wychowawczych,</li>
                                <li>przedszkoli i szkół w podmiotach leczniczych i jednostkach pomocy społecznej, </li>
                                <li>szkół w zakładach poprawczych i schroniskach dla nieletnich,</li>
                                <li>szkół przy zakładach karnych i aresztach śledczych.</li>
                            </ul>
                        </details>
                        <details>
                            <summary>Działalność specjalnych ośrodków szkolno-wychowawczych i ośrodków rewalidacyjno-wychowawczych nie została zawieszona. Czy oznacza to, że rodzic ma obowiązek posłać dziecko na zajęcia?</summary>
                            <p>Nie. Decyzja o tym, czy posłać tam swoje dziecko, czy zostać z nim w domu, zależy wyłącznie od rodziców.</p>
                            <p>Zdecydowaliśmy się nie zamykać tego typu placówek ze względu na dobro dzieci. W niektórych przypadkach dwutygodniowa przerwa w zajęciach może odbić się negatywnie na efektach terapii czy rehabilitacji. Możliwość decyzji przez rodzica o obecności ucznia nie dotyczy jedynie sytuacji, gdy w ośrodku wychowawczym wychowankowie umieszczeni na podstawie postanowienia sądu, i tylko sąd mógłby zdecydować o zabraniu wychowanka z placówki. Zawieszenie zajęć dotyczy przedszkoli, szkół i żłobków. Jednak są takie miejsca, w których dzieci i młodzież ze specjalnymi potrzebami nadal będą mogły się odbywać zajęcia.</p>
                            <p>Są to: poradnie psychologiczno-pedagogiczne, młodzieżowe ośrodki wychowawcze, młodzieżowe ośrodki socjoterapii, specjalne ośrodki wychowawcze, przedszkola i szkoły w podmiotach leczniczych i jednostkach pomocy społecznej, szkoły w zakładach poprawczych i schroniskach dla nieletnich, szkoły przy zakładach karnych i aresztach śledczych.</p>
                        </details>
                        <details>
                            <summary>W jaki sposób organizowane są teraz zajęcia w szkołach i na uczelniach?</summary>
                            <p>Wszystkie szkoły i uczelnie w Polsce są zamknięte. Lekcje i zajęcia nie odbywają się stacjonarnie, a przez Internet za pomocą platform e-learningowych. Lekcje na odległość prowadzone są według określonych zasad. Nauczyciele i uczniowie na stronie <span className="link">http://www.gov.pl/zdalnelekcje</span> www.gov.pl/zdalnelekcje mogą znaleźć materiały dydaktyczne zgodne z aktualną podstawą programową.</p>
                            <p><strong>Ważne!</strong> Rodzicom dzieci w wieku do lat 8, przysługuje dodatkowy zasiłek opiekuńczy w przypadku zamknięcia żłobka, przedszkola, szkoły lub klubu dziecięcego. &#8203;&#8203;&#8203;&#8203;&#8203;</p>
                        </details>
                        <details>
                            <summary>Jakie ograniczenia dotyczą żłobków i przedszkoli&#8203;&#8203;&#8203;&#8203;&#8203;?</summary>
                            <p>Ograniczenie dotyczy działalności żłobków, klubów dziecięcych i przedszkoli.</p>
                            <p>Zalecenia: Działalność żłobków, klubów dziecięcych i przedszkoli jest zawieszona. Kwestia ponoszenie opłat przez rodziców w czasie ich zawieszenia, powinna zostać uregulowana w statucie żłobka, jak również w umowie z rodzicami.</p>
                            <p><strong>Ważne!</strong> Rodzicom dzieci w wieku do lat 8, przysługuje dodatkowy zasiłek opiekuńczy w przypadku zamknięcia żłobka, przedszkola, szkoły lub klubu dziecięcego.</p>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Dla rodziców – dodatkowy zasiłek opiekuńczy</h3>
                    <div>
                        <p>Dzięki tzw. specustawie (specjalnej ustawie dotyczącej szczególnych rozwiązań w walce z epidemią koronawirusa) rodzicom dzieci w wieku do lat 8 będzie przysługiwał dodatkowy zasiłek opiekuńczy w przypadku nieprzewidzianego zamknięcia żłobka, przedszkola, szkoły lub klubu dziecięcego.</p>
                        <details>
                            <summary>Komu przysługuje dodatkowy zasiłek opiekuńczy na czas opieki nad dzieckiem?</summary>
                            <p>Dodatkowy zasiłek opiekuńczy przysługuje rodzicom lub opiekunom prawnym dzieci, którzy:</p>
                            <ul>
                                <li>opiekują się dzieckiem poniżej 8 roku życia,</li>
                                <li>są objęci ubezpieczeniem chorobowym.</li>
                            </ul>
                        </details>
                        <details>
                            <summary>Czy okres dodatkowego zasiłku opiekuńczego wlicza się do limitu 60 dni?</summary>
                            <p>Nie. Okresu wypłaty dodatkowego zasiłku opiekuńczego (14 dni) nie wlicza się do ogólnego limitu 60 dni, które przysługują na opiekę nad chorym dzieckiem do lat 14.</p>
                        </details>
                        <details>
                            <summary>Ile lat mają dzieci objęte dodatkowym zasiłkiem opiekuńczym dla rodziców?</summary>
                            <p>Dzieci poniżej 8 roku życia. Z zasiłku można korzystać nie dłużej niż do dnia poprzedzającego ósme urodziny dziecka. </p>
                            <p>Przykład: mama wystąpiła o zasiłek opiekuńczy od 16 marca 2020 r. w związku z zamknięciem szkoły. Jej córka urodziła się 22 marca 2012 r. Zasiłek opiekuńczy przysługuje jej od 16 do 21 marca 2020 r.</p>
                        </details>
                        <details>
                            <summary>Jak uzyskać dodatkowy zasiłek opiekuńczy?</summary>
                            <p>Wystarczy złożyć oświadczenie do swojego pracodawcy. Wzór oświadczenia można pobrać na stronie internetowej ZUS <span className="link">http://www.zus.pl</span> www.zus.pl 
                                <br /> Osoby prowadzące działalność pozarolniczą składają oświadczenie w ZUS.</p>
                        </details>
                        <details>
                            <summary>Kogo należy poinformować o korzystaniu z zasiłku?</summary>
                            <p>Pracownik powinien poinformować swojego pracodawcę, zleceniobiorca – swojego zleceniodawcę, a osoba prowadząca działalność pozarolniczą – bezpośrednio ZUS.</p>
                        </details>
                        <details>
                            <summary>Kiedy należy poinformować o korzystaniu z zasiłku?</summary>
                            <p>W dowolnym momencie, ale od tego zależy wypłata zasiłku. Bez oświadczenia nie jest możliwa wypłata.</p>
                        </details>
                        <details>
                            <summary>Jak liczyć 14 dni dodatkowego zasiłku opiekuńczego?</summary>
                            <p>Zasiłek opiekuńczy jest wypłacany za każdy dzień sprawowania opieki. </p>
                            <p>Jeśli oboje rodzice dziecka pracują, to o dodatkowy zasiłek opiekuńczy może wystąpić jedno z rodziców. Mogą też podzielić się opieką nad dzieckiem w ramach limitu 14 dni. Dodatkowy zasiłek opiekuńczy przysługuje rodzicom łącznie przez 14 dni, niezależnie od liczby dzieci wymagających opieki.</p>
                        </details>
                        <details>
                            <summary>Kto finansuje zasiłek?</summary>
                            <p>Zasiłek opiekuńczy oraz dodatkowy zasiłek opiekuńczy przysługują z Funduszu Ubezpieczeń Społecznych. Oznacza to, że zasiłki nie obciążają funduszu pracodawców. Nawet jeśli pracodawca wypłaca zasiłek (w przypadku gdy jest do tego zobowiązany), to wypłacone kwoty rozlicza z ZUS. </p>
                        </details>
                        <details>
                            <summary>Infolinia ZUS – jaki numer?</summary>
                            <p>Dodatkowe pytania można zadawać na specjalnej infolinii ZUS. Numer: <strong>22 560 16 00</strong>. Wydzielimy dwie dedykowane linie: </p>
                            <ul>
                                <li>„ulgi i umorzenia dla płatników składek:  gdzie będą mogli uzyskać  informacje m.in. dotyczące ulg w spłacie należności, umorzeń, rozłożenia należności z tytułu składek na raty, zawieszenia działalności gospodarczej,</li>
                                <li>„koronawirus – zasiłki” dotycząca zasiłku opiekuńczego dla opiekunów  oraz zasiłku chorobowego w związku z COVID-19, w tym z powodu poddania się kwarantannie lub izolacji.</li>
                            </ul>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Dla pracowników</h3>
                    <div>
                        <p>Dzięki specustawie pracownik może wykonywać tzw. pracę zdalną. Wyjaśniamy, o co chodzi dokładnie. Odpowiadamy też na inne pytania związane z wykonywaniem obowiązków zawodowych.</p>
                        <details>
                            <summary>Kiedy pracodawca może zlecić tzw. pracę zdalną?</summary>
                            <p>Przepisy zakładają, że w celu przeciwdziałania koronawirusowi pracodawca może polecić pracownikowi wykonywanie obowiązków, w określonym czasie poza miejscem jej stałego wykonywania. To tzw. praca zdalna. 
                                <br /> W rozumieniu ustawy za „przeciwdziałanie COVID-19” rozumie się wszelkie czynności związane ze zwalczaniem zakażenia, zapobieganiem rozprzestrzenianiu się, profilaktyką oraz zwalczaniem skutków choroby. Zatem przesłanki polecenia pracownikowi pracy zdalnej są szerokie i w praktyce każdy pracodawca, choćby ze względu na profilaktykę, może polecić pracownikom pracę zdalną.</p>
                        </details>
                        <details>
                            <summary>Czy mogę wnioskować o pracę zdalną?</summary>
                            <p>Decyzja o poleceniu pracy zdalnej leży wyłącznie w gestii pracodawcy. Pracownik może oczywiście wnioskować, ale jego wniosek nie wiąże w żaden sposób pracodawcy.</p>
                        </details>
                        <details>
                            <summary>Czy praca zdalna to inaczej telepraca?</summary>
                            <p>Nie, pojęcie pracy zdalnej jest pojęciem szerszym niż pojęcie telepracy. Praca zdalna w rozumieniu tej ustawy polega po prostu na wykonywaniu pracy poza miejscem jej stałego wykonywania na polecenie pracodawcy i w celu przeciwdziałania COVID-19.</p>
                        </details>
                        <details>
                            <summary>Jaka jest różnica między pracą zdalną a telepracą?</summary>
                            <p>Telepracą jest wykonywanie pracy regularnie poza zakładem pracy z wykorzystaniem środków komunikacji elektronicznej. Telepracownikiem jest pracownik, który wykonuje pracę w tych warunkach i przekazuje pracodawcy wyniki pracy, w szczególności za pośrednictwem środków komunikacji elektronicznej. Przykładowo może to być praca wykonywana na komputerze i przesyłana pracodawcy pocztą elektroniczną.</p>
                            <p>Praca zdalna może natomiast polegać na tym, że pracownik wykonuje pracę np. w domu bez użycia środków komunikacji elektronicznej (komputera, internetu).  Przykładowo pracownik w domu analizuje dokumenty, pisze opinię odręcznie i przekazuje pracodawcy efekt swojej pracy.</p>
                        </details>
                        <details>
                            <summary>Czy zmieni się moje wynagrodzenie, jeśli szef zleci mi pracę zdalną?</summary>
                            <p>Nie. Twoje wynagrodzenie nie ulegnie zmianie. Praca zdalna to po prostu zmiana miejsca wykonywania pracy, ale wciąż pracujemy, dlatego należy się dotychczasowe wynagrodzenie.</p>
                        </details>
                        <details>
                            <summary>Jak dokumentuje się pracę zdalną?</summary>
                            <p>Jest to kwestia uzgodnień między pracodawcą a pracownikiem. Polecenie pracy zdalnej nie musi być wydane na piśmie, ale jak każde inne polecenie służbowe może być wydane ustanie bądź mailem albo esemesem. Pracodawca może potwierdzić to polecenie na piśmie.</p>
                        </details>
                        <details>
                            <summary>Czy zakaz zgromadzeń powyżej 50 osób dotyczy również zakładów pracy zatrudniających powyżej 50 osób?</summary>
                            <p>Nie. Zakłady pracy nie mają charakteru zgromadzeń w myśl wskazanych przepisów.</p>
                        </details>
                        <details>
                            <summary>Jak zdezynfekować pomieszczenia w zakładzie pracy, w którym przebywała osoba chora lub podejrzana o zachorowanie na koronawirusa? Kto powinien potwierdzić, że ta dezynfekcja miała miejsce?</summary>
                            <p>Osoba odpowiedzialna za dezynfekcję pomieszczenia oraz sposób jej dokumentacji powinna być określona przez pracodawcę. W sprawie dezynfekcji pomieszczenia możemy posiłkować się wytycznymi GIS dla POZ (dotyczące dezynfekcji pomieszczenia, w której przebywała osoba chora lub podejrzana o zachorowanie na koronawirusa), tj. wyłączyć z funkcjonowania pomieszczenie, w którym przebywała osoba zakażona, umyć i zdezynfekować powierzchnie, meble, sprzęt – po dezynfekcji może być ponownie używane, wywietrzyć pomieszczenie, w którym przebywała osoba zakażona, zdezynfekować drogę lub drogi dojścia do pomieszczenia gdzie przebywała osoba zakażona do pomieszczenia (poręcze schodów, klamki, lady itp., czyli elementy, których mogła dotykać), używać środków dezynfekujących aktywnych przeciwko wirusom.</p>
                        </details>
                        <details>
                            <summary>Jestem kurierem, na co dzień mam kontakt z wieloma klientami i przesyłkami? Jak mam postępować?</summary>
                            <p>Przestrzegaj podstawowych zasad zapobiegawczych, które istotnie wpływają na ograniczenie ryzyka zakażenia: pamiętaj o częstym myciu rąk wodą z mydłem i unikaj dotykania oczu, nosa i ust. Kiedy kaszlesz lub kichasz, zawsze zakrywaj usta i nos zgiętym łokciem lub chusteczką. Zachowaj bezpieczną odległość (2 m) od osoby, która kaszle, kicha lub ma gorączkę.</p>
                        </details>
                        <details>
                            <summary>Czy pracodawcy mogą narzucić pracownikom pomiar temperatury ciała i odsyłać ich do domu w przypadku podwyższonej temperatury? Jeśli tak, to jaka jest temperatura graniczna, jeśli nie, to dlaczego i czy pracodawca może coś jeszcze zrobić, aby zminimalizować ryzyko zakażenia?</summary>
                            <p>Jeśli chodzi o pomiar temperatury przez pracodawcę, należy skontaktować się z PIP. W przypadku określonych rodzajów pracy mogą istnieć dodatkowe zalecenia branżowe, np. dla personelu medycznego. Przede wszystkim należy zachować zdrowy rozsądek i podstawowe zasady higieny.</p>
                        </details>
                    </div>
                    <h3>Dla studentów i uczelni</h3>
                    <div>
                        <p>Od 12 marca 2020 r. do 26 kwietnia 2020 r. zostają również zawieszone zajęcia na uczelniach. Szczegółowe informacje dostępne są na stronie <span className="link">https://www.gov.pl/web/nauka/funkcjonowanie-uczelni-w-polsce-zawieszone-do-10-kwietnia</span> Ministerstwa Nauki i Szkolnictwa Wyższego.</p>
                        <details>
                            <summary>&#8203;&#8203;&#8203;Od kiedy zostają zawieszone zajęcia na uczelniach?</summary>
                            <p>Od czwartku 12 marca 2020 r. do 26 kwietnia 2020 r.</p>
                        </details>
                        <details>
                            <summary>Czy można na uczelni prowadzić dalej działalność naukową?</summary>
                            <p>Zawieszamy jedynie prowadzenie zajęć dydaktycznych (takich jak np. wykłady, seminaria, konserwatoria). Nie ograniczamy możliwości prowadzenia działalności naukowej. Uczelnie zyskują również możliwość prowadzenia zajęć w formie kształcenia zdalnego.</p>
                        </details>
                        <details>
                            <summary>Kogo dotyczy zawieszenie zajęć?</summary>
                            <p>Studiów I stopnia, II stopnia, jednolitych magisterskich, studiów podyplomowych, kursów lub szkoleń prowadzonych na uczelniach. Dotyczy to również szkół doktorskich oraz studiów doktoranckich.</p>
                        </details>
                        <details>
                            <summary>Czy uczelnie zostają całkowicie zamknięte?</summary>
                            <p>Rektorzy i osoby kierujące innymi podmiotami prowadzącymi kształcenie doktorantów  muszą zapewnić bieżące funkcjowanie. Działalność naukowa na uczelniach nie jest wstrzymywana.</p>
                        </details>
                        <details>
                            <summary>Czy zostają zawieszone również wybory rektorskie?</summary>
                            <p>Zawieszenie zajęć dydaktycznych nie ma wpływu na terminarz wyborów rektorskich.</p>
                        </details>
                        <details>
                            <summary>Czy zostanie zmieniony terminarz rekrutacji na studia?</summary>
                            <p>Na ten moment nie przewidujemy zmian w kalendarzu rekrutacji na studia. </p>
                        </details>
                        <details>
                            <summary>31 marca moja legitymacja studencka traci ważność. W jaki sposób mam ją przedłużyć?</summary>
                            <p>Ważność legitymacji studenckich i doktoranckich zostanie automatycznie wydłużona do 31 maja, bez konieczności osobistego stawiania się w sekretariacie.</p>
                        </details>
                    </div>
                    <h3>Dla podróżnych i kierowców – powroty do kraju, wyjazdy za granicę</h3>
                    <div>
                        <p>Od 15 marca ograniczyliśmy ruch międzynarodowy w Polsce. W naszym kraju osób zakażonych jest wciąż stosunkowo niewiele, ale w pozostałych krajach europejskich – przypadki idą w tysiące. Dlatego też zdecydowaliśmy się przywrócić tymczasowe kontrole graniczne. Natomiast krajowy transport autobusowy, kolejowy i lotniczy będzie działać normalnie. </p>
                        <details>
                            <summary>Co w praktyce oznacza ograniczenie ruchu międzynarodowego?</summary>
                            <p>Wstrzymane zostaną międzynarodowe połączenia lotnicze i kolejowe. Polacy powracający do kraju oraz cudzoziemcy, których nie obowiązuje zakaz wjazdu do kraju, będą objęci 14-dniową domową kwarantanną. Transport kołowy i drogowy będzie zachowany – busy, autokary, samochody osobowe będą mogły wjeżdżać i wyjeżdżać z Polski. Transport cargo będzie również działać normalnie.</p>
                        </details>
                        <details>
                            <summary>Do kiedy obowiązuje ograniczenie ruchu międzynarodowego?</summary>
                            <p>Do 26 kwietnia 2020 r.</p>
                            <p>Bieżące daty obowiązywania zasad bezpieczeństwa dostępne są na <span className="link">https://www.gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</span> gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia</p>
                        </details>
                        <details>
                            <summary>Do kiedy obowiązują ograniczenia w przekraczaniu polskiej granicy?</summary>
                            <p>Kontrola graniczna na granicy wewnętrznej (z Niemcami, Litwą, Czechami i Słowacją) będzie przedłużona do 3 maja 2020 r. Tak jak dotychczas granicę będzie można przekroczyć tylko w wyznaczonych miejscach. Kontrole będą też nadal prowadzone w portach morskich i na lotniskach.</p>
                        </details>
                        <details>
                            <summary>Kogo nie obowiązuje zakaz wjazdu na teren Polski?</summary>
                            <p>Ograniczenie dotyczy przekraczania granic Polski przez cudzoziemców.</p>
                            <p>Granice naszego kraju mogą przekraczać tylko i wyłącznie:</p>
                            <ul>
                                <li>obywatele RP,</li>
                                <li>cudzoziemcy, którzy są małżonkami albo dziećmi obywateli RP albo pozostają pod stałą opieką obywateli RP,</li>
                                <li>osoby, które posiadają Kartę Polaka,</li>
                                <li>dyplomaci,</li>
                                <li>osoby posiadające prawo stałego lub czasowego pobytu na terenie RP lub pozwolenie na pracę,</li>
                                <li>w szczególnie uzasadnionych przypadkach, komendant placówki Straży Granicznej - po uzyskaniu zgody Komendanta Głównego Straży Granicznej – może zezwolić cudzoziemcowi na wjazd na terytorium Rzeczypospolitej Polskiej w trybie określonym w ustawie z dnia 12 grudnia 2013 r. o cudzoziemcach (Dz. U. z 2020 r. poz. 35),</li>
                                <li>cudzoziemcy, którzy prowadzą środek transportu służący do przewozu towarów.</li>
                                <li>
                                    <p><strong>Ważne! </strong>Transport cargo działa normalnie. </p>
                                </li>
                            </ul>
                        </details>
                        <details>
                            <summary>Pracuję poza Polską i regularnie przekraczam granicę w drodze do i z pracy. Co dla mnie zmieniają obostrzenia obowiązujące od 27 marca? </summary>
                            <p>Nowe obostrzenia dotyczą osób, które z powodu zatrudnienia na terenie innego kraju regularnie przekraczały polską granicę. Do tej pory – w drodze do pracy i z pracy – osoby te mogły przekraczać granicę i nie były objęte kwarantanną. Zgodnie z nowymi regulacjami <strong>od 27 marca 2020 r. (piątek, godz. 00:00) po znalezieniu się na terenie Polski zostaną one objęte obowiązkową 14-dniową kwarantanną.</strong> Dwudniowe odsunięcie w czasie obowiązywania nowych regulacji ma dać tym osobom czas na ustabilizowanie sytuacji zawodowej. Ograniczenia będą obowiązywać na całej granicy RP. </p>
                        </details>
                        <details>
                            <summary>Jak wygląda wjazd do i wyjazd z Polski dla osób zatrudnionych w państwach sąsiadujących? </summary>
                            <p>Każda osoba przekraczająca granicę RP, która pracuje w państwie sąsiadującym przyjeżdżając do Polski musi liczyć się z obowiązkiem odbycia 14-dniowej obowiązkowej kwarantanny, a jej naruszenie podlega karze finansowej do 30 000 zł. Osoby przekraczające granicę Polski będą mogły zgłosić się do właściwego inspektora sanitarnego o wydanie zaświadczenia o odbywaniu kwarantanny (na potrzeby pracodawcy).</p>
                        </details>
                        <details>
                            <summary>Kto jest zwolniony z kwarantanny po przekroczeniu granicy?</summary>
                            <p>Z kwarantanny zwolnione są załogi statków, samolotów, pociągów, żołnierze Sił Zbrojnych RP i wojsk sojuszniczych, funkcjonariusze Policji, Straży Granicznej, Państwowej Straży Pożarnej oraz Służby Ochrony Państwa, wykonujący zadania służbowe. Z kwarantanny zwolnieni są również kierowcy wykonujący przewóz drogowy w ramach międzynarodowego transportu drogowego oraz kierowcy wykonujący przewóz drogowy pojazdami samochodowymi lub zespołami pojazdów o dopuszczalnej masie całkowitej nieprzekraczającej 3,5 tony w transporcie drogowym rzeczy oraz niezarobkowym przewozie drogowym rzeczy.</p>
                        </details>
                        <details>
                            <summary>Jestem zawodowym kierowcą. Przekroczyłem granicę. Czy muszę poddać się obowiązkowej kwarantannie?</summary>
                            <p>Nie, kierowcy prowadzący pojazdy samochodowe w międzynarodowym transporcie drogowym (w tym międzynarodowym transporcie kombinowanym), po przekroczeniu granicy państwowej, są zwolnieni z odbycia obowiązkowej kwarantanny.</p>
                        </details>
                        <details>
                            <summary>Jestem kierowcą. Wracam z zagranicy innym środkiem transportu niż pojazd, którym jest wykonywany transport drogowy. Co dalej?</summary>
                            <p>Kierowcy w takiej sytuacji powinien okazać funkcjonariuszowi Straży Granicznej: 1) krajowe lub wspólnotowe prawo jazdy z wpisem - kodem 95, który potwierdza uzyskanie świadectwa kwalifikacji zawodowej kierowcy; 2) świadectwo kierowcy, w sytuacji kierowcy niebędącego obywatelem państwa członkowskiego Unii Europejskiej, zatrudnionego przez przedsiębiorcę mającego siedzibę na terytorium Rzeczypospolitej Polskiej. Dodatkowo, kierowcy, którzy są obywatelami Polski powinni uprawdopodobnić zatrudnienie u polskiego przedsiębiorcy poprzez okazanie dowodu (np. zaświadczenia, umowy o pracę) zatrudnienia wystawionego przez pracodawcę. Dopuszczalna jest zarówno forma papierowa jak i elektroniczna. Co w sytuacji, w której niemożliwe jest okazanie takiego dowodu? Okoliczność zatrudnienia w początkowym okresie może być wyjątkowo potwierdzona pisemnym oświadczeniem kierowcy. Co w przypadku kierowców cudzoziemców? Muszą oni wykazać prawo do pracy na terytorium Polski. Jednocześnie świadectwo kierowcy jest wystarczającym dowodem legalnego zatrudnienia przez przedsiębiorcę, który ma siedzibę na terytorium Polski.</p>
                        </details>
                        <details>
                            <summary>Jestem kierowcą. W jakim zakresie dotyczy mnie zwolnienie z kwarantanny?</summary>
                            <p>Zwolnieni z obowiązkowej kwarantanny po przekroczeniu granicy są kierowcy prowadzący pojazdy samochodowe w międzynarodowym transporcie drogowym (w tym międzynarodowym transporcie kombinowanym), w tym również: 1) kierowca, który nie jest obywatelem państwa członkowskiego Unii Europejskiej, ale jest zatrudniony przez przedsiębiorcę mającego siedzibę na terytorium Polski i legitymuje się świadectwem kierowcy, 2) kierowcy zawodowi w międzynarodowym transporcie drogowym (w tym międzynarodowym transporcie kombinowanym) wracający z zagranicy innymi środkami transportu niż pojazd, którym jest wykonywany transport drogowy: a) w celu odbioru w Polsce lub po odebraniu za granicą odpoczynku; b) po przerwie w świadczeniu pracy.</p>
                        </details>
                        <details>
                            <summary>Jestem za granicą. Czy mogę wrócić do Polski?</summary>
                            <p>Każdy obywatel Polski może wrócić do kraju. Do kraju wpuszczone zostaną też samoloty czarterowe z Polakami. Obywatele będą mogli wrócić do Polski także transportem kołowym, czyli samochodami osobowymi, busami i autokarami. Po przekroczeniu granicy każdy z nich zostanie zarejestrowany, a także przebadany. Zostanie również skierowany na obowiązkową 14-dniową kwarantannę domową pod karą grzywny. Ma to zabezpieczyć przed ewentualnym dalszym rozprzestrzenianiem się koronawirusa.</p>
                        </details>
                        <details>
                            <summary>Jak mogę wrócić z Wielkiej Brytanii do Polski?</summary>
                            <p>Na chwilę obecną istnieje możliwość podróży autem drogą lądową – planując wyjazd, proszę zapoznać się z ograniczeniami obowiązującymi w poszczególnych krajach w związku z epidemią zamieszczonymi <span className="link">https://www.gov.pl/web/dyplomacja/media-spolecznosciowe-i-zdjecia</span> na stronach polskich ambasad w krajach, przez które nastąpi tranzyt.</p>
                        </details>
                        <details>
                            <summary>Gdzie mogę się zwrócić o pomoc w powrocie do Polski, jeśli przebywam w kraju, w którym nie ma polskiej ambasady?</summary>
                            <p>Należy nawiązać kontakt z konsulem RP akredytowanym na terytorium danego kraju, podać mu dane osobowe, kontaktowe i dotyczące aktualnej sytuacji oraz miejsca pobytu. Dane kontaktowe znajdziesz <span className="link">https://www.gov.pl/web/dyplomacja/polskie-przedstawicielstwa-na-swiecie</span>.</p>
                        </details>
                        <details>
                            <summary>Gdzie powinienem się zgłosić, jeśli utraciłem swój paszport/dowód osobisty, a przebywam za granicą i chciałbym wrócić do Polski?</summary>
                            <p>Należy nawiązać kontakt z najbliższym polskim urzędem konsularnym i zwrócić się o wydanie paszportu tymczasowego na powrót do Polski. Dane kontaktowe znajdziesz <span className="link">https://www.gov.pl/web/dyplomacja/polskie-przedstawicielstwa-na-swiecie</span>.</p>
                        </details>
                        <details>
                            <summary>Czy można wyjechać z Polski?</summary>
                            <p>Tak. Polskę będzie można opuścić  transportem kołowym na przejściach granicznych. Ograniczenia dotyczą wjeżdżania do kraju.</p>
                        </details>
                        <details>
                            <summary>Mój mąż jest obcokrajowcem i nie ma go teraz w kraju. Czy może wrócić Polski?</summary>
                            <p>Tak. Z zamknięcia granic dla obcokrajowców wykluczyliśmy kilka sytuacji, w tym tę opisaną. Mąż może wrócić do Polski, ale musi się poddać 14-dniowej kwarantannie.</p>
                        </details>
                        <details>
                            <summary>Wróciłem do kraju – na czym polega 14-dniowa obowiązkowa kwarantanna?</summary>
                            <p>Kwarantanna trwa dwa tygodnie. W tym czasie:</p>
                            <ul>
                                <li>w żadnym wypadku nie wychodź z domu,</li>
                                <li>spacery z psem, wyjście do sklepu czy do lekarza są zakazane. W zakupach czy wyprowadzeniu psa niech pomoże Ci sąsiad lub ktoś bliski,</li>
                                <li>jeżeli masz bliski kontakt z innymi osobami w domu – one również muszą zostać poddane kwarantannie,</li>
                                <li>jeżeli masz objawy choroby (źle się czujesz, masz gorączkę, kaszlesz, masz duszności), koniecznie zgłoś to telefonicznie. </li>
                            </ul>
                        </details>
                        <details>
                            <summary>Czy po powrocie do domu kwarantanna obejmuje wszystkich domowników?</summary>
                            <p>Tak. W sprawie szczegółów należy kontaktować się z lokalną stacją sanitarno-epidemiologiczną.</p>
                        </details>
                        <details>
                            <summary>Przyjeżdżam do Polski na kilka dni (np. pogrzeb), a potem wracam za granicę. Czy dotyczy mnie obowiązek kwarantanny?</summary>
                            <p>Tak, co do zasady każda osoba przekraczająca polską granicę jest zobowiązana poddać się 14-dniowej kwarantannie. Zgodnie jednak z rozporządzeniem MZ wprowadzającym w Polsce stan epidemii, właściwy inspektor sanitarny, w uzasadnionych przypadkach, może skrócić kwarantannę lub z niej zwolnić (§ 2 pkt 8). W związku z tym zalecamy kontakt z lokalną stacją sanitarno-epidemiologiczną.</p>
                        </details>
                        <details>
                            <summary>Członek rodziny/znajomy wyjeżdża po mnie za granicę w celu wspólnego powrotu do Polski. Czy po powrocie będzie poddany kwarantannie?</summary>
                            <p>Tak, będzie potraktowany jak każda inna osoba powracająca z zagranicy. Zalecamy ostrożność w wyjeżdżaniu po kogoś za granicę – należy liczyć się z odmową wjazdu do wielu krajów.</p>
                        </details>
                        <details>
                            <summary>Czy istnieje możliwość kontaktu z infolinią, jeśli przebywam poza granicami kraju?</summary>
                            <p>Tak. Należy dodać numer kierunkowy +48 przed numerem 800 190 590. Dla osób dzwoniących z polskich numerów: nie trzeba wybierać numeru kierunkowego. Ewentualne problemy z zestawieniem połączenia mogą wynikać z ograniczeniami ze strony operatora. W takim przypadku należy skontaktować się z operatorem.</p>
                        </details>
                        <details>
                            <summary>Mam kupione bilety na samolot w przyszłym tygodniu, czy mój lot się odbędzie?</summary>
                            <p>Zatrzymujemy ruch lotniczy. Oznacza to, że planowany lot zostanie odwołany. Wstrzymanie nie zostaną jedynie loty polskich samolotów czarterowych, które wracają do Polski.</p>
                        </details>
                        <details>
                            <summary>Na jakiej podstawie zamykane są granice dla obcokrajowców?</summary>
                            <p>Granice zamykane są na podstawie art. 46 ust 4 pkt 1 ustawy o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi, które dopuszcza w SZE czasowe ograniczenie określonego sposoby przemieszczania się.</p>
                        </details>
                        <details>
                            <summary>Na stałe pracuję za granicą, przyleciałem do Polski na weekend, jak mam wrócić do pracy?</summary>
                            <p>Kołowy i drogowy ruch wyjazdowy z Polski jest otwarty. Można opuścić granicę samochodem lub autobusem.</p>
                        </details>
                    </div>
                    <h3>Informacje dla podróżujących</h3>
                    <div>
                        <details>
                            <summary>Jak dostać się do miejsca zamieszkania po powrocie do Polski w ramach #LOTdoDomu?</summary>
                            <p>Do projektu #LOTdoDomu dołączyło Lotnisko Chopina i przewoźnicy Polonus i PKP Intercity. Uruchomione zostały dodatkowe połączenia krajowe - pociągi i autokary, które rozwożą pasażerów z Lotniska Chopina do domu bez dodatkowych kosztów. Szczegóły dostępne są <span className="font-11pt"><u><span className="link">https://www.lot.com/pl/pl/transport-krajowy"</span></u></span>. Należy pamiętać, że najbardziej zalecaną formą transportu jest prywatny samochód.</p>
                        </details>
                        <details>
                            <summary>Czy po powrocie do domu kwarantanna obejmuje wszystkich domowników?</summary>
                            <p>Tak. W sprawie szczegółów należy kontaktować się z lokalną stacją sanitarno-epidemiologiczną.</p>
                        </details>
                        <details>
                            <summary>Przyjeżdżam do Polski na kilka dni (np. pogrzeb), a potem wracam za granicę. Czy dotyczy mnie obowiązek kwarantanny?</summary>
                            <p>Tak, co do zasady każda osoba przekraczająca polską granicę jest zobowiązana poddać się 14-dniowej kwarantannie. Zgodnie jednak z rozporządzeniem MZ wprowadzającym w Polsce stan epidemii, właściwy inspektor sanitarny, w uzasadnionych przypadkach, może skrócić kwarantannę lub z niej zwolnić (§ 2 pkt 8). W związku z tym zalecamy kontakt z lokalną stacją sanitarno-epidemiologiczną.</p>
                        </details>
                        <details>
                            <summary>Gdzie mogę się zwrócić o pomoc w powrocie do Polski, jeśli przebywam w kraju, gdzie nie ma polskiej ambasady?</summary>
                            <p>Należy nawiązać kontakt z konsulem RP akredytowanym na terytorium danego kraju, podać mu dane osobowe, kontaktowe i dotyczące aktualnej sytuacji oraz miejsca pobytu. Dane kontaktowe znajdziesz <u><span className="font-11pt"><span className="link">https://www.gov.pl/web/dyplomacja/polskie-przedstawicielstwa-na-swiecie"</span></span></u>
                                <span className="font-11pt">.</span></p>
                        </details>
                        <details>
                            <summary>Gdzie powinienem się zgłosić, jeśli utraciłem swój paszport/dowód osobisty, a przebywam za granicą i chciałbym wrócić do Polski?</summary>
                            <p>Należy nawiązać kontakt z najbliższym polskim urzędem konsularnym i zwrócić się o wydanie paszportu tymczasowego na powrót do Polski. Dane kontaktowe znajdziesz <span className="color-0563c1"><u><span className="font-11pt"><span className="link">https://www.gov.pl/web/dyplomacja/polskie-przedstawicielstwa-na-swiecie"</span></span></u>
                                </span><span className="font-11pt">.</span></p>
                        </details>
                        <details>
                            <summary>Jak mogę wrócić z Wielkiej Brytanii do Polski?</summary>
                            <p>Na chwilę obecną istnieje możliwość podróży autem drogą lądową – planując wyjazd proszę zapoznać się z ograniczeniami obowiązującymi w poszczególnych krajach w związku z epidemią zamieszczonymi na <span className="color-0563c1"><u><span className="font-11pt"><span className="link">https://www.gov.pl/web/dyplomacja/media-spolecznosciowe-i-zdjecia"</span> na stronach polskich ambasad</span></u>
                                </span> w krajach, przez które nastąpi tranzyt.</p>
                        </details>
                        <details>
                            <summary>Jak wygląda wjazd do i wyjazd z Polski dla osób zatrudnionych w państwach sąsiadujących?</summary>
                            <p>Każda osoba przekraczająca granicę RP, która pracuje w państwie sąsiadującym przyjeżdżając do Polski musi liczyć się z obowiązkiem odbycia 14-dniowej obowiązkowej kwarantanny, a jej naruszenie podlega karze finansowej do 30 000 zł. Osoby przekraczające granicę Polski będą mogły zgłosić się do właściwego inspektora sanitarnego o wydanie zaświadczenia o odbywaniu kwarantanny (na potrzeby pracodawcy).</p>
                        </details>
                        <details>
                            <summary>Członek rodziny/znajomy wyjeżdża po mnie za granicę w celu wspólnego powrotu do Polski. Czy po powrocie będzie poddany kwarantannie?</summary>
                            <p>Tak, będzie potraktowany jak każda inna osoba powracająca z zagranicy. Zalecamy ostrożność w wyjeżdżaniu po kogoś za granicę – należy liczyć się z odmową wjazdu do wielu krajów.</p>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Kwarantanna</h3>
                    <div>
                        <p>Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania w związku z kwarantanną.</p>
                        <details>
                            <summary>Jak wygląda sytuacja osób, które przebywają w kwarantannie? Czy są jakieś kary za nieprzestrzeganie procedur?</summary>
                            <p>Policja w ramach patroli odwiedza te osoby, które są objęte kwarantanną, sprawdzając, czy pozostają w miejscu swojego zamieszkania. Doświadczenie Włoch pokazuje, że nieprzestrzeganie zasad kwarantanny jest jedną z głównych przyczyn bardzo szybkiego rozprzestrzeniania się wirusa. Nieuzasadnione przypadki złamania kwarantanny są karane, włącznie z nakładaniem wysokich kar finansowych. Nie możemy narażać zdrowia innych, nie możemy narażać zdrowia naszych rodziców, dziadków oraz starszych. Osoby, które łamią nakaz kwarantanny zagrażają przede wszystkim innym. Przepisy przewidują możliwość nałożenia kary finansowej do 30 tys. zł na te osoby, które kwarantanny nie przestrzegają. Decyzja co do konkretnej wysokości kary jest zawsze indywidualna.</p>
                        </details>
                        <details>
                            <summary>Jestem na kwarantannie, bo wróciłam z zagranicy. Do jakich świadczeń chorobowych mam prawo?</summary>
                            <p>W takiej sytuacji osobie, która jest objęta ubezpieczeniem chorobowym, np.:</p>
                            <ul>
                                <li>pracownikowi (ubezpieczenie obowiązkowe),</li>
                                <li>zleceniobiorcy (ubezpieczenie dobrowolne),</li>
                                <li>osobie prowadzącej działalność pozarolniczą (ubezpieczenie dobrowolne),</li>
                            </ul>
                            <p>przysługują świadczenia z tytułu choroby – wynagrodzenie za czas choroby wypłacane przez pracodawcę na podstawie art. 92 kodeksu pracy lub zasiłek chorobowy.</p>
                            <p>Aby uzyskać świadczenie z tytułu choroby, osoba objęta kwarantanną składa Oświadczenie o odbywaniu obowiązkowej kwarantanny po przekroczeniu granicy. <strong>Dotyczy to osób, które odbywają obowiązkową kwarantannę po przekroczeniu granicy państwowej, która rozpoczęła się po 15 marca 2020 r.</strong> Oświadczenie należy złożyć w terminie 3 dni roboczych od dnia zakończenia obowiązkowej kwarantanny. Więcej informacji <span className="link">https://www.zus.pl/o-zus/aktualnosci/-/publisher/aktualnosc/1/swiadczenia-chorobowe-dla-osob-objetych-obowiazkowa-kwarantanna-po-przekroczeniu-granicy/2548001#1"</span> na stronach ZUS-u.</p>
                        </details>
                        <details>
                            <summary>Jeżeli osoba powracająca z zagranicy nie chce przechodzić kwarantanny w domu (nie chce zarazić domowników), to czy wojewoda lub urząd miasta jest zobowiązany wyznaczyć inne miejsce do odbycia kwarantanny?</summary>
                            <p>Warunki odbywania kwarantanny są zawsze ustalane indywidualnie, m.in. w zależności od tego, w jakich warunkach mieszka osoba poddana kwarantannie. Domownicy mogą nie być objęci kwarantanną, jeśli mieszkają w dużym domu i są w stanie zapewnić, że nie będą się spotykać z osobą poddaną kwarantannie. Inspektor sanitarny – graniczny lub powiatowy - decyduje indywidualnie w każdej sytuacji. Jeśli osoba poddawana kwarantannie takiego miejsca nie ma lub nie ma możliwości spędzenia kwarantanny w domu, to wojewodowie maja przeznaczone lokale na kwarantannę i tam ta osoba będzie mogła się udać. Jeśli dana osoba miała już kontakt z domownikami (definicja kontaktu opisana w odrębnym pytaniu), to może zaistnieć konieczność objęcia kwarantanną również ich. Jak wskazano powyżej taką decyzję podejmie właściwy inspektor sanitarny w zależności od sytuacji.</p>
                        </details>
                        <details>
                            <summary>Zostałem poddany kwarantannie, ale nie mam decyzji administracyjnej właściwego inspektora sanitarnego, dlaczego?</summary>
                            <p>Co do zasady w przypadku objęcia kwarantanną podstawą wypłaty zasiłku jest decyzja właściwego inspektora sanitarnego lub zaświadczenie lekarskie (w sytuacji, o której mowa w art. 35 ust. 1 ustawy o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi – opisanej w punkcie ustalanie prawa do zasiłku chorobowego).
                                <br /> Jednocześnie 8 marca 2020 r. weszło w życie rozporządzenie Ministra Zdrowia w sprawie wykazu chorób powodujących powstanie obowiązku kwarantanny lub nadzoru epidemiologicznego oraz okresu obowiązkowej kwarantanny lub nadzoru epidemiologicznego z dnia 7 marca 2020 r. (Dz. U. z 2020 r. poz. 376). Rozporządzenie określa wykaz chorób, w przypadku których nie jest wymagana decyzja administracyjna inspektora sanitarnego o objęciu kwarantanną. Jest na niej koronawirus. Rozporządzenie zostało wydane na postawie art. 35 ust. 5 ustawy o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi. Od momentu wejścia w życie przedmiotowego rozporządzenia osoby zarażone lub podejrzane o zachorowanie na koronawirusa podawane są środkom nadzoru jeśli tak postanowią służby sanitarne. Decyzja organu inspekcji sanitarnej nie jest wydawana.
                                <br /> Zatem w zależności od daty objęcia kwarantanną podstawą jej zastosowania będą różne dokumenty.</p>
                        </details>
                        <details>
                            <summary>Czy domownik osoby wracającej z zagranicy może otrzymać zasiłek?</summary>
                            <p>Osoba objęta kwarantanną powinna nie mieć bliskiego kontaktu z domownikami, czyli musi mieć zapewniony osobny pokój z łazienką. Jeśli do takiego kontaktu dojdzie, również domownicy mający kontakt będą musieli zostać objęci kwarantanną. Zasiłek przysługuje jedynie na ogólnych zasadach, czyli np. z tytułu choroby lub opieki nad chorym członkiem rodziny lub dzieckiem. Jeśli oczywiście zajdą ku temu przesłanki, różnica od zwyczajowej jest taka, że kwarantanna uniemożliwia sprawowanie takiej opieki przez osobę nią objętą. A zatem np. jeśli małżeństwo ma dziecko, które jest chore na grypę, a jedno z rodziców objęte jest kwarantanną, to tylko rodzic nieobjęty kwarantanną może sprawować opiekę nad chorym dzieckiem.</p>
                        </details>
                        <details>
                            <summary>Czy sanepid musi wydawać zaświadczenia o objęciu kwarantanną osób powracających po wprowadzeniu kwarantanny?</summary>
                            <p>Osoby powracające z zagranicy podczas przekroczenia granicy otrzymują informację o objęciu kwarantanną oraz ulotkę z instrukcjami co do dalszego postępowania.</p>
                        </details>
                        <details>
                            <summary>Czy jeśli w aucie dostawczym na granicy wykryto osobę z koronawirusem, to czy auto też podlega kwarantannie? Kiedy za kierownicą tego auta może zasiąść nowy kierowca?</summary>
                            <p>Kwarantannie podlega kierowca. Pojazd należy zdezynfekować, zanim poprowadzi go inna osoba. W szczególności należy zwrócić uwagę na rzeczy dotykane w aucie bardzo często rękoma, m.in. gałkę zmiany biegów i kierownicę, kierunkowskazy. Rzeczy osobiste osoby poddanej kwarantannie powinny zostać zabezpieczone w sposób uniemożliwiający zakażenia innych osób. W przypadku powierzchni zmywalnych należy używać środków dezynfekujących aktywnych przeciwko wirusom. Samochód trzeba również wywietrzyć. Z kabiny należy zabrać zbędne przedmioty.</p>
                        </details>
                        <details>
                            <summary>Co powinna zrobić przebywająca na kwarantannie rodzina, gdy do domu wraca babcia, która skończyła leczenie w szpitalu? Szpital za dodatkowe dni przebywania babci naliczy koszty.</summary>
                            <p>Wyjaśnić należy, że pobyt w szpitalu wiąże się również z ryzykiem zakażenia się różnymi chorobami zakaźnymi (głównie od innych pacjentów), dlatego jeśli stan zdrowia nie wymaga hospitalizacji, osoba powinna zostać jak najszybciej wypisana ze szpitala. W sytuacji opisanej powyżej, jeśli nie ma innych członków rodziny mogących przejąć opiekę, należy skontaktować się (telefonicznie) z właściwą terytorialnie placówką opieki społecznej. Można też skontaktować się ze szpitalem i powiedzieć, jaka jest sytuacja. Być może pomoże zatrudniona w szpitalu pielęgniarka społeczna (w niektórych szpitalach funkcja ta może mieć inną nazwę lub jej zadania realizuje wyznaczona pielęgniarka).</p>
                        </details>
                        <details>
                            <summary>Przylatuję czarterem do Warszawy, ale mieszkam w Krakowie. Co mam zrobić? Czy zostanę poddany domowej kwarantannie (jak wtedy dostanę się do Krakowa)?</summary>
                            <p>Czarter rozumiany jest jako powrót z zagranicy, tak więc zgodnie z zaleceniami dla osób poddawanych kwarantannie domowej należy unikać transportu publicznego. Zalecany jest transport indywidualny. Można spytać, czy możliwe jest wynajęcie samochodu (firma wynajmująca powinna być uprzedzona o tym, że samochód wynajmuje osoba poddawana kwarantannie i musi się na to zgodzić, ponieważ konieczne będzie przeprowadzenie odpowiedniej dezynfekcji pojazdu). Przy wynajmowaniu auta (przekazanie kluczyków itp.) stosować zalecenia sanepidu wskazane w ulotce, która otrzymasz podczas przekraczania granicy. Kwarantannę można odbyć we wskazanym ośrodku (informacja po przekroczeniu granicy).</p>
                        </details>
                        <details>
                            <summary>Do kogo można zgłosić zmianę adresu podanego na granicy w oświadczeniu, jeśli osoba, która wróciła do Polski, nie przebywa pod wskazanym adresem, tylko w innym miejscu?</summary>
                            <p>Kwarantannę należy odbyć w miejscu, które wskazano w karcie lokalizacji. Nie ma możliwości zmiany miejsca kwarantanny, gdyż wiązało by się to z narażeniem innych osób na potencjalne ryzyko zakażenia. Za opuszczenie miejsca kwarantanny grozi mandat karny do 5000 zł.</p>
                        </details>
                        <details>
                            <summary>Jestem objęty obowiązkową 14-dniową kwarantanną. Na granicy zostawiłem namiary, gdzie będę na kwarantannie. Jak mój pracodawca zostanie o tym fakcie poinformowany, jeśli w ankiecie, którą wypełniłem, nie ma możliwości wskazania NIP-u pracodawcy. Czy mam go osobiście poinformować?</summary>
                            <p>O objęciu kwarantanną należy osobiście poinformować pracodawcę. Lekarz nie wystawi L4 dla osoby zdrowej. Jeśli wystąpią nawet lekkie objawy przeziębieniowe można skonsultować się telefonicznie ze swoim lekarzem POZ, który w ramach teleporady podejmie decyzję czy wystawić L4 (może okazać się konieczna osobista wizyta w przychodni lub szpitalu zakaźnym). Jeśli źle się poczujesz, wystąpią u ciebie gorączka 38 stopni C, duszności, trudności w oddychaniu, kaszel, skontaktuj się z najbliższym szpitalem zakaźnym.</p>
                        </details>
                        <details>
                            <summary>Kto ma zlecać wymazy, aby stwierdzić, czy dana osoba jest chora na COVID-19? Kto będzie to koordynował? Jaka jest ścieżka postępowania w przypadku osoby objętej kwarantanną lub osoby, która nie była objęta kwarantanną?</summary>
                            <p>Co do zasady takie badanie zleca lekarz, ale dotyczy to tylko pacjentów znajdujących się pod opieką lekarską (znajdujących się w szpitalu). W przypadku pacjentów hospitalizowanych badanie wykonywane jest podczas pobytu w szpitalu. W przypadku osób podawanych obowiązkowej kwarantannie, niebędących w szpitalu, wojewoda we współpracy z wojewódzką stacją sanitarno-epidemiologiczną organizują pobieranie wymazów przez zespoły wyjazdowe.</p>
                        </details>
                        <details>
                            <summary>Jeśli osoba wróciła z zagranicy i jest na kwarantannie, ale czuje się dobrze, to czy może pracować zdalnie z miejsca kwarantanny?</summary>
                            <p>Nie ma przeszkód pod warunkiem, że świadczenie pracy nie będzie wiązało się z łamaniem wydanych przez inspektora sanitarnego zaleceń (opisanych w ulotce, którą osoby powracające otrzymują na granicy).</p>
                        </details>
                        <details>
                            <summary>Jaka procedura postępowania stosowana jest wobec osób bezdomnych? Jak poddawane są kwarantannie i kto nadzoruje ich funkcjonowanie?</summary>
                            <p>W przypadku obaw o bezpieczeństwo publiczne można konkretne sytuacje zgłaszać na policję lub do opieki społecznej (w zależności od zaobserwowanego problemu). Jeśli zaistnieje taka konieczność, kwarantannę można odbyć w miejscu wskazanym przez wojewodę.</p>
                        </details>
                        <details>
                            <summary>Czy osoby odbierające podróżnych powracających z zagranicy powinny zostać objęte kwarantanną ze względu na kontakt z podróżnymi?</summary>
                            <p>Jeżeli osoba odbierana lub inni podróżni będą mieli bliski kontakt z osobą odbierającą, to również osoba odbierająca będzie musiała zostać poddana kwarantannie. Definicja bliskiego kontaktu:</p>
                            <ul>
                                <li>pozostawanie w bezpośrednim kontakcie, lub w odległości mniejszej niż 2 m przez ponad 15 min., BEZ ODZIEŻY OCHRONNEJ;</li>
                                <li>prowadzenie rozmowy twarzą w twarz w odległości do 1 m BEZ ODZIEŻY OCHRONNEJ.</li>
                            </ul>
                        </details>
                        <details>
                            <summary>Jak formalnie wygląda zakończenie kwarantanny? Jakie dokumenty powinno się mieć i jakie dokumentu komu dostarczyć.</summary>
                            <p>Ten, kto nakłada kwarantannę, ten ją zdejmuje. Może być informacja telefoniczna/ustna, a później przesłany dokument.</p>
                        </details>
                        <details>
                            <summary>Czy osoba objęta kwarantanną musi mieć własną łazienkę, czy też może korzystać z łazienki z innymi domownikami?</summary>
                            <p>Osoba objęta kwarantanną nie musi mieć własnej łazienki, jeśli nie można jej takiej zapewnić.</p>
                        </details>
                    </div>
                    <h3>Pomoc, służby medyczne i sanitarne</h3>
                    <div>
                        <details>
                            <summary>Podejrzewasz u siebie koronawirusa?</summary>
                            <p>Źle się czujesz, masz gorączkę, kaszlesz, trudno Ci oddychać? Podejrzewasz, że to koronawirus? Zachowaj spokój i dowiedz się, co zrobić.
                                <br /> Jeśli masz takie objawy, jak:</p>
                            <ul>
                                <li>stan podgorączkowy (temperatura ciała pomiędzy 37°C a 38°C),</li>
                                <li>objawy przeziębieniowe,</li>
                            </ul>
                            <p>zadzwoń do najbliższej stacji sanitarno-epidemiologicznej lub skorzystaj z teleporady u swojego lekarza POZ.</p>
                            <p>Nie jedź na SOR, nie korzystaj z komunikacji miejskiej.</p>
                            <p>Więcej informacji znajdziesz: <span className="link">https://www.gov.pl/web/koronawirus/podejrzewasz-u-siebie-koronawirusa</span>
                                <br /> &#8203;&#8203;&#8203;&#8203;&#8203;&#8203;
                            </p>
                            <p>tagi: choroba, chory, chora, gorączka, ból głowy, zarażenie, zakażenie, zakażony, zarażony, wirus, COVID-19, SARS, koronawirus, szpital, epidemia, gorączka, kaszel, duszność, ból, ból mięśni. zmęczenie, szpital, sanepid, </p>
                        </details>
                        <details>
                            <summary>Jak wygląda działalność w zakresie lecznictwa uzdrowiskowego?</summary>
                            <p>Z dniem 20 marca 2020 r. weszło w życie rozporządzenie Ministra Zdrowia w sprawie ogłoszenia na obszarze Rzeczypospolitej Polskiej stanu epidemii, które czasowo ograniczyło działalność w zakresie lecznictwa  uzdrowiskowego poprzez nieudzielanie pacjentom świadczeń opieki zdrowotnej. Tym samym sanatoria zobowiązane są do zaprzestania udzielania jakichkolwiek świadczeń pacjentom przebywającym na leczeniu, a pacjenci powinni wrócić do domu.</p>
                        </details>
                        <details>
                            <summary>Czy istnieją wytyczne / procedury dla personelu medycznego pracującego w szpitalu?</summary>
                            <p>Tak, odpowiednie służby wydały <span className="link">https://gis.gov.pl/aktualnosci/komunikat-krajowego-konsultanta-w-dziedzinie-chorych-zakaznych/</span> zalecenia dla personelu medycznego.</p>
                        </details>
                        <details>
                            <summary>Co mogę uzyskać, korzystając z teleporady?</summary>
                            <p><strong>Dzięki teleporadzie medycznej można otrzymać:</strong></p>
                            <ul>
                                <li>zalecenia,</li>
                                <li>e-zwolnienie,</li>
                                <li>e-receptę, </li>
                                <li>sugestię bezpośredniej wizyty w placówce lub kontaktu ze stacją sanitarno-epidemiologiczną, jeśli będzie taka konieczność.</li>
                            </ul>
                            <p><strong>Teleporady medyczne:</strong></p>
                            <ul>
                                <li>ograniczają ryzyko rozprzestrzeniania się koronawirusa</li>
                                <li>ułatwiają izolację osób, które mogą zarażać wirusem innych</li>
                                <li>rozwiewają obawy, jeśli sytuacja jest niegroźna</li>
                                <li>skracają czas oczekiwania na wizyty u lekarzy.</li>
                            </ul>
                            <p>Nie ma obaw, że teleporady uniemożliwią bezpośrednie wizyty u lekarzy. Jeśli po zdalnym wywiadzie będzie taka konieczność, pacjenci otrzymają sugestię skorzystania z wizyty w placówce medycznej lub skontaktowania się ze stacją sanitarno-epidemiologiczną. Dodatkowo, zgodnie z zaleceniami GIS w sprawie schematu postępowania dla Podstawowej Opieki Zdrowotnej oraz Nocnej i Świątecznej Opieki Zdrowotnej w związku z szerzeniem się nowego koronawirusa SARS-CoV-2, pacjenci powinni być szeroko informowani o konieczności kontaktu telefonicznego w celu ustalenia możliwości wizyty w przychodni.
                                <br /> Każdego pacjenta rejestracja powinna:</p>
                            <ul>
                                <li>poinformować o możliwości uzyskania teleporady,</li>
                                <li>podczas rozmowy telefonicznej rejestracja powinna przeprowadzić ankietę wstępnej kwalifikacji w kierunku zakażenia koronawirusem SARS CoV-2.</li>
                            </ul>
                            <p><strong>Każdemu</strong> pacjentowi, również bez cech infekcji, zgłaszającemu chęć wizyty u lekarza najpierw należy udzielić <strong>teleporady. </strong>tylko w sytuacjach kiedy jest to niezbędne pacjent powinien zostać umówiony na konkretną godzinę do lekarza. Lekarz udzielający teleporady na podstawie przeprowadzonego wywiadu medycznego i oceny stanu zdrowia pacjenta ma możliwość wystawienia zwolnienia lekarskiego.
                                <br /> Schemat został uzgodniony z lekarzami Porozumienia Zielonogórskiego i zaakceptowany przez Konsultant Krajową w dziedzinie medycyny rodzinnej, prof. Agnieszkę Mastalerz-Migas.</p>
                            <p><strong>UWAGA:</strong> ocena czy zasadne jest wystawienie w danej sytuacji (stanie zdrowia pacjenta) zwolnienia lekarskiego należy tylko i wyłącznie do danego lekarza. Jednocześnie decyzję o nałożeniu kwarantanny podejmuje państwowy powiatowy inspektor sanitarny. Taka decyzja jest tożsama ze zwolnieniem lekarskim i lekarz nie wystawia ZUS ZLA. Z wizyty na odległość (teleporady) mogą również skorzystać pacjenci kontynuujący opiekę w konkretnej poradni specjalistycznej (w ramach AOS), zgodnie z ustalonym planem leczenia i stanem klinicznym. Innymi słowy, z takiej porady nie może skorzystać pacjent, który zgłasza się do danej poradni po raz pierwszy lub jego stan zdrowia wymaga osobistej wizyty w poradni. O tym, czy dany pacjent może skorzystać z teleporady decyduje konkretny lekarz. Może on zdecydować o tym, że chce osobiście zbadać pacjenta, np. ze względu na konieczność przeprowadzenia badania fizykalnego, od którego zależeć będą dalsze decyzje diagnostyczno-terapeutyczne.</p>
                        </details>
                        <details>
                            <summary>Co mogę zrobić, jeśli mój lekarz POZ odmówił udzielenia teleporady?</summary>
                            <p>Zgodnie z obowiązującym zarządzeniem Prezesa Narodowego Fundusz Zdrowia w sprawie warunków zawarcia i realizacji umów o udzielanie świadczeń opieki zdrowotnej w zakresie podstawowej opieki zdrowotnej świadczeniodawca realizujący umowę o udzielanie świadczeń w rodzaju POZ, w zakresach: lekarza POZ, pielęgniarki POZ lub położnej POZ, obowiązany jest do zapewnienia możliwości uzyskania przez pacjenta świadczeń udzielanych na odległość. Jednak godziny teleporad ustalają placówki POZ. Ponadto po zebraniu wywiadu może się okazać, że stan pacjenta wymaga zbadania fizykalnego pacjenta w placówce lub pilnej interwencji w szpitalu.
                                <br /> Do sytuacji prawidłowych należy zatem:</p>
                            <ul>
                                <li>wskazanie przez placówkę godziny, w której ma się odbyć teleporada,</li>
                                <li>wskazanie, że dany konkretny pacjent musi stawić się osobiście w przychodni celem zbadania fizykalnego przez lekarza/pielęgniarkę (dotyczy to zwłaszcza osób z chorobami przewlekłymi ale może mieć miejsce również w przypadku zgłoszenia telefonicznie niepokojących personel objawów),</li>
                                <li>przekazanie pacjentowi informacji, że w danej sytuacji musi się udać do innej placówki takiej jak SOR, IP lub wezwać pogotowie,</li>
                                <li>w celu wystawienia recepty, skierowania bądź zwolnienia pacjent zostanie poproszony o wizytę osobistą w przychodni (taka sytuacja może mieć miejsce szczególnie, gdy chodzi zalecanie nowych leków lub skierowanie na badania obrazowe, objawy opisane przez pacjenta niepokoją personel medyczny).</li>
                            </ul>
                            <p>Jeśli natomiast POZ odmówi realizacji teleporady bez podana przyczyny lub nie odbędzie się ona w granicach wskazanych powyżej, pacjent ma następujące możliwości:</p>
                            <ul>
                                <li>zgłoszenie się w tej sprawie do Kierownika danej placówki, z prośbą o interwencje,</li>
                                <li>złożenie skargi w Narodowym Funduszu Zdrowia na świadczeniodawcę, którym zawarł z NFZ umowę na realizację świadczeń opieki zdrowotnej (oddzielny skrypt)</li>
                                <li>prośba o interwencję Rzecznika Praw Pacjenta (w godzinach pracy tego urzędu, TIP ma możliwość przełączenia rozmowy),</li>
                                <li>zmiana lekarza POZ, jeśli nie jest zadowolony z dotychczasowego (bezpłatnie dwa razy w roku kalendarzowym, w przypadku częstszej zmiany opłata wynosi 80 zł).</li>
                            </ul>
                            <p>Konsultant TIP z części dotyczącej NFZ powinien poinformować, że infolinia Rzecznika Praw Pacjenta jest obsługiwana w godzinach 8-18 w dni powszednie. Może zaproponować przełączenie na linię 2, a jeśli to nie jest możliwe, poinformować pacjenta, w jaki sposób uzyska połączenie po ponownym kontakcie z TIP.</p>
                        </details>
                        <details>
                            <summary>Gdzie można się zwrócić po receptę, gdy do POZ nie można się dodzwonić, a wizyta osobista w placówce kończy się odesłaniem bez recepty? </summary>
                            <p>O konieczności wystawienia recepty decyduje lekarz. Możliwe kroki do powzięcia:</p>
                            <ul>
                                <li>teleporada z wystawieniem recepty w przypadku leków stałych,</li>
                                <li>zostawienie w rejestracji pisemnej prośby o wystawienia leków w przypadku leków stałych,</li>
                                <li>wizyta u lekarza w przypadku leków nowych lub przy lekach stałych konieczność badań kontrolnych.</li>
                            </ul>
                            <p>Jeśli te kroki nie przyniosły oczekiwanego skutku, a chodzi o leki stałe, należy się w pierwszej kolejności skontaktować z kierownikiem przychodni. Pacjent ma również następujące możliwości:</p>
                            <ul>
                                <li>zgłoszenie się w tej sprawie do Kierownika danej placówki, z prośbą o interwencje,</li>
                                <li>złożenie skargi w Narodowym Funduszu Zdrowia na świadczeniodawcę, którym zawarł z NFZ umowę na realizację świadczeń opieki zdrowotnej (oddzielny skrypt)</li>
                                <li>prośba o interwencję Rzecznika Praw Pacjenta (w godzinach pracy tego urzędu, TIP ma możliwość przełączenia rozmowy),</li>
                                <li>zmiana lekarza POZ, jeśli nie jest zadowolony z dotychczasowego (bezpłatnie dwa razy w roku kalendarzowym, w przypadku częstszej zmiany opłata wynosi 80 zł).</li>
                            </ul>
                            <p>Konsultant TIP z części dotyczącej NFZ powinien poinformować, że infolinia Rzecznika Praw Pacjenta jest obsługiwana w godzinach 8-18 w dni powszednie. Może zaproponować przełączenie na linię 2, a jeśli to nie jest możliwe, poinformować pacjenta, w jaki sposób uzyska połączenie po ponownym kontakcie z TIP.</p>
                        </details>
                        <details>
                            <summary>Jak działają sanatoria i uzdrowiska?</summary>
                            <p>Od 14 marca 2020 r. do odwołania, sanatoria i uzdrowiska zawieszają swoją działalność. Jeżeli posiadasz potwierdzone przez oddział wojewódzki NFZ skierowanie na leczenie uzdrowiskowe, które ma rozpocząć się po 14 marca 2020 roku – nie jedź, zostań w domu.</p>
                        </details>
                        <details>
                            <summary>Co zrobić ze skierowaniem do zamkniętego uzdrowiska?</summary>
                            <p>Skierowanie do sanatorium będzie mogło być zrealizowane w późniejszym terminie z zachowaniem obecnego miejsca w kolejce oczekujących. Szczegółowych informacji udzielą oddziały wojewódzkie NFZ.</p>
                        </details>
                        <details>
                            <summary>Czy osoby przerywające turnus / pobyt w sanatorium ze względu na zagrożenie, będą miały prawo odbycia pozostałej części pobytu w inny terminie?</summary>
                            <p>Obecnie obowiązujące rozporządzenie Ministra Zdrowia z dnia 23 lipca 2013 r. w sprawie świadczeń gwarantowanych z zakresu lecznictwa uzdrowiskowego (Dz.U. 2013 poz. 931, z późn. zm.) określa czas trwania leczenia uzdrowiskowego, jest to: a) 27 dni – dla uzdrowiskowego leczenie szpitalne dzieci w wieku od 3 do 18 lat, 
                                <br /> b) 21 dni – dla następujących świadczeń:</p>
                            <ul>
                                <li>uzdrowiskowe leczenie sanatoryjne dzieci w wieku od 7 do 18 lat,</li>
                                <li>uzdrowiskowe leczenie sanatoryjne dzieci w wieku od 3 do 6 lat pod opieką dorosłych,</li>
                                <li>uzdrowiskowe leczenie szpitalne dorosłych,</li>
                                <li>uzdrowiskowe leczenie sanatoryjne dorosłych, </li>
                            </ul>
                            <p>c) 28 dni – dla uzdrowiskowej rehabilitacji dla dorosłych w szpitalu uzdrowiskowym oraz uzdrowiskowej rehabilitacji dla dorosłych w sanatorium uzdrowiskowym,
                                <br /> d) od 6 do 18 dni dla uzdrowiskowego leczenia ambulatoryjnego dorosłych i dzieci.
                                <br /> Dodatkowo ww. rozporządzenie określa liczbę zabiegów w trakcie pobytu (w tym tych z wykorzystaniem naturalnych surowców leczniczych). Obecnie obowiązujące przepisy ściśle określają minimalny, nieprzerwany czas trwania leczenia sanatoryjnego, która pozwala na uzyskanie efektu terapeutycznego. Skrócenie czasu trwania leczenia uzdrowiskowego, podzielenie go na części sprawia, że jest ono mniej skuteczne. Na podstawie obowiązujących przepisów nie ma zatem możliwości, żeby w późniejszym terminie kontynuować pozostałą część rozpoczętego pobytu. Sytuacja jest jednak dynamiczna, dlatego nie wykluczone, że w późniejszym terminie zostaną wprowadzone inne przepisy regulujące ww. kwestię.</p>
                        </details>
                        <details>
                            <summary>Dlaczego baseny w sanatoriach nie są zamknięte?</summary>
                            <p>Uzdrowiska czasowo zawiesiły swoją działalność, baseny, które w nich funkcjonują mają być wykorzystywane przez pacjentów kończących obecnie trwające turnusy. Jeśli któryś z kuracjuszy przebywających aktualnie na turnusie był zakażony, to miał już okazję zakazić pozostałych uczestników turnusu, niekoniecznie poprzez wodę w basenie, lecz np. poprzez dotykanie tych samym klamek. Zamknięcie basenów ogólnodostępnych nie jest spowodowane dużym ryzykiem zakażenia się przez wodę w basenie, lecz ograniczeniem występowania dużych skupisk ludzi, a co za tym idzie szans na rozprzestrzenianie się wirusa.</p>
                        </details>
                        <details>
                            <summary>W trakcie pobytu w sanatorium osoba ma odwołane zabiegi, za które już zapłaciła. Czy ktoś jej zwróci za nie pieniądze?</summary>
                            <p>Jeśli osoba zapłaciła za zabiegi, nie była to dopłata do zakwaterowania, Najprawdopodobniej zatem były to świadczenia komercyjne, nie w ramach NFZ. Ewentualny zwrot kosztów niewykonanych zabiegów należy ustalać z sanatorium.</p>
                        </details>
                        <details>
                            <summary>Czy pacjent przyjeżdżający do Polski z kartą EKUZ będzie leczony w przypadku zarażenia koronawirusem?</summary>
                            <p>Karta EKUZ potwierdza uprawnienia posiadacza do uzyskania w trakcie pobytu w innym państwie członkowskim świadczeń rzeczowych, które stają się niezbędne z powodów medycznych (niezależnie od czy przyczyną jest wypadek czy choroba zakaźna), z uwzględnieniem charakteru tych świadczeń oraz przewidywanego czasu pobytu. W związku z powyższym świadczenia związane z leczeniem objawów COVID-19 powinno zostać udzielone na podstawie karty EKUZ.</p>
                        </details>
                        <details>
                            <summary>Czy pacjent wyjeżdżający do kraju UE z kartą EKUZ będzie leczony w przypadku zarażenia koronawirusem?</summary>
                            <p>Pacjent z podejrzeniem koronarowirusa lub osoba, która w ciągu ostatnich 14 dni miała kontakt z osobą chorą lub podejrzaną o zachorowanie na COVID-19, poddawana jest w zależności od stanu zdrowia i decyzji lekarza lub inspektora sanitarnego: hospitalizacji, kwarantannie, izolacji domowej, nadzorowi epidemiologicznemu. Takie osoby nie powinny opuszczać odpowiednio szpitala, miejsca kwarantanny lub izolacji. W odniesieniu do pozostałych osób wskazać należy, że zgodnie z komunikatem GIS w ostatnich tygodniach obserwuje się rosnącą liczbę zachorowań na COVID-19 – chorobę wywoływaną przez koronawirusa SARS-CoV-2 w Europie. <strong>Główny Inspektor Sanitarny rekomenduje zaniechanie podróży, zwłaszcza do krajów o wysokim ryzyku zakażenia się koronawirusem.</strong>
                                <br /> EKUZ potwierdza uprawnienia posiadacza do uzyskania w trakcie pobytu w innym państwie członkowskim świadczeń rzeczowych, które stają się niezbędne z powodów medycznych (niezależnie od czy przyczyną jest wypadek czy choroba zakaźna), z uwzględnieniem charakteru tych świadczeń oraz przewidywanego czasu pobytu. Karta stanowi dowód na to, że jej posiadacz jest uprawniony w państwie członkowskim pobytu do świadczeń rzeczowych z tytułu choroby z myślą o zapobieżeniu przymusowemu powrotowi posiadacza karty do państwa właściwego lub państwa zamieszkania przed końcem planowanego pobytu w celu poddania się wymaganemu leczeniu. Celem świadczeń tego typu jest umożliwienie ubezpieczonemu kontynuowania pobytu w warunkach bezpiecznych dla zdrowia. Świadczenia udzielane są na zasadach obowiązujących osoby ubezpieczone w państwie pobytu. Mimo posłużenia się kartą, pacjent może zostać obciążony częścią kosztów zgodnie z prawem państwa, na terenie którego się znajduje.
                                <br />
                                <strong>Ważne: </strong>Osoba chcąca wyjechać do innego państwa członkowskiego Unii Europejskiej mimo zaleceń GIS powinna dodatkowo być świadoma, że: w części państw Unii Europejskiej obowiązują koszty współpłacenia pacjenta. Takie koszty mogą być bardzo wysokie w przypadku pobytu np. na oddziale intensywnej terapii. W zależności od przebiegu choroby oraz występujących powikłaniach COVID-19 może wymagać pobytu na oddziale intensywnej terapii. Jeśli dana osoba mimo wszystko decyduje się na wyjazd zaleca się rozważenie wykupienia dodatkowego komercyjnego ubezpieczenia, które będzie pokrywać ewentualne koszty współpłacenia; w czasie pobytu na terenie innego państwa członkowskiego służby sanitarne mogą poddać osobę chorą lub podejrzaną o zachorowanie podobnymi środkami nadzoru jak inspektor sanitarny w Polsce, oznacza to, że pobyt może zostać przymusowo wydłużony, co będzie się wiązać z dodatkowymi kosztami utrzymania oraz w przypadku osób aktywnych zawodowo dłuższą niż przewidywana nieobecnością w pracy.</p>
                        </details>
                        <details>
                            <summary>Jeśli pacjent nie ma ubezpieczenia, a jest obcokrajowcem, to czy będzie leczony w Polsce bezpłatnie?</summary>
                            <p>Na podstawie art. 8 oraz art. 38 ust. 1 pkt 2 ustawy o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi z dnia 5 grudnia 2008 r. (Dz.U. z 2019 r. poz. 1239) koszty badań sanitarno-epidemiologicznych; koszty świadczeń zdrowotnych udzielonych w celu zwalczania zakażeń i chorób zakaźnych, oraz świadczeń zdrowotnych związanych przyczynowo z tymi zakażeniami i chorobami zakaźnymi, udzielonych osobom nieposiadającym uprawnień z tytułu ubezpieczenia zdrowotnego są finansowane z budżetu państwa z części, której dysponentem jest minister właściwy do spraw zdrowia. Powyższe oznacza, że pacjent nieubezpieczony z objawami koronarowirusa nie zostanie obciążony kosztami: badań sanitarno-epidemiologicznych świadczeń zdrowotnych udzielonych w celu zwalczania COVID-19, oraz świadczeń zdrowotnych związanych przyczynowo z COVID-19.</p>
                        </details>
                        <details>
                            <summary>Czy muszę dostarczyć do szpitala lub poradni oryginał skierowania na wizytę / zabieg?</summary>
                            <p>Zgodnie z rozporządzeniem Ministra Zdrowia z dnia 13 marca 2020 r. w sprawie ogłoszenia na obszarze Rzeczypospolitej Polskiej stanu zagrożenia epidemicznego (Dz.U. poz. 433), w okresie od dnia 14 marca 2020 r. do odwołania pacjent nie ma obowiązku dostarczenia do świadczeniodawcy (szpitala, poradnia) oryginału skierowania w związku z umieszczeniem pacjenta na liście oczekujących na udzielenie świadczenia opieki zdrowotnej. Pacjent powinien dostarczyć oryginał skierowania w terminie 21 dni od dnia zakończenia stanu zagrożenia epidemicznego,alenie później niż w dniu udzielenia świadczenia opieki zdrowotnej wykonywanego na podstawie tego skierowania.</p>
                        </details>
                        <details>
                            <summary>W jaki sposób będzie można załatwić sprawy w Narodowym Funduszu Zdrowia, który działa obecnie w ograniczonym zakresie?</summary>
                            <p>W związku ze stanem epidemii od<strong> 27 marca 2020 r. </strong>zwiększamy ograniczenia w bezpośrednich kontaktach w salach obsługi klientów NFZ. Oto szczegółowe informacje na temat możliwości kontaktu w tym czasie.
                                <br /> Wszystkie sale i punkty obsługi NFZ opublikowały:</p>
                            <ul>
                                <li>adresy ePUAP</li>
                                <li>adresy e-mail</li>
                                <li>numery telefonów w sprawach pilnych.</li>
                            </ul>
                            <p>Dodatkowo wystawione są skrzynki na korespondencję, która jest obsługiwana na bieżąco.</p>
                            <p><strong>Wyroby medyczne</strong>
                                <br /> Osoba, która wystawia zlecenie na wyroby medyczne, może je od razu potwierdzić elektronicznie. Pacjent otrzymuje wówczas numer zlecenia (telefonicznie, email lub SMS) i nie musi już go potwierdzać w NFZ. Może udać się z tym numerem bezpośrednio do apteki czy sklepu medycznego lub zamówić wyrób przez internet.
                                <br /> Jeśli potwierdzenie będzie w formie papierowej, to trzeba je dodatkowo potwierdzić w NFZ. Obecnie robimy to drogą elektroniczną (skan przekazany e-mailem) lub poprzez wymianę korespondencji za pomocą skrzynki.
                                <br />
                                <span className="link">https://www.nfz.gov.pl/aktualnosci/aktualnosci-centrali/komunikat-dotyczacy-wystawiania-potwierdzania-i-realizacji-zlecen-na-zaopatrzenie-w-wyroby-medyczne,7651.html</span> Wyroby medyczne - szczegółowe informacje
                                <br />
                                <br />
                                <strong>Leczenie uzdrowiskowe</strong>
                                <br /> Zawieszamy rozpatrywanie korespondencji w sprawie leczenia uzdrowiskowego. Dokumenty w tej sprawie można dostarczyć po odwołaniu stanu epidemii i nie będzie miało to wpływu na kolejność rozpatrywania.
                                <br />
                                <br />
                                <strong>Karty EKUZ</strong>
                                <br /> Sprawy związane z EKUZ załatwiamy przez e-mail, ePUAP, ewentualnie wymianę korespondencji za pomocą skrzynki.
                                <br />
                                <br />
                                <strong>Ubezpieczenie dobrowolne</strong>
                                <br /> Wniosek o zawarcie lub rozwiązanie umowy dobrowolnego ubezpieczenia zdrowotnego wyślij pocztą tradycyjną do Twojego oddziału wojewódzkiego NFZ.</p>
                            <p><strong>Ubezpieczenie w NFZ</strong>
                                <br /> Wniosek o weryfikację statusu ubezpieczenia zdrowotnego (eWUŚ), a także dotyczący okresów i zasad ubezpieczenia zdrowotnego wyślij e-mailem (skan) lub pocztą tradycyjną do Twojego oddziału wojewódzkiego NFZ.</p>
                            <p><strong>Wnioski unijne</strong>
                                <br /> Wniosek o wydanie formularza S1 możesz wysłać pocztą tradycyjną.</p>
                            <p><strong>Zwrot kosztów leczenia poza granicami kraju</strong>
                                <br /> Wniosek o zwrot kosztów świadczeń opieki zdrowotnej, będących świadczeniami gwarantowanymi, udzielonych na terytorium innego niż Rzeczpospolita Polska państwa członkowskiego UE, wyślij pocztą tradycyjną.</p>
                            <p><strong>Składanie skarg i wniosków</strong>
                                <br /> Skargę lub wniosek możesz wysłać do Twojego oddziału wojewódzkiego NFZ:</p>
                            <ul>
                                <li>pocztą tradycyjną lub faksem</li>
                                <li>na adres e-mail oddziału wojewódzkiego: za pośrednictwem platformy ePUAP.</li>
                            </ul>
                            <p><strong>Nadawanie świadczeniodawcom POZ uprawnień do potwierdzania profilu zaufanego</strong>
                                <br /> W tej sprawie skontaktuj się telefonicznie lub elektronicznie z Twoim oddziałem wojewódzkim NFZ.</p>
                        </details>
                        <details>
                            <summary>Gdzie mogę złożyć ofertę na wyroby medyczne?</summary>
                            <p>Aby usprawić proces składania i realizacji zleceń na wyroby medyczne i środki ochrony indywidualnej wykorzystywanych podczas zwalczania COVID-19, na stronie internetowej Ministerstwa Zdrowia uruchomiono <span className="link">https://platformazakupowa.pl/pn/mz</span> Platformę Zakupową, która umożliwi proste złożenie oferty. Wykonawcy mogą tam złożyć oferty bezpośrednio na stronach zapytań ofertowych oraz aukcji elektronicznych.</p>
                        </details>
                        <details>
                            <summary>Kto decyduje o zamknięciu placówki leczniczej (np. kliniki, w której diagnozowane są dzieci)?</summary>
                            <p>Odpowiedź na to pytanie zależy do tego, co pytający ma na myśli, pytając o zamknięcie.</p>
                            <h4>Ograniczenie odwiedzin u chorych – szpital</h4>
                            <p>Decyzję o ograniczeniu odwiedzin u chorych podejmuje kierownik danego podmiotu leczniczego, czyli w zależności od szpitala może to być np. dyrektor, prezes zarządu, komendant.</p>
                            <h4>Czasowe zamknięcie placówki (przychodni, SOR, poradni) spowodowane koniecznością wdrożenia procedur sanitarno-epidemiologicznych</h4>
                            <p>W przypadku zgłoszenia się do placówki leczniczej chorego z zachorowaniem lub podejrzeniem zachorowania na COVID-19, która nie jest szpitalem zakaźnym konieczne jest wdrożenia określonych procedur sanitarno-epidemiologicznych. Do takich procedur należy np. odsunięcie od pracy personelu medycznego mającego bezpośredni kontakt z chorym, konieczność przeprowadzenia dezynfekcji pomieszczeń, ograniczenie możliwość kontaktu z chorym kolejnych osób. W zależności od zaistniałych okoliczności (np. warunków lokalowych, obsady dyżurowej) przeprowadzenie niezbędnych procedur związane jest z koniecznością czasowego zamknięcia placówki. Przykładowo, jeśli w danym momencie przyjmuje jeden lekarz i będzie on miał bezpośredni kontakt z chorym, konieczności jego odsunięcia od pracy spowoduje konieczność wezwania innego lekarza, do czasu jego przyjazdu uzyskanie porady lekarskiej będzie w placówce niemożliwe. Podobnie jeśli zaistnieje konieczność dezynfekcji kluczowych dla działalności placówki pomieszczeń, to na ten czas nie będzie można w placówce uzyskać świadczenia opieki zdrowotnej. Takie zamknięcie placówki wynika bezpośrednio z obowiązujących procedur, są one wdrażane obligatoryjnie przez personel placówki w zależności od zaistniałej sytuacji.</p>
                            <h4>Ograniczenie do niezbędnego minimum lub czasowe zawieszenie udzielania świadczeń wykonywanych planowo lub zgodnie z przyjętym planem postępowania leczniczego</h4>
                            <p>W celu minimalizacji ryzyka transmisji infekcji COViD-19, Centrala NFZ zaleca ograniczenie do niezbędnego minimum lub czasowe zawieszenie udzielania świadczeń wykonywanych planowo lub zgodnie z przyjętym planem postępowania leczniczego. Dotyczy to przede wszystkim planowanych pobytów w szpitalach w celu: przeprowadzenia diagnostyki oraz zabiegów diagnostycznych, leczniczych i operacyjnych, prowadzenia rehabilitacji leczniczej, świadczeń z zakresu opieki psychiatrycznej i leczenia uzależnień, stomatologii, ambulatoryjnej opieki specjalistycznej, badań diagnostycznych wykonywanych ambulatoryjnie takich jak: tomografia komputerowa, rezonans magnetyczny, PET, gastroskopia, kolonoskopia, USG oraz badań profilaktycznych i przeprowadzania szczepień. W każdym przypadku odroczenia terminu udzielenia świadczenia, a szczególnie w razie podjęcia decyzji o zawieszeniu udzielania świadczeń należy ocenić i wziąć pod uwagę uwarunkowania i ryzyka dotyczące stanu zdrowia pacjentów i prawdopodobieństwo jego pogorszenia. Zaleca się także, w porozumieniu z właściwymi dyrektorami OW NFZ, całkowite zawieszenie udzielania świadczeń w mammobusach i dentobusach. Jednocześnie Centrala NFZ przypomina, że niektóre ze świadczeń mogą być udzielane z wykorzystaniem systemów teleinformatycznych lub innych systemów łączności. Nie dotyczy to tzw. porad pierwszorazowych.</p>
                            <p><strong>Decyzję o ograniczeniu lub czasowym zawieszeniu udzielania świadczeń, biorąc pod uwagę wskazane powyżej zalecenia, podejmuje kierownictwo danego podmiotu leczniczego.</strong></p>
                            <p><strong>WAŻNE: w związku z wprowadzeniem stanu zagrożenia epidemiologicznego 19 placówek medycznych jest lub będzie przekształconych w szpitale zakaźne, co jest związane z ograniczeniem lub zawieszeniem przyjęć.</strong></p>
                        </details>
                        <details>
                            <summary>Czy przy kanałowym leczeniu i w związku z zaistniałą sytuacją trzeba zawiesić leczenie, czy można kontynuować?</summary>
                            <p>Skontaktuj się telefonicznie w tej sprawie z lekarzem prowadzącym leczenie. Tylko on może udzielić informacji, jakie będą skutki przełożenia leczenia. Sam musisz decyzję, czy zawiesić leczenie.</p>
                        </details>
                        <details>
                            <summary>Jeśli pacjent ma zaplanowaną np. fizjoterapię i termin rozpoczęcia przypada na jutro, to czy powinien pojechać? Czy termin nie przepadnie albo będzie do wykorzystanie w nieodległej przyszłości?</summary>
                            <p>Placówkom zaleca ograniczenie do niezbędnego minimum lub czasowe zawieszenie udzielania świadczeń wykonywanych planowo. <strong>Należy zatem skontaktować się z placówką, w której planowane jest leczenie.</strong> Jeśli ze względu na koronawirusa świadczeniodawca zawiesił udzielanie świadczeń, to wyznaczy nowy termin jego udzielenia. Jeśli w tym konkretnym przypadku świadczeniodawca decyduje się wykonać świadczenie, należy zastanowić się, czy potencjalne ryzyko związane z nieudzieleniem świadczenia w danym terminie i następstwa takiej decyzji nie przewyższają ryzyka związanego z zakażeniem COVID-19. Jeśli pacjent, mimo wszystko, nie decyduje się skorzystać ze świadczenia w terminie wskazanym przez świadczeniodawcę, musi go o tym poinformować i poprosić o wyznaczenie innego terminu (w zależności od dostępności wolnych terminów może się zdarzyć, że będzie to termin odległy).</p>
                        </details>
                        <details>
                            <summary>Co zrobić, gdy przy chorobie ciężkiej czy przewlekłej / postępującej zalecona jest wizyta u lekarza specjalisty z dopiskiem cito, a nie można się zapisać, ponieważ jest to pierwsza wizyta?</summary>
                            <h4>W sytuacji gdy pacjent ma termin, ale obawia się z niego korzystać</h4>
                            <p>Placówkom zaleca ograniczenie do niezbędnego minimum lub czasowe zawieszenie udzielania świadczeń wykonywanych planowo. <strong>Należy zatem skontaktować się z placówkę w której planowane jest leczenie.</strong> Jeśli ze względu na koronawirusa świadczeniodawca zawiesił udzielanie świadczeń, to wyznaczy nowy termin jego udzielenia. Jeśli w tym konkretnym przypadku świadczeniodawca decyduje się wykonać świadczenie, to  najprawdopodobniej potencjalne ryzyko związane z nieudzieleniem świadczenia w danym terminie i następstwa takiej decyzji przewyższają ryzyka związanego z zakażeniem COVID-19. Pacjent sam musi rozważyć, czy skorzysta z porady, czy nie.
                                <br /> Może skorzystać ze świadczenia lub poprosić o wyznaczenie innego terminu (w zależności od dostępnych terminów może być to termin odległy).</p>
                            <h4>W sytuacji gdy pacjent nie może się zapisać</h4>
                            <p>Proszę skorzystać z <span className="link">https://terminyleczenia.nfz.gov.pl/#</span> wyszukiwarki i znaleźć inny termin (może być on odległy).</p>
                        </details>
                        <details>
                            <summary>Co powinny zrobić osoby, które są dializowane, w sytuacji gdy w stacji dializ pojawi się podejrzenie koronawirusa lub ktoś będzie zarażony? Jakie kroki powinny podjąć?</summary>
                            <p>Placówki opieki zdrowotnej, zwłaszcza te opiekujące się osobami przewlekle chorymi, takie jak stacje dializ, mają na takie sytuacje przewidziane procedury. Stacja dializ na pewno udzieli informacji, jakie kroki podjęła w celu minimalizacji ryzyka zakażenia. Jednocześnie wskazać należy zostały wydane ogólne zalecenia dla podmiotów leczniczych. Przykładowo personel, który ma bliski kontakt z osobą chorą oraz osobą podejrzaną o zachorowanie na koronawirusa, zwykle zaopatrzony jest w odzież ochronną, która chroni go przed zakażeniem i co za tym idzie przeniesieniem zakażenia na kolejnych pacjentów. Jeśli dojdzie do bliskiego kontaktu personelu z osobą podejrzaną o zachorowanie, personel jest odsuwany od pracy do czasu otrzymania wyniku testu diagnostycznego tej osoby w kierunku koronawirusa (dalsze postępowanie w zależy od tego wyniku).</p>
                        </details>
                        <details>
                            <summary>Mojemu dziecku przysługuje leczenie stomatologiczne/ortodontyczne darmowe do 12 roku życia. Gabinet, w którym miały odbyć się zabiegi odwołał wizyty ze względu na obawę przed koronawirusem, a dziecko wkrótce skończy 12 lat. Czy istnieje możliwość przedłużenia okresu darmowych wizyt po ukończeniu przez dziecko 12 roku życia?</summary>
                            <p>Nie ma obecnie regulacji. Po ustabilizowaniu się sytuacji będą wytyczne. Można spróbować skontaktować się z placówką i poprosić, żeby w takiej sytuacji umówili wizytę w pierwszym wolnym terminie.</p>
                        </details>
                    </div>
                    <h3>Dla przedsiębiorców</h3>
                    <div>
                        <details>
                            <summary>Jestem przedsiębiorcą, który prowadzi eksport i import. Czy mogę wywieźć i przywieźć towar?</summary>
                            <p>Tak. Transport towarowy jest zachowany. </p>
                        </details>
                        <details>
                            <summary>Czy osoba, która prowadzi jednoosobową działalność gospodarczą i została poddana kwarantannie, może zawiesić działalność gospodarczą, żeby nie płacić składek?</summary>
                            <p><span className="font-10pt"><span className="color-2f2f2f">Osoba, która prowadzi jednoosobową działalność gospodarczą zarejestrowaną w CEIDG, może bezterminowo ją zawiesić. Zawieszenie wykonywania działalności gospodarczej rozpoczyna się od dnia, który ta osoba wskaże we wniosku. </span></span><span className="font-10pt"><span className="color-2f2f2f">Minimalny okres zawieszenia działalności gospodarczej wynosi 30 dni. Działalność może być zawieszona bezterminowo. </span></span>
                            </p>
                            <p><span className="font-10pt"><span className="color-2f2f2f">Jak zawiesić działalność online?<span className="link">https://www.biznes.gov.pl/pl/firma/zawieszenie-wznowienie-i-zamkniecie-firmy/chce-zawiesic-firme-jednoosobowa/proc_885-zawieszenie-dzialalnosci-gospodarcze</span> Informacje na biznes.gov.pl - tutaj.   </span></span><span className="font-12pt"> </span>
                                <br />
                                <span className="link">https://www.biznes.gov.pl/pl/koronawirus-najwazniejsze-informacje-dla-przedsiebiorcow</span><span className="font-10pt"> Więcej informacji na stronie Biznes.gov.pl</span></p>
                        </details>
                        <details>
                            <summary>Kiedy mogę uzyskać prawo do zasiłku chorobowego?</summary>
                            <p>Zgodnie z przepisami (art. 33 ust. 1 w zw. z art. 5 ust. 1 pkt 1 lit. f, i ustawy z dnia 5 grudnia 2008 r. o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi) państwowy inspektor sanitarny lub państwowy graniczny inspektor sanitarny może wydać decyzję o poddaniu kwarantannie lub izolacji osoby przebywającej na terytorium RP, jeśli jest ona zakażona, chora na chorobę zakaźną albo podejrzana o zakażenie lub chorobę zakaźną lub miała styczność ze źródłem biologicznego czynnika chorobotwórczego. Decyzja inspektora sanitarnego stanowi podstawę do wypłaty świadczeń z tytułu choroby na ogólnych zasadach. Zatem za czas nieobecności w pracy z powodu kwarantanny lub izolacji przysługuje wynagrodzenie za czas choroby lub zasiłek chorobowy, wypłacane przez płatnika składek lub Zakład Ubezpieczeń Społecznych. <strong>Decyzja może być dostarczona do pracodawcy bądź do placówki ZUS po okresie kwarantanny lub izolacji.</strong> Jeżeli lekarz leczący uzna, że w trakcie hospitalizacji, izolacji lub kwarantanny ze względu na stan zdrowia osoby poddanej tym obowiązkom uzasadnione jest orzeczenie o czasowej niezdolności do pracy z powodu choroby i potwierdzi to, wystawiając zaświadczenie lekarskie , jest ono dokumentem do ustalenia prawa i wypłaty świadczeń z tytułu choroby. Ocena, czy stan zdrowia uzasadnia wystawienie zaświadczenia lekarskiego, pozostaje w kompetencji lekarza. Jeżeli będzie miała miejsce sytuacja, o której mowa w art. 35 ustawy o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi, czyli gdy lekarz przyjmujący do szpitala, miejsca izolacji lub odbywania kwarantanny, kierując się własną ocena stopnia zagrożenia dla zdrowia publicznego, podda osobę podejrzaną o zachorowanie, chorą na chorobę szczególnie niebezpieczną i wysoce zakaźną lub osobę narażoną na zakażenie hospitalizacji lub kwarantannie oraz badaniom, również w przypadku, gdy brak jest decyzji inspektora sanitarnego, a następnie ubezpieczony otrzyma decyzję inspektora sanitarnego, to ubezpieczonemu będą przysługiwały świadczenia z tytułu choroby. Jeżeli lekarz leczący uzna, że w trakcie hospitalizacji, izolacji lub kwarantanny ze względu na stan zdrowia uzasadnione jest orzeczenie o czasowej niezdolności do pracy z powodu choroby i potwierdzi to wystawiając zaświadczenie lekarskie, ubezpieczony może ubiegać się o świadczenia z tytułu choroby na ogólnych zasadach. Ocena, czy stan zdrowia uzasadnia wystawienie zaświadczenia lekarskiego, pozostaje w kompetencji lekarza.
                                <br />
                                <strong>W przypadku gdy ubezpieczony dobrowolnie powstrzyma się od pracy i nie otrzyma zaświadczenia lekarskiego ani decyzji inspektora sanitarnego, nie przysługuje mu prawo do świadczeń pieniężnych w razie choroby. </strong>
                                <br /> Zakład Ubezpieczeń Społecznych nie jest właściwy w zakresie zasad usprawiedliwiania nieobecności w pracy określonych przepisami prawa pracy. Zakład nie jest także właściwy do zajmowania stanowiska w sprawie możliwości zastosowania art. 210 § 1 Kodeksu pracy, który przewiduje prawo pracownika do powstrzymania się od wykonywania pracy, gdy wykonywana przez niego praca stwarza zagrożenie dla zdrowia lub życia innym osobom, ponieważ zagadnienie to dotyczy przepisów o bezpieczeństwie i higienie pracy.</p>
                        </details>
                    </div>
                    <h3>Dla seniorów</h3>
                    <div>
                        <details>
                            <summary>Gdzie powinna się zwrócić o pomoc starsza osoba, która profilaktycznie chce zostać w domu, ale ma trudność ze zrobieniem zakupów, nie ma w pobliżu rodziny, a sąsiadów poprosić nie może?</summary>
                            <p>Do najbliższego ośrodka opieki społecznej.</p>
                        </details>
                        <details>
                            <summary>W jakich godzinach sklepy obsługują tylko seniorów?</summary>
                            <p>W godzinach od 10:00 do 12:00 sklepy i punkty usługowe mogą przyjmować i obsługiwać jedynie osoby powyżej 65 roku życia. W pozostałych godzinach sklepy i lokale usługowe są dostępne dla wszystkich. W tym dla osób powyżej 65. roku życia.</p>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Dostęp do sklepów, banków, restauracji - sprawy codzienne</h3>
                    <div>
                        <p>Ograniczamy funkcjonowanie centrów i galerii handlowych. Jednak czynne pozostaną w nich sklepy spożywcze, drogerie, pralnie i apteki, a także banki i placówki finansowe.  </p>
                        <details>
                            <summary>Czy zamawianie jedzenia jest bezpieczne?</summary>
                            <p>Tak, lokale gastronomiczne będą wciąż mogły dostarczać jedzenie do klientów.</p>
                        </details>
                        <details>
                            <summary>Czy banki będą otwarte?</summary>
                            <p>Tak. Banki i placówki finansowe działają normalnie.</p>
                        </details>
                        <details>
                            <summary>Czy spożywcze sklepy osiedlowe będą otwarte?</summary>
                            <p>Nie zamykamy żadnych sklepów spożywczych. Ograniczamy jedynie funkcjonowanie galerii handlowych. W galeriach sklepy spożywcze, drogerie, pralnie, apteki oraz banki nadal będą czynne. Wszystkie sklepy poza galeriami handlowymi funkcjonują normalnie.</p>
                        </details>
                        <details>
                            <summary>Na czym polega ograniczenie funkcjonowania galerii handlowych?</summary>
                            <p>Ograniczenie dotyczy działalności galerii i centrów handlowych. Działalność handlową w galeriach handlowych mogą prowadzić jedynie branże:</p>
                            <ul>
                                <li>spożywcza,</li>
                                <li>kosmetyczna (z wyjątkiem produktów przeznaczonych do perfumowania lub upiększania),</li>
                                <li>artykułów toaletowych i środków czystości,</li>
                                <li>wyrobów medycznych i farmaceutycznych,</li>
                                <li>artykułów remontowo-budowlanych,</li>
                                <li>prasowa,</li>
                                <li>artykułów dla zwierząt,</li>
                                <li>paliw. </li>
                            </ul>
                            <p><strong>Ważne!</strong> W galeriach mogą być świadczone usługi medyczne, bankowe, ubezpieczeniowe, pocztowe, pralnicze lub gastronomiczne (na dowóz i wynos). Na terenie galerii z handlu wyłączone są natomiast tzw. wyspy handlowe.</p>
                        </details>
                        <details>
                            <summary>Czy sklepy budowlane będą zamknięte?</summary>
                            <p>W weekendy wielkopowierzchniowe sklepy budowlane będą zamknięte.</p>
                        </details>
                        <details>
                            <summary>Jakie działania powinien podjąć świadomy klient-konsument?</summary>
                            <p><strong>W sklepie:</strong></p>
                            <ul>
                                <li>Osoby, które przebywają w sklepach, supermarketach, centrach handlowych powinny zawsze pamiętać o tym, że są współodpowiedzialne za zdrowie swoje i innych .</li>
                                <li>W miarę możliwości należy unikaj przebywania w miejscach zatłoczonych, utrzymywać odstępy w kolejkach.</li>
                                <li>Pamiętaj o higienie rąk oraz higienie kichania i kasłania, w szczególności przy pakowaniu żywności luzem, nieopakowanej, tj. pieczywo, produkty cukiernicze, orzechy.</li>
                                <li>Ręce w sklepie mają kontakt z powierzchniami roboczymi, pieniędzmi. Do pakowania  używaj dostępnych rękawic foliowych oraz torebek.</li>
                                <li>Niehigienicznym zachowaniem jest przebieranie i dotykanie produktów, które są przeznaczone do spożycia bez mycia i obróbki termicznej (np. pieczywo, bułki, wyroby cukiernicze).</li>
                                <li>Zwracaj uwagę na właściwą higienę układu oddechowego: nie kaszlaj lub/i nie kichaj w stronę innych osób czy towarów.</li>
                            </ul>
                            <p><strong>W domu: </strong></p>
                            <ul>
                                <li>Zachowywaj właściwą higienę mycia i przygotowania żywności. Jest to priorytet nie tylko w przypadku koronawirusa, ale przede wszystkim typowych zanieczyszczeń mikrobiologicznych prowadzących do zatruć pokarmowych.</li>
                                <li>Myj ręce, narzędzia kuchenne, blaty robocze, deski.</li>
                                <li>Zawsze pamiętaj o separacji produktów surowych i produktów już przygotowanych do spożycia, tak aby uniknąć zanieczyszczeń krzyżowych w kuchni.</li>
                            </ul>
                            <p>WHO zaleca przestrzeganie zasad <span className="link">https://gis.gov.pl/wp-content/uploads/2018/04/5-krok%C3%B3w-do-bezpieczniejszej-%C5%BCywno%C5%9Bci.pdf</span> PIĘCIU KROKÓW DO BEZPIECZNIEJSZEJ ŻYWNOŚCI</p>
                        </details>
                        <details>
                            <summary>Czy mogę zamawiać jedzenie do domu?</summary>
                            <p>Tak. Jednym z działań profilaktycznych jest ograniczenie działalności restauracji, kawiarni czy barów. Mogą one świadczyć jedynie usługi na wynos i na dowóz.</p>
                        </details>
                        <details>
                            <summary>Czy zamknięte będą kluby, kasyna i inne miejsca rozrywki?</summary>
                            <p>Ograniczenie dotyczy działalności wszystkich instytucji kultury.</p>
                            <p>Zalecenia: Wszystkie instytucje kultury pozostają zamknięte. Są to m.in. muza, galerie sztuki, teatry, filharmonie, opery, kina, kluby filmowe, biblioteki, archiwa oraz  stała działalność związana z kulturą.</p>
                        </details>
                        <details>
                            <summary>W jakich terminach nie będzie można pójść do baru czy restauracji?</summary>
                            <p>Wszystkie restauracje, kawiarnie czy bary mogą świadczyć jedynie usługi na wynos i na dowóz. Nie ma możliwości wydawania posiłków czy napoi na miejscu.</p>
                        </details>
                        <details>
                            <summary>Ilu klientów może przebywać w jednym czasie na terenie sklepu, na targu, na poczcie?</summary>
                            <p>Wprowadzone zostały ograniczenia dotyczące liczby klientów przebywających w jednym czasie na terenie sklepu, na targu i poczcie</p>
                            <ul>
                                <li>Sklepy i punkty usługowe</li>
                            </ul>
                            <p>Do każdego sklepu (zarówno małego, jak i wielkopowierzchniowego), a także do każdego lokalu usługowego może wejść maksymalnie tyle osób, ile wynosi liczba wszystkich kas lub punktów płatniczych pomnożona przez 3. To znaczy, że jeśli w sklepie jest 5 kas, to w jednym momencie na terenie sklepu może przebywać 15 klientów.</p>
                            <ul>
                                <li>Godziny dla seniorów</li>
                            </ul>
                            <p>W godzinach od 10:00 do 12:00 sklepy i punkty usługowe mogą przyjmować i obsługiwać jedynie osoby powyżej 65 roku życia. W pozostałych godzinach sklepy i lokale usługowe są dostępne dla wszystkich. W tym dla osób powyżej 65. roku życia.</p>
                            <ul>
                                <li>Targi</li>
                            </ul>
                            <p>Na terenie targowiska czy bazaru może przebywać maksymalnie tyle osób, ile wynosi liczba punktów handlowych pomnożona przez 3. Jeśli więc na osiedlowym bazarze jest 20 takich punktów, to na jego terenie może przebywać w jednym momencie maksymalnie 60 klientów.</p>
                            <ul>
                                <li>Placówki pocztowe</li>
                            </ul>
                            <p>Na terenie poczty może przebywać w jednym momencie tyle osób, ile wynosi liczba okienek pocztowych pomnożona przez 2. Jeśli w placówce jest 5 okienek, wówczas w jednym momencie na jej terenie może przebywać 10 osób.</p>
                        </details>
                        <details>
                            <summary>Czy otwarte będą salony fryzjerskie, kosmetyczne, tatuażu?</summary>
                            <p>Zamknięte zostają bez wyjątków wszystkie zakłady fryzjerskie, kosmetyczne, salony tatuażu i piercingu. Tych usług nie będzie można realizować również poza salonami – np. wizyty w domach nie wchodzą w grę.</p>
                        </details>
                        <p> </p>
                    </div>
                    <h3>Żywność</h3>
                    <div>
                        <details>
                            <summary>Czy powinniśmy robić zapasy żywności?</summary>
                            <p>Nie. Sklepy spożywcze będą otwarte normalnie. Nie ma potrzeby robienia zapasów. Polska jest jednym z największym producentów żywności w Europie, dlatego brak żywności nam nie grozi.</p>
                        </details>
                        <details>
                            <summary>Czy wirus może przenosić się za pomocą żywności?</summary>
                            <p>Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) opublikował w dniu 9 marca 2020 r. stanowisko, iż zgodnie z aktualną wiedzą nie ma dowodów na to, że żywność może być źródłem lub pośrednim ogniwem transmisji wirusa SARS COV-2. <span className="link">https://www.efsa.europa.eu/en/news/coronavirus-no-evidence-food-source-or-transmission-route EFSA</span> Informacja EFSA (w języku angielskim).</p>
                            <p>EFSA podkreśla, że na podstawie doświadczeń z wirusami SARS i MERS można sądzić, że nie dochodzi do infekcji człowieka poprzez żywność wirusem SARS COV-2. Tak więc jest mało prawdopodobne, aby wirus przenosił się przez żywność, i nie ma dotychczas dowodów, aby miało to miejsce. EFSA podkreśla, że stale monitoruje sytuację dotyczącą ogniska zakażenia SARS COV-2, które jest źródłem zachorowań w bardzo wielu krajach. W zachowaniu bezpieczeństwa mikrobiologicznego żywności istotne jest rygorystyczne zachowanie podstawowych zasad bezpieczeństwa żywności, które służą zapobieganiu jej zanieczyszczeniu, w tym również wtórnemu zanieczyszczeniu na etapie dystrybucji i sprzedaży.</p>
                        </details>
                        <details>
                            <summary>Jak dbać o bezpieczną żywność?</summary>
                            <p>Stosuj <span className="link">https://gis.gov.pl/wp-content/uploads/2018/04/5-krok%C3%B3w-do-bezpieczniejszej-%C5%BCywno%C5%9Bci.pdf</span> PIĘĆ KROKÓW DO BEZPIECZNIEJSZEJ ŻYWNOŚCI, zalecane przez WHO.</p>
                        </details>
                        <details>
                            <summary>Czy obróbka termiczna niszczy koronawirusa?</summary>
                            <p>Dokładna obróbka termiczna niszczy wirusa, ponieważ koronawirus ulega zniszczeniu gdy zastosuje się odpowiednią kombinację czasu i temperatury np. 60stC przez 30 min. Tak więc w przypadku mięsa, produktów surowych, typowa obróbka cieplna eliminuje zanieczyszczenie mikrobiologiczne, w tym również SARS COV-2.</p>
                        </details>
                    </div>
                    <h3>Stop dezinformacji</h3>
                    <div>
                        <details>
                            <summary>Czy od 16 kwietnia mogę wyjść z domu tylko w maseczce?</summary>
                            <p>Od 16 kwietnia wprowadzamy obowiązek zakrywania nosa i ust w miejscach publicznych. W tym celu możesz wykorzystać maseczkę, ale również szalik lub chustkę.</p>
                        </details>
                        <details>
                            <summary>Czy rozpylanie alkoholu lub chloru na całe ciało może zabić nowego koronawirusa?</summary>
                            <p>Nie. Rozpylanie alkoholu lub chloru na całym ciele nie zabije wirusów, które już dostały się do organizmu. Rozpylanie takich substancji może być szkodliwe dla skóry i błon śluzowych (tj. oczu, ust). Zarówno alkohol, jak i chlor mogą być przydatne do dezynfekcji powierzchni, ale należy je stosować zgodnie z odpowiednimi zaleceniami.</p>
                        </details>
                        <details>
                            <summary>Czy suszarki do rąk skutecznie zabijają nowego koronawirusa?</summary>
                            <p>Nie. Suszarki do rąk nie są skuteczne w zabijaniu SARS-CoV-2019. Aby uchronić się przed nowym koronawirusem, należy często myć ręce wodą i mydłem oraz dezynfekować je płynem na bazie alkoholu. Po umyciu rąk należy je dokładnie osuszyć, używając ręczników papierowych lub suszarki na gorące powietrze.</p>
                        </details>
                        <details>
                            <summary>Czy lampa dezynfekująca na promienie UV może zabić nowego koronawirusa?</summary>
                            <p>Lampy UV przeznaczone są do dezynfekcji pomieszczeń, nie powinny być używane do sterylizacji rąk lub innych obszarów skóry, ponieważ promieniowanie UV może powodować podrażnienie skóry.</p>
                        </details>
                        <details>
                            <summary>Czy szczepionki przeciwko zapaleniu płuc chronią przed nowym koronawirusem?</summary>
                            <p>Nie. Szczepionki przeciw zapaleniu płuc, takie jak szczepionka przeciwko pneumokokom i szczepionka przeciwko Haemophilus influenza typu B (Hib), nie zapewniają ochrony przed nowym koronawirusem. Wirus jest tak nowy i inny, że jeszcze nie istnieje właściwa szczepionka szczepionki. Naukowcy próbują opracować szczepionkę przeciwko SARS-CoV-2019, a WHO wspiera ich wysiłki. Chociaż szczepionki te nie są skuteczne przeciwko SARS-CoV-2019, zaleca się ich wykonanie zgodnie z kalendarzem szczepień.</p>
                        </details>
                        <details>
                            <summary>Czy regularne płukanie nosa solą fizjologiczną może zapobiec infekcji nowym koronawirusem?</summary>
                            <p>Nie. Nie ma dowodów na to, że regularne płukanie nosa solą fizjologiczną chroni przed zakażeniem nowym koronawirusem. Istnieją pewne ograniczone dowody, że regularne płukanie nosa solą fizjologiczną może pomóc szybciej zregenerować się śluzówce przy przeziębieniu. Jednak regularne płukanie nosa nie zapobiega infekcjom dróg oddechowych.</p>
                        </details>
                        <details>
                            <summary>Czy jedzenie czosnku może zapobiec infekcji nowym koronawirusem?</summary>
                            <p>Czosnek to zdrowa żywność, która może mieć pewne właściwości przeciwdrobnoustrojowe. Jednak nie ma obecnie dowodów, że jedzenie czosnku chroni przed nowym koronawirusem.</p>
                        </details>
                        <details>
                            <summary>Czy zimna pogoda i śnieg mogą zabić koronawirusa?</summary>
                            <p>Nie ma powodu sądzić, że zimna pogoda może zabić nowego koronawirusa lub inne choroby. Normalna temperatura ciała człowieka wynosi około 36,5 stopni C do 37 stopni C, niezależnie od temperatury zewnętrznej i pogody. Najskuteczniejszym sposobem ochrony przed nowym koronawirusem jest częste mycie rąk wodą i mydłem oraz korzystanie środków do dezynfekcji rąk na bazie alkoholu . Należy także unikać bliskiego kontaktu z każdym, kto kaszle i kicha.</p>
                        </details>
                    </div>
                </div>
            </article>
          </div>
          <p className="watermark faq">2020.04.17 - https://www.gov.pl/web/koronawirus/pytania-i-odpowiedzi</p>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default FaqPage;
