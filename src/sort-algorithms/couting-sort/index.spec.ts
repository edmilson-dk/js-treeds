import {
  arrayNotOrdenatedWithRepeatedElements,
  arrayOrdenatedWithRepeatedElements,
  generateNotSortedArrayOfNumber,
  generateSortedArrayOfNumber,
} from "../../__tests__/utils";
import { countSort } from "./index";

describe("Counting sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(100);
    const sortedArray = generateSortedArrayOfNumber(100);

    countSort(array);

    expect(array).toEqual(sortedArray);
  });

  it("should return sorted array when array is already sorted", () => {
    const array = generateSortedArrayOfNumber(30);

    countSort(array);

    expect(array).toEqual(array);
  });

  it("should return sorted array when array is empty", () => {
    const array: number[] = [];

    countSort(array);

    expect(array).toEqual([]);
  });

  it("should return sorted big array", () => {
    const array = generateNotSortedArrayOfNumber(20000);
    const sortedArray = generateSortedArrayOfNumber(20000);

    countSort(array);

    expect(array).toEqual(sortedArray);
  });

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    countSort(array);

    expect(array).toEqual(sortedArray);
  });
});
