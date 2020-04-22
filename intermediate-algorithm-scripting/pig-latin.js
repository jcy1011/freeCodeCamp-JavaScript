function translatePigLatin(str) {
  let vRegex = /^[aeiou]/;
  if (vRegex.test(str[0])) {
    return str + 'way';
  } else {
      for (let i = 0; i < str.length; i++) {
        if (vRegex.test(str[i])) {
          let end = str.slice(0, i);
          return str.slice(i) + end + 'ay';
        }
      }
  }
  return str + 'ay';
}

// test cases
translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("rhythm");
translatePigLatin("glove");

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("glove"));