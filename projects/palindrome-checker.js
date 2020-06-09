// More concise answer
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g , '');
  return str ===
         str.split('').reverse().join('');
}



// Finished, formatted, working answer
// function palindrome(str) {
//   // convert all char to same case and remove all non-alphanumeric characters
//   const arr = str.toLowerCase().match(/[a-z0-9]/g)
//   // if length is an odd number
//   if (arr.length % 2) {
//     const index = Math.ceil(arr.length / 2) - 1;

//     const arrEnd = []
//     for (let i = index; i < arr.length; i++) {
//       arrEnd.push(arr[i])
//     }

//     const arrBeg = []
//     for (let i = index; i >= 0; i--) {
//       arrBeg.push(arr[i])
//     }

//     return arrBeg.join('') === arrEnd.join('');

//   }
//   // if length is an even number
//   const arrBeg = arr.slice(0, arr.length / 2);
//   const arrEnd = arr.slice(arr.length / 2).reverse();
//   return arrBeg.join('') === arrEnd.join('')
// }






// original work with console.logs
// function palindrome(str) {
//   // remove all non-alphanumeric characters
//   // turn everything into the same case
//   const arr = str.toLowerCase().match(/[a-z0-9]/g)
//   // console.log(arr);

//   if (arr.length % 2) {
//     const index = Math.ceil(arr.length / 2) - 1;
//     console.log(index)

//     const arrEnd = []
//     for (let i = index; i < arr.length; i++) {
//       arrEnd.push(arr[i])
//     }
//     console.log(arrEnd)

//     const arrBeg = []
//     for (let i = index; i >= 0; i--) {
//       arrBeg.push(arr[i])
//     }
//     console.log(arrBeg)


//     // return true if the string is palindrome
//     // return false if string is not palidrome
//     const arr1 = [1, 2, 3]
//     const arr2 = [1, 2, 3]
    
//     const str1 = arr1.join('')
//     const str2 = arr2.join('')
//     // console.log(str1 === str2)

//     return arrBeg.join('') === arrEnd.join('');
//   } else {
//     const arrBeg = arr.slice(0, arr.length / 2);
//     console.log(arrBeg);
//     const arrEnd = arr.slice(arr.length / 2).reverse();
//     console.log(arrEnd);
//     return arrBeg.join('') === arrEnd.join('')
//   } 
// }



// // palindrome("Eye");
// // palindrome ("race car");
// // palindrome("A man, a plan, a canal. Panama");
// palindrome("My age is 0, 0 si ega ym.");
// palindrome("0_0 (: /-\ :) 0-0");

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();