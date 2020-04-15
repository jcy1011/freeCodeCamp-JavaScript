function destroyer(arr) {
  // let args = Array.prototype.slice.call(arguments).slice(1);
  arr = Array.from(arguments).slice(0, 1)[0];
  let args = [...arguments].slice(1);
  // console.log(arr)
  // console.log(args);
  return arr.filter(item => args.indexOf(item) == -1);

  // console.log(args.slice(1));
  // console.log([...arguments]);
  // console.log(arguments);
  // return arr.filter(item =>
  //   arr.indexOf(args));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// callback inputs: 
// callback outputs: 

function destroyer(arr) {
  arr = Array.from(arguments).slice(0, 1)[0];
  let args = [...arguments].slice(1);
  return arr.filter(item => args.indexOf(item) == -1);
}