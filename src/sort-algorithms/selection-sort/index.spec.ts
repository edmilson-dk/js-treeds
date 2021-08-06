import {
  generateNotSortedArrayOfNumber,
  generateSortedArrayOfNumber,
  arrayNotOrdenatedWithRepeatedElements,
  arrayOrdenatedWithRepeatedElements,
} from "../../__tests__/utils";
import { selectionSort } from "./index";

describe("Selection Sort tests", () => {
  it("should return sorted array", () => {
    const array = generateNotSortedArrayOfNumber(30);
    const sortedArray = generateSortedArrayOfNumber(30);
    selectionSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);
    selectionSort({ array });

    expect(array).toEqual(array);
  });

  it("should return sorted array when array is empty", () => {
    const array: number[] = [];
    selectionSort({ array });

    expect(array).toEqual([]);
  });

  it("should return sorted array when array contains negative numbers", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const sortedArray = generateNotSortedArrayOfNumber(30, true);
    selectionSort({ array });

    expect(array).toEqual(sortedArray);
  });

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    selectionSort({ array });
    expect(array).toEqual(sortedArray);
  });
});
