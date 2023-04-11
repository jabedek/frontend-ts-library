export type Primitive = string | number | boolean;
export type GenericObject = Record<string, any>;
export type ArrayElement = GenericObject | Primitive;

export type CallbackFn<R extends any = void> = (...args: any) => R;

export type TimeUnit = "seconds" | "minutes" | "hours";
export type CountryCode = "PL" | "DE";

/**
 * This is type with `optional generic type parameter with string extension` that describes a two-end direction of conversion/operation (of something) .
 *
 * Example 1: `Direction` generates type alias `"from" | "to"`.
 *
 * Example 2: `Direction<"MS">` generates type alias `"fromMS" | "toMS"`.
 */
export type Direction<E extends string = ""> = `${"from" | "to"}${E}`;

export type SymmetricalDifferences<T> = { diffBase: T[]; diffCompared: T[] };
