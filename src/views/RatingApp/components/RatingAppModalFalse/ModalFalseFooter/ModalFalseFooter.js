import React from 'react';
import { Button, T } from '../../../../../components';
import * as Styled from './ModalFalseFooter.styled';

const ModalFalseFooter = ({
  handleClickFalse,
  handleClickTrue,
  type,
  path
}) => {
  const renderSwitch = param => {
    switch (param) {
      case 'route':
        return (
          <Button onClick={handleClickTrue}>
            <T i18nKey="rating_app_modal_text_5" />
          </Button>
        );
      case 'link':
        return (
          <Styled.UrlLink href={path} target="_blank">
            <Button onClick={() => null}>
              <T i18nKey="rating_app_modal_text_5" />
            </Button>
            <Styled.Small>
              <T i18nKey="rating_app_modal_text_6" />
            </Styled.Small>
          </Styled.UrlLink>
        );
      default:
        return null;
    }
  };

  return (
    <Styled.ModalFalseFooter>
      {renderSwitch(type)}

      <Button onClick={handleClickFalse} type="outline">
        <T i18nKey="rating_app_modal_text_7" />
      </Button>
    </Styled.ModalFalseFooter>
  );
};

export default ModalFalseFooter;
