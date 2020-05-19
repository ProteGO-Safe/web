import React, { useRef, useState } from 'react';
import Explainer from './Explainer';
import { ExplainerItem } from './components';

import IconChat from '../../../../assets/img/explainer/chat.svg';
import IconDiary from '../../../../assets/img/explainer/diary.svg';
import IconInfo from '../../../../assets/img/explainer/info.svg';
import IconDiagnostic from '../../../../assets/img/explainer/diagnostic.svg';

const ExplainerContainer = ({ onFinishClick }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const items = [
    {
      content: (
        <>
          <strong>Nowość w aplikacji:</strong> powiadomienia o możliwym
          kontakcie z koronawirusem.
        </>
      ),
      icon: IconDiagnostic,
      slug: 'diagnostic_apple_google'
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
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideIndex(newIndex);
    },
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
      index={currentSlideIndex}
      carouselRef={carouselRef}
      items={items}
      onClick={handleButtonClick}
      settings={settings}
    />
  );
};

export default ExplainerContainer;
