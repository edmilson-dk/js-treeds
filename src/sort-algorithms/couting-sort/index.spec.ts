import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { countSort } from "./index";

describe("Counting sort tests", () => {
  it("must return an array ordered from smallest to largest", () => {
    const array = generateNotSortedArrayOfNumber(100);
    const sortedArray = generateSortedArrayOfNumber(100);

    countSort(array);

    expect(array).toEqual(sortedArray);
  });
});
