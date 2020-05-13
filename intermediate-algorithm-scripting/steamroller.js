// Working solution, saw solution earlier
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  if (flat.some(Array.isArray)) {
    return steamrollArray(flat);
  }
  return flat;
}

// Another working solution I found and edited 
// function steamrollArray(arr) {
//   const newArr = [];
//   function check(item) {
//       if (!Array.isArray(item)) {
//           newArr.push(item);
//       } else
//           item.forEach(check);
//   }
//   arr.forEach(check);
//   return newArr;
// }

//Same as above, different syntax
function steamrollArray(arr) {
  const newArr = [];
  function check(item) {
    !Array.isArray(item) ? newArr.push(item) : item.forEach(check);
  }
  arr.forEach(check);
  return newArr;
}

// My attempt. Not working
// function steamrollArray(arr) {
//   function flatten(item) {
//     if (!Array.isArray(item)) {
//       return item
//     } else {
//       return null
//     }
//   }
//   return arr.map(flatten);
// }

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]);

// console.log(steamrollArray([[["a"]], [["b"]]]));
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, [], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));
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

// steamrollArray([1, [2], [3, [[4]]]]);

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log();
// console.log();
// console.log();
// console.log();