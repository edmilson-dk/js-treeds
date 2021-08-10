import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { insertionSort } from "./index";

describe("Insertion sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(60);
    const sortedArray = generateSortedArrayOfNumber(60);

    insertionSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);

    insertionSort({ array });

    expect(array).toEqual(array);
  });
});
