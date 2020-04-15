function sumAll(arr) {
  let sortedArr = arr.sort(function(a,b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  // console.log(sortedArr)
  let sum = 0
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4]);
sumAll([4, 1]);

// inputs = array of 2 numbers
// output = 1 number (sum of numbers between input)
// .sort then loop 