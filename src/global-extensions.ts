import { ArrayElement, SymmetricalDifferences } from "./models";
import { randomIntFn } from "./utils/utils.index";
import { default as arrayUtilsProtected } from "./utils/for-extensions/protected/array";
import { default as promiseUtilsProtected } from "./utils/for-extensions/protected/promise";

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

  interface LocStorage<T extends string> {
    setItem<K = T>(
      key: K,
      value: string | NonNullable<unknown> | undefined
    ): void;
    getItem<K = T>(
      key: K,
      parse?: boolean
    ): NonNullable<unknown> | string | undefined;
    removeItem<K = T>(key: K): void;
  }
}

const logs: { objName: string; fnName: string }[] = [];

function logExtensionsAdded() {
  const emojiStyle =
    "background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px; font-weight: 600; height: 20px;";

  const nameStyle =
    "color: lightgreen; background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px 1px; font-weight: 600; height: 20px;";

  const nameStyle2 =
    "color: lightsalmon; background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px 1px; font-weight: 600; height: 20px;";

  const defaultStyle =
    "color: rgba(200,200,230,1); background: rgba(10,0,0,0.5); font-size: 12px; text-shadow:1px 1px 2px rgba(255,255,0,0.75); padding: 6px; height: 20px;";

  console.groupCollapsed("New functions successfully added to your project:");
  logs.forEach(({ fnName, objName }) =>
    console.log(
      `%c🎉%cAdded %c${objName}%c[${fnName}] `,
      emojiStyle,
      defaultStyle,
      nameStyle2,
      nameStyle
    )
  );
  console.log(
    `%cThat's only those added to global objects. Check out what else is new at: https://www.npmjs.com/package/frotsi`,
    defaultStyle
  );

  console.groupEnd();
}

/** Math */
if (!Math.randomInt) {
  Math.randomInt = randomIntFn;
  logs.push({ objName: "Math", fnName: "randomInt" });
}

/** Array */
if (!Array.prototype.hasOwnProperty("sortNumbers")) {
  logs.push({ objName: "Array", fnName: "sortNumbers" });
  Array.prototype.sortNumbers = function (): number[] {
    return arrayUtilsProtected.sortNumbersFn(this);
  };
}

if (!Array.prototype.hasOwnProperty("random")) {
  logs.push({ objName: "Array", fnName: "random" });
  Array.prototype.random = function <T>(amount?: number): T[] {
    return arrayUtilsProtected.randomFn(this, amount);
  };
}

if (!Array.prototype.hasOwnProperty("popRandom")) {
  logs.push({ objName: "Array", fnName: "popRandom" });
  Array.prototype.popRandom = function <T>(): T | undefined {
    return arrayUtilsProtected.popRandomFn<T>(this);
  };
}

if (!Array.prototype.hasOwnProperty("symmetricDifference")) {
  logs.push({ objName: "Array", fnName: "symmetricDifference" });
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

if (!Array.prototype.hasOwnProperty("last")) {
  logs.push({ objName: "Array", fnName: "last" });
  Array.prototype.last = function <T>(newCopy = false): T | undefined {
    return arrayUtilsProtected.lastFn<T>(this, newCopy);
  };
}

/** Promise */
if (!Promise.prototype.hasOwnProperty("fireAndForget")) {
  logs.push({ objName: "Promise", fnName: "fireAndForget" });
  Promise.prototype.fireAndForget = function (printError = false): void {
    promiseUtilsProtected.fireAndForgetFn(this, printError);
  };
}

logExtensionsAdded();
