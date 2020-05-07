// My attempt. Not working
function steamrollArray(arr) {
  function flatten(item) {
    if (!Array.isArray(item)) {
      return item
    } else {
      return null
    }
  }
  return arr.map(flatten);
}

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]);

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
// console.log();


// return item + ''
// let strArr = []
// strArr.push(item.toString())
// console.log(strArr); 



// Not my solution
// function steamrollArray(arr) {
//   let flattenedArr = [];
//   let flatten = function(arg) {
//     if (!Array.isArray(arg)) {
//       flattenedArr.push(arg);
//     } else {
//       for (let element in arg) {
//         flatten(arg[element]);
//       }
//     }
//   };
//   arr.forEach(flatten)
//   return flattenedArr;
// }

steamrollArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log();
console.log();
console.log();
console.log();