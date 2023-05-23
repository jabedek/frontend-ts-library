/**
 * Takes a type T and tries to flatten its type hierarchy by combining all of its properties into a single, non-nested type.
 *
 * @see https://www.youtube.com/watch?v=2lCCKiWGlC0
 */
export type Flatten<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Represents a callback function provided as argument to another one. Takes 2 arguments - `A` & `R` - for parameters and return types respectively.
 */
export type CallbackFn<P extends Params = unknown[], R extends any = void> = (
  ...args: P
) => R;
type Params = Partial<Parameters<typeof Cb1>>;
const Cb1 = <T extends any>(...args: T[]) => {};
