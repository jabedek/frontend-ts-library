import { ArrayElement, SymmetricalDifferences } from "../../../models";

function popRandomFn<T>(arr: T[]): T | undefined {
  if (!arr) {
    return undefined;
  }

  const randomIndex = Math.randomInt(0, arr.length - 1);
  const randomEl =
    typeof arr[randomIndex] === "object"
      ? { ...arr[randomIndex] }
      : arr[randomIndex];
  const newArr = arr.filter((_, i) => i !== randomIndex);
  arr = newArr;

  return randomEl;
}

function randomFn<T>(arr: T[], amount = 1): T[] {
  if (!arr || amount <= 0) {
    return [];
  }

  if (amount === 1) {
    return [arr[Math.randomInt(0, arr.length - 1)]];
  } else {
    const copy: T[] = [...arr];
    const elements: T[] = [];
    for (let i = 0; i < amount; i++) {
      const el = copy.popRandom();
      if (el) {
        elements.push(el);
      }
    }

    return elements;
  }
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
): SymmetricalDifferences<T> | undefined {
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

function symmetricDifferenceFn<T extends ArrayElement>(
  base: T[],
  compared: T[],
  compareObjectsWithoutIdKey?: boolean,
  objectIdKey?: keyof T
): SymmetricalDifferences<T> | undefined {
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
  popRandomFn,
  randomFn,
  symmetricDifferenceFn,
  sortNumbersFn,
};
