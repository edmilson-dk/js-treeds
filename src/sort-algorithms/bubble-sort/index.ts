import { swap } from "../../utils";
import { BubbleSortPropsType } from "./types";

export function bubbleSort({ array, isDecreasing = true }: BubbleSortPropsType): void {
  let leftIndex = 0;
  let rightIndex = 0;
  const arrayLength = array.length;

  for (leftIndex = 0; leftIndex < arrayLength - 1; leftIndex++) {
    for (rightIndex = 0; rightIndex < arrayLength - leftIndex; rightIndex++) {
      if (isDecreasing && array[rightIndex] > array[rightIndex + 1]) {
        swap<number>({
          array,
          indexA: rightIndex,
          indexB: rightIndex + 1,
        });
      } else if (!isDecreasing && array[rightIndex] < array[rightIndex + 1]) {
        swap<number>({
          array,
          indexA: rightIndex + 1,
          indexB: rightIndex,
        });
      }
    }
  }
}
