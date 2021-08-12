import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { mergeSort } from "./index";

describe("Merge sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(7);
    const sortedArray = generateSortedArrayOfNumber(7);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);

    mergeSort({
      array,
      leftIndex: 0,
      rightIndex: array.length - 1,
    });

    expect(array).toEqual(array);
  });
});
