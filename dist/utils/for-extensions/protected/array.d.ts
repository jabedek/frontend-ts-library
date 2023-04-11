import { ArrayElement } from "../../../models";
import "../../../global-extensions";
declare function popRandomFn<T>(arr: T[]): T | undefined;
declare function randomFn<T>(arr: T[], amount?: number): T[];
declare function differenceDistinctBetweenFn<T extends ArrayElement>(
  base: T[],
  compared: T[],
  compareObjectsWithoutIdKey?: boolean,
  objectIdKey?: keyof T
):
  | {
      diffBase: T[];
      diffCompared: T[];
    }
  | undefined;
declare function sortNumbersFn<T extends number>(array: T[]): number[];
declare const _default: {
  popRandomFn: typeof popRandomFn;
  randomFn: typeof randomFn;
  symmetricDifferenceFn: typeof symmetricDifferenceFn;
  sortNumbersFn: typeof sortNumbersFn;
};
export default _default;
