import { swap } from "../../utils";
import { SelectionSortPropsType } from "./types";

export function selectionSort({ array, isDecreasing = true }: SelectionSortPropsType): void {
  let leftIndex = 0;
  let rightIndex = 0;
  let targetIndex = 0;
  const arrayLength = array.length;

  for (leftIndex = 0; leftIndex < arrayLength - 1; leftIndex++) {
    targetIndex = leftIndex;

    for (rightIndex = leftIndex + 1; rightIndex < arrayLength; rightIndex++) {
      let validator = isDecreasing
        ? array[rightIndex] < array[targetIndex]
        : array[rightIndex] > array[targetIndex];

      if (validator) {
        targetIndex = rightIndex;
      }
    }

    swap({
      array,
      indexA: targetIndex,
      indexB: leftIndex,
    });
  }
}
