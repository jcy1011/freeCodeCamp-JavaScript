function myReplace(str, before, after) {
  let arr = str.split(' ');
  if (before[0] === before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      arr.splice(i, 1, after)
    }
  }
  return arr.join(' ');
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is sleeping on the couch", "sleeping", "Sitting")

console.log(myReplace("He is sleeping on the couch", "sleeping", "Sitting"));
console.log();
console.log();
console.log();
console.log();


// turn string into array and use indexes 
// slice splice

// RESOURCES USED
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://stackoverflow.com/questions/8334606/check-if-first-letter-of-word-is-a-capital-letter
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
