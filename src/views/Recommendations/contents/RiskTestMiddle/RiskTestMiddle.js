import React from 'react';
import { MoreInfo } from '../../components';
import { Collapse, T } from '../../../../components';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/risk-test-recommendation-middle.svg';

const RiskTestMiddle = ({ items }) => {
  const renderItems = items.map((item, key) => (
    <Collapse key={key} title={<T i18nKey={item.title} />}>
      <T i18nKey={item.content} />
    </Collapse>
  ));

  return (
    <Styled.Wrapper>
      <Styled.MainTitle>
        <T i18nKey="recommendations_text_1" />
      </Styled.MainTitle>

      <Styled.Info>
        <Styled.Text>
          <T i18nKey="recommendations_text_2" />
        </Styled.Text>

        <Styled.Image>
          <Icon />
        </Styled.Image>
      </Styled.Info>

      <Styled.Title>
        <T i18nKey="recommendations_text_3" />
      </Styled.Title>

      <Styled.Description>
        <T i18nKey="recommendations_text_7" />
      </Styled.Description>

      <Styled.CollapseWrapper>{renderItems}</Styled.CollapseWrapper>

      <MoreInfo />
    </Styled.Wrapper>
  );
};

export default RiskTestMiddle;
