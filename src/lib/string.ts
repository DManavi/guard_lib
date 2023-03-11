import { BadRequestError } from 'error-lib';

export const isString = (val?: any): val is string => typeof val === 'string';

export const isEmptyString = (val?: any): val is string =>
  isString(val) === true && val.length === 0;

export const isNonEmptyString = (val?: any): val is string =>
  isEmptyString(val) === false;

export const ensureIsString = (val?: any, argName?: string): void => {
  if (isString(val) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is not a string.`,
    );
  }
};

export const ensureIsNonEmptyString = (val?: any, argName?: string): void => {
  if (isNonEmptyString(val) === false) {
    throw new BadRequestError(
      `${
        argName ?? 'Provided argument'
      } is either not a string or is an empty string.`,
    );
  }
};
