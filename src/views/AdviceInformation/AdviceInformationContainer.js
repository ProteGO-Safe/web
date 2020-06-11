import React from 'react';
import { Container, Content, View } from '../../theme/grid';
import { Header, BottomNavigation } from '../../components';
import AdviceInformation from './AdviceInformation';
import IconAdviceHome from '../../assets/img/icons/zostan-w-domu.svg';
import IconAdvicePhone from '../../assets/img/icons/seniorzy.svg';
import IconAdviceCountry from '../../assets/img/icons/przyjazd.svg';
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';
import advicesData from './advices.json';

const AdviceInformationContainer = () => {
  const tipsStatic = [
    {
      icon: IconAdviceHome,
      text: 'Zostań w domu.'
    },
    {
      icon: IconAdvicePhone,
      text:
        'Zadzwoń do rodziców i krewnych w podeszłym wieku. Pomóż im korzystać z ProteGo Safe na ich telefonie. Zrób dla nich zakupy. Unikaj kontaktu osobistego.'
    },
    {
      icon: IconAdviceCountry,
      text:
        'Jeśli przyjechałeś/-aś z zagranicy – skontaktuj się z sanepidem i poddaj obowiązkowej 14-dniowej kwarantannie.'
    },
    {
      icon: IconAdviceNote,
      text:
        'Regularnie uzupełniaj zakładkę [url]MÓJ DZIENNIK ZDROWIA|/daily[url]: zapisuj w aplikacji objawy i temperaturę ciała.'
    }
  ];

  if (!advicesData) {
    return null;
  }

  const { advices, watermark } = advicesData;
  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height tips">
          <AdviceInformation
            title="Porady"
            tips={tipsStatic}
            collapse={advices}
            watermark={watermark}
          />
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

export default AdviceInformationContainer;
