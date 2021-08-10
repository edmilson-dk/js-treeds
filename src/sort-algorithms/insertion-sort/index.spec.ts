import {
  arrayNotOrdenatedWithRepeatedElements,
  arrayOrdenatedWithRepeatedElements,
  generateNotSortedArrayOfNumber,
  generateSortedArrayOfNumber,
} from "../../__tests__/utils";
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

  it("should return sorted array when array is empty", () => {
    const array: number[] = [];

    insertionSort({ array });

    expect(array).toEqual([]);
  });

  it("should return sorted array when array contains negative numbers", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const sortedArray = generateNotSortedArrayOfNumber(30, true);

    insertionSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    insertionSort({ array });

    expect(array).toEqual(sortedArray);
  });
});
