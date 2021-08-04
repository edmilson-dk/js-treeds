import { JumpSearchPropsType } from "./types";

// Does not work correctly with negative number arrays
// Only works with ordered number arrays

export function jumpSearch({ array, arrayLength, wanted }: JumpSearchPropsType): number {
  let step = Math.sqrt(arrayLength);
  let prev = 0;

  while (array[Math.min(step, arrayLength) - 1] < wanted) {
    prev = step;
    step += Math.sqrt(arrayLength);

    if (prev >= arrayLength) return -1;
  }

  while (array[prev] < wanted) {
    prev++;

    if (prev === Math.min(step, arrayLength)) {
      return -1;
    }
  }

  if (array[prev] === wanted) return prev;

  return -1;
}
