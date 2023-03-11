import { BadRequestError } from 'error-lib';

export const defaultExcludedNumbers: Array<number> = [NaN, Infinity];

export const isNumber = (
  val?: any,
  excludedNumbers: Array<number> = defaultExcludedNumbers,
): val is number =>
  typeof val === 'number' && (excludedNumbers ?? []).includes(val) === false;

export const ensureIsNumber = (
  val?: any,
  argName?: string,
  excludedNumbers: Array<number> = defaultExcludedNumbers,
): void => {
  if (isNumber(val, excludedNumbers) === false) {
    throw new BadRequestError(
      `${
        argName ?? 'Provided argument'
      } is either not a number of is among excluded numbers.`,
    );
  }
};

export const ensureIsWithinRange = (
  val?: any,
  argName?: string,
  range: Range,
): void => {};

export const isBigInt = (val?: any): val is bigint => typeof val === 'bigint';

export const ensureIsBigInt = (val?: any, argName?: string): void => {
  if (isBigInt(val) === false) {
    throw new BadRequestError(
      `${argName ?? 'Provided argument'} is not a bit integer (bigint).`,
    );
  }
};
