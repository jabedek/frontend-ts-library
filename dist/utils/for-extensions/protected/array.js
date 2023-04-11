function popRandomFn(arr) {
    if (!arr) {
        return undefined;
    }
    const randomIndex = Math.randomInt(0, arr.length - 1);
    const randomEl = Object.assign({}, arr[randomIndex]);
    const newArr = arr.filter((_, i) => i !== randomIndex);
    arr = newArr;
    return randomEl;
}
function randomFn(arr, amount = 0) {
    if (!arr || amount < 0) {
        return [];
    }
    if (amount === 0) {
        return [arr[Math.randomInt(0, arr.length - 1)]];
    }
    else {
        const copy = [...arr];
        const elements = [];
        for (let i = 0; i < amount; i++) {
            const el = copy.popRandom();
            if (el) {
                elements.push(el);
            }
        }
        return elements;
    }
}
function comparePrimitiveArrays(base, compared) {
    const diff1 = base.filter((x) => !compared.includes(x));
    const diff2 = compared.filter((x) => !base.includes(x));
    return { diffBase: [...diff1], diffCompared: [...diff2] };
}
function compareObjectArrays(base, compared, compareObjectsWithoutIdKey, objectIdKey) {
    const identifier = (objectIdKey || "id" || "_id");
    const elementsHaveIdKey = base.every((el) => el[identifier] !== undefined) &&
        compared.every((el) => el[identifier] !== undefined);
    if (!elementsHaveIdKey && !compareObjectsWithoutIdKey) {
        console.warn("Only string, number or boolean arrays can be compared for difference.");
        return;
    }
    if (!elementsHaveIdKey && compareObjectsWithoutIdKey) {
        const baseStringified = base.map((o) => JSON.stringify(o));
        const comparedStringified = compared.map((o) => JSON.stringify(o));
        const { diffBase, diffCompared } = comparePrimitiveArrays(baseStringified, comparedStringified);
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
        const diffBase = base.filter((obj) => !comparedIds.includes(obj[identifier]));
        const diffCompared = compared.filter((obj) => !baseIds.includes(obj[identifier]));
        return {
            diffBase,
            diffCompared,
        };
    }
}
function symmetricDifferenceFn(base, compared, compareObjectsWithoutIdKey, objectIdKey) {
    if (!!compared[0] && typeof compared[0] === "object") {
        return compareObjectArrays(base, compared, compareObjectsWithoutIdKey, objectIdKey);
    }
    else {
        return comparePrimitiveArrays(base, compared);
    }
}
function sortNumbersFn(array) {
    return array.sort((a, b) => (a > b ? 1 : -1));
}
export default {
    popRandomFn,
    randomFn,
    symmetricDifferenceFn,
    sortNumbersFn,
};
//# sourceMappingURL=array.js.map