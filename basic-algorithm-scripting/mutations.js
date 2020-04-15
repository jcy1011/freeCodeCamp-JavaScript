function mutation(arr) {
  let str1arr = arr[0].toLowerCase().split('');
  let str2arr = arr[1].toLowerCase().split('');
  // NOTE: do not need .split since indexOf works on strings
  // I thought indexOf was only for arrays
  for (let i = 0; i < str2arr.length; i++) {
    if (str1arr.indexOf(str2arr[i]) === -1) {
      return false
    }
  }
  return true;
}

