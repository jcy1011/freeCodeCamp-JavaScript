function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|\W|_/)
    .join('-')
    // .replace(/ /g,'') // not needed after correct regex used
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("The_Andy_Griffith_Show"));

// RESOURCES USED
// remove whitespace: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
// split on upperCase: https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
// saw that you use single | for OR in regex in below resource
// https://stackoverflow.com/questions/1097901/regular-expression-split-string-by-capital-letter-but-ignore-tla