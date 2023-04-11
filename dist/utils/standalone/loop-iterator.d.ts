/**
 * Creates an iterable object that iterates `amount` number of times.
 * @param amount The number of times to iterate over the values.
 * @example loop(5).forEach((index) => console.log(index))
 */
export declare const loop: (amount: number) => {
    [Symbol.iterator](): Generator<number, void, unknown>;
    forEach(cb: (index: number) => void): void;
};
