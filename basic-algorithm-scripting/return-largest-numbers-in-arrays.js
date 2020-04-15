function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.max(...arr[i]));
    }
    return result;
  }



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log();
console.log();


// inputs: an array of arrays
// outputs: an array (of 4 numbers) consisting of the largest number from each provided sub-array 
// nested loop to go through array inside array
// what about Math.max