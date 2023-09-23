export type ArrayElement = Record<string, any> | string | number | boolean;

export interface SymmetricalDifferences<T> {
  diffBase: T[];
  diffCompared: T[];
}
