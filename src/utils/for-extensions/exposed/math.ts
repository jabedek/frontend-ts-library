export function randomIntFn(
  minIncl: number = 1,
  maxIncl: number = 100
): number {
  if (minIncl === maxIncl) {
    return minIncl;
  }

  if (minIncl > maxIncl) {
    const tempMin = minIncl;
    minIncl = maxIncl;
    maxIncl = tempMin;
  }

  minIncl = Math.ceil(minIncl) - 1;
  maxIncl = Math.floor(maxIncl);
  return Math.floor(Math.random() * (maxIncl - minIncl) + (minIncl + 1));
}

export function nearestFloorFn(
  rationalNumber: number,
  decimalPrecision: number
): number {
  const power = Math.pow(10, decimalPrecision);
  return Math.floor(rationalNumber * power) / power;
}

export function nearestCeilFn(
  rationalNumber: number,
  decimalPrecision: number
): number {
  const power = Math.pow(10, decimalPrecision);
  return Math.ceil(rationalNumber * power) / power;
}
