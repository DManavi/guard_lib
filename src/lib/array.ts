import { BadRequestError } from 'error-lib';

/**
 * Check if provided argument is an array
 * @param arg Argument to check
 * @returns type check result
 */
export const isArray = <T = any>(arg?: any): arg is Array<T> =>
  Array.isArray(arg);

/**
 * Check if provided argument is a non-empty array
 * @param arg Argument to check
 * @returns Type & argument check result
 */
export const isNonEmptyArray = <T = any>(arg: any): arg is Array<T> =>
  isArray(arg) === true && arg.length > 0;

/**
 * Ensure provided argument is an array
 * @param arg Argument to check
 * @param argName Argument name
 */
export const ensureIsArray = <T = any>(arg?: any, argName?: string): void => {
  if (isArray<T>(arg) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is not an array.`,
    );
  }
};

/**
 * Ensure provided argument is a non-empty array
 * @param arg Argument to check
 * @param argName Argument name
 */
export const ensureIsNonEmptyArray = (arg: any, argName?: string): void => {
  if (isNonEmptyArray(arg) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is either not an array or is empty.`,
    );
  }
};
