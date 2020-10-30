import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getLabTestPinUnsuccessfulAttempts } from '../../store/selectors/nativeData';
import banPinTries from '../../services/banPinTries';

const useLabTestPinBan = () => {
  const { t } = useTranslation();
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
    banPinTries.createErrorMessage(banData, pinUnsuccessfulAttempts.length, t);

  const isBanned = banData && !!banData.lockdownTime;

  return { message, isBanned };
};

export default useLabTestPinBan;
