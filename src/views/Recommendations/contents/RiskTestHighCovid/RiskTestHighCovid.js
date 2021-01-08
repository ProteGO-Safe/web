import React from 'react';
import { Collapse, T } from '../../../../components';
import { Color } from '../../../../theme/colors';
import { BlockBorder, MoreInfo } from '../../components';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/risk-test-recommendation-high.svg';

const RiskTestHighCovid = ({ collapseItems }) => {
  const renderItems = collapseItems.map((item, key) => (
    <Collapse key={key} title={<T i18nKey={item.title} />}>
      <T i18nKey={item.content} />
    </Collapse>
  ));

  return (
    <Styled.Wrapper>
      <Styled.MainTitle>
        <T i18nKey="recommendations_text_24" variables={{ color: Color.red }} />
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

      <Styled.Description noPadding>
        <T i18nKey="recommendations_text_26" />
      </Styled.Description>

      <BlockBorder title={<T i18nKey="recommendations_text_25" />} />

      <Styled.CollapseWrapper>{renderItems}</Styled.CollapseWrapper>

      <MoreInfo />
    </Styled.Wrapper>
  );
};

export default RiskTestHighCovid;
