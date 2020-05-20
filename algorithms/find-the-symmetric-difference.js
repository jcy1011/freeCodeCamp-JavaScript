// This works the way I intended but I misunderstood definition of sym diff
// see https://en.wikipedia.org/wiki/Symmetric_difference n-ary sym diff
// the symmetric difference of a collection of sets contains just elements
// which are in an odd number of the sets in the collection:
const occurrence = function (array) {
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

// console.log(occurrence([1, 2, 3].concat([5, 2, 1, 4])))
// console.log(occurrence([1, 1, 2, 5].concat([2, 2, 3, 5], [3, 4, 5, 5])))

function sym(args) {
  const symDiff = [];
  const bigArr = Array.prototype.slice.call(arguments).flat(Infinity);
  // console.log(bigArr)
  const entries = Object.entries(occurrence(bigArr))
  // console.log(entries)
  entries.forEach(arr => {
    if (arr[1] === 1) {
      symDiff.push(arr[0])
    }
  })
  // console.log(symDiff)
  return symDiff;
}
 
// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 2, 3, 3], [5, 2, 1, 4])
// sym([1, 2, 3], [5, 2, 1, 4, 5])
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])


// Resources
// https://monkeyraptor.johanpaul.net/2015/05/javascript-counting-same-occurrences-in.html
// https://en.wikipedia.org/wiki/Symmetric_difference