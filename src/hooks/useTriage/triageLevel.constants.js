import smileGreen from '../../assets/img/icons/buzka-zielona.svg';
import smileYellow from '../../assets/img/icons/buzka-zolta.svg';
import smileRed from '../../assets/img/icons/buzka-czerwona.svg';
import { Color } from '../../theme/colors';

export const TRIAGE_LEVEL = {
  no_risk: {
    riskGroup: 'Niskie ryzyko infekcji',
    icon: smileGreen,
    content:
      'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).',
    color: null
  },
  self_monitoring: {
    riskGroup: 'Niskie ryzyko infekcji',
    icon: smileGreen,
    content:
      'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).',
    color: null
  },
  quarantine: {
    riskGroup: 'Średnie ryzyko infekcji',
    icon: smileYellow,
    content: 'Jeśli twoje objawy wydają się niepokojące – reaguj.',
    color: Color.info
  },
  isolation_call: {
    riskGroup: 'Wysokie ryzyko infekcji',
    icon: smileRed,
    content:
      'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.',
    color: Color.danger
  },
  isolation_ambulance: {
    riskGroup: 'Wysokie ryzyko infekcji',
    icon: smileRed,
    content:
      'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.',
    color: Color.danger
  },
  call_doctor: {
    riskGroup: 'Wysokie ryzyko infekcji',
    icon: smileRed,
    content:
      'Twoje objawy nie wskazują na chorobę COVID-19 wywoływaną koronawirusem, jednak są niepokojące i wymagają konsultacji z lekarzem.\n' +
      '\n' +
      'Jeśli uważasz, że twój stan zdrowia jest poważny i twoje objawy szybko się pogarszają, udaj się do najbliższego Szpitalnego Oddziału Ratunkowego (zadzwoń tam wcześniej, jeśli to możliwe) lub zadzwoń na numer alarmowy.',
    color: Color.danger
  }
};
