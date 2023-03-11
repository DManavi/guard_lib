/**
 * Function guard
 */
export type Guard<T extends (...args: Array<any>) => ReturnType<T>> = (
  ...args: Parameters<T>
) => void;

/**
 * Guarded function
 */
export type GuardFactory = <T extends (...args: Array<any>) => ReturnType<T>>(
  fn: T,
  ...guards: Array<Guard<T>>
) => T;

export type Range = {
  /**
   * Range start
   */
  start: number;

  /**
   * Range end
   */
  end: number;

  /**
   * Is inclusive range
   */
  inclusive?: boolean;
};
