import React from 'react';
import { Color } from '../../../../../../theme/colors';
import { ButtonWithDescription } from '../../../../../../components/ButtonWithDescription';
import { T } from '../../../../../../components/T';
import * as Styled from './InstallKwarantannaActionButton.styled';

const InstallKwarantannaActionButton = ({ path }) => {
  return (
    <Styled.UrlLink href={path} target="_blank">
      <ButtonWithDescription
        isTopDescription
        color={Color.primary}
        description={<T i18nKey="result_analysis_text_34" />}
        onClick={() => null}
        title={<T i18nKey="result_analysis_text_35" />}
      />
    </Styled.UrlLink>
  );
};

export default InstallKwarantannaActionButton;
