export function countSort(array: number[]) {
  const arrayLength = array.length;
  const count = new Array(arrayLength);
  const output = new Array(arrayLength);
  let max = array[0];

  for (let index = 1; index < arrayLength; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }

  for (let index = 0; index <= max; index++) {
    count[index] = 0;
  }

  for (let index = 0; index < arrayLength; index++) {
    count[array[index]]++;
  }

  for (let index = 1; index <= max; index++) {
    count[index] += count[index - 1];
  }

  for (let index = arrayLength - 1; index >= 0; index--) {
    output[count[array[index]] - 1] = array[index];
    count[array[index]]--;
  }

  for (let index = 0; index < arrayLength; index++) {
    array[index] = output[index];
  }
}
