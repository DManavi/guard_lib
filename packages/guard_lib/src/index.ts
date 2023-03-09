import { BadRequestError } from 'error-lib';

import { Guard, GuardFactory } from './types';

// type TypedHeadTailArray<T = any, U = any> = [T, ...any, U];

// export type GuardConstructor<
//   T extends (...args: Array<any>) => ReturnType<T> = any
// > = (fn: Func<T>, ...guards: Array<Func<T>>) => Func<T>;

// const guard = <T extends (...args: Array<any>) => ReturnType<T>>(
//   fn: Func<T>,
//   ...guards: Array<Func<T>>
// ): Func<T> => {

// };

// const guardedDivide = guard<typeof guard>(divide, divideByZero);

const functionTypeCheckGuard: Guard<GuardFactory> = (fn, ...guards) => {
  // ensure provided fn is a function
  if (typeof fn !== 'function') {
    throw new BadRequestError(
      `Provided function (fn parameter) must be a function.`,
    );
  }

  // ensure all the guards are function
  (guards ?? []).forEach((_, i) => {
    if (typeof _ !== 'function') {
      throw new BadRequestError(`Provided guard #${i + 1} is not a function.`);
    }
  });
};

const guard: GuardFactory = <T extends (...args: Array<any>) => ReturnType<T>>(
  fn: T,
  ...guards: Array<T>
): T => {
  // function type check guard
  functionTypeCheckGuard(fn, ...guards);

  return (...args: Parameters<T>): ReturnType<T> => {};
};

// const divide = (a: number, b: number) => a / b;

// const divideByZeroGuard: Guard<typeof divide> = (a, b) => {
//   if (b === 0) {
//     throw new Error('Cannot divide by zero');
//   }
// };

// const guardedDivide = guard<typeof divide>(divide, divideByZeroGuard);

// const r = guardedDivide(5, 2);
