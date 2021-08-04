import { InterpolationSearchPropsType } from "./types";

// Does not work correctly with negative number arrays
// Only works with ordered number arrays

export function interpolationSearch({
  array,
  endIndex,
  startIndex,
  wanted,
}: InterpolationSearchPropsType): number {
  let position = 0;

  if (startIndex <= endIndex && wanted >= array[startIndex] && wanted <= array[endIndex]) {
    position =
      startIndex +
      Math.floor(
        ((endIndex - startIndex) / (array[endIndex] - array[startIndex])) *
          (wanted - array[startIndex]),
      );

    if (array[position] === wanted) {
      return position;
    }

    if (array[position] < wanted) {
      return interpolationSearch({
        array,
        endIndex,
        startIndex: position + 1,
        wanted,
      });
    }

    if (array[position] > wanted) {
      return interpolationSearch({
        array,
        endIndex: position - 1,
        startIndex,
        wanted,
      });
    }
  }

  return -1;
}
