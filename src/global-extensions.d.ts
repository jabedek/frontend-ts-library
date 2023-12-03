import { SymmetricalDifferences } from "./models";

export {};

declare global {
  interface Math {
    randomInt(minIncl: number, maxIncl: number): number;
  }

  interface Array<T> {
    sortNumbers(): T[];
    random(amount?: number): T[];
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
