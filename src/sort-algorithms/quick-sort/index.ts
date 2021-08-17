import { swap } from "../../utils";
import { QuickSortPartitionPropsType, QuickSortPropsType } from "./types";

function partition({ array, low, high }: QuickSortPartitionPropsType): number {
  let middle = low + Math.floor((high - low) / 2);

  let pivot = array[middle];
  let leftIndex = low - 1;
  let rightIndex = high + 1;

  while (leftIndex < rightIndex) {
    do {
      leftIndex++;
    } while (array[leftIndex] < pivot);

    do {
      rightIndex--;
    } while (array[rightIndex] > pivot);

    if (leftIndex < rightIndex) {
      swap({
        array,
        indexA: leftIndex,
        indexB: rightIndex,
      });
    }
  }

  return rightIndex;
}

export function quickSort({ array, low, high }: QuickSortPropsType): void {
  if (low <= high) {
    const pi = partition({ array, low, high });
    quickSort({ array, low, high: pi - 1 });
    quickSort({ array, low: pi + 1, high });
  }
}
