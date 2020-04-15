function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);


console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log();
console.log();

// lots of creative solutions here study for ideas
// https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-where-do-i-belong/16094