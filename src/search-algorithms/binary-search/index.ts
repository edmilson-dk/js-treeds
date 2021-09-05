export type BinarySearchPropsType = {
  array: number[];
  left: number;
  right: number;
  wanted: number;
};

// Does not work correctly with negative number arrays
// Only works with ordered number arrays

export function binarySearch({ array, left, right, wanted }: BinarySearchPropsType): number {
  if (right >= left) {
    // https://stackoverflow.com/questions/6735259/calculating-mid-in-binary-search
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] === wanted) {
      return middle;
    }

    if (array[middle] > wanted) {
      return binarySearch({
        array,
        left,
        right: middle - 1,
        wanted,
      });
    }

    return binarySearch({
      array,
      left: middle + 1,
      right,
      wanted,
    });
  }

  return -1;
}
