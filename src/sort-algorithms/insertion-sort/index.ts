import { InsertionSortPropsType } from "./types";

export function insertionSort({ array, isDecreasing }: InsertionSortPropsType) {
  let leftIndex = 0;
  let rightIndex = 0;
  const arrayLength = array.length;
  let key = 0;

  for (rightIndex = 1; rightIndex < arrayLength; rightIndex++) {
    key = array[rightIndex];
    leftIndex = rightIndex - 1;

    while (leftIndex >= 0 && array[leftIndex] > key) {
      array[leftIndex + 1] = array[leftIndex];
      leftIndex -= 1;
    }

    array[leftIndex + 1] = key;
  }
}
