import {
  generateSortedArrayOfNumber,
  generateSortedArrayOfNumbersFloating,
} from "../../__tests__/utils";
import { exponentialSearch } from "./index";

describe("Exponential Search tests", () => {
  it("should return the index of the element if it is present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 3;

    const index = exponentialSearch({
      array,
      wanted,
    });
    expect(index).toBe(3);
  });

  it("should return -1 if the element is not present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 50;

    const index = exponentialSearch({
      array,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return the of element if it is present in first position of the array", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 0;

    const index = exponentialSearch({
      array,
      wanted,
    });
    expect(index).toBe(0);
  });

  it("should return the index of element if it is present in last position of the array", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 39;

    const index = exponentialSearch({
      array,
      wanted,
    });
    expect(index).toBe(39);
  });

  it("should return -1 if array using floating numbers in array", () => {
    const array = generateSortedArrayOfNumbersFloating(30);
    const wanted = 2.2;
    const index = exponentialSearch({
      array,
      wanted,
    });
    expect;
    expect(index).toBe(-1);
  });
});
