import React, { useRef, useState } from 'react';
import { useFormikContext } from 'formik';
import Explainer from './Explainer';

import { ExplainerItem } from './components';
import IconChat from '../../../../assets/img/explainer/chat.svg';
import IconDiary from '../../../../assets/img/explainer/diary.svg';
import IconInfo from '../../../../assets/img/explainer/info.svg';
import IconDiagnostic from '../../../../assets/img/explainer/diagnostic.svg';
import { T } from '../../../../components/T';

const ExplainerContainer = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { setFieldValue } = useFormikContext();

  const items = [
    {
      content: <T i18nKey="explainer_container_text1" />,
      icon: IconDiagnostic,
      slug: 'diagnostic_apple_google'
    },
    {
      content: <T i18nKey="explainer_container_text3" />,
      icon: IconInfo,
      slug: 'information'
    },
    {
      content: <T i18nKey="explainer_container_text4" />,
      icon: IconDiary,
      slug: 'diary'
    },
    {
      content: <T i18nKey="explainer_container_text6" />,
      icon: IconChat,
      slug: 'chat'
    }
  ].map(({ content, icon, slug }) => <ExplainerItem content={content} icon={icon} key={slug} />);

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

    setFieldValue('step', 2);
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
