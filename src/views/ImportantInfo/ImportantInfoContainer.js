import React from 'react';
import { withTranslation } from 'react-i18next';
import Routes from '../../routes';
import ImportantInfo from './ImportantInfo';

import Icon1 from '../../assets/img/icons/important-info-1.svg';
import Icon2 from '../../assets/img/icons/important-info-2.svg';
import Icon3 from '../../assets/img/icons/important-info-3.svg';
import Icon4 from '../../assets/img/icons/important-info-4.svg';
import Icon5 from '../../assets/img/icons/important-info-5.svg';
import Icon6 from '../../assets/img/icons/important-info-6.svg';

const ImportantInfoContainer = ({ t }) => {
  const IMPORTANT_INFO_ITEMS = [
    {
      type: 'route',
      icon: Icon6,
      title: t('important_info_title_6'),
      description: t('important_info_description_6'),
      path: Routes.IAmSick,
      danger: true
    },
    {
      type: 'route',
      icon: Icon2,
      title: t('important_info_title_2'),
      description: t('important_info_description_2'),
      path: Routes.ReportBug
    },
    {
      type: 'route',
      icon: Icon3,
      title: t('important_info_title_3'),
      description: t('important_info_description_3'),
      path: Routes.CurrentRestrictions,
      newFeature: true
    },
    {
      type: 'link',
      icon: Icon4,
      title: t('important_info_title_4'),
      description: t('important_info_description_4'),
      link: 'https://www.gov.pl/web/koronawirus/informacje-dla-podrozujacych'
    },
    {
      type: 'link',
      icon: Icon5,
      title: t('important_info_title_5'),
      link: 'https://www.gov.pl/web/koronawirus/pytania-i-odpowiedzi'
    },
    {
      type: 'route',
      icon: Icon1,
      title: t('important_info_title_1'),
      description: t('important_info_description_1'),
      path: Routes.HowItWorks
    }
  ];
  return <ImportantInfo items={IMPORTANT_INFO_ITEMS} />;
};

export default withTranslation()(ImportantInfoContainer);
