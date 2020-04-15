// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;  
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

// Change this value to test
console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(4))
console.log(caseInSwitch(3))
