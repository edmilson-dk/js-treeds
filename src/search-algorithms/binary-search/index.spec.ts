import { generateArrayOfString } from "../../__tests__/utils";
import { binarySearchStr } from "./index";

describe("Binary search string tests", () => {
  it("should return item index if item is found", () => {
    const array = generateArrayOfString(40, "flag");
    const element = "flag30";
    const index = binarySearchStr({
      array,
      left: 0,
      right: array.length - 1,
      wanted: element
    });
    expect(index).toBe(30);
  });
});