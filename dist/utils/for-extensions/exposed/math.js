export function randomIntFn(minIncl = 1, maxIncl = 100) {
    if (minIncl === maxIncl) {
        return minIncl;
    }
    if (minIncl > maxIncl) {
        const tempMin = minIncl;
        minIncl = maxIncl;
        maxIncl = tempMin;
    }
    maxIncl = Math.floor(maxIncl);
    minIncl = Number(Number(minIncl).toFixed(0));
    return Math.floor(Math.random() * (maxIncl - minIncl) + (minIncl + 1));
}
export function roundPreciseFn(rationalNumber, dir, decimalPrecision = 0) {
    if (dir === "up") {
        const power = Math.pow(10, decimalPrecision);
        return Math.ceil(rationalNumber * power) / power;
    }
    else {
        return Number(Number(rationalNumber).toFixed(decimalPrecision));
    }
}
//# sourceMappingURL=math.js.map