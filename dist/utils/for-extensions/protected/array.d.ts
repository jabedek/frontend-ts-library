import { ArrayElement, SymmetricalDifferences } from "../../../models";
declare function popRandomFn<T>(originalArray: T[]): T | undefined;
declare function randomFn<T>(originalArray: T[], amount?: number): T[];
declare function symmetricDifferenceFn<T extends ArrayElement>(baseArray: T[], comparedArray: T[], compareObjectsWithoutIdKey?: boolean, objectIdKey?: keyof T): SymmetricalDifferences<T> | undefined;
declare function sortNumbersFn<T extends number>(array: T[]): number[];
declare const _default: {
    popRandomFn: typeof popRandomFn;
    randomFn: typeof randomFn;
    symmetricDifferenceFn: typeof symmetricDifferenceFn;
    sortNumbersFn: typeof sortNumbersFn;
};
export default _default;
