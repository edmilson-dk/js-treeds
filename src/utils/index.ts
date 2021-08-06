import { SwapUtilityProps } from "./types";

export function swap<T>({ array, indexA, indexB }: SwapUtilityProps<T>): T[] {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;

  return array;
}
