/**
 * Creates an iterable object that iterates `amount` number of times.
 * @param amount The number of times to iterate over the values.
 * @example loop(5).forEach((index) => console.log(index))
 */
export const loop = (amount: number) => {
  let index = 0;

  const iterable = {
    *[Symbol.iterator]() {
      while (index < amount) {
        yield index;
        index++;
      }
    },

    forEach(cb: (index: number) => void) {
      for (const _ of this) {
        cb(index);
      }
    },
  };

  return iterable;
};
