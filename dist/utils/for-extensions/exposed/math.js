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
    return Math.floor(Math.random() * (maxIncl + 1 - minIncl) + minIncl);
}
//# sourceMappingURL=math.js.map