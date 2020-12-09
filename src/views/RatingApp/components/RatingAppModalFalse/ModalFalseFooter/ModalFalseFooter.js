import React from 'react';
import { Button, T } from '../../../../../components';
import * as Styled from './ModalFalseFooter.styled';

const ModalFalseFooter = ({ handleClickFalse, handleClickTrue, isPolish, path }) => {
  const feedBack = (() => {
    if (isPolish) {
      return (
        <Styled.UrlLink href={path} target="_blank" onClick={handleClickTrue}>
          <Button onClick={() => null}>
            <T i18nKey="rating_app_modal_text_5" />
          </Button>
          <Styled.Small>
            <T i18nKey="rating_app_modal_text_6" />
          </Styled.Small>
        </Styled.UrlLink>
      );
    }
    return (
      <Button onClick={handleClickTrue}>
        <T i18nKey="rating_app_modal_text_5" />
      </Button>
    );
  })();

  return (
    <Styled.ModalFalseFooter>
      {feedBack}
      <Button onClick={handleClickFalse} type="outline">
        <T i18nKey="rating_app_modal_text_7" />
      </Button>
    </Styled.ModalFalseFooter>
  );
};

export default ModalFalseFooter;
