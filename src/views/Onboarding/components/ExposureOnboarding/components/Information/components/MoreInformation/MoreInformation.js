import React from 'react';
import './MoreInformation.scss';
import {
  Button,
  Email,
  GovFooter,
  Header,
  OnboardingContent
} from '../../../../../../../../components';
import { View, Container, Content } from '../../../../../../../../theme/grid';
import { Icon, Paragraph } from './MoreInformation.styled';

const MoreInformation = ({ onNext }) => {
  const buttons = [
    {
      label: 'Dalej',
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(button => (
    <Button key={button.label} onClick={button.onClick} label={button.label} />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent icon={<Icon />} title="" buttons={renderButton}>
            <Paragraph>
              <strong>ProteGO Safe</strong> to aplikacja, która pomoże nam w
              wychodzeniu z najostrzejszych obostrzeń związanych z pandemią. Im
              więcej z nas będzie z niej korzystać, tym szybciej i skuteczniej
              ograniczymy tempo i zasięg rozprzestrzeniania się koronawirusa. To
              także profesjonalna pomoc zarówno dla zdrowych, jak i zakażonych
              osób.
            </Paragraph>
            <Paragraph>
              Nasza aplikacja korzysta z API opracowanego przez Google i Apple.
            </Paragraph>
            <Paragraph>
              <strong>Jak działa?</strong>
            </Paragraph>
            <Paragraph>
              Aplikacja składa się z dwóch modułów. Pierwszy z nich to moduł
              umożliwiający samokontrolę stanu zdrowia. To swoisty „dziennik”,
              który na bieżąco pozwala weryfikować, czy i w jakiej grupie ryzyka
              zakażenia jesteśmy. To rozwiązanie oparte o wytyczne Światowej
              Organizacji Zdrowia (WHO).
            </Paragraph>

            <Paragraph>
              Drugi moduł – to skanowanie Twojego otoczenia i komunikowanie w
              przypadku ryzyka kontaktu z wirusem.
            </Paragraph>
            <Paragraph>
              Jeśli włączysz w swoim telefonie Bluetooth, aplikacja będzie
              komunikowała się z urządzeniami jej innych użytkowników.
              Spokojnie, nie będzie im przekazywała żadnych danych na Twój
              temat. Nikt nie dostanie dostępu do zawartości Twojego telefonu.
            </Paragraph>
            <Paragraph>
              Informacje o napotkanych urządzeniach nie zawierają żadnych danych
              o ich właścicielach, są anonimowe i zakodowane, a do tego
              przechowywane tylko w telefonie, przez dwa tygodnie. Później są
              usuwane.
            </Paragraph>
            <Paragraph>
              Do czego przydaje się historia takich spotkań? W momencie, kiedy
              któryś z użytkowników, z którego telefonem spotkał się Twój
              telefon, zachoruje – dostaniesz odpowiednią informację. Nie
              dowiesz się, kto zachorował. Dowiesz się za to, jak się zachować i
              co zrobić, by zadbać o swoje zdrowie.
            </Paragraph>
            <Paragraph>
              Prywatność użytkowników aplikacji jest naszym priorytetem. ProteGO
              Safe zbudowaliśmy zgodnie z m.in. wytycznymi Komisji Europejskiej.
            </Paragraph>
            <Paragraph>
              Aplikacja ProteGO Safe nie śledzi użytkowników. Od początku prac
              nad nią są w pełni otwarte i transparentne. Zdajemy sobie bowiem
              sprawę, że aby spełniła swoją rolę, musi zyskać zaufanie
              użytkowników.
            </Paragraph>
            <Paragraph>
              Aplikacja jest w pełni bezpieczna, bezpłatna i dobrowolna.
            </Paragraph>
            <Paragraph>
              Jak pokazują badania skuteczna izolacji zakażonych oraz
              wykorzystanie aplikacji typu exposure notification (tego typu
              aplikacją jest ProteGO Safe) o 44% mogą zredukować ryzyko
              rozprzestrzeniania się koronawirusa. Jest jednak jeden warunek - z
              aplikacji musi korzystać jak najwięcej osób.
            </Paragraph>
            <Paragraph>
              <strong>Wszystko w Twoich rękach.</strong>
            </Paragraph>
            <Paragraph>
              W razie pytań zapraszamy do kontaktu:{' '}
              <Email>protego@mc.gov.pl</Email>
            </Paragraph>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default MoreInformation;
