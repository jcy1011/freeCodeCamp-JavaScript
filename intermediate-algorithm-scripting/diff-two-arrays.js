function diffArray(arr1, arr2) {
  let combined = arr1.concat(arr2);
  return combined.filter(element =>
    arr1.indexOf(element) == -1 ||
    arr2.indexOf(element) == -1);
  // combined = [...new Set(combined)];
  // let result = [];
  // for (let i = 0; i < combined.length; i++) {
  //   combined[i]
  // }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log();
console.log();
console.log();

// inputs = 2 arrays
// outputs = 1 array made up of numbers only found in 
//           one of the original arrays

// How to compare arrays? Methods? Loops? 
// filter, sort, map, reduce, every, some, split, join
// find
// regex
// let result = []
// for 

// approach 1: combine arrays. remove duplicates



// tidy

function diffArray(arr1, arr2) {
  return arr1.concat(arr2)
    .filter(element =>
    arr1.indexOf(element) == -1 ||
    arr2.indexOf(element) == -1);
}