// all broken

function selectionSort(arr) {
  let result = arr;
  // console.log(result);
  let min;
  // console.log(min);
  for (let i = 0; i < result.length; i++) {
    min = result.find(n => n === Math.min(...result.slice(i)));
    console.log(Math.min(...result.slice(i)))
    [result[i], min] =[min, result[i]];
    // console.log(...result.slice(i));
    // console.log(min);
  }
  // console.log(result);
  return result;
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


console.log();
console.log();
console.log();


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr.slice(i));
    let index = arr.slice(i).indexOf(min);
    console.log(...arr.slice(i));
    console.log(`min: ${min}`);
    console.log(`arr[i]: ${arr[i]}`);
    console.log(`indexOf min: ${arr.slice(i).indexOf(min)}`);
    console.log(index);
    console.log('---------------------------------');
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  console.log(arr);
  return arr;
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log();
console.log();