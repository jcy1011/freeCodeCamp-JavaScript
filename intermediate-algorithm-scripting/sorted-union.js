function uniteUnique(...arr) {
  let result = arguments[0]
  // console.log(result);
  // result.pop(2)
  // console.log(result)
  // console.log(arguments[2][0]);
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!result.includes(arguments[i][j])) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

// I don't know why push and includes methods work on arguments
// MDN docs say arguments is an arraylike object that doesn't have these methods

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
// console.log();
// console.log();