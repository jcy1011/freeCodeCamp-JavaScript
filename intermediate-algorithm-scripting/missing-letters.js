function fearNotLetter(str) {
  str = str.toLowerCase();
  let ascii = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== ascii + 1) {
      return String.fromCharCode(ascii + 1);
    } else {
      ascii += 1;
    }
  }
  return undefined;
}

fearNotLetter("abce");


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log();