import smileGreen from '../../assets/img/icons/buzka-zielona.svg';
import smileYellow from '../../assets/img/icons/buzka-zolta.svg';
import smileRed from '../../assets/img/icons/buzka-czerwona.svg';
import { Color } from '../../theme/colors';
import { NoRisk } from '../../components/TriageRecommendations/components/NoRisk';
import { Quarantine } from '../../components/TriageRecommendations/components/Quarantine';
import { SelfMonitoring } from '../../components/TriageRecommendations/components/SelfMonitoring';
import { IsolationCall } from '../../components/TriageRecommendations/components/IsolationCall';
import { IsolationAmbulance } from '../../components/TriageRecommendations/components/IsolationAmbulance';
import { CallDoctor } from '../../components/TriageRecommendations/components/CallDoctor';

export const TRIAGE_LEVEL = {
  no_risk: {
    content:
      'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).',
    color: null,
    icon: smileGreen,
    riskGroup: 'Niskie ryzyko infekcji',
    riskLevel: 1,
    Recommendation: NoRisk
  },
  self_monitoring: {
    content:
      'Jeśli wracasz do Polski z zagranicy lub mieszkasz z osobą skierowaną na kwarantannę po dniu 31.03.2020, zostaniesz automatycznie skierowany|skierowana na kwarantannę (o ile pozwala na to twój stan zdrowia).',
    color: null,
    icon: smileGreen,
    riskGroup: 'Niskie ryzyko infekcji',
    riskLevel: 1,
    Recommendation: SelfMonitoring
  },
  quarantine: {
    content: 'Jeśli twoje objawy wydają się niepokojące – reaguj.',
    color: Color.info,
    icon: smileYellow,
    riskLevel: 2,
    riskGroup: 'Średnie ryzyko infekcji',
    Recommendation: Quarantine
  },
  isolation_call: {
    content:
      'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.',
    color: Color.danger,
    icon: smileRed,
    riskLevel: 3,
    riskGroup: 'Wysokie ryzyko infekcji',
    Recommendation: IsolationCall
  },
  isolation_ambulance: {
    content:
      'Bezzwłocznie telefonicznie powiadom powiatową stację sanitarno-epidemiologiczną i zgłoś się bezpośrednio do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontaktu z innymi osobami.',
    color: Color.danger,
    icon: smileRed,
    riskLevel: 3,
    riskGroup: 'Wysokie ryzyko infekcji',
    Recommendation: IsolationAmbulance
  },
  call_doctor: {
    content:
      'Twoje objawy nie wskazują na chorobę COVID-19 wywoływaną koronawirusem, jednak są niepokojące i wymagają konsultacji z lekarzem.\n' +
      '\n' +
      'Jeśli uważasz, że twój stan zdrowia jest poważny i twoje objawy szybko się pogarszają, udaj się do najbliższego Szpitalnego Oddziału Ratunkowego (zadzwoń tam wcześniej, jeśli to możliwe) lub zadzwoń na numer alarmowy.',
    color: Color.danger,
    icon: smileRed,
    riskLevel: 3,
    riskGroup: 'Wysokie ryzyko infekcji',
    Recommendation: CallDoctor
  }
};

export const EXPOSURE_TRIAGE_LEVEL = {
  2: {
    color: Color.danger,
    content:
      'Monitoruj swój stan zdrowia - jeśli Twój stan się pogorszy, zgłoś się do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontkatu z innymi osobami',
    icon: smileRed,
    isDangerous: true,
    isExposure: true,
    riskGroup: 'Średnie ryzyko infekcji',
    riskLevel: 2
  },
  3: {
    color: Color.danger,
    content:
      'Bezwłocznie, za pomocą ankiety online lub telefonicznie zgłoś się do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego. Unikaj kontkatu z innymi osobami',
    icon: smileRed,
    isDangerous: true,
    isExposure: true,
    riskGroup: 'Wysokie ryzyko infekcji',
    riskLevel: 3
  }
};

export const RISK_LEVEL_COLOR = {
  GREEN: 1,
  YELLOW: 2,
  RED: 3
};
