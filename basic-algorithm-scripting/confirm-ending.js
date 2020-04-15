
// what i originally wrote

function confirmEnding(str, target) {
  let length = target.length;
  let string = str.substring(str.length - length);
  return string === target;
}



// cleaned up version

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}



// tests

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));