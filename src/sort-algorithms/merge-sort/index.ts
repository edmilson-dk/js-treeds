import { MergeSortPropsType, MergePropsType } from "./types";

function merge({ array, leftIndex, middleIndex, rightIndex }: MergePropsType) {
  let subArrayOneSize = middleIndex - leftIndex + 1;
  let subArrayRightSize = rightIndex - middleIndex;

  const leftSubArray = new Array<number>(subArrayOneSize);
  const rightSubArray = new Array<number>(subArrayRightSize);

  for (let tmpIndex = 0; tmpIndex < subArrayOneSize; tmpIndex++) {
    leftSubArray[tmpIndex] = array[leftIndex + tmpIndex];
  }
  for (let tmpIndex = 0; tmpIndex < subArrayRightSize; tmpIndex++) {
    rightSubArray[tmpIndex] = array[middleIndex + tmpIndex + 1];
  }

  let indexOfSubArrayOne = 0;
  let indexOfSubArrayTwo = 0;
  let indexOfMergedArrray = leftIndex;

  while (indexOfSubArrayOne < subArrayOneSize && indexOfSubArrayTwo < subArrayRightSize) {
    if (leftSubArray[indexOfSubArrayOne] <= rightSubArray[indexOfSubArrayTwo]) {
      array[indexOfMergedArrray] = leftSubArray[indexOfSubArrayOne];
      indexOfSubArrayOne++;
    } else {
      array[indexOfMergedArrray] = rightSubArray[indexOfSubArrayTwo];
      indexOfSubArrayTwo++;
    }
    indexOfMergedArrray++;
  }

  while (indexOfSubArrayOne < subArrayOneSize) {
    array[indexOfMergedArrray] = leftSubArray[indexOfSubArrayOne];
    indexOfSubArrayOne++;
    indexOfMergedArrray++;
  }

  while (indexOfSubArrayTwo < subArrayRightSize) {
    array[indexOfMergedArrray] = rightSubArray[indexOfSubArrayTwo];
    indexOfSubArrayTwo++;
    indexOfMergedArrray++;
  }
}

export function mergeSort({ array, leftIndex, rightIndex }: MergeSortPropsType) {
  if (leftIndex >= rightIndex) return;

  const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

  mergeSort({ array, leftIndex, rightIndex: middleIndex });
  mergeSort({ array, leftIndex: middleIndex + 1, rightIndex });
  merge({ array, leftIndex, middleIndex, rightIndex });
}
