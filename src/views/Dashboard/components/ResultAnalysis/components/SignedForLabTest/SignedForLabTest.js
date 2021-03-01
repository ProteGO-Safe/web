import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './SignedForLabTest.styled';
import { T } from '../../../../../../components/T';
import { ButtonWithIcon } from '../../../../../../components/ButtonWithIcon';
import { ReactComponent as Icon } from '../../../../../../assets/img/icons/icon-rejestracja.svg';
import { ButtonWithDescription } from '../../../../../../components';
import { Color } from '../../../../../../theme/colors';

const SignedForLabTest = ({ handleLabTestResult, installPath }) => (
  <>
    <Styled.Title>
      <T i18nKey="result_analysis_text_30" />
    </Styled.Title>
    <Styled.NumberList>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_31" />
      </Styled.NumberListItem>
      <Styled.NumberListItem>
        <T i18nKey="result_analysis_text_32" />
      </Styled.NumberListItem>
    </Styled.NumberList>

    <Styled.ButtonsWrapper>
      <ButtonWithIcon icon={<Icon />} onClick={handleLabTestResult} name={<T i18nKey="result_analysis_text_33" />} />
      <Styled.UrlLink href={installPath} target="_blank">
        <ButtonWithDescription
          isTopDescription
          color={Color.primary}
          description={<T i18nKey="result_analysis_text_34" />}
          onClick={() => null}
          title={<T i18nKey="result_analysis_text_35" />}
        />
      </Styled.UrlLink>
    </Styled.ButtonsWrapper>
  </>
);

SignedForLabTest.propTypes = {
  handleLabTestResult: PropTypes.func.isRequired,
  installPath: PropTypes.string.isRequired
};

export default SignedForLabTest;
