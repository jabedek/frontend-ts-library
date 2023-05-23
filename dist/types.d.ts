/**
 * Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type.
 *
 * @see https://www.youtube.com/watch?v=2lCCKiWGlC0
 */
export declare type Flatten<T> = {
    [K in keyof T]: T[K];
} & {};
/**
 * Does what `Flatten` sometimes can't in more complicated and nested object types.
 * `Flatten` takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type.
 *
 * @see https://www.youtube.com/watch?v=2lCCKiWGlC0
 */
export declare type DeepFlatten<T> = {
    [K in keyof T]: Flatten<T[K]>;
} & {};
/**
 * Represents a callback function provided as argument to another one. Takes 2 arguments - `A` & `R` - for parameters and return types respectively.
 */
export declare type CallbackFn<P extends Params = unknown[], R extends any = void> = (...args: P) => R;
declare type Params = Partial<Parameters<typeof Cb1>>;
declare const Cb1: <T extends unknown>(...args: T[]) => void;
export {};
