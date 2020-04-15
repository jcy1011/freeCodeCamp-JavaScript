function bouncer(arr) {
  let newArr = arr.filter(id => id);
  return newArr;
}

// fewer lines
// function bouncer(arr) {
//   return arr.filter(id => id);
// }



bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]));