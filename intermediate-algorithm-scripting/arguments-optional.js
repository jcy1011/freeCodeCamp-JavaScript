// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  if (arguments.length === 2
      && typeof arguments[0] === 'number'
      && typeof arguments[1] === 'number') {
    return arguments[0] + arguments[1]
  }
  if (arguments.length === 1
      && typeof arguments[0] === 'number') {
    let arg1 = arguments[0];
    return function(arg2) {
      if (typeof arg2 === 'number'){
        return arg1 + arg2;
      }
    }
  }
  return undefined;
}

// TEST CASES
// addTogether(2, 3) should return 5.
// Passed
// addTogether(2)(3) should return 5.
// Passed
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// Passed
// addTogether(2, "3") should return undefined.
// Passed
// addTogether(2)([3]) should return undefined.