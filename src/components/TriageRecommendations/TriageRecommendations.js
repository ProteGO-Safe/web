import React from 'react';
import { useSelector } from 'react-redux';
import { NoRisk } from './components/NoRisk';
import { SelfMonitoring } from './components/SelfMonitoring';
import { Quarantine } from './components/Quarantine';
import { IsolationCall } from './components/IsolationCall';
import { IsolationAmbulance } from './components/IsolationAmbulance';
import { CallDoctor } from './components/CallDoctor';

const TriageRecommendations = () => {
  const { triageLevel } = useSelector(state => state.triage);

  switch (triageLevel) {
    case 'no_risk': {
      return <NoRisk />;
    }
    case 'self_monitoring': {
      return <SelfMonitoring />;
    }
    case 'quarantine': {
      return <Quarantine />;
    }
    case 'isolation_call': {
      return <IsolationCall />;
    }
    case 'isolation_ambulance': {
      return <IsolationAmbulance />;
    }
    case 'call_doctor': {
      return <CallDoctor />;
    }
    default: {
      return null;
    }
  }
};

export default TriageRecommendations;
