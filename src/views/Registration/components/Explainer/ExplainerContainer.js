import React, { useRef, useState } from 'react';

import IconChat from '../../../../assets/img/explainer/chat.svg';
import IconDiary from '../../../../assets/img/explainer/diary.svg';
import IconInfo from '../../../../assets/img/explainer/info.svg';
import IconBluetooth from '../../../../assets/img/explainer/bluetooth.svg';

import Explainer from './Explainer';
import { ExplainerItem } from './components';

const ExplainerContainer = ({ onFinishClick }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const items = [
    {
      content: (
        <>
          Funkcja działa w kontakcie z osobami, które wyraziły na to zgodę i
          korzystają z aplikacji. Zachęć innych do korzystania.
          <br />
          <br />W ten sposób wzajemnie się chronimy!
        </>
      ),
      icon: IconBluetooth,
      slug: 'bluetooth'
    },
    {
      content: (
        <>Dbaj o siebie! Regularnie sprawdzaj, czy jesteś w grupie ryzyka</>
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
      content: <>Wszystkie najważniejsze informacje w jednym miejscu</>,
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
    infinite: false,
    swipe: true,
    swipeToSlide: true
  };

  const handleButtonClick = () => {
    if (activeSlide < 3) {
      carouselRef.current.slickNext();
      return;
    }

    onFinishClick();
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
