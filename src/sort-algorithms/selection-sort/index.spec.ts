import {
  generateNotSortedArrayOfNumber,
  generateSortedArrayOfNumber,
  arrayNotOrdenatedWithRepeatedElements,
  arrayOrdenatedWithRepeatedElements,
} from "../../__tests__/utils";
import { selectionSort } from "./index";

describe("Selection Sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(60);
    const sortedArray = generateSortedArrayOfNumber(60);

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

  it("should return sorted big array", () => {
    const array = generateNotSortedArrayOfNumber(20000);
    const sortedArray = generateSortedArrayOfNumber(20000);
    selectionSort({ array });

    expect(array).toEqual(sortedArray);
  });
});
