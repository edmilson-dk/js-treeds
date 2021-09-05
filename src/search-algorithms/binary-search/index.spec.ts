import {
  generateSortedArrayOfNumber,
  generateSortedArrayOfNumbersFloating,
} from "../../__tests__/utils";
import { binarySearch } from "./index";

describe("Binary search number tests", () => {
  it("should return item index if item is found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 30;
    const index = binarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(30);
  });

  it("should return -1 if item is not found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 42;
    const index = binarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return -1 if item is not found and left is bigger than right", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 42;
    const index = binarySearch({
      array,
      left: array.length,
      right: 0,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return -1 if left and right are bigger than array length", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 42;
    const index = binarySearch({
      array,
      left: array.length + 1,
      right: array.length + 1,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return item index if item is found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 2.2;
    const index = binarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(22);
  });

  it("should return -1 if item is not found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 3.0;
    const index = binarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(-1);
  });
});
