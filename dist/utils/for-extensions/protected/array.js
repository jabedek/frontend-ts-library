import "../../../global-extensions";
function randomFn(arr) {
    var _a;
    return (_a = arr[Math.randomInt(0, arr.length - 1)]) !== null && _a !== void 0 ? _a : undefined;
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
function differenceDistinctBetweenFn(base, compared, compareObjectsWithoutIdKey, objectIdKey) {
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
    randomFn,
    differenceDistinctBetweenFn,
    sortNumbersFn,
};
//# sourceMappingURL=array.js.map