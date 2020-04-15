// My setup notes

// Input: array of number

// Output: array of numbers (positive, whole, squared)

// arr
//     .filter(num => num > 0)
//     .map(num => parseInt(num) ** 2)

// parseInt

// if number is 

const squareList = (arr) => {
  let squaredArr = arr
    .filter(num => num > 0 && num % 1 === 0)
    .map(num => num ** 2);
  return squaredArr;
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// more concise

const squareList = arr =>
  arr
    .filter(num => num > 0 && num % 1 === 0)
    .map(num => num ** 2);