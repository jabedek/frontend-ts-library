/**
 * Creates an iterable object that can be iterated `amount` number of times.
 * @param amount The number of times to iterate over the values.
 * @example loop(5).forEach((index) => console.log(index))
 */
export const loop = (amount) => {
    let internalIndex = 0;
    const iterable = {
        *[Symbol.iterator]() {
            internalIndex = 0;
            while (internalIndex < amount) {
                yield internalIndex;
                internalIndex++;
            }
        },
        forEach(cb) {
            for (const _ of this) {
                cb(internalIndex);
            }
        },
    };
    return iterable;
};
//# sourceMappingURL=loop-iterator.js.map