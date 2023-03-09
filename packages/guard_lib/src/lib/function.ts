import { BadRequestError } from 'error-lib';

/**
 * Check if the provided value is a function
 * @param val Provided value
 * @returns Type check result
 */
export const isFunction = (val: any): val is Function =>
  typeof val === 'function';

/**
 * Ensure the provided value is a function
 * @param val Provided value
 */
export const ensureIsFunction = (val: any) => {
  if (isFunction(val) === false) {
    throw new BadRequestError(
      `Provided value is not a function (is ${typeof val})`,
    );
  }
};
