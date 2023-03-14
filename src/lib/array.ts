import { BadRequestError } from 'error-lib';

/**
 * Check if provided value is an array
 * @param val Value to check
 * @returns type check result
 */
export const isArray = <T = any>(val: any): val is Array<T> =>
  Array.isArray(val);

/**
 * Check if provided value is a non-empty array
 * @param val Value to check
 * @returns Type & value check result
 */
export const isNonEmptyArray = <T = any>(val: any): val is Array<T> =>
  isArray(val) === true && val.length > 0;

/**
 * Ensure provided value is an array
 * @param val Value to check
 * @param argName argument name
 */
export const ensureIsArray = <T = any>(val: any, argName?: string): void => {
  if (isArray<T>(val) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} must be an array.`,
    );
  }
};

/**
 * Ensure provided value is a non-empty array
 * @param arg value to check
 * @param argName argument name
 */
export const ensureIsNonEmptyArray = (arg: any, argName?: string): void => {
  if (isNonEmptyArray(arg) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} is either not an array or is empty.`,
    );
  }
};
