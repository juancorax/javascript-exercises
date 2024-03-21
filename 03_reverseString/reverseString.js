const reverseString = function (string) {
  let stringToArray = string.split("");
  let reversedStringToArray = stringToArray.reverse();
  let reversedString = reversedStringToArray.join("");

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
