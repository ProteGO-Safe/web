import React, { useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import IconChat from '../../../../assets/img/explainer/chat.svg';
import IconDiary from '../../../../assets/img/explainer/diary.svg';
import IconInfo from '../../../../assets/img/explainer/info.svg';

import Explainer from './Explainer';
import { ExplainerItem } from './components';

const ExplainerContainer = () => {
  const { setFieldValue } = useFormikContext();

  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const settings = {
    afterChange: currentSlide => setActiveSlide(currentSlide),
    dots: true,
    slidesToShow: 1,
    swipe: true,
    swipeToSlide: true
  };

  const handleButtonClick = () => {
    if (activeSlide < 2) {
      carouselRef.current.slickGoTo(activeSlide + 1);
      return;
    }

    setFieldValue('step', 3);
  };

  return (
    <Explainer
      carouselRef={carouselRef}
      items={items}
      onClick={handleButtonClick}
      settings={settings}
    />
  );
};

export default ExplainerContainer;
