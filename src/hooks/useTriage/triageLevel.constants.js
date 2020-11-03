import { GreenSmile } from '../../assets/img/icons/buzka-zielona';
import { YellowSmile } from '../../assets/img/icons/buzka-zolta';
import { RedSmile } from '../../assets/img/icons/buzka-czerwona';
import { Color } from '../../theme/colors';
import { NoRisk } from '../../views/Home/components/TriageRecommendations/components/NoRisk';
import { Quarantine } from '../../views/Home/components/TriageRecommendations/components/Quarantine';
import { SelfMonitoring } from '../../views/Home/components/TriageRecommendations/components/SelfMonitoring';
import { IsolationCall } from '../../views/Home/components/TriageRecommendations/components/IsolationCall';
import { IsolationAmbulance } from '../../views/Home/components/TriageRecommendations/components/IsolationAmbulance';
import { CallDoctor } from '../../views/Home/components/TriageRecommendations/components/CallDoctor';

export const TRIAGE_LEVEL = {
  no_risk: {
    content: 'triage_level_no_risk_content',
    color: null,
    IconComponent: GreenSmile,
    riskGroup: 'triage_level_low_risk',
    riskLevel: 1,
    Recommendation: NoRisk
  },
  self_monitoring: {
    content: 'triage_level_self_monitoring_content',
    color: null,
    IconComponent: GreenSmile,
    riskGroup: 'triage_level_low_risk',
    riskLevel: 1,
    Recommendation: SelfMonitoring
  },
  quarantine: {
    content: 'triage_level_quarantine_content',
    color: Color.orange,
    IconComponent: YellowSmile,
    riskLevel: 2,
    riskGroup: 'triage_level_medium_risk',
    Recommendation: Quarantine
  },
  isolation_call: {
    content: 'triage_level_isolation_call_content',
    color: Color.danger,
    IconComponent: RedSmile,
    riskLevel: 3,
    riskGroup: 'triage_level_high_risk',
    Recommendation: IsolationCall
  },
  isolation_ambulance: {
    content: 'triage_level_isolation_ambulance_content',
    color: Color.danger,
    IconComponent: RedSmile,
    riskLevel: 3,
    riskGroup: 'triage_level_high_risk',
    Recommendation: IsolationAmbulance
  },
  call_doctor: {
    content: 'triage_level_call_doctor_content',
    color: Color.danger,
    IconComponent: RedSmile,
    riskLevel: 3,
    riskGroup: 'triage_level_high_risk',
    Recommendation: CallDoctor
  }
};

export const EXPOSURE_TRIAGE_LEVEL = {
  1: {
    color: null,
    content: null,
    IconComponent: GreenSmile,
    isDangerous: false,
    isExposure: true,
    riskGroup: 'triage_level_low_risk',
    riskLevel: 1,
    exposureRiskLevel: 1
  },
  2: {
    color: Color.orange,
    content: 'exposure_triage_level_medium_risk_content',
    IconComponent: RedSmile,
    isDangerous: true,
    isExposure: true,
    riskGroup: 'triage_level_medium_risk',
    riskLevel: 2,
    exposureRiskLevel: 2
  },
  3: {
    color: Color.danger,
    content: 'exposure_triage_level_high_risk_content',
    IconComponent: RedSmile,
    isDangerous: true,
    isExposure: true,
    riskGroup: 'triage_level_high_risk',
    riskLevel: 3,
    exposureRiskLevel: 3
  }
};

export const MANUAL_COVID = {
  color: Color.danger,
  content: 'exposure_sick_content',
  IconComponent: RedSmile,
  isManualCovid: true
};

export const EXPOSURE_SICK = {
  color: Color.danger,
  content: 'exposure_sick_content',
  IconComponent: RedSmile,
  isCovid: true
};

export const NO_TRIAGE_LEVEL = {
  exposureRiskLevel: 0,
  triageRiskLevel: 0
};

export const RISK_LEVEL_COLOR = {
  GREEN: 1,
  YELLOW: 2,
  RED: 3
};
