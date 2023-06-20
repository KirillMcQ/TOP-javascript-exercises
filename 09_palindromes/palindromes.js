const palindromes = function (str) {
  str = str.toLowerCase();
  // Found this regex on SO, I don't know how else to remove puncuation.
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.replace(/\s/g, "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
