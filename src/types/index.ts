/**
 * Number range
 */
export type NumberRange<T extends number | bigint> = {
  /**
   * Range start
   */
  start: T;

  /**
   * Range end
   */
  end: T;

  /**
   * Is inclusive range
   */
  inclusive?: boolean;
};
