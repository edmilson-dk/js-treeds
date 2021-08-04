import { generateSortedArrayOfNumber } from "../../__tests__/utils";
import { exponentialSearch } from "./index";

describe("Exponential Search tests", () => {
  it("should return the index of the element if it is present", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 3;
  
    const index = exponentialSearch({
      array,
      wanted
    });
    expect(index).toBe(3);
  });
})