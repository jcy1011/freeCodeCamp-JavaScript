// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  const modernArr = [
    1000, 900, 500, 400,
    100, 90, 50, 40, 10,
    9, 5, 4, 1];

  const romanArr = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL", "X",
    "IX", "V", "IV", "I"];

  let result = '';
  let counter = num;

  for (let i = 0; i < modernArr.length; i++) {
    while (modernArr[i] <= counter) {
      result += romanArr[i];
      counter -= modernArr[i];
    }
  }
  return result;
}

convertToRoman(36);

// convertToRoman(2) should return "II".
// Passed
// convertToRoman(3) should return "III".
// Passed
// convertToRoman(4) should return "IV".
// Passed
// convertToRoman(5) should return "V".
// Passed
// convertToRoman(9) should return "IX".
// Passed
// convertToRoman(12) should return "XII".
// Passed
// convertToRoman(16) should return "XVI".
// Passed
// convertToRoman(29) should return "XXIX".
// Passed
// convertToRoman(44) should return "XLIV".
// Passed
// convertToRoman(45) should return "XLV"
// Passed
// convertToRoman(68) should return "LXVIII"
// Passed
// convertToRoman(83) should return "LXXXIII"
// Passed
// convertToRoman(97) should return "XCVII"
// Passed
// convertToRoman(99) should return "XCIX"
// Passed
// convertToRoman(400) should return "CD"
// Passed
// convertToRoman(500) should return "D"
// Passed
// convertToRoman(501) should return "DI"
// Passed
// convertToRoman(649) should return "DCXLIX"
// Passed
// convertToRoman(798) should return "DCCXCVIII"
// Passed
// convertToRoman(891) should return "DCCCXCI"
// Passed
// convertToRoman(1000) should return "M"
// Passed
// convertToRoman(1004) should return "MIV"
// Passed
// convertToRoman(1006) should return "MVI"
// Passed
// convertToRoman(1023) should return "MXXIII"
// Passed
// convertToRoman(2014) should return "MMXIV"
// Passed
// convertToRoman(3999) should return "MMMCMXCIX"