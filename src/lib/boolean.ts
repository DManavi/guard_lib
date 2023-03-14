import { ensureTypeIs } from './general';

/**
 * Check if provided value is a boolean
 * @param val Value to check
 * @returns type check result
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

/**
 * Ensure provided value is a boolean
 * @param val Value to check
 * @param argName Argument name
 */
export const ensureIsBoolean = (val: any, argName?: string): void =>
  ensureTypeIs(val, 'boolean', argName);
