import { generateArrayOfString, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { binarySearchStr, binarySearchInt } from "./index";

describe("Binary search string tests", () => {
  it("should return item index if item is found", () => {
    const array = generateArrayOfString(40, "flag");
    const wanted = "flag34";
    const index = binarySearchStr({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(34);
  });

  it("should return -1 if item is not found", () => {
    const array = generateArrayOfString(40, "flag");
    const wanted = "flag50";
    const index = binarySearchStr({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return -1 if item is not found and left is bigger than right", () => {
    const array = generateArrayOfString(40, "flag");
    const wanted = "flag50";
    const index = binarySearchStr({
      array,
      left: array.length,
      right: 0,
      wanted,
    });
    expect(index).toBe(-1);
  });

  it("should return -1 if left and right are bigger than array length", () => {
    const array = generateArrayOfString(40, "flag");
    const wanted = "flag50";
    const index = binarySearchStr({
      array,
      left: array.length + 1,
      right: array.length + 1,
      wanted,
    });
    expect(index).toBe(-1);
  });
});

describe("Binary search number tests", () => {
  it("should return item index if item is found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 30;
    const index = binarySearchInt({
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
    const index = binarySearchInt({
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
    const index = binarySearchInt({
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
    const index = binarySearchInt({
      array,
      left: array.length + 1,
      right: array.length + 1,
      wanted,
    });
    expect(index).toBe(-1);
  });
});
