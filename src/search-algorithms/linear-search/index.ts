import { LinearSearchPropsType } from "./types";

export function linearSearch<T>({ array, wanted }: LinearSearchPropsType<T>): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === wanted) {
      return i;
    }
  }

  return -1;
}