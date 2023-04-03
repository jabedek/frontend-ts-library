import { CountryCode } from "./models";
export {};

declare global {
  interface Math {
    randomInt(minIncl: number, maxIncl: number): number;
    nearestFloor(rationalNumber: number, decimalPrecision: number): number;
    nearestCeil(rationalNumber: number, decimalPrecision: number): number;
  }

  interface String {
    normalizeCountryChars(countryCode: CountryCode): string;
    longestSubstring(): Promise<string>;
  }

  interface Array<T> {
    sortNumbers(): T[];
    random(): T | undefined;
    differenceDistinctBetween(
      compared: T[],
      compareObjectsWithoutIdKey?: boolean,
      objectIdKey?: keyof T
    ): { diffBase: T[]; diffCompared: T[] } | undefined;
  }

  interface Promise<T> {
    fireAndForget(printError?: boolean): void;
  }
}
