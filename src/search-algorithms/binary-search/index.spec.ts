import { generateArrayOfString, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { binarySearchStr, binarySearchInt } from "./index";

describe("Binary search string tests", () => {
  it("should return item index if item is found", () => {
    const array = generateArrayOfString(40, "flag");
    const wanted = "flag30";
    const index = binarySearchStr({
      array,
      left: 0,
      right: array.length - 1,
      wanted
    });
    expect(index).toBe(30);
  });
});

describe("Binary search number tests", () => {
  it("should return item index if item is found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 30;
    const index = binarySearchInt({
      array,
      left: 0,
      right: array.length - 1,
      wanted
    });
    expect(index).toBe(30);
  });
});