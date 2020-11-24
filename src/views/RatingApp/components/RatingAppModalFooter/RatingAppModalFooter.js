import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../../../../components/T';
import * as Styled from './RatingAppModalFooter.styled';

const RatingAppModalFooter = ({ handleClickTrue, handleClickFalse }) => (
  <Styled.RatingAppModalFooter>
    <Styled.Button onClick={handleClickFalse}>
      <T i18nKey="no" />
    </Styled.Button>
    <Styled.Button onClick={handleClickTrue}>
      <T i18nKey="yes" />
    </Styled.Button>
  </Styled.RatingAppModalFooter>
);

RatingAppModalFooter.propTypes = {
  handleClickTrue: PropTypes.func.isRequired,
  handleClickFalse: PropTypes.func.isRequired
};

export default RatingAppModalFooter;
