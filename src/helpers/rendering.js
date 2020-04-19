import { always, complement, equals, ifElse, isNil } from 'ramda';

export const renderWhen = (pred, fn, otherwise = always(null)) =>
  ifElse(pred, fn, otherwise);

export const renderWhenNotNil = fn => renderWhen(complement(isNil), fn);

export const renderWhenTrue = fn => renderWhen(equals(true), fn);

export const styleWhenTrue = (pred, style) => props =>
  renderWhen(equals(true), always(style))(pred(props));

export const styleIfElse = (pred, styleIfTrue, styleIfFalse) => props => {
  return renderWhen(
    equals(true),
    always(styleIfTrue),
    always(styleIfFalse)
  )(pred(props));
};
