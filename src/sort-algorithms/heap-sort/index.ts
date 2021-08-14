import { swap } from "../../utils";
import { HeapifySortPropsType, HeapSortPropsType } from "./types";

function heapify({ array, arrayLength, index }: HeapifySortPropsType) {
  let largest = index;
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;

  if (leftIndex < arrayLength && array[leftIndex] > array[largest]) {
    largest = leftIndex;
  }

  if (rightIndex < arrayLength && array[rightIndex] > array[largest]) {
    largest = rightIndex;
  }

  if (largest !== index) {
    swap<number>({
      array,
      indexA: index,
      indexB: largest,
    });

    heapify({ array, arrayLength, index: largest });
  }
}

export function heapSort({ array }: HeapSortPropsType) {
  const arrayLength = array.length;
  const ranger = Math.floor(arrayLength / 2) - 1;

  for (let index = ranger; index >= 0; index--) {
    heapify({ array, arrayLength, index });
  }

  for (let index = arrayLength - 1; index > 0; index--) {
    swap<number>({
      array,
      indexA: 0,
      indexB: index,
    });

    heapify({ array, arrayLength: index, index: 0 });
  }
}
