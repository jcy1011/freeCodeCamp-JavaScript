// Passes all fCC tests
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/;
  return regex.test(str);
}


// // Fails a few test cases
// function telephoneCheck(str) {
//   console.log(str);
//   // str = str.replace(/\D/g, '');
//   str = str.replace(/[ ()-]/g, '');
//   console.log(str);
//   if (!(/\D/.test(str))) {
//     console.log('boof');
//     console.log(str[0]);
//     if (str.length === 11 && str[0] === '1') {
//       console.log('eleven');
//       return true;
//     }
//     if (str.length === 10) {
//       console.log('ten');
//       return true;
//     }
//   }
//   return false;
// }

// telephoneCheck("555)-555-5555");
// // telephoneCheck("555-555-5555");
// // telephoneCheck("1 555-555-5555");
// // telephoneCheck("1 (555) 555-5555");
// // telephoneCheck("123**&!!asdf#");
// // telephoneCheck("(555)5(55?)-5555");

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();