import { CountryCode } from "./models";
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
        /**
         * Rounds a rational number to a specified decimal precision, either up or down.
         *
         * @param rationalNumber The rational number to round.
         * @param dir The rounding direction. "up" for rounding up, "down" for rounding down.
         * @param decimalPrecision The number of decimal places to round to. Default is 0.
         * @returns The rounded number.
         */
        roundPrecise(rationalNumber: number, dir: "up" | "down", decimalPrecision: number): number;
    }
    interface String {
        /**
         * Returns the string with the specified country's characters normalized.
         * @param {CountryCode} countryCode - The country code of the text to be normalized.
         * @returns The normalized string.
         */
        normalizeCountryChars(countryCode: CountryCode): string;
        /**
         * Finds the longest substring of a given string without repeating characters.
         * @returns {Promise<string>} - A Promise that resolves to a string representing the longest substring without repeating characters.
         */
        longestSubstring(): Promise<string>;
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
         * @param arr The array to choose random elements from.
         * @param amount The number of random elements to choose from the array. Default is 0 (return one random element).
         * @returns An array of random elements from the input array.
         */
        random(amount: number): T[];
        /**
         * Compares two arrays of objects and returns the differences between them.
         *
         * If comparing two object arrays without providing id key (and accepting `compareObjectsWithoutIdKey`) will cause function to use `JSON.stringify`.
         *
         * @param compared The compared array of objects to compare with.
         * @param compareObjectsWithoutIdKey A boolean value that specifies whether to compare objects without identifiers.
         * @param objectIdKey The name of the field that serves as the identifier for each object in the arrays.
         * @returns An object with two properties: `diffBase` (an array of elements that are in `base` but not in `compared`)
         * and `diffCompared` (an array of elements that are in `compared` but not in `base`). Returns `undefined` if
         * objects without proper identifiers are not allowed to be compared.
         */
        symmetricDifference(compared: T[], compareObjectsWithoutIdKey?: boolean, objectIdKey?: keyof T): {
            diffBase: T[];
            diffCompared: T[];
        } | undefined;
    }
    interface Promise<T> {
        /**
         * Executes a Promise in "fire and forget" mode, meaning without the need to await it or handle its result. Any rejection of the Promise is silently ignored, unless `printError` is set to `true`.
         * @param printError - A flag indicating whether any caught errors should be printed to the console.
         */
        fireAndForget(printError?: boolean): void;
    }
}
