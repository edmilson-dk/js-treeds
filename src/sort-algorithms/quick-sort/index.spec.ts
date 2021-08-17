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
});
