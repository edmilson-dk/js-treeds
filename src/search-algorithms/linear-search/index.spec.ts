import { generateSortedArrayOfNumber } from "../../__tests__/utils";
import { linearSearch } from "./index";

describe("Linear search tests", () => {
  it("should find the item in an array", () => {
    const array = generateSortedArrayOfNumber(30);
    const wanted = 2;
    const index = linearSearch<Number>({ array, wanted });
    expect(index).toBe(2);
  });

  it("should return -1 when the item is not found", () => {
    const array = generateSortedArrayOfNumber(30);
    const wanted = 31;
    const index = linearSearch<Number>({ array, wanted });
    expect(index).toBe(-1);
  });
});
