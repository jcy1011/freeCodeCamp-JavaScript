function returnPrime(n){
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && n !== i) {
      return 0;
    }
  }
  return n;
}

function sumPrimes(max) {
  let sum = 0;
  let i = 2;
  while (i <= max) {
    sum += returnPrime(i);
    i++;
  }
  return sum;
}


console.log(sumPrimes(977));




// function sumPrimes(num) {
//   let arr = [2];
//   let i = 3;
//   while (i <= num) {
//     arr.push(i);
//     i++;
//   }

//   // turn below into a loop
//   let arr2 = arr.filter(n => n % 2 ===0 && n > 2);
//   let arr3 = arr.filter(n => n % 3 ===0 && n > 3);
//   let arr5 = arr.filter(n => n % 5 ===0 && n > 5);
//   let arr7 = arr.filter(n => n % 7 ===0 && n > 7);
//   let arr11 = arr.filter(n => n % 11 ===0 && n > 11);
//   let arr13 = arr.filter(n => n % 13 ===0 && n > 13);
//   let nonprimeArr = arr2.concat(arr3, arr5, arr7,
//       arr11, arr13);

//   let primeArr = arr.concat(nonprimeArr)
//     .filter(el =>
//     arr.indexOf(el) === -1 ||
//     nonprimeArr.indexOf(el) === -1);
//   // console.log(nonprimeArr);
//   console.log(primeArr);

//   return primeArr.reduce((a, b) => a + b, 0);
// }

// sumPrimes(977);
