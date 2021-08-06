import { swap } from "../../utils";
import { SelectionSortPropsType } from "./types";

export function selectionSort({ array }: SelectionSortPropsType): void {
  let leftIndex = 0;
  let rightIndex = 0;
  let targetIndex = 0;
  const arrayLength = array.length;

  for (leftIndex = 0; leftIndex < arrayLength - 1; leftIndex++) {
    targetIndex = leftIndex;

    for (rightIndex = leftIndex + 1; rightIndex < arrayLength; rightIndex++) {
      if (array[rightIndex] < array[targetIndex]) {
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
