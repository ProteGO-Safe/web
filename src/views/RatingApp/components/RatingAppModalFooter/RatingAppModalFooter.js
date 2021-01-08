import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../../../../components/T';
import * as Styled from './RatingAppModalFooter.styled';

const RatingAppModalFooter = ({ handleClickYes, handleClickNo }) => (
  <Styled.RatingAppModalFooter>
    <Styled.Button onClick={handleClickNo}>
      <T i18nKey="no" />
    </Styled.Button>
    <Styled.Button onClick={handleClickYes}>
      <T i18nKey="yes" />
    </Styled.Button>
  </Styled.RatingAppModalFooter>
);

RatingAppModalFooter.propTypes = {
  handleClickYes: PropTypes.func.isRequired,
  handleClickNo: PropTypes.func.isRequired
};

export default RatingAppModalFooter;
