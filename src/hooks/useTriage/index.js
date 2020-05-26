import { useSelector } from 'react-redux';
import {
  TRIAGE_LEVEL,
  RISK_LEVEL_COLOR,
  EXPOSURE_TRIAGE_LEVEL
} from './triageLevel.constants';
import { EXPOSURE_NOTIFICATION_STATUS } from '../../utils/servicesStatus/servicesStatus.constants';

const defaultTriageLevel = (triageLevel, description, serious) => {
  const {
    color,
    content,
    IconComponent,
    Recommendation,
    riskGroup
  } = TRIAGE_LEVEL[triageLevel];

  const isDangerous =
    triageLevel &&
    !(triageLevel === 'no_risk' || triageLevel === 'self_monitoring');
  return {
    color,
    content,
    description,
    IconComponent,
    isDangerous,
    Recommendation,
    riskGroup,
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

const useTriage = () => {
  const { triageLevel, description, serious } = useSelector(
    state => state.triage
  );
  const {
    riskLevel = undefined,
    servicesStatus: { exposureNotificationStatus }
  } = useSelector(state => state.nativeData);

  const exposureRiskLevel = resolveExposureRiskLevel(riskLevel);
  const triageRiskLevel = resolveTriageRiskLevel(triageLevel);

  if (
    exposureNotificationStatus === !EXPOSURE_NOTIFICATION_STATUS.ON ||
    exposureRiskLevel === undefined
  ) {
    return defaultTriageLevel(triageLevel, description, serious);
  }

  if (
    triageRiskLevel === RISK_LEVEL_COLOR.GREEN &&
    exposureRiskLevel === RISK_LEVEL_COLOR.GREEN
  ) {
    return defaultTriageLevel(triageLevel, description, serious);
  }
  if (triageRiskLevel === RISK_LEVEL_COLOR.GREEN) {
    return EXPOSURE_TRIAGE_LEVEL[exposureRiskLevel];
  }
  if (
    triageRiskLevel === RISK_LEVEL_COLOR.YELLOW &&
    exposureRiskLevel === RISK_LEVEL_COLOR.GREEN
  ) {
    return EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.YELLOW];
  }
  if (triageRiskLevel === RISK_LEVEL_COLOR.YELLOW) {
    return EXPOSURE_TRIAGE_LEVEL[exposureRiskLevel];
  }
  if (
    triageRiskLevel === RISK_LEVEL_COLOR.RED &&
    exposureRiskLevel === RISK_LEVEL_COLOR.GREEN
  ) {
    return defaultTriageLevel(triageLevel, description, serious);
  }
  return EXPOSURE_TRIAGE_LEVEL[RISK_LEVEL_COLOR.RED];
};

export default useTriage;
