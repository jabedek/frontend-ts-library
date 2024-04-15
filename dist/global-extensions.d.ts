import { SymmetricalDifferences } from "./models";
export {};
declare global {
    interface Math {
        /**
         * Returns a random integer between two specified values (inclusive).
         *
         * @param minIncl - The minimum value of the range (inclusive). Default is 1.
         * @param maxIncl - The maximum value of the range (inclusive). Default is 100.
         * @returns A random integer between the `minIncl` and `maxIncl` values (inclusive).
         *          If `minIncl` is greater than `maxIncl`, they will be swaped and process continues normally.
         */
        randomInt(minIncl: number, maxIncl: number): number;
    }
    interface Array<T> {
        /**
         * Sorts numerical array from min to max.
         */
        sortNumbers(): T[];
        /**
         * Pops a random element from an array.
         *
         * @returns A randomly-removed element from the input array, or `undefined` if the input array is empty.
         */
        popRandom(): T | undefined;
        /**
         * Returns an array of found random elements. Randomness does not generate doubled matches.
         *
         * @param amount The number of random elements to choose from the array. Default is 0 (return one random element).
         * @returns An array of random elements from the input array.
         */
        random(amount: number): T[];
        /**
         * Sorts numerical array from min to max.
         */
        last(newCopy?: boolean): T | undefined;
        /**
         * Compares two arrays of objects and returns the differences between them.
         *
         * Comparing two object arrays without providing id key (and accepting `compareObjectsWithoutIdKey`) will cause function to use `JSON.stringify`.
         *
         * @param comparedArray The compared array of objects to compare with.
         * @param compareObjectsWithoutIdKey A boolean value that specifies whether to compare objects without identifiers.
         * @param objectIdKey The name of the field that serves as the identifier for each object in the arrays.
         * @returns An object with two properties: `diffBase` (an array of elements that are in `base` but not in `compared`)
         * and `diffCompared` (an array of elements that are in `compared` but not in `base`). Returns `undefined` if
         * objects without proper identifiers are not allowed to be compared.
         */
        symmetricDifference(comparedArray: T[], compareObjectsWithoutIdKey?: boolean, objectIdKey?: keyof T): SymmetricalDifferences<T> | undefined;
    }
    interface Promise<T> {
        /**
         * Executes a Promise in "fire and forget" mode, meaning without the need to await it or handle its result. Any rejection of the Promise is silently ignored, unless `printError` is set to `true`.
         * @param printError - A flag indicating whether any caught errors should be printed to the console.
         */
        fireAndForget(printError?: boolean): void;
    }
    interface LocStorage<T extends string> {
        setItem<K = T>(key: K, value: string | NonNullable<unknown> | undefined): void;
        getItem<K = T>(key: K, parse?: boolean): NonNullable<unknown> | string | undefined;
        removeItem<K = T>(key: K): void;
    }
}
