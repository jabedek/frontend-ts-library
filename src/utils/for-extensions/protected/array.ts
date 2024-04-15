import { ArrayElement, SymmetricalDifferences } from "../../../models";

function popRandomFn<T>(originalArray: T[]): T | undefined {
  if (!originalArray?.length) {
    return undefined;
  }

  const randomIndex = Math.randomInt(0, originalArray.length - 1);
  return originalArray.splice(randomIndex, 1)[0];
}

function randomFn<T>(originalArray: T[], amount?: number): T[] {
  if (!amount) {
    amount = 1;
  }
  if (!originalArray || amount <= 0) {
    return [];
  }

  if (amount === 1) {
    return [originalArray[Math.randomInt(0, originalArray.length - 1)]];
  } else {
    const copy: T[] = [...originalArray];
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

    const baseParsed = diffBase.map((s) => JSON.parse(s)) as T[];
    const comparedParsed = diffCompared.map((s) => JSON.parse(s)) as T[];

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
  baseArray: T[],
  comparedArray: T[],
  compareObjectsWithoutIdKey?: boolean,
  objectIdKey?: keyof T
): SymmetricalDifferences<T> | undefined {
  if (!!comparedArray[0] && typeof comparedArray[0] === "object") {
    return compareObjectArrays(
      baseArray,
      comparedArray,
      compareObjectsWithoutIdKey,
      objectIdKey
    );
  } else {
    return comparePrimitiveArrays(baseArray, comparedArray);
  }
}

function sortNumbersFn<T extends number>(array: T[]): number[] {
  return array.sort((a, b) => (a > b ? 1 : -1));
}

function lastItemFn<T>(array: T[], newCopy = false): T | undefined {
  const item = array[array.length - 1];

  if (!item) {
    return undefined;
  }

  if (["boolean", "string", "number"].includes(typeof item)) {
    return item;
  }

  return newCopy ? { ...item } : item;
}

export default {
  popRandomFn,
  randomFn,
  symmetricDifferenceFn,
  sortNumbersFn,
  lastItemFn,
};
