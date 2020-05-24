const triageLevelResolver = triageLevel => {
  switch (triageLevel) {
    case 'no_risk': {
      return 'PRZESTRZEGAJ PROFILAKTYKI';
    }
    case 'self_monitoring': {
      return 'SAMOOBSERWACJA - POZOSTAŃ W DOMU I MONITORUJ STAN ZDROWIA';
    }
    case 'quarantine': {
      return 'ODOSOBNIENIE DOMOWE. UNIKAJ KONTAKTU Z DOMOWNIKAMI. OBSERWUJ SWÓJ STAN ZDROWIA.';
    }
    case 'isolation_call': {
      return 'IZOLACJA DOMOWA. UNIKAJ KONTAKTU Z DOMOWNIKAMI. SKONSULTUJ SIĘ Z NUMEREM ALARMOWYM.';
    }
    case 'isolation_ambulance': {
      return 'BEZWZGLĘDNIE NIE OPUSZCZAJ DOMU. ZABRONIONY KONTAKT Z INNYMI LUDŹMI/DOMOWNIKAMI. OBOWIĄZKOWY KONTAKT Z NUMEREM ALARMOWYM.';
    }
    case 'call_doctor': {
      return 'TWOJE OBJAWY SĄ NIEPOKOJĄCE, SKONSULTUJ SIĘ Z LEKARZEM.';
    }
    default: {
      return null;
    }
  }
};

export default triageLevelResolver;
