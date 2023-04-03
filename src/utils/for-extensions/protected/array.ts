import { ArrayElement } from "../../../models";
import "../../../global-extensions";

function randomFn<T>(arr: T[]): T | undefined {
  return arr[Math.randomInt(0, arr.length - 1)] ?? undefined;
}

function comparePrimitiveArrays<T = string | number | boolean>(
  base: T[],
  compared: T[]
) {
  const diff1 = base.filter((x) => !compared.includes(x));
  const diff2 = compared.filter((x) => !base.includes(x));
  return { diffBase: [...diff1], diffCompared: [...diff2] };
}

function compareObjectArrays<T extends ArrayElement>(
  base: T[],
  compared: T[],
  compareObjectsWithoutIdKey?: boolean,
  objectIdKey?: keyof T
): { diffBase: T[]; diffCompared: T[] } | undefined {
  const identifier = (objectIdKey || "id" || "_id") as keyof T;

  const elementsHaveIdKey =
    base.every((el) => el[identifier] !== undefined) &&
    compared.every((el) => el[identifier] !== undefined);

  if (!elementsHaveIdKey && !compareObjectsWithoutIdKey) {
    console.warn(
      "Only string, number or boolean arrays can be compared for difference."
    );
    return;
  }

  if (!elementsHaveIdKey && compareObjectsWithoutIdKey) {
    const baseStringified = base.map((o) => JSON.stringify(o));
    const comparedStringified = compared.map((o) => JSON.stringify(o));

    const { diffBase, diffCompared } = comparePrimitiveArrays(
      baseStringified,
      comparedStringified
    );

    const baseParsed = diffBase.map((s) => JSON.parse(s));
    const comparedParsed = diffCompared.map((s) => JSON.parse(s));

    return {
      diffBase: baseParsed,
      diffCompared: comparedParsed,
    };
  }

  if (elementsHaveIdKey) {
    const baseIds = base.map((obj) => obj[identifier]);
    const comparedIds = compared.map((obj) => obj[identifier]);

    const diffBase = base.filter(
      (obj) => !comparedIds.includes(obj[identifier])
    );
    const diffCompared = compared.filter(
      (obj) => !baseIds.includes(obj[identifier])
    );

    return {
      diffBase,
      diffCompared,
    };
  }
}

function differenceDistinctBetweenFn<T extends ArrayElement>(
  base: T[],
  compared: T[],
  compareObjectsWithoutIdKey?: boolean,
  objectIdKey?: keyof T
): { diffBase: T[]; diffCompared: T[] } | undefined {
  if (!!compared[0] && typeof compared[0] === "object") {
    return compareObjectArrays(
      base,
      compared,
      compareObjectsWithoutIdKey,
      objectIdKey
    );
  } else {
    return comparePrimitiveArrays(base, compared);
  }
}

function sortNumbersFn<T extends number>(array: T[]): number[] {
  return array.sort((a, b) => (a > b ? 1 : -1));
}

export default {
  randomFn,
  differenceDistinctBetweenFn,
  sortNumbersFn,
};
