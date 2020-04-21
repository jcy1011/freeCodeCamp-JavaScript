// Solution using while loop
// function sumFibs(num) {
//   let currNum = 1;
//   let prevNum = 1;
//   let sum = 1;
//   while (currNum <= num) {
//     if (currNum % 2 !== 0) {
//       sum += currNum;
//     }
//     currNum += prevNum;
//     prevNum = currNum - prevNum;
//   }
//   return sum;
// }



// Solution using array methods
function sumFibs(num) {
  let arr = [1, 1];
  while (arr[0] <= num) {
    arr.unshift(arr[0] + arr[1])
  }
  return arr.filter(n => n <= num && n % 2 !== 0)
            .reduce((a, b) => a + b, 0);
}

sumFibs(100);