import { ArrayElement, SymmetricalDifferences } from "../../../models";
declare function popRandomFn<T>(originalArray: T[]): T | undefined;
declare function randomFn<T>(originalArray: T[], amount?: number): T[];
declare function symmetricDifferenceFn<T extends ArrayElement>(baseArray: T[], comparedArray: T[], compareObjectsWithoutIdKey?: boolean, objectIdKey?: keyof T): SymmetricalDifferences<T> | undefined;
declare function sortNumbersFn<T extends number>(array: T[]): number[];
declare function lastFn<T>(array: T[], newCopy?: boolean): T | undefined;
declare const _default: {
    popRandomFn: typeof popRandomFn;
    randomFn: typeof randomFn;
    symmetricDifferenceFn: typeof symmetricDifferenceFn;
    sortNumbersFn: typeof sortNumbersFn;
    lastFn: typeof lastFn;
};
export default _default;
