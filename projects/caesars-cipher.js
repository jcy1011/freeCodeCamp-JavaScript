// Working solution
function rot13(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    // pass non-alphabetic characters as is
    if (str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65) {
      arr.push(str[i]);
    } else if (str.charCodeAt(i) + 13 > 90) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - 13))
    } else if (str.charCodeAt(i) + 13 <= 90) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 13))
    }
  }
  return arr.join('');
}


// The below attempt didn't work bc used if statements rather than else if
// The following ifs always run if the condition is met unlike with else if only
// first one to meet criteria runs
// function rot13(str) {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     // pass non-alphabetic characters as is
//     if (str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65) {
//       arr.push(str[i]);
//     }
//     if (str.charCodeAt(i) + 13 > 90) {
//       arr.push(String.fromCharCode(str.charCodeAt(i) - 13))
//     }
//     if (str.charCodeAt(i) + 13 <= 90) {
//       arr.push(String.fromCharCode(str.charCodeAt(i) + 13))
//     }

//     // arr.push(String.fromCharCode(str.charCodeAt(i) + 13))
//   }

//   console.log(arr.join(''));
//   return arr.join('');
// }

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

 
  