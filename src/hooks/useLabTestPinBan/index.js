import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLabTestPinUnsuccessfulAttempts } from '../../store/selectors/nativeData';
import banPinTries from '../../services/banPinTries';

const useLabTestPinBan = () => {
  const pinUnsuccessfulAttempts = useSelector(
    getLabTestPinUnsuccessfulAttempts
  );

  const [banData, setBanData] = useState(null);

  useEffect(() => {
    if (pinUnsuccessfulAttempts) {
      const banInfo = banPinTries.getBanData(pinUnsuccessfulAttempts);
      setBanData(banInfo);
    }
  }, [pinUnsuccessfulAttempts]);

  useEffect(() => {
    if (banData && banData.lockdownTime) {
      const timer = setTimeout(() => {
        setBanData(banPinTries.getBanData(pinUnsuccessfulAttempts));
      }, banData.lockdownTime);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [banData, pinUnsuccessfulAttempts]);

  const message =
    banData &&
    banPinTries.createErrorMessage(banData, pinUnsuccessfulAttempts.length);

  const isBanned = banData && !!banData.lockdownTime;

  return { message, isBanned };
};

export default useLabTestPinBan;
