import { BadRequestError } from 'error-lib';

/**
 * Check if the provided value is undefined
 * @param val value to check
 * @returns type check result
 */
const isUndefined = (val: any): val is undefined => typeof val === 'undefined';

/**
 * Check if the provided value is null
 * @param val value to check
 * @returns value check result
 */
const isNull = (val: any): boolean => val === null;

/**
 * Check if the provided value is null or undefined
 * @param val value to check
 * @returns Type & value check result
 */
export const isNullOrUndefined = (val: any): boolean =>
  isUndefined(val) || isNull(val);

/**
 * Ensure the provided value is not undefined
 * @param val value to check
 * @param argName Argument name
 */
export const ensureIsNotUndefined = (val: any, argName?: string): void =>
  ensureTypeIsNot(val, 'undefined', argName);

/**
 * Ensure the provided value is not null
 * @param val value to check
 * @param argName Argument name
 */
export const ensureIsNotNull = (val: any, argName?: string): void => {
  if (isNull(val) === true) {
    throw new BadRequestError(`${argName ?? 'Provided value'} is null.`);
  }
};

/**
 * Ensure the provided value is not null or undefined
 * @param val value to check
 * @param argName Argument name
 */
export const ensureIsNotNullOrUndefined = (
  val: any,
  argName?: string,
): void => {
  ensureIsNotUndefined(val, argName);
  ensureIsNotNull(val, argName);
};

/**
 * Ensure value type is correct
 * @param val Value to check
 * @param expectedType Expected type
 * @param argName Argument name
 */
export const ensureTypeIs = (
  val: any,
  expectedType: string,
  argName?: string,
): void => {
  // get current type
  const currentType = typeof val;

  // check against the expected type
  if (currentType !== expectedType) {
    throw new BadRequestError(
      `${
        argName ?? 'Provided value'
      } type is a/an '${currentType}' while '${expectedType}' is expected.`,
    );
  }
};

/**
 * Ensure provided value type is not unexpected
 * @param val Value to check
 * @param unexpectedType Unexpected type
 * @param argName Argument name
 */
export const ensureTypeIsNot = (
  val: any,
  unexpectedType: string,
  argName?: string,
): void => {
  // get current type
  const currentType = typeof val;

  // check against the expected type
  if (currentType === unexpectedType) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} should not be a/an '${currentType}'.`,
    );
  }
};
