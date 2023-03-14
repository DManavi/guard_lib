import { BadRequestError } from 'error-lib';

import { ensureTypeIs } from './general';

/**
 * Check if the provided value is string
 * @param val value to check
 * @returns type check result
 */
export const isString = (val: any): val is string => typeof val === 'string';

/**
 * Check if the provided value is an empty string
 * @param val Value to check
 * @returns type check result
 */
export const isEmptyString = (val: any): val is string =>
  isString(val) === true && val.length === 0;

/**
 * Check if the provided value is a non-empty string
 * @param val Value to check
 * @returns type check result
 */
export const isNonEmptyString = (val?: any): val is string =>
  isEmptyString(val) === false;

/**
 * Ensure the provided value is a string
 * @param val Value to check
 * @param argName Argument name
 */
export const ensureIsString = (val: any, argName?: string): void =>
  ensureTypeIs(val, 'string', argName);

/**
 * Ensure the provided value is a non-empty string
 * @param val Value to check
 * @param argName Argument name
 */
export const ensureIsNonEmptyString = (val: any, argName?: string): void => {
  // type check
  ensureIsString(val, argName);

  // emptiness check
  if (isNonEmptyString(val) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} is an empty string.`,
    );
  }
};
