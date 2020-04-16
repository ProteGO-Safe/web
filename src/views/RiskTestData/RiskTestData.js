import React from 'react';

import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { List, ListItem, Paragraph, Title } from '../../theme/typography';
import { Content, Container, View } from '../../theme/grid';
import { FontWeight } from '../../theme/fonts';

const RiskTestData = ({
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
        <Title style={{ marginBottom: 0 }}>Test oceny ryzyka</Title>
        <Paragraph>
          {isToday && 'DZIŚ'} {day} r.
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
          <Paragraph fontWeight={FontWeight.Bold}>Przyznana grupa</Paragraph>
          <Paragraph>{triageLevelInformation}</Paragraph>
          <br />
        </div>
      </Container>
    </Content>
    <BottomNavigation />
  </View>
);

export default RiskTestData;
