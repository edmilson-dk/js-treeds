import { BinarySearchStrPropsType } from "./types";

export function binarySearchStr({ array, left, right, wanted }: BinarySearchStrPropsType): number {
  if (right >= left) {
    const middle = (left + right) >>> 1;
    const foundIndex = wanted.localeCompare(array[middle]);

    if (foundIndex === 0) {
      return middle;
    }
    if (foundIndex < 0) {
      return binarySearchStr({
        array,
        left,
        right: middle - 1,
        wanted
      });
    }
    return binarySearchStr({
      array,
      left: middle + 1,
      right,
      wanted
    });
  }

  return -1;
}