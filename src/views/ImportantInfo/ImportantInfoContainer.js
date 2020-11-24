import React from 'react';
import { withTranslation } from 'react-i18next';
import ImportantInfo from './ImportantInfo';
import useLanguage from '../../hooks/useLanguage';
import { AVAILABLE_LANGUAGES } from '../../constants';

import { ReactComponent as Icon1 } from '../../assets/img/icons/important-info-1.svg';
import { ReactComponent as Icon2 } from '../../assets/img/icons/important-info-2.svg';
import { ReactComponent as Icon3 } from '../../assets/img/icons/important-info-3.svg';
import { ReactComponent as Icon4 } from '../../assets/img/icons/important-info-4.svg';
import { ReactComponent as Icon5 } from '../../assets/img/icons/important-info-5.svg';
import { ReactComponent as Icon6 } from '../../assets/img/icons/important-info-6.svg';
import { Routes } from '../../services/navigationService/routes';

const ImportantInfoContainer = ({ t }) => {
  const { language } = useLanguage();

  const IMPORTANT_INFO_ITEMS = [
    {
      type: 'route',
      icon: <Icon6 />,
      title: t('important_info_title_6'),
      description: t('important_info_description_6'),
      path: Routes.IAmSick,
      danger: true
    },
    {
      type: 'route',
      icon: <Icon1 />,
      title: t('important_info_title_1'),
      description: t('important_info_description_1'),
      path: Routes.HowItWorks
    },
    {
      type: language === AVAILABLE_LANGUAGES.pl ? 'link' : 'route',
      icon: <Icon2 />,
      title: t('important_info_title_2'),
      description: t('important_info_description_2'),
      path:
        language === AVAILABLE_LANGUAGES.pl
          ? 'https://www.gov.pl/web/protegosafe/pytania-i-odpowiedzi'
          : Routes.ReportBug
    },
    {
      type: 'route',
      icon: <Icon3 />,
      title: t('important_info_title_3'),
      description: t('important_info_description_3'),
      path: Routes.CurrentRestrictions
    },
    {
      type: 'link',
      icon: <Icon4 />,
      title: t('important_info_title_4'),
      description: t('important_info_description_4'),
      path: t('important_info_href_1')
    },
    {
      type: 'link',
      icon: <Icon5 />,
      title: t('important_info_title_5'),
      path: t('important_info_href_2')
    }
  ];

  return <ImportantInfo items={IMPORTANT_INFO_ITEMS} />;
};

export default withTranslation()(ImportantInfoContainer);
