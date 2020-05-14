function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiplesOf3and5(1000));

// Another solution I came up with
function multiplesOf3and5(number) {
  const range = Array.from(Array(number), (item, index) => index);
  return range.filter(item => item % 3 === 0 || item % 5 === 0)
              .reduce((a, b) => a + b, 0);
}