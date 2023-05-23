/**
 * Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type.
 *
 * @see https://www.youtube.com/watch?v=2lCCKiWGlC0
 */
export type Flatten<T> = {
  [K in keyof T]: T[K];
} & {};

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

export type CallbackFn<R extends any = void, P extends unknown[] = []> = (
  ...args: P
) => R;

// const cb: CallbackFn = ()=>{}
// const cb1: CallbackFn<string> = ()=>'{}'
// const cb2: CallbackFn<string, [number,string]> = () => '{}';
// const cb3: CallbackFn<string, [number,string]> = (a:number, c:string) => '{}';
// error - const cb4: CallbackFn<string, [string]> = (a:number, c:string) => '{}';
