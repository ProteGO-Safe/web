import React from 'react';
import { TYPE_TEST_BORDER_BOX } from '../../constants';
import { DATA } from './TestBorderBox.helpers';
import TestBorderBox from './TestBorderBox';

const TestBorderBoxContainer = ({ type }) => {
  switch (type) {
    case TYPE_TEST_BORDER_BOX.TEST_QUALIFICATION: {
      return <TestBorderBox data={DATA.TEST_QUALIFICATION} />;
    }
    case TYPE_TEST_BORDER_BOX.TEST_PICK_UP: {
      return <TestBorderBox data={DATA.TEST_PICK_UP} />;
    }
    case TYPE_TEST_BORDER_BOX.TEST_VERIFICATION: {
      return <TestBorderBox data={DATA.TEST_VERIFICATION} />;
    }
    case TYPE_TEST_BORDER_BOX.TEST_APPROVE: {
      return <TestBorderBox data={DATA.TEST_APPROVE} />;
    }
    default: {
      return <TestBorderBox data={DATA.TEST_QUALIFICATION} />;
    }
  }
};

export default TestBorderBoxContainer;
