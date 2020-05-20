var occurrence = function (array) {
  let obj = {};
  if (array instanceof Array) { // Check if input is array.
      array.forEach(function (item, i) {
          if (!obj[item]) { // Initial object property creation.
              obj[item] = 1; // Create an value for that property.
          } else { // Same occurrences found.
              obj[item] += 1; // Increment
          }
      });
  }
  return obj;
};

console.log(occurrence([1, 2, 3].concat([5, 2, 1, 4])))
console.log(occurrence([1, 1, 2, 5].concat([2, 2, 3, 5], [3, 4, 5, 5])))

function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
