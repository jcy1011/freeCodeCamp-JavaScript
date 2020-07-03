function bubbleSort(arr) {
  const result = arr;
  let swap = 0;
  do {
    swap = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] > result[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
       swap += 1;
      }
    }
  } while (swap > 0); 
  return result;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
}