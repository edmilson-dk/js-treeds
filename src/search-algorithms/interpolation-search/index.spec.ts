import { generateSortedArrayOfNumber } from "../../__tests__/utils";
import { interpolationSearch } from "./index";

describe("Interpolation Search tests", () => {
  it("should return the index of the element if it is present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 39;
    const arrayLength = array.length;

    const index = interpolationSearch({
      array,
      wanted,
      endIndex: arrayLength - 1,
      startIndex: 0
    });
    expect(index).toBe(39);
  });
});