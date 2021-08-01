import { generateSortedArrayOfNumber } from "../../__tests__/utils";
import { jumpSearch } from "./index";

describe("Jump searc tests", () => {
  it("should return the index of the element if it is present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 34;
    const arrayLength = array.length;

    const index = jumpSearch({
      array,
      wanted,
      arrayLength
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
      arrayLength
    });

    expect(index).toBe(-1);
  });
});