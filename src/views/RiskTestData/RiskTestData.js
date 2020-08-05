import React from 'react';
import { withTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { List, ListItem, Paragraph } from '../../theme/typography';
import { Title } from './RiskTestData.styled';
import { Content, Container, View } from '../../theme/grid';
import { FontWeight } from '../../theme/fonts';

const RiskTestData = ({
  t,
  day,
  onBack,
  questions,
  idToChoiceResolver,
  isToday,
  triageLevelInformation
}) => (
  <View>
    <Header onBackClick={onBack} />
    <Content>
      <Container>
        <Title>{t('risk_test_data_text1')}</Title>
        <Paragraph>
          {isToday && t('risk_test_data_text3')} {day} r.
        </Paragraph>
        <br />
        <div className="data">
          {questions.map(question => (
            <div key={question.text} className="data__single">
              <Paragraph className="text-bold">{question.text}</Paragraph>
              <List>
                {question.items.map(item => (
                  <ListItem key={item.name}>
                    {question.type !== 'single' && <p>{item.name}</p>}
                    <p>{idToChoiceResolver(item.id, item.choices)}</p>
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
          <Paragraph fontWeight={FontWeight.Bold}>
            {t('risk_test_data_text2')}
          </Paragraph>
          <Paragraph>{triageLevelInformation}</Paragraph>
          <br />
        </div>
      </Container>
    </Content>
    <BottomNavigation />
  </View>
);

export default withTranslation()(RiskTestData);
