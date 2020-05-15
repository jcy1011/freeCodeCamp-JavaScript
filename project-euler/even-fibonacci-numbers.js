// n - 1 + (n - 2) Come up with fibonacci algorithm
// Create an empty array and push values to it
// OR create a let sum = 0 and update it if it's an even fibonacci number
// n % 2 === 0
// sum

// Appraoch 1: create an array
// This looks less efficient than push to sum. Unless you need array elsewhere
function fiboEvenSum(n) {
  let arr = [1, 2];
  for (let i = 2; arr[i - 1] < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.filter(item => item % 2 === 0)
            .reduce((a, b) => a + b, 0)
}