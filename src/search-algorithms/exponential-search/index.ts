import { binarySearchInt } from "../binary-search";
import { ExponentialSearchPropsType } from "./types";

// Does not work correctly with negative number arrays
// Only works with ordered number arrays

export function exponentialSearch({ array, wanted }: ExponentialSearchPropsType): number {
  const arrayLength = array.length;

  if (array[0] === wanted) return 0;

  let index = 1;
  while (index < arrayLength && index <= wanted) {
    index *= 2;
  }

  return binarySearchInt({
    array,
    left: index / 2,
    right: Math.min(index, arrayLength - 1),
    wanted,
  });
}
