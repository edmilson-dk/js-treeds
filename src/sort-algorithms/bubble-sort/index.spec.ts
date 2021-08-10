import { generateNotSortedArrayOfNumber, generateSortedArrayOfNumber } from "../../__tests__/utils";
import { bubbleSort } from "./index";

describe("Bubble sort tests", () => {
  it("must return an array ordered from smallest to largest ", () => {
    const array = generateNotSortedArrayOfNumber(60);
    const sortedArray = generateSortedArrayOfNumber(60);

    bubbleSort({ array });

    expect(array).toEqual(sortedArray);
  });
});
