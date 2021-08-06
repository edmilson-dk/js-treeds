import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { selectionSort } from "./index";

describe("Selection Sort tests", () => {
  it("should return sorted array", () => {
    const array = generateNotSortedArrayOfNumber(30);
    const sortedArray = generateSortedArrayOfNumber(30);
    selectionSort({ array });

    expect(array).toEqual(sortedArray);
  });
});
