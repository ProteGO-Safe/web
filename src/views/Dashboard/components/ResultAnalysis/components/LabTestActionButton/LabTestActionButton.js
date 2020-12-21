import React from 'react';
import { Color } from '../../../../../../theme/colors';
import { ButtonWithDescription } from '../../../../../../components/ButtonWithDescription';

const LabTestActionButton = ({ onClick, description, title }) => {
  return <ButtonWithDescription color={Color.primary} description={description} onClick={onClick} title={title} />;
};

export default LabTestActionButton;
