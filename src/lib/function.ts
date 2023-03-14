import { ensureTypeIs } from './general';

/**
 * Check if the provided value is a function
 * @param val Value to check
 * @returns Type check result
 */
export const isFunction = (val: any): val is Function =>
  typeof val === 'function';

/**
 * Ensure the provided value is a function
 * @param val Value to check
 * @param argName Argument name
 */
export const ensureIsFunction = (val: any, argName?: string) =>
  ensureTypeIs(val, 'function', argName);
