import { TernarySearchPropsType } from "./types";

export function ternarySearch({ array, left, right, wanted }: TernarySearchPropsType): number {
  if (right >= left) {
    const middleOne = left + Math.floor((right - left) / 3);
    const middleTwo = middleOne + Math.floor((right - left) / 3);

    if (array[middleOne] === wanted) return middleOne;
    if (array[middleTwo] === wanted) return middleTwo;

    if (array[middleOne] > wanted) {
      return ternarySearch({
        array,
        left,
        right: middleOne - 1,
        wanted,
      });
    }

    if (array[middleTwo] < wanted) {
      return ternarySearch({
        array,
        left: middleTwo + 1,
        right,
        wanted,
      });
    }

    return ternarySearch({
      array,
      left: middleOne + 1,
      right: middleTwo - 1,
      wanted,
    });
  }

  return -1;
}
