import React from 'react';
import { Layout, T } from '../../components';
import { List, ListItem, Paragraph } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';
import { Title } from './RiskTestData.styled';

const RiskTestData = ({ t, day, onBack, questions, idToChoiceResolver, isToday, triageLevelInformation }) => (
  <Layout onBackClick={onBack} isNavigation>
    <Title>
      <T i18nKey="risk_test_data_text1" />
    </Title>
    <Paragraph>
      {isToday && <T i18nKey="risk_test_data_text3" />} {day} r.
    </Paragraph>
    <br />
    <div className="data">
      {questions.map(question => (
        <div key={question.text} className="data__single">
          <Paragraph className="text-bold">
            <T i18nKey={question.text} />
          </Paragraph>
          <List>
            {question.items.map(item => (
              <ListItem key={<T i18nKey={item.name} />}>
                {question.type !== 'single' && (
                  <p>
                    <T i18nKey={item.name} />
                  </p>
                )}
                <p>{idToChoiceResolver(item.id, item.choices)}</p>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
      <Paragraph fontWeight={FontWeight.Bold}>
        <T i18nKey="risk_test_data_text2" />
      </Paragraph>
      <Paragraph>{triageLevelInformation}</Paragraph>
      <br />
    </div>
  </Layout>
);

export default RiskTestData;
