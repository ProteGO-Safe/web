import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { T, ToggleButton } from '../../../../components';
import { Color } from '../../../../theme/colors';
import * as Styled from './ResultAnalysis.styled';

const ResultAnalysis = ({ color, content, currentState, handleToggleButton, icon, open, t, userName }) => (
  <Styled.ResultAnalysis color={color}>
    <Styled.Title>
      <T i18nKey="result_analysis_text_1" variables={{ userName }} />
      {icon && <Styled.CurrentStateIcon>{icon}</Styled.CurrentStateIcon>}
    </Styled.Title>

    <Styled.CurrentState>
      <Styled.CurrentStateText>
        <T i18nKey="result_analysis_text_2" variables={{ state: t(currentState) }} />
      </Styled.CurrentStateText>

      <Styled.Content open={open}>{content}</Styled.Content>
    </Styled.CurrentState>

    <Styled.ToggleButtonWrapper>
      <ToggleButton active={open} onClick={handleToggleButton} />
    </Styled.ToggleButtonWrapper>
  </Styled.ResultAnalysis>
);

ResultAnalysis.defaultProps = {
  color: Color.gradient_c2,
  icon: null
};

ResultAnalysis.propTypes = {
  color: PropTypes.string,
  content: PropTypes.node.isRequired,
  currentState: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  icon: PropTypes.object,
  open: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default withTranslation()(ResultAnalysis);
