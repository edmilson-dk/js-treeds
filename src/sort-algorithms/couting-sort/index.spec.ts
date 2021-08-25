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

  it("should return an ordered array when the array contains repeated elements", () => {
    const array = arrayNotOrdenatedWithRepeatedElements;
    const sortedArray = arrayOrdenatedWithRepeatedElements;

    countSort(array);

    expect(array).toEqual(sortedArray);
  });
});
