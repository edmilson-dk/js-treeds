import { generateSortedArrayOfNumber } from "../../__tests__/utils";
import { ternarySearch } from "./index";

describe("Ternary Search tests", () => {
  it("should return item index if item is found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 36;

    const index = ternarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(36);
  });

  it("should return -1 if item is not found", () => {
    const array = generateSortedArrayOfNumber(40);
    const wanted = 42;
    const index = ternarySearch({
      array,
      left: 0,
      right: array.length,
      wanted,
    });
    expect(index).toBe(-1);
  });
});
