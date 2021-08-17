import { swap } from "../../utils";
import { QuickSortPartitionPropsType, QuickSortPropsType } from "./types";

function partition({ array, low, high }: QuickSortPartitionPropsType): number {
  let pivot = array[high];
  let leftIndex = low - 1;
  let rightIndex = low;

  for (rightIndex; rightIndex < high; rightIndex++) {
    if (array[rightIndex] <= pivot) {
      leftIndex++;
      swap<number>({
        array,
        indexA: leftIndex,
        indexB: rightIndex,
      });
    }
  }

  swap<number>({
    array,
    indexA: leftIndex + 1,
    indexB: high,
  });

  return leftIndex + 1;
}

export function quickSort({ array, low, high }: QuickSortPropsType): void {
  if (low <= high) {
    const pi = partition({ array, low, high });
    quickSort({ array, low, high: pi - 1 });
    quickSort({ array, low: pi + 1, high });
  }
}
