import React from 'react';
import ImportantInfo from './ImportantInfo';
import useLanguage from '../../hooks/useLanguage';
import { Routes } from '../../services/navigationService/routes';
import { T } from '../../components';

import { ReactComponent as Icon1 } from '../../assets/img/icons/important-info-1.svg';
import { ReactComponent as Icon2 } from '../../assets/img/icons/important-info-2.svg';
import { ReactComponent as Icon3 } from '../../assets/img/icons/important-info-3.svg';
import { ReactComponent as Icon4 } from '../../assets/img/icons/important-info-4.svg';
import { ReactComponent as Icon5 } from '../../assets/img/icons/important-info-5.svg';
import { ReactComponent as Icon6 } from '../../assets/img/icons/important-info-6.svg';
import { ReactComponent as Icon7 } from '../../assets/img/icons/important-info-7.svg';

const ImportantInfoContainer = () => {
  const { isPolish } = useLanguage();

  const IMPORTANT_INFO_ITEMS = [
    {
      type: 'route',
      icon: <Icon6 />,
      title: <T i18nKey="important_info_title_6" />,
      description: <T i18nKey="important_info_description_6" />,
      path: Routes.IAmSick,
      danger: true
    },
    {
      type: 'route',
      icon: <Icon7 />,
      title: <T i18nKey="important_info_title_7" />,
      description: <T i18nKey="important_info_description_7" />,
      path: Routes.InfoVaccinations,
      newFeature: true
    },
    {
      type: 'route',
      icon: <Icon1 />,
      title: <T i18nKey="important_info_title_1" />,
      description: <T i18nKey="important_info_description_1" />,
      path: Routes.HowItWorks
    },
    {
      type: 'link',
      icon: <Icon4 />,
      title: <T i18nKey="important_info_title_4" />,
      description: <T i18nKey="important_info_description_4" />,
      path: 'important_info_href_1'
    },
    {
      type: 'link',
      icon: <Icon5 />,
      title: <T i18nKey="important_info_title_5" />,
      path: 'important_info_href_2'
    },
    {
      type: 'route',
      icon: <Icon3 />,
      title: <T i18nKey="important_info_title_3" />,
      description: <T i18nKey="important_info_description_3" />,
      path: Routes.CurrentRestrictions
    },
    {
      type: isPolish ? 'link' : 'route',
      icon: <Icon2 />,
      title: <T i18nKey="important_info_title_2" />,
      description: <T i18nKey="important_info_description_2" />,
      path: isPolish ? 'important_info_href_3' : Routes.ReportBug
    }
  ];

  return <ImportantInfo items={IMPORTANT_INFO_ITEMS} />;
};

export default ImportantInfoContainer;
