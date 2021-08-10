import {
  generateSortedArrayOfNumber,
  generateSortedArrayOfNumbersFloating,
} from "../../__tests__/utils";
import { jumpSearch } from "./index";

describe("Jump searc tests", () => {
  it("should return the index of the element if it is present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 34;
    const arrayLength = array.length;

    const index = jumpSearch({
      array,
      wanted,
      arrayLength,
    });

    expect(index).toBe(34);
  });

  it("should return -1 if the element is not present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 45;
    const arrayLength = array.length;

    const index = jumpSearch({
      array,
      wanted,
      arrayLength,
    });

    expect(index).toBe(-1);
  });

  it("should return -1 if the array is empty", () => {
    const array: number[] = [];
    const wanted = 45;
    const arrayLength = array.length;

    const index = jumpSearch({
      array,
      wanted,
      arrayLength,
    });

    expect(index).toBe(-1);
  });

  it("should return item index if item is found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 2.2;

    const arrayLength = array.length;
    const index = jumpSearch({
      array,
      wanted,
      arrayLength,
    });
    expect(index).toBe(22);
  });

  it("should return -1 if item is not found using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 3.0;

    const arrayLength = array.length;
    const index = jumpSearch({
      array,
      wanted,
      arrayLength,
    });
    expect(index).toBe(-1);
  });
});
