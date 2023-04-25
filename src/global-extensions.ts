import { ArrayElement, CountryCode, SymmetricalDifferences } from "./models";
import {
  randomIntFn,
  normalizeCountryCharsFn,
  longestSubstringFn,
  roundPreciseFn,
} from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";
import "@total-typescript/ts-reset";

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
    roundPrecise(
      rationalNumber: number,
      dir: "up" | "down",
      decimalPrecision: number
    ): number;
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
     * @param amount The number of random elements to choose from the array. Default is 0 (return one random element).
     * @returns An array of random elements from the input array.
     */
    random(amount: number): T[];
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
    symmetricDifference(
      comparedArray: T[],
      compareObjectsWithoutIdKey?: boolean,
      objectIdKey?: keyof T
    ): SymmetricalDifferences<T> | undefined;
  }

  interface Promise<T> {
    /**
     * Executes a Promise in "fire and forget" mode, meaning without the need to await it or handle its result. Any rejection of the Promise is silently ignored, unless `printError` is set to `true`.
     * @param printError - A flag indicating whether any caught errors should be printed to the console.
     */
    fireAndForget(printError?: boolean): void;
  }
}

function logExtensionAdded(objName: string, fnName: string) {
  const emojiStyle =
    "background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px; font-weight: 600; height: 24px;";

  const nameStyle =
    "color: lightgreen; background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px 3.2px; font-weight: 600; height: 24px;";

  const defaultStyle =
    "color: rgba(200,200,230,1); background: rgba(10,0,0,0.5); font-size: 13px; padding: 6px 3.2px; height: 24px;";
  console.log(
    `%c🎉%c${fnName}%cwas successfully set as new property to%c${objName}%c🎉`,
    emojiStyle,
    nameStyle,
    defaultStyle,
    nameStyle,
    emojiStyle
  );
}

/** Math */
if (!Math.randomInt) {
  Math.randomInt = randomIntFn;
  logExtensionAdded("Math", "randomInt");
}

if (!Math.roundPrecise) {
  Math.roundPrecise = roundPreciseFn;
  logExtensionAdded("Math", "roundPrecise");
}

/** String */
if (!String.prototype.hasOwnProperty("normalizeCountryChars")) {
  logExtensionAdded("String", "normalizeCountryChars");
  String.prototype.normalizeCountryChars = function (
    countryCode: CountryCode
  ): string {
    return normalizeCountryCharsFn(this.toString(), countryCode);
  };
}

if (!String.prototype.hasOwnProperty("longestSubstring")) {
  logExtensionAdded("String", "longestSubstring");
  String.prototype.longestSubstring = async function (): Promise<string> {
    return longestSubstringFn(this.toString());
  };
}

/** Array */
if (!Array.prototype.hasOwnProperty("sortNumbers")) {
  logExtensionAdded("Array", "sortNumbers");
  Array.prototype.sortNumbers = function (): number[] {
    return arrayUtilsProtected.sortNumbersFn(this);
  };
}

if (!Array.prototype.hasOwnProperty("random")) {
  logExtensionAdded("Array", "random");
  Array.prototype.random = function <T>(amount?: number): T[] {
    return arrayUtilsProtected.randomFn(this, amount);
  };
}

if (!Array.prototype.hasOwnProperty("popRandom")) {
  logExtensionAdded("Array", "popRandom");
  Array.prototype.popRandom = function <T>(): T | undefined {
    return arrayUtilsProtected.popRandomFn<T>(this);
  };
}

if (!Array.prototype.hasOwnProperty("symmetricDifference")) {
  logExtensionAdded("Array", "symmetricDifference");
  Array.prototype.symmetricDifference = function <T extends ArrayElement>(
    comparedArray: T[],
    compareObjectsWithoutIdKey?: boolean,
    objectIdKey?: keyof T
  ): { diffBase: T[]; diffCompared: T[] } | undefined {
    return arrayUtilsProtected.symmetricDifferenceFn<T>(
      this as T[],
      comparedArray,
      compareObjectsWithoutIdKey,
      objectIdKey
    );
  };
}

/** Promise */
if (!Promise.prototype.hasOwnProperty("fireAndForget")) {
  logExtensionAdded("Promise", "fireAndForget");
  Promise.prototype.fireAndForget = function (printError = false): void {
    promiseUtilsProtected.fireAndForgetFn(this, printError);
  };
}
