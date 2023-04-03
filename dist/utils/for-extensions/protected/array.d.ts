import { ArrayElement } from "../../../models";
import "../../../global-extensions";
declare function randomFn<T>(arr: T[]): T | undefined;
declare function differenceDistinctBetweenFn<T extends ArrayElement>(base: T[], compared: T[], compareObjectsWithoutIdKey?: boolean, objectIdKey?: keyof T): {
    diffBase: T[];
    diffCompared: T[];
} | undefined;
declare function sortNumbersFn<T extends number>(array: T[]): number[];
declare const _default: {
    randomFn: typeof randomFn;
    differenceDistinctBetweenFn: typeof differenceDistinctBetweenFn;
    sortNumbersFn: typeof sortNumbersFn;
};
export default _default;
