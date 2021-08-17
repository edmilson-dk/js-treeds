import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { quickSort } from "./index";

describe("Quick sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(80);
    const sortedArray = generateSortedArrayOfNumber(80);

    quickSort({
      array,
      low: 0,
      high: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);

    quickSort({
      array,
      low: 0,
      high: array.length - 1,
    });

    expect(array).toEqual(array);
  });

  it("should return sorted array when array is empty", () => {
    const array: number[] = [];

    quickSort({
      array,
      low: 0,
      high: array.length - 1,
    });

    expect(array).toEqual([]);
  });

  it("should return sorted array when array contains negative numbers", () => {
    const array = generateSortedArrayOfNumber(30, true);
    const sortedArray = generateNotSortedArrayOfNumber(30, true);

    quickSort({
      array,
      low: 0,
      high: array.length - 1,
    });

    expect(array).toEqual(sortedArray);
  });
});
