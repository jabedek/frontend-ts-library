import { CountryCode, SymmetricalDifferences } from "./models";

export {};

declare global {
  interface Math {
    randomInt(minIncl: number, maxIncl: number): number;
    roundPrecise(
      rationalNumber: number,
      dir: "up" | "down",
      decimalPrecision: number
    ): number;
  }

  interface String {
    normalizeCountryChars(countryCode: CountryCode): string;
    longestSubstring(): Promise<string>;
  }

  interface Array<T> {
    sortNumbers(): T[];
    random(amount: number): T[];
    popRandom(): T | undefined;
    symmetricDifference(
      comparedArray: T[],
      compareObjectsWithoutIdKey?: boolean,
      objectIdKey?: keyof T
    ): SymmetricalDifferences<T> | undefined;
  }

  interface Promise<T> {
    fireAndForget(printError?: boolean): void;
  }
}
