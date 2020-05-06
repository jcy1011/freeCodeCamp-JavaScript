// Not my solution
function steamrollArray(arr) {
  let flattenedArr = [];
  let flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArr.push(arg);
    } else {
      for (let element in arg) {
        flatten(arg[element]);
      }
    }
  };
  arr.forEach(flatten)
  return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log();
console.log();
console.log();
console.log();