import triageLevelResponse from './triageLevelResponse.json';
import seriouses from './seriouses.json';
import locations from './locations.json';
import { QueryObject, Evidence, AnswerOption } from './diagnosis.types';
import { findEvidenceByIds, isAbsent, isPresent } from './evidenceFinder';

const resolveSerious = (evidences: Evidence[]) => {
  return (
    evidences
      .filter(isPresent)
      // @ts-ignore
      .map(evidence => seriouses[evidence.id])
      .filter(value => value)
  );
};

const resolveCallAmbulanceResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  return { ...triageLevelResponse['isolation_ambulance'], serious };
};

const resolveCallDoctorResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  return { ...triageLevelResponse['call_doctor'], serious };
};

const resolveSelfMonitoringResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  return { ...triageLevelResponse['self_monitoring'], serious };
};

const hasTraveled = (evidences: Evidence[]) => {
  const evidencesIds = evidences
    .filter(value => value.choice_id === AnswerOption.PRESENT)
    .map(value => value.id);
  return (
    locations
      .filter(value => {
        return evidencesIds.includes(value.id);
      })
      .filter(value => value.extras.has_local_covid_transmission === true)
      .length > 0
  );
};

const resolveIsolationCallResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  if (hasTraveled(evidences)) {
    serious.push(seriouses.p_5);
  }
  return { ...triageLevelResponse['isolation_call'], serious };
};

const resolveNoRiskResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  return { ...triageLevelResponse['no_risk'], serious };
};

const resolveQuarantineResponse = (evidences: Evidence[]) => {
  const serious = resolveSerious(evidences);
  return { ...triageLevelResponse['quarantine'], serious };
};

const hasNonOrFatigueSymptoms = (evidences: Evidence[]) => {
  const [
    fatigue,
    musclePain,
    chills,
    headache,
    diarrhea,
    nausea,
    soreThroat,
    impairedTasteOrSmell
  ] = findEvidenceByIds(evidences, [
    's_15',
    's_16',
    's_17',
    's_18',
    's_19',
    's_20',
    's_21',
    's_24'
  ]);

  if (
    isPresent(fatigue) ||
    (isAbsent(musclePain) &&
      isAbsent(chills) &&
      isAbsent(headache) &&
      isAbsent(diarrhea) &&
      isAbsent(nausea) &&
      isAbsent(soreThroat) &&
      isAbsent(impairedTasteOrSmell))
  ) {
    return true;
  }
  return false;
};

const hasNoSignificantContactConfirmed = (evidences: Evidence[]) => {
  const [none, other] = findEvidenceByIds(evidences, ['p_11', 'p_15']);
  if (isPresent(none) || isPresent(other)) {
    return true;
  }
  return false;
};

const anyOfThreeSymptoms = (evidences: Evidence[]) => {
  const [rapidly, fastBreathing, bloodCough] = findEvidenceByIds(evidences, [
    's_12',
    's_13',
    's_14'
  ]);
  return (
    isPresent(rapidly) || isPresent(fastBreathing) || isPresent(bloodCough)
  );
};

const anyRFSelected = (evidences: Evidence[]) => {
  const [
    p18,
    p19,
    p24,
    p22,
    p23,
    p17,
    p16,
    p20,
    p21
  ] = findEvidenceByIds(evidences, [
    'p_18',
    'p_19',
    'p_24',
    'p_22',
    'p_23',
    'p_17',
    'p_16',
    'p_20',
    'p_21'
  ]);
  return (
    isPresent(p18) ||
    isPresent(p19) ||
    isPresent(p24) ||
    isPresent(p22) ||
    isPresent(p23) ||
    isPresent(p17) ||
    isPresent(p16) ||
    isPresent(p20) ||
    isPresent(p21)
  );
};

const noFeverAndExistsShortnessBreath = (
  evidences: Evidence[],
  isElderly: boolean
) => {
  if (anyOfThreeSymptoms(evidences)) {
    return resolveCallAmbulanceResponse(evidences);
  }
  if (hasNonOrFatigueSymptoms(evidences)) {
    if (hasNoSignificantContactConfirmed(evidences)) {
      return resolveCallDoctorResponse(evidences);
    }
    return resolveIsolationCallResponse(evidences);
  }
  if (hasNoSignificantContactConfirmed(evidences)) {
    return resolveCallDoctorResponse(evidences);
  }
  if (isElderly || anyRFSelected(evidences)) {
    return resolveCallAmbulanceResponse(evidences);
  }
  return resolveIsolationCallResponse(evidences);
};

const hasFeverTemp = (evidences: Evidence[]) => {
  const [feverTemp] = findEvidenceByIds(evidences, ['s_4']);
  return isPresent(feverTemp);
};

const onlyCoughOrFever = (evidences: Evidence[], isElderly: boolean) => {
  if (anyOfThreeSymptoms(evidences)) {
    return resolveCallAmbulanceResponse(evidences);
  }
  if (hasNonOrFatigueSymptoms(evidences)) {
    if (hasNoSignificantContactConfirmed(evidences)) {
      if (hasFeverTemp(evidences)) {
        return resolveCallDoctorResponse(evidences);
      }
      return resolveSelfMonitoringResponse(evidences);
    } else {
      if (hasFeverTemp(evidences)) {
        return resolveCallAmbulanceResponse(evidences);
      }
      return resolveIsolationCallResponse(evidences);
    }
  } else {
    if (hasNoSignificantContactConfirmed(evidences)) {
      if (hasFeverTemp(evidences) || isElderly || anyRFSelected(evidences)) {
        return resolveCallDoctorResponse(evidences);
      } else {
        return resolveSelfMonitoringResponse(evidences);
      }
    } else {
      if (hasFeverTemp(evidences)) {
        return resolveCallAmbulanceResponse(evidences);
      } else {
        return resolveIsolationCallResponse(evidences);
      }
    }
  }
};

const onlyFeverAndShortnessBreathOrAll = (evidences: Evidence[]) => {
  return resolveCallAmbulanceResponse(evidences);
};

const onlyFeverAndCough = (evidences: Evidence[], isElderly: boolean) => {
  if (anyOfThreeSymptoms(evidences) || hasFeverTemp(evidences)) {
    return resolveCallAmbulanceResponse(evidences);
  }
  if (hasNonOrFatigueSymptoms(evidences)) {
    if (hasTraveled(evidences)) {
      return resolveIsolationCallResponse(evidences);
    }
    if (hasNoSignificantContactConfirmed(evidences)) {
      if (isElderly || anyRFSelected(evidences)) {
        return resolveCallDoctorResponse(evidences);
      } else {
        return resolveSelfMonitoringResponse(evidences);
      }
    } else {
      return resolveIsolationCallResponse(evidences);
    }
  } else {
    if (hasTraveled(evidences)) {
      return resolveIsolationCallResponse(evidences);
    }
    if (hasNoSignificantContactConfirmed(evidences)) {
      return resolveCallDoctorResponse(evidences);
    } else {
      return resolveIsolationCallResponse(evidences);
    }
  }
};

const noFeverAndNoCoughAndNoShortnessBreath = (evidences: Evidence[]) => {
  if (hasNonOrFatigueSymptoms(evidences)) {
    if (hasNoSignificantContactConfirmed(evidences)) {
      return resolveNoRiskResponse(evidences);
    } else {
      return resolveQuarantineResponse(evidences);
    }
  } else {
    if (hasNoSignificantContactConfirmed(evidences)) {
      return resolveSelfMonitoringResponse(evidences);
    } else {
      return resolveQuarantineResponse(evidences);
    }
  }
};

const resolveTriageLevel = (query: QueryObject) => {
  const { evidence: evidences, isElderly } = query;
  const [fever, cough, shortnessBreath] = findEvidenceByIds(evidences, [
    's_0',
    's_1',
    's_2'
  ]);

  if (isAbsent(fever) && isPresent(shortnessBreath)) {
    return noFeverAndExistsShortnessBreath(evidences, isElderly);
  }
  if (
    (isAbsent(fever) && isPresent(cough) && isAbsent(shortnessBreath)) ||
    (isPresent(fever) && isAbsent(cough) && isAbsent(shortnessBreath))
  ) {
    return onlyCoughOrFever(evidences, isElderly);
  }
  if (
    (isPresent(fever) && isPresent(cough) && isPresent(shortnessBreath)) ||
    (isPresent(fever) && isAbsent(cough) && isPresent(shortnessBreath))
  ) {
    return onlyFeverAndShortnessBreathOrAll(evidences);
  }
  if (isPresent(fever) && isPresent(cough) && isAbsent(shortnessBreath)) {
    return onlyFeverAndCough(evidences, isElderly);
  }
  if (isAbsent(fever) && isAbsent(cough) && isAbsent(shortnessBreath)) {
    return noFeverAndNoCoughAndNoShortnessBreath(evidences);
  }

  throw new Error('not supported arguments');
};

export const getTriage = (query: QueryObject) => {
  const { isElderly } = query;
  if (isElderly === undefined) {
    throw new Error('isElderly is required');
  }
  return resolveTriageLevel(query);
};

export const getTriageDataByTriageLevel = (triageLevel: string) => {
  if (!Object.keys(triageLevelResponse).includes(triageLevel)) {
    return undefined;
  }
  return Object.entries(triageLevelResponse)
    .filter(entry => entry[0] === triageLevel)
    .map(entry => entry[1])[0];
};
