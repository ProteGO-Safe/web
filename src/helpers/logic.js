import { complement, equals } from 'ramda';

export const notEquals = complement(equals);
