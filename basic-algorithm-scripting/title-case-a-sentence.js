function titleCase(str) {
  let arr = str
    .toLowerCase()
    .split(' ')
  // console.log(arr);
  let capitalizedSentence ='';
  for (let i = 0; i < arr.length; i++){
    capitalizedSentence += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1) + ' '
  }
  capitalizedSentence = capitalizedSentence.slice(0, -1);
  // capitalizedSentence += "."
  // console.log(capitalizedSentence);
  return capitalizedSentence;
}


console.log(titleCase("I'm a little tea pot"));



// cleaned up
function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  let capitalizedSentence ='';
  for (let i = 0; i < arr.length; i++){
    capitalizedSentence += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1) + ' '
  }
  capitalizedSentence = capitalizedSentence.slice(0, -1);
  return capitalizedSentence;
}