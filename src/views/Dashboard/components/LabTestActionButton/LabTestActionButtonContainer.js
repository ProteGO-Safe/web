import React, { useMemo } from 'react';
import moment from 'moment';
import { not } from 'ramda';
import LabTestActionButton from './LabTestActionButton';
import useLabTest from '../../../../hooks/useLabTest';
import { T } from '../../../../components';
import { Routes } from '../../../../services/navigationService/routes';
import useNavigation from '../../../../hooks/useNavigation';
import useHealthStats from '../../../../hooks/useHealthStats';

const LabTestActionButtonContainer = () => {
  const { goTo } = useNavigation();
  const { isCovidConfirmed } = useHealthStats();
  const { isSubscriptionVerified, isSubscriptionConfirmed, timeOfUpdatedSubscriptionStatus } = useLabTest();

  const prepareData = (titleLabel, descriptionLabel, onClick, isIconNotification) => {
    return {
      title: <T i18nKey={titleLabel} />,
      description: <T i18nKey={descriptionLabel} />,
      onClick,
      isIconNotification
    };
  };

  const readyForLabTestData = useMemo(() => {
    return prepareData(
      'result_analysis_text_17_3',
      'result_analysis_text_18_3',
      () => goTo(Routes.LabTestOnboarding),
      false
    );
    // eslint-disable-next-line
  }, []);

  const finishLabTestData = useMemo(() => {
    return prepareData('result_analysis_text_17_4', 'result_analysis_text_18_4', () => null, true);
  }, []);

  const timeIsUp = useMemo(() => {
    return moment().diff(moment.unix(timeOfUpdatedSubscriptionStatus), 'hours') >= 72;
  }, [timeOfUpdatedSubscriptionStatus]);

  const data = useMemo(() => {
    if (isSubscriptionVerified) {
      return finishLabTestData;
    }
    if (isSubscriptionConfirmed) {
      if (timeIsUp && not(isCovidConfirmed)) {
        return readyForLabTestData;
      }
      return null;
    }
    return readyForLabTestData;
    // eslint-disable-next-line
  }, [isSubscriptionVerified, isSubscriptionConfirmed, timeIsUp, isCovidConfirmed]);

  if (!data) {
    return null;
  }

  return (
    <LabTestActionButton
      title={data.title}
      description={data.description}
      onClick={data.onClick}
      isIconNotification={data.isIconNotification}
    />
  );
};

export default LabTestActionButtonContainer;
