import { BinarySearchIntPropsType, BinarySearchStrPropsType } from "./types";

export function binarySearchStr({ array, left, right, wanted }: BinarySearchStrPropsType): number {
  if (right >= left) {
    // https://stackoverflow.com/questions/6735259/calculating-mid-in-binary-search
    const middle = Math.floor(left + (right - left) / 2);
    const foundIndex = wanted.localeCompare(array[middle]);

    if (foundIndex === 0) {
      return middle;
    }

    if (foundIndex < 0) {
      return binarySearchStr({
        array,
        left,
        right: middle - 1,
        wanted,
      });
    }

    return binarySearchStr({
      array,
      left: middle + 1,
      right,
      wanted,
    });
  }

  return -1;
}

// Does not work correctly with negative number arrays
// Only works with ordered number arrays

export function binarySearchInt({ array, left, right, wanted }: BinarySearchIntPropsType): number {
  if (right >= left) {
    // https://stackoverflow.com/questions/6735259/calculating-mid-in-binary-search
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] === wanted) {
      return middle;
    }

    if (array[middle] > wanted) {
      return binarySearchInt({
        array,
        left,
        right: middle - 1,
        wanted,
      });
    }

    return binarySearchInt({
      array,
      left: middle + 1,
      right,
      wanted,
    });
  }

  return -1;
}
