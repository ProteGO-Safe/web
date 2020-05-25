import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Content, View } from '../../theme/grid';
import { Header, BottomNavigation } from '../../components';
import AdviceInformation from './AdviceInformation';
import IconAdviceHome from '../../assets/img/icons/zostan-w-domu.svg';
import IconAdvicePhone from '../../assets/img/icons/seniorzy.svg';
import IconAdviceCountry from '../../assets/img/icons/przyjazd.svg';
import IconAdviceNote from '../../assets/img/icons/dziennik.svg';
import { fetchAdvices, clearError } from '../../store/actions/externalData';
import useLoaderContext from '../../hooks/useLoaderContext';
import Routes from '../../routes';

const AdviceInformationContainer = () => {
  const history = useHistory();
  const { advicesData, isFetching, error } = useSelector(
    state => state.externalData
  );
  const { setLoader } = useLoaderContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetching) {
      setLoader(true);
      return;
    }
    setLoader(false);
  }, [isFetching, setLoader]);

  useEffect(() => {
    if (!advicesData && !error) {
      dispatch(fetchAdvices());
    }
  }, [advicesData, error, dispatch]);

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

  if (error) {
    dispatch(clearError());
    history.push(Routes.Error);
  }

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
