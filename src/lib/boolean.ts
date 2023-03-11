import { BadRequestError } from 'error-lib';

export const isBoolean = (val?: any): val is boolean =>
  typeof val === 'boolean';

export const ensureIsBoolean = (val?: any, argName?: string): void => {
  if (isBoolean(val) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is not a boolean.`,
    );
  }
};
