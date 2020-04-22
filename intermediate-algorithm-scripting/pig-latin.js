function translatePigLatin(str) {
  // console.log(str[0]);
  let vRegex = /^[aeiou]/;
  let noVRegex = /[aeiou]/gi;
  // console.log(vRegex.test(str[0]));
  // console.log(str);
  if (vRegex.test(str[0])) {
    console.log(str + 'way')
    return str + 'way';
  } else {
      for (let i = 0; i < str.length; i++) {
        if (vRegex.test(str[i])) {
          let end = str.slice(0, i);
          // console.log(end)
          // console.log(str.slice(i) + end + 'ay');
          return str.slice(i) + end + 'ay';
        }
      }
  }
  return str + 'ay';
}

// translatePigLatin("consonant");
// translatePigLatin("algorithm");
// translatePigLatin("eight");
// console.log('');
translatePigLatin("rhythm");
// console.log('');
translatePigLatin("glove");

console.log();
console.log();
console.log();
console.log();

// inputs: string
// outputs: string
// simple, mechanical solution
// if (str[0] === /[aeiou]/)