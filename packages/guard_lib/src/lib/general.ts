import { BadRequestError } from 'error-lib';

/**
 * Check if the provided argument is undefined
 * @param arg argument to check
 * @returns type check result
 */
const isUndefined = (arg?: any): arg is undefined => typeof arg === 'undefined';

/**
 * Check if the provided argument is null
 * @param arg argument to check
 * @returns argument check result
 */
const isNull = (arg?: any): boolean => arg === null;

/**
 * Check if the provided argument is null or undefined
 * @param arg argument to check
 * @returns Type & argument check result
 */
export const isNullOrUndefined = (arg?: any): boolean =>
  isUndefined(arg) || isNull(arg);

/**
 * Ensure the provided argument is not undefined
 * @param arg argument to check
 * @param argName Argument name
 */
export const ensureIsNotUndefined = (arg?: any, argName?: string): void => {
  if (isUndefined(arg) === true) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is undefined.`,
    );
  }
};

/**
 * Ensure the provided argument is not null
 * @param arg argument to check
 * @param argName Argument name
 */
export const ensureIsNotNull = (arg?: any, argName?: string): void => {
  if (isNull(arg) === true) {
    throw new BadRequestError(`${argName ?? 'Provided argument'} is null.`);
  }
};

/**
 * Ensure the provided argument is not null or undefined
 * @param arg argument to check
 */
export const ensureIsNotNullOrUndefined = (arg?: any, argName?: string) => {
  ensureIsNotUndefined(arg, argName);
  ensureIsNotNull(arg, argName);
};
