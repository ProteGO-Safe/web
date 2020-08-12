import React from 'react';
import { withTranslation } from 'react-i18next';
import { Layout } from '../../components';
import { List, ListItem, Paragraph } from '../../theme/typography';
import { FontWeight } from '../../theme/fonts';
import { Title } from './RiskTestData.styled';

const RiskTestData = ({
  t,
  day,
  onBack,
  questions,
  idToChoiceResolver,
  isToday,
  triageLevelInformation
}) => (
  <Layout onBackClick={onBack} isNavigation>
    <Title>{t('risk_test_data_text1')}</Title>
    <Paragraph>
      {isToday && t('risk_test_data_text3')} {day} r.
    </Paragraph>
    <br />
    <div className="data">
      {questions.map(question => (
        <div key={question.text} className="data__single">
          <Paragraph className="text-bold">{t(question.text)}</Paragraph>
          <List>
            {question.items.map(item => (
              <ListItem key={t(item.name)}>
                {question.type !== 'single' && <p>{t(item.name)}</p>}
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
  </Layout>
);

export default withTranslation()(RiskTestData);
