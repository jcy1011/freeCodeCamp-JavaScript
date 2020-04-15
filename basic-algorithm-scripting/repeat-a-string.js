function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  let result = "";
  for (num; num > 0; num--) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("*", 8));