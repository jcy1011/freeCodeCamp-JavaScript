function pairwise(arr, arg) {
  let total = 0;
  let usedIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && 
          !(usedIndexes.includes(i) ||
            usedIndexes.includes(j))) {
        total += i + j;
        usedIndexes.push(i, j);
        // break;
      }
    }
  }
  console.log(total, usedIndexes);
  return total;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);

console.log();
console.log();
console.log();
console.log();