import React from 'react';
import { useFormikContext } from 'formik';

import IconChat from '../../../../assets/img/explainer/chat.svg';
import IconDiary from '../../../../assets/img/explainer/diary.svg';
import IconInfo from '../../../../assets/img/explainer/info.svg';

import Explainer from './Explainer';
import { ExplainerItem } from './components';

const ExplainerContainer = () => {
  const { setFieldValue } = useFormikContext();

  const items = [
    {
      content: (
        <>
          Na bieżąco sprawdzaj czy jesteś w&nbsp;grupie ryzyka (zalecenia WHO)
        </>
      ),
      icon: IconInfo,
      slug: 'information'
    },
    {
      content: (
        <>
          Uzupełniaj <span className="text-bold">Dziennik Zdrowia</span>
        </>
      ),
      icon: IconDiary,
      slug: 'diary'
    },
    {
      content: (
        <>
          Wszystkie ważne informacje o{' '}
          <span className="text-bold no-wrap">COVID-19</span> w 1 miejscu
        </>
      ),
      icon: IconChat,
      slug: 'chat'
    }
  ].map(({ content, icon, slug }) => (
    <ExplainerItem content={content} icon={icon} key={slug} />
  ));

  const handleButtonClick = () => setFieldValue('step', 3);

  return <Explainer items={items} onClick={handleButtonClick} />;
};

export default ExplainerContainer;
