/**
 * Takes a type T and flattens its type hierarchy by combining all of its properties into a single, non-nested type.
 *
 * No need to lookup a chain of interfaces and guess what remains.
 *
 * @see https://www.youtube.com/watch?v=2lCCKiWGlC0
 */
export type Flatten<T> = {
  [K in keyof T]: T[K];
} & {};

export type CallbackFn<R extends any = void> = (...args: any) => R;
export type TimeUnit = "seconds" | "minutes" | "hours";
export type CountryCode = "PL" | "DE";
export type ArrayElement = Record<string, any> | string | number | boolean;

/**
 * This is type with `optional generic type parameter with string extension` that describes a two-end direction of conversion/operation (of something).
 *
 * Example 1: `Direction` generates type alias `"from" | "to"`.
 *
 * Example 2: `Direction<"MS">` generates type alias `"fromMS" | "toMS"`.
 */
export type Direction<E extends string = ""> = `${"from" | "to"}${E}`;

export interface SymmetricalDifferences<T> {
  diffBase: T[];
  diffCompared: T[];
}
