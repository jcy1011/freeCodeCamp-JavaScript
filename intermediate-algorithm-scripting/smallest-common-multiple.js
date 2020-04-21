function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) =>
    a < b ? 1: a > b ? -1: 0);
  console.log(sortedArr);
  let range = []; 
  let i = sortedArr[0];
  while (i > 0) {
    range.push(i);
    i--;
  }
  console.log(range);
  console.log(range[0]);
  console.log(range[1]);
  return (Math.abs(range[0] * range[1])) /
      gcd(range[0], range[1]);
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

smallestCommons([1,5]);
// smallestCommons([23, 18]);

// console.log(gcd(27, 30));
console.log(smallestCommons([1,5]));
console.log();
console.log();
console.log();
console.log();

// resources used
// https://en.wikipedia.org/wiki/Least_common_multiple
// https://en.wikipedia.org/wiki/Euclidean_algorithm