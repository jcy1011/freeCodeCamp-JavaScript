// Note: I came up with the below solution after going through all 
// freeCodeCamp sections then coming back to this lesson

function findLongestWordLength(str) {
  let arr = str.split(' ');
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length)
  }
  return Math.max(...lengths);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("The addddddddddddddd"))


// inputs: string
// outputs: number representing length of longest word

// split on space so have array of strings
// convert strings to numbers based on length
// iterate through array could use find in loop