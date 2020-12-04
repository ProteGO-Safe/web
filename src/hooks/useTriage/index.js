import { useSelector } from 'react-redux';
import {
  TRIAGE_LEVEL,
  RISK_LEVEL_COLOR,
  EXPOSURE_TRIAGE_LEVEL,
  NO_TRIAGE_LEVEL,
  EXPOSURE_SICK,
  MANUAL_COVID
} from './triageLevel.constants';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';

const defaultTriageLevel = (triageLevel, description, serious, triageRiskLevel = 0, exposureRiskLevel = 0) => {
  const { color, content, IconComponent, Recommendation, riskGroup, riskLevel } = TRIAGE_LEVEL[triageLevel];

  const isDangerous = triageLevel && !(triageLevel === 'no_risk' || triageLevel === 'self_monitoring');
  return {
    color,
    content,
    description,
    IconComponent,
    isDangerous,
    Recommendation,
    riskGroup,
    riskLevel,
    exposureRiskLevel,
    triageRiskLevel,
    serious
  };
};

const resolveExposureRiskLevel = riskLevel => {
  switch (riskLevel) {
    case 1: {
      return RISK_LEVEL_COLOR.GREEN;
    }
    case 2: {
      return RISK_LEVEL_COLOR.YELLOW;
    }
    case 3: {
      return RISK_LEVEL_COLOR.RED;
    }
    default:
      return undefined;
  }
};

const resolveTriageRiskLevel = triageLevel => {
  switch (triageLevel) {
    case 'no_risk':
    case 'self_monitoring': {
      return RISK_LEVEL_COLOR.GREEN;
    }
    case 'quarantine': {
      return RISK_LEVEL_COLOR.YELLOW;
    }
    case 'isolation_call':
    case 'isolation_ambulance':
    case 'call_doctor': {
      return RISK_LEVEL_COLOR.RED;
    }
    default:
      return undefined;
  }
};

const resolveExposureHighRiskLevel = (triageRiskLevel = 0) => {
  return {
    ...EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.RED],
    triageRiskLevel
  };
};

const resolveExposureMidRiskLevel = (triageRiskLevel = 0) => {
  if (triageRiskLevel === RISK_LEVEL_COLOR.RED) {
    return {
      ...EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.RED],
      triageRiskLevel: RISK_LEVEL_COLOR.RED
    };
  }
  return {
    ...EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.YELLOW],
    triageRiskLevel
  };
};

const resolveExposureLowRiskLevel = (triageRiskLevel, triageLevel, description, serious) => {
  if (triageRiskLevel === undefined) {
    return {
      ...EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.GREEN],
      triageRiskLevel: 0
    };
  }
  return defaultTriageLevel(triageLevel, description, serious, triageRiskLevel, RISK_LEVEL_COLOR.GREEN);
};

const resolveUndefinedExposureRiskLevel = (triageRiskLevel, triageLevel, description, serious) => {
  if (triageRiskLevel === undefined) {
    return NO_TRIAGE_LEVEL;
  }
  return defaultTriageLevel(triageLevel, description, serious, triageRiskLevel);
};

const useTriage = () => {
  const { triageLevel, description, serious, timeOfConfirmedCovid, timeOfConfirmedManualCovid } = useSelector(
    state => state.triage
  );
  const {
    riskLevel = undefined,
    servicesStatus: { exposureNotificationStatus }
  } = useSelector(state => state.nativeData);

  const exposureRiskLevel = resolveExposureRiskLevel(riskLevel);
  const triageRiskLevel = resolveTriageRiskLevel(triageLevel);

  if (timeOfConfirmedManualCovid) {
    return MANUAL_COVID;
  }

  if (timeOfConfirmedCovid) {
    return EXPOSURE_SICK;
  }

  if (exposureNotificationStatus !== EXPOSURE_NOTIFICATION_STATUS.ON || exposureRiskLevel === undefined) {
    return resolveUndefinedExposureRiskLevel(triageRiskLevel, triageLevel, description, serious);
  }

  if (exposureRiskLevel === RISK_LEVEL_COLOR.GREEN) {
    return resolveExposureLowRiskLevel(triageRiskLevel, triageLevel, description, serious);
  }

  if (exposureRiskLevel === RISK_LEVEL_COLOR.YELLOW) {
    return resolveExposureMidRiskLevel(triageRiskLevel);
  }

  if (exposureRiskLevel === RISK_LEVEL_COLOR.RED) {
    return resolveExposureHighRiskLevel(triageRiskLevel);
  }

  throw new Error('illegal exposureRiskLevel');
};

export default useTriage;
