export declare type Primitive = string | number | boolean;
export declare type GenericObject = Record<string, any>;
export declare type ArrayElement = GenericObject | Primitive;
export declare type CallbackFn<R extends any = void> = (...args: any) => R;
export declare type TimeUnit = "seconds" | "minutes" | "hours";
export declare type CountryCode = "PL" | "DE";
/**
 * This is type with `optional generic type parameter with string extension` that describes a two-end direction of conversion/operation (of something) .
 *
 * Example 1: `Direction` generates type alias `"from" | "to"`.
 *
 * Example 2: `Direction<"MS">` generates type alias `"fromMS" | "toMS"`.
 */
export declare type Direction<E extends string = ""> = `${"from" | "to"}${E}`;
export declare type SymmetricalDifferences<T> = {
    diffBase: T[];
    diffCompared: T[];
};
