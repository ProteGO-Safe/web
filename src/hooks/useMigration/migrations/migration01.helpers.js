const USER_DATA = {
  seriouses_text1: 'Kaszel',
  seriouses_text10:
    'Opieka nad osobą z podejrzeniem COVID-19 bez środków ochronnych',
  seriouses_text2: 'Duszność',
  seriouses_text3: 'Gorączka powyżej 40°C (104°F)',
  seriouses_text4: 'Szybkie pogarszanie stanu zdrowia',
  seriouses_text5: 'Przyspieszony oddech',
  seriouses_text6: 'Odkrztuszanie krwi',
  seriouses_text7: 'Gorączka pomiędzy 37.5°C a 38°C (99.5°F a 100.4°F)',
  seriouses_text8: 'Gorączka pomiędzy 38°C a 40°C (100.4°F a 104°F)',
  seriouses_text9: 'Kraj z transmisją wirusa w społeczeństwie',
  imprint_text7: '1-5 sztuk',
  imprint_text8: '6-10 sztuk',
  imprint_text9: '11-20 sztuk',
  imprint_text10: '20-40 sztuk',
  imprint_text11: 'ponad 40',
  chronic_sick_values_text1: 'nadciśnienie tętnicze',
  chronic_sick_values_text10: 'cukrzyca - insulinozależna',
  chronic_sick_values_text11: 'cukrzyca - insulinoniezależna',
  chronic_sick_values_text12: 'choroby układu immunologicznego',
  chronic_sick_values_text14:
    'stosowanie leków obniżających odporność (immunosupresyjnych)',
  chronic_sick_values_text16: 'choroby onkologiczne',
  chronic_sick_values_text18: 'nietolerancje / alergie / nadwrażliwość na leki',
  chronic_sick_values_text20: 'nietolerancje / alergie - pokarmowe',
  chronic_sick_values_text22: 'nietolerancje / alergie - oddechowe',
  chronic_sick_values_text24: 'nietolerancje / alergie - inne',
  chronic_sick_values_text3: 'przewlekłe choroby układu oddechowego',
  chronic_sick_values_text5:
    'choroby układu krążenia - choroba niedokrwienna serca',
  chronic_sick_values_text6: 'choroby układu krążenia - wady zastawkowe serca',
  chronic_sick_values_text7: 'choroby układu krążenia - niewydolność serca',
  chronic_sick_values_text8: 'choroby układu krążenia - inne',
  imprint_text6: 'nie wiem'
};

const DIAGNOSIS_DATA = {
  diagnosis_text43:
    'Twoje objawy są bardzo poważne i mogą wskazywać na zakażenie koronawirusem (choroba COVID-19).',
  diagnosis_text44:
    'Twoje odpowiedzi nie wskazują abyś miał/-ła COVID-19. Twoje objawy są jednak niepokojące i wymagają konsultacji medycznej.',
  diagnosis_text45:
    'Twoje objawy są niepokojące i mogą mieć związek z koronawirusem. Zadzwoń na lokalną infolinię dotyczącą COVID-19. W zależności od kraju może to być infolinia stworzona przez ministerstwo zdrowia lub sanepid.',
  diagnosis_text46:
    'Objawy, które zgłosiłeś/-aś, nie wskazują na chorobę COVID-19. Mimo to lepiej, żebyś pozostał/-a w domu, dopóki nie wyzdrowiejesz. W ten sposób zmniejszasz ryzyko zakażenia siebie oraz innych. Pamiętaj, że Twoje objawy mogą wynikać także z innych chorób i mogą wymagać konsultacji lekarskiej - powyższy wywiad jest ukierunkowany na COVID-19. Jeśli twoje objawy wydają się niepokojące, skontaktuj się z lekarzem.',
  diagnosis_text47:
    'Odpowiedzi, których udzieliłeś/-aś, nie wskazują na zakażenie koronawirusem (choroba COVID-19). Stosuj poniższe środki zapobiegawcze i zalecenia rządowe, by uniknąć zakażenia. Pamiętaj, że Twoje objawy mogą wynikać także z innych chorób i mogą wymagać konsultacji lekarskiej - powyższy wywiad jest ukierunkowany na COVID-19. Jeśli Twoje objawy wydają się niepokojące, skontaktuj się z lekarzem.',
  diagnosis_text48:
    'Twoje objawy nie wskazują na COVID-19, jednak zgodnie z zaleceniami WHO i CDC zalecana jest izolacja na okres następnych 14 dni.'
};

const RISK_TEST_DATA = {
  diagnosis_text1: 'Zdiagnozowana przewlekła choroba płuc',
  diagnosis_text10: 'Zaznacz odpowiedzi, które Cię dotyczą',
  diagnosis_text11: 'Gorączka',
  diagnosis_text12: 'Kaszel',
  diagnosis_text13: 'Duszność',
  diagnosis_text14:
    'Czy masz któryś z poniższych objawów? Wybierz jedynie nowe objawy, niezwiązane z Twoimi przewlekłymi chorobami.',
  diagnosis_text15: 'Osłabienie',
  diagnosis_text16: 'Bóle mięśni',
  diagnosis_text17: 'Dreszcze',
  diagnosis_text18: 'Ból głowy',
  diagnosis_text19: 'Biegunka',
  diagnosis_text2: 'Zdiagnozowana niewydolność serca',
  diagnosis_text20: 'Mdłości',
  diagnosis_text21: 'Ból gardła',
  diagnosis_text22: 'Upośledzony smak lub węch',
  diagnosis_text23: 'Czy masz którekolwiek z poniższych objawów?',
  diagnosis_text24:
    'Mieszkam lub opiekowałem/-am się osobą z podejrzeniem zakażenia koronawirusem',
  diagnosis_text25:
    'Przebywałem/-am w tym samym pomieszczeniu (biuro, klasa, siłownia) lub podróżowałem/-am w bliskiej odległości (poniżej 1 metra) z osobą z podejrzeniem zakażenia koronawirusem',
  diagnosis_text26:
    'Miałem/-am osobisty kontakt przez dłużej niż 15 minut z osobą podejrzaną o zakażenie koronawirusem',
  diagnosis_text27: 'Inny rodzaj kontaktu',
  diagnosis_text28: 'Żadne z powyższych',
  diagnosis_text29:
    'Czy w ciągu ostatnich 14 dni miałeś/-aś bliski kontakt z osobą z podejrzeniem zakażenia koronawirusem?',
  diagnosis_text3: 'Trwająca choroba nowotworowa',
  diagnosis_text30: 'Pomiędzy 37.5°C a 38°C (99.5°F a 100.4°F)',
  diagnosis_text31: 'Pomiędzy 38°C a 40°C (100.4°F a 104°F)',
  diagnosis_text32: 'Powyżej 40°C (104°F)',
  diagnosis_text33: 'Nie mierzyłam temperatury',
  diagnosis_text34: 'Jak wysoką masz gorączkę?',
  diagnosis_text35: 'Szybkie pogarszanie stanu zdrowia',
  diagnosis_text36: 'Czy Twoje objawy szybko się nasilają?',
  diagnosis_text37: 'Przyspieszony oddech',
  diagnosis_text38: 'Czy masz przyspieszony oddech?',
  diagnosis_text39: 'Odkrztuszanie krwi',
  diagnosis_text4: 'Choroby lub leki obniżające odporność',
  diagnosis_text40: 'Czy odkrztuszasz krwistą wydzielinę?',
  diagnosis_text41:
    'Czy w ciągu ostatnich 14 dni mieszkałeś/-aś lub podróżowałeś/-aś do kraju z licznymi przypadkami zakażeń koronawirusem?',
  diagnosis_text42:
    'Czy w ciągu ostatnich 14 dni mieszkałeś/-aś lub podróżowałeś/-aś do kraju z licznymi przypadkami zakażeń koronawirusem?',
  diagnosis_text43:
    'Twoje objawy są bardzo poważne i mogą wskazywać na zakażenie koronawirusem (choroba COVID-19).',
  diagnosis_text44:
    'Twoje odpowiedzi nie wskazują abyś miał/-ła COVID-19. Twoje objawy są jednak niepokojące i wymagają konsultacji medycznej.',
  diagnosis_text45:
    'Twoje objawy są niepokojące i mogą mieć związek z koronawirusem. Zadzwoń na lokalną infolinię dotyczącą COVID-19. W zależności od kraju może to być infolinia stworzona przez ministerstwo zdrowia lub sanepid.',
  diagnosis_text46:
    'Objawy, które zgłosiłeś/-aś, nie wskazują na chorobę COVID-19. Mimo to lepiej, żebyś pozostał/-a w domu, dopóki nie wyzdrowiejesz. W ten sposób zmniejszasz ryzyko zakażenia siebie oraz innych. Pamiętaj, że Twoje objawy mogą wynikać także z innych chorób i mogą wymagać konsultacji lekarskiej - powyższy wywiad jest ukierunkowany na COVID-19. Jeśli twoje objawy wydają się niepokojące, skontaktuj się z lekarzem.',
  diagnosis_text47:
    'Odpowiedzi, których udzieliłeś/-aś, nie wskazują na zakażenie koronawirusem (choroba COVID-19). Stosuj poniższe środki zapobiegawcze i zalecenia rządowe, by uniknąć zakażenia. Pamiętaj, że Twoje objawy mogą wynikać także z innych chorób i mogą wymagać konsultacji lekarskiej - powyższy wywiad jest ukierunkowany na COVID-19. Jeśli Twoje objawy wydają się niepokojące, skontaktuj się z lekarzem.',
  diagnosis_text48:
    'Twoje objawy nie wskazują na COVID-19, jednak zgodnie z zaleceniami WHO i CDC zalecana jest izolacja na okres następnych 14 dni.',
  diagnosis_text5: 'Zdiagnozowana przewlekła choroba wątroby',
  diagnosis_text6: 'Zdiagnozowana niewydolność nerek',
  diagnosis_text7: 'Długoterminowy pobyt w domu opieki',
  diagnosis_text8: 'Cukrzyca',
  diagnosis_text9: 'Otyłość'
};

export const DATAS = {
  RISK_TEST_DATA,
  USER_DATA,
  DIAGNOSIS_DATA
};

export const getKeyBySentence = (sentence, data) => {
  return Object.keys(data).find(key => data[key] === sentence) || sentence;
};
