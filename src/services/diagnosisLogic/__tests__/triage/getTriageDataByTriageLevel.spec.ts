import { getTriageDataByTriageLevel } from '../../triageLogic';

describe('return triage data by triage level', () => {
  it('should return undefined', () => {
    // When
    const data = getTriageDataByTriageLevel('xxxx');

    // Then
    expect(data).toEqual(undefined);
  });
  it('should return isolation ambulance', () => {
    // When
    const data = getTriageDataByTriageLevel('isolation_ambulance');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text43',
      serious: [],
      triage_level: 'isolation_ambulance'
    });
  });
  it('should return call doctor', () => {
    // When
    const data = getTriageDataByTriageLevel('call_doctor');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text44',
      serious: [],
      triage_level: 'call_doctor'
    });
  });
  it('should return isolation call', () => {
    // When
    const data = getTriageDataByTriageLevel('isolation_call');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text45',
      serious: [],
      triage_level: 'isolation_call'
    });
  });
  it('should return self monitoring', () => {
    // When
    const data = getTriageDataByTriageLevel('self_monitoring');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text46',
      serious: [],
      triage_level: 'self_monitoring'
    });
  });
  it('should return no risk', () => {
    // When
    const data = getTriageDataByTriageLevel('no_risk');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text47',
      serious: [],
      triage_level: 'no_risk'
    });
  });
  it('should return quarantine', () => {
    // When
    const data = getTriageDataByTriageLevel('quarantine');

    // Then
    expect(data).toEqual({
      description: 'diagnosis_text48',
      serious: [],
      triage_level: 'quarantine'
    });
  });
});
