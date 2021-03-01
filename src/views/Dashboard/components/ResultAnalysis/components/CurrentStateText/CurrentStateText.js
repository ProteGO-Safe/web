import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import * as Styled from './CurrentStateText.styled';
import { T } from '../../../../../../components/T';

const CurrentStateText = ({ currentState, t }) => (
  <Styled.Wrapper>
    <T i18nKey="result_analysis_text_2" variables={{ state: t(currentState) }} />
  </Styled.Wrapper>
);

CurrentStateText.propTypes = {
  currentState: PropTypes.string.isRequired
};

export default withTranslation()(CurrentStateText);
