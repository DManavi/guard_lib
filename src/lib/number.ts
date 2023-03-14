import { BadRequestError } from 'error-lib';

import { NumberRange } from '../types';
import { ensureTypeIs } from './general';

/**
 * List of default excluded numbers
 */
export const defaultExcludedNumbers: Array<number> = [NaN, Infinity];

/**
 * Check if the provided value is a number
 * @param val value to check
 * @param excludedNumbers List of numbers to to be considered as valid number (e.g. NaN or Infinity)
 * @returns type check result
 */
export const isNumber = (
  val?: any,
  excludedNumbers: Array<number> = defaultExcludedNumbers,
): val is number =>
  typeof val === 'number' && (excludedNumbers ?? []).includes(val) === false;

/**
 * Ensure the provided value is a number
 * @param val Value to check
 * @param argName Argument name
 * @param excludedNumbers List of numbers to to be considered as valid number (e.g. NaN or Infinity)
 */
export const ensureIsNumber = (
  val: any,
  argName?: string,
  excludedNumbers: Array<number> = defaultExcludedNumbers,
): void => {
  // type check
  ensureTypeIs(val, 'number', argName);

  // exclusion check
  const isExcluded = (excludedNumbers ?? []).includes(val);
  if (isExcluded === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} is not an acceptable number (excluded).`,
    );
  }
};

/**
 * Ensure the provided number is within a range
 * @param val Value to check
 * @param range Valid range
 * @param argName Argument name
 */
export const ensureIsWithinRange = <T extends number | bigint = number>(
  val: T,
  range: NumberRange<T>,
  argName?: string,
): void => {
  // guard against bad user input
  ensureIsNumber(range.start, 'range.start');
  ensureIsNumber(range.end, 'range.end');

  // boundary check
  const isInclusive = range.inclusive ?? false;

  const lowerBoundCheck =
    isInclusive === true ? val >= range.start : val > range.start;
  const upperBoundCheck =
    isInclusive === true ? val <= range.end : val < range.end;
  const isWithinRange = lowerBoundCheck && upperBoundCheck;

  if (isWithinRange === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided value'} (${val}) is out of the requested range (${
        range.start
      }-${range.end}${isInclusive === true ? ' inclusive' : ''}).`,
    );
  }
};

/**
 * Check if the provided value is a big integer
 * @param val value to check
 * @returns type check result
 */
export const isBigInt = (val?: any): val is bigint => typeof val === 'bigint';

/**
 * Ensure the provided value is a big integer
 * @param val Value to check
 * @param argName Argument name
 */
export const ensureIsBigInt = (val: any, argName?: string): void =>
  ensureTypeIs(val, 'bigint', argName);
